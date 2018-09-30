import {Transaction} from './classes/Transaction';

export const TRANSACTIONS: Transaction[] = [
  {
    id: 'transaction_1',
    amount: 100,
    currency: 'RUB',
    from: 'Магазин',
    fromCategory: 'shopping',
    description: 'Описание транзакции 1',
    date: Date().toString(),
    trType: 'income',
    type: 'transaction'
  },
  {
    id: 'transaction_2',
    amount: 200,
    currency: 'EUR',
    from: 'Банк',
    fromCategory: 'bank',
    description: 'Описание транзакции 2',
    date: Date().toString(),
    trType: 'outcome',
    type: 'transaction'
  }
];
