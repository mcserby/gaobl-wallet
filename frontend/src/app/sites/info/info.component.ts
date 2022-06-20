import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WalletInfoListElement, WalletInfoResponse} from "../../models/wallet.model";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  walletList: WalletInfoListElement[] = [];

  displayedColumns: string[] = ['id', 'nickname', 'amount'];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<WalletInfoResponse>('http://localhost:26657/abci_query?data=\"wallets\"')
      .subscribe((response: WalletInfoResponse) => {
        const wallets = response?.result?.response?.value;
        if (wallets) {
          this.walletList = JSON.parse(atob(wallets));
        }
      });
  }

}
