import {Component, OnInit} from '@angular/core';
import {Transaction} from '../../_classes';

@Component({
  selector: 'app-add-transaction-form',
  templateUrl: './add-transaction-form.component.html',
  styleUrls: ['./add-transaction-form.component.less']
})
export class AddTransactionFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  transaction = new Transaction(
    'transaction_1000',
    Date(),
    300,
    'RUB',
    'ddd',
    'Restaurants',
    'Бизнес-ланч',
    'income'
  );
}
