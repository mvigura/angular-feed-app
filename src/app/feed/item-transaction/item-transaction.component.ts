import {Component, OnInit, Input} from '@angular/core';
import {Transaction} from '../../classes/Transaction';

@Component({
  selector: 'app-item-transaction',
  templateUrl: './item-transaction.component.html',
  styleUrls: ['./item-transaction.component.less']
})
export class ItemTransactionComponent implements OnInit {
  @Input() transaction: Transaction;

  constructor() {}

  ngOnInit() {}

  getIcon(fromCategory: string) {
    switch (fromCategory) {
      case 'restaurants':
        return 'icon-coffee';
      case 'shopping':
        return 'icon-shopping-cart';
      case 'bank':
        return 'icon-bank';
      default:
        return 'icon-credit-card-alt';
    }
  }

  getCurrency(currency: string) {
    switch (currency) {
      case 'RUB':
        return 'icon-rouble';
      case 'USD':
        return 'icon-dollar';
      case 'EUR':
        return 'icon-eur';
      default:
        return 'icon-money';
    }
  }
}
