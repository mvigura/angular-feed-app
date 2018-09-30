import {Component, OnInit} from '@angular/core';
import {TRANSACTIONS} from '../../mock-transactions';

@Component({
  selector: 'app-item-transaction',
  templateUrl: './item-transaction.component.html',
  styleUrls: ['./item-transaction.component.less']
})
export class ItemTransactionComponent implements OnInit {
  transaction = TRANSACTIONS[0];
  transaction_2 = TRANSACTIONS[1];

  constructor() {}

  ngOnInit() {}
}
