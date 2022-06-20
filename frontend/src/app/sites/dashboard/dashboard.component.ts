import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SharedDataService} from '../../services/shared-data.service';
import {SignWalletResponse} from '../../models/wallet.model';
import {Router} from "@angular/router";
import {CreateWalletResponse} from "../../models/blockchain.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  transactionFormGroup = this.formBuilder.group({
    senderWalletId: ['', Validators.required],
    recipientWalletId: ['', Validators.required],
    amount: ['', Validators.required]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    if (SharedDataService.privateKey === '') {
      this.router.navigate(['/login']).then();
    }
  }

  sendTransaction(): void {
    const privateKey = SharedDataService.privateKey;
    const senderWalletId = this.transactionFormGroup.get('senderWalletId')?.value;
    const recipientWalletId = this.transactionFormGroup.get('recipientWalletId')?.value;
    const amount = this.transactionFormGroup.get('amount')?.value;
    if (privateKey && senderWalletId && recipientWalletId && amount) {
      this.httpClient.post<SignWalletResponse>('http://localhost:8080/signTransaction', {
        message: {
          senderWalletId: senderWalletId,
          receiverWalletId: recipientWalletId,
          amount: amount
        },
        privateKey: privateKey
      }).subscribe((response: SignWalletResponse) => {
        const userSignature = response.signature;
        if (userSignature) {
          this.httpClient.get<CreateWalletResponse>(`http://localhost:26657/broadcast_tx_commit?tx=\"send-coins={\\\"signature\\\":\\\"${encodeURIComponent(userSignature)}\\\",\\\"coinTransaction\\\":{\\\"senderWalletId\\\":\\\"${senderWalletId}\\\",\\\"receiverWalletId\\\":\\\"${recipientWalletId}\\\",\\\"amount\\\":${amount}}}\"`)
            .subscribe((walletResponse: CreateWalletResponse) => {
              const checkCode = walletResponse.result.check_tx.code;
              const deliverCode = walletResponse.result.deliver_tx.code;
              if (checkCode === 0 && deliverCode === 0) {
                alert('Transaction was successfully executed!');
              } else {
                alert('Transaction failed to execute!');
              }
            });
        }
      });
    }
  }
}
