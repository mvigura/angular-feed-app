import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Transaction} from '../../_classes';

@Component({
  selector: 'app-add-transaction-form',
  templateUrl: './add-transaction-form.component.html',
  styleUrls: ['./add-transaction-form.component.less']
})
export class AddTransactionFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  transaction = new Transaction(
    'transaction_1000',
    Date(),
    null,
    '',
    'ddd',
    'Restaurants',
    'Бизнес-ланч',
    'income'
  );

  currencyOptions: object[] = [
    {title: 'RUB', value: 'RUB'},
    {title: 'EUR', value: 'EUR'},
    {title: 'USD', value: 'USD'}
  ];

  addTransactionForm = this.fb.group({
    amount: null,
    currency: 'RUB'
  });

  onSubmit() {
    console.log(this.addTransactionForm);
  }
}
