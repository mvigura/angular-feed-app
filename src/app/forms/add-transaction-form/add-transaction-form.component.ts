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

  currencyOptions: object[] = [
    {title: 'RUB', value: 'RUB'},
    {title: 'EUR', value: 'EUR'},
    {title: 'USD', value: 'USD'}
  ];

  trTypeOptions: object[] = [
    {title: 'Исходящая', value: 'outcome'},
    {title: 'Входящая', value: 'income'}
  ];

  fromCategoryOptions: object[] = [
    {title: 'Рестораны', value: 'restaurants'},
    {title: 'Банк', value: 'bank'},
    {title: 'Магазины', value: 'shopping'}
  ];

  addTransactionForm = this.fb.group({
    amount: 300,
    currency: 'RUB',
    from: '',
    fromCategory: 'bank',
    description: '',
    trType: 'outcome'
  });

  onSubmit() {
    console.log(this.addTransactionForm);
  }
}
