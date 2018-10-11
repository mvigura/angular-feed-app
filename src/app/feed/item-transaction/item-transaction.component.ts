import {Component, OnInit, Input} from '@angular/core';
import {Transaction} from '../../_classes';

@Component({
  selector: 'app-item-transaction',
  templateUrl: './item-transaction.component.html',
  styleUrls: ['./item-transaction.component.less']
})
export class ItemTransactionComponent implements OnInit {
  @Input() transaction: Transaction;
  @Input() selected: boolean;

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
  getButtonType(trType: string) {
    switch (trType) {
      case 'income':
        return 'flatten-primary';
      case 'outcome':
        return 'flatten-secondary-2';
      default:
        return 'flatten-primary';
    }
  }
}
