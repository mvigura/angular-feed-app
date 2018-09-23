import {Transaction} from './classes/Transaction';

export const TRANSACTIONS: Transaction[] = [
  {
    id: 'transaction_1',
    value: 100,
    currency: 'RUB',
    from: 'Магазин',
    description: 'Описание транзакции 1',
    date: Date().toString(),
    trType: 'income',
    type: 'transaction'
  },
  {
    id: 'transaction_2',
    value: 200,
    currency: 'EUR',
    from: 'Банк',
    description: 'Описание транзакции 2',
    date: Date().toString(),
    trType: 'outcome',
    type: 'transaction'
  }
];
