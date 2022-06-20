import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SignWalletRequest, SignWalletResponse, WalletCreationResponse} from '../../models/wallet.model';
import {CreateWalletEvent, CreateWalletEventAttributes, CreateWalletResponse} from "../../models/blockchain.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userKeysForm = this.formBuilder.group({
    publicKey: ['', Validators.required],
    privateKey: ['', Validators.required]
  });

  walletIdForm = this.formBuilder.group({
    nickname: ['', Validators.required]
  });

  userSignature = '';
  userBlockchainSignature = '';

  @ViewChild('registerStepper')
  private readonly registerStepper: any;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly httpClient: HttpClient
  ) { }

  ngOnInit(): void { }

  generateKeyPair(): void {
    this.httpClient.get<WalletCreationResponse>('http://localhost:8080/generateKP')
      .subscribe((response:WalletCreationResponse) => {
        this.userKeysForm.get('publicKey')?.setValue(response.publicKey);
        this.userKeysForm.get('privateKey')?.setValue(response.privateKey);

        RegisterComponent.downloadFile('wallet_public_key.txt', response.publicKey);
        RegisterComponent.downloadFile('wallet_private_key.txt', response.privateKey);

        this.registerStepper.next();
      });
  }

  private static downloadFile(fileName: string, fileContent: string, fileType = 'application/x-pem-file'): void {
    const downloadIcsButton = document.createElement('a');
    downloadIcsButton.setAttribute(
      'href',
      `data:${fileType};charset=utf8,${encodeURIComponent(fileContent)}`
    );
    downloadIcsButton.setAttribute('download', fileName);

    downloadIcsButton.style.display = 'none';
    document.body.appendChild(downloadIcsButton);

    downloadIcsButton.click();

    document.body.removeChild(downloadIcsButton);
  }

  signWallet(): void {
    const publicKey = this.userKeysForm.get('publicKey')?.value;
    const privateKey = this.userKeysForm.get('privateKey')?.value;
    const nickname = this.walletIdForm.get('nickname')?.value;
    if (publicKey && privateKey && nickname) {
      const walletRequest: SignWalletRequest = {
        wallet: {
          nickname,
          publicKey
        },
        privateKey
      };
      this.httpClient.post<SignWalletResponse>('http://localhost:8080/signWallet', walletRequest)
        .subscribe((response: SignWalletResponse) => {
          this.userSignature = response.signature;
          this.callBlockchain();
        });
    }
  }

  callBlockchain(): void {
    const publicKey = this.userKeysForm.get('publicKey')?.value;
    const nickname = this.walletIdForm.get('nickname')?.value;
    if (publicKey && nickname) {
      const url = `http://localhost:26657/broadcast_tx_commit?tx=\"create-wallet={\\\"signature\\\":\\\"${encodeURIComponent(this.userSignature)}\\\",\\\"message\\\":{\\\"publicKey\\\":\\\"${encodeURIComponent(publicKey)}\\\",\\\"nickname\\\":\\\"${nickname}\\\"}}\"`;
      this.httpClient.get<CreateWalletResponse>(url).subscribe((response: CreateWalletResponse) => {
        const deliver_txEvents = response.result.deliver_tx.events;
        if (deliver_txEvents && deliver_txEvents.length > 0) {
          deliver_txEvents.forEach((deliver_txEvent: CreateWalletEvent) => {
            const deliver_txEventAttributes = deliver_txEvent.attributes;
            if (deliver_txEventAttributes && deliver_txEventAttributes.length > 0) {
              deliver_txEventAttributes.forEach((deliver_txEventAttribute: CreateWalletEventAttributes) => {
                if (deliver_txEventAttribute.value) {
                  this.userBlockchainSignature = atob(deliver_txEventAttribute.value);
                }
              });
            }
          });
        }
      });
    }
  }
}
