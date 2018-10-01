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
    console.log(fromCategory);
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
}
