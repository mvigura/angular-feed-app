import {Transaction} from './classes/Transaction';

export const TRANSACTIONS: Transaction[] = [
  {
    id: 'transaction_1',
    amount: 139.99,
    currency: 'RUB',
    from: 'Starbucks',
    fromCategory: 'restaurants',
    description: 'Покупка',
    date: Date().toString(),
    trType: 'income',
    type: 'transaction'
  },
  {
    id: 'transaction_2',
    amount: 273.67,
    currency: 'RUB',
    from: 'Восьмерочка',
    fromCategory: 'shoping',
    description: 'Покупка',
    date: Date().toString(),
    trType: 'income',
    type: 'transaction'
  },
  {
    id: 'transaction_3',
    amount: 134.44,
    currency: 'EUR',
    from: 'Банк',
    fromCategory: 'bank',
    description: 'Начисление процентов',
    date: Date().toString(),
    trType: 'outcome',
    type: 'transaction'
  }
];
