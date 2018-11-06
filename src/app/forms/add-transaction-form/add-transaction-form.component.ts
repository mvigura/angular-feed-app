import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Transaction} from '../../_classes';
import {ModalService} from 'src/app/modal.service';
import {ItemService} from 'src/app/item.service';

@Component({
  selector: 'app-add-transaction-form',
  templateUrl: './add-transaction-form.component.html',
  styleUrls: ['./add-transaction-form.component.less']
})
export class AddTransactionFormComponent {
  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private itemService: ItemService
  ) {}

  currencyOptions: object[] = [
    {title: 'RUB', value: 'RUB'},
    {title: 'EUR', value: 'EUR'},
    {title: 'USD', value: 'USD'}
  ];

  trTypeOptions: object[] = [
    {title: 'Исходящая', value: 'outcome'},
    {title: 'Входящая', value: 'income'}
  ];

  sideCategoryOptions: object[] = [
    {title: 'Рестораны', value: 'restaurants'},
    {title: 'Банк', value: 'bank'},
    {title: 'Магазины', value: 'shopping'}
  ];

  getSideLabel = (trType: string) => (trType === 'outcome' ? 'Получатель' : 'Отправитель');

  addTransactionForm = this.fb.group({
    amount: 0,
    currency: 'RUB',
    side: '',
    sideCategory: '',
    description: '',
    trType: 'outcome'
  });

  onSubmit(values) {
    const newTransaction = new Transaction(
      Date().toString(),
      values.amount,
      values.currency,
      values.side,
      values.sideCategory,
      values.description,
      values.trType
    );
    this.itemService.addItem(newTransaction);
    this.modalService.close('add-event');
  }
}
