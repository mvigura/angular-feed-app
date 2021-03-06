import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Transaction} from '../../_classes';

@Component({
  selector: 'app-item-transaction',
  templateUrl: './item-transaction.component.html',
  styleUrls: ['./item-transaction.component.less']
})
export class ItemTransactionComponent implements OnInit {
  @Input()
  transaction: Transaction;
  @Input()
  selected: boolean;
  @Output()
  deletedTransaction = new EventEmitter<Transaction>();

  constructor() {}

  ngOnInit() {}

  getIcon(sideCategory: string) {
    switch (sideCategory) {
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
      case 'outcome':
        return 'flatten-primary';
      case 'income':
        return 'flatten-secondary-2';
      default:
        return 'flatten-primary';
    }
  }

  deleteTransaction(transaction: Transaction) {
    this.deletedTransaction.emit(transaction);
  }
}
