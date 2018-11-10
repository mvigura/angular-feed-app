import {Transaction} from '../_classes';

const transactions = [
  {
    amount: 139.99,
    currency: 'USD',
    side: 'Starcups',
    sideCategory: 'restaurants',
    description: 'Покупка в starcups',
    date: '2018-10-31T15:47:10.214Z',
    trType: 'income'
  },
  {
    amount: 134.44,
    currency: 'RUB',
    side: 'Банк',
    sideCategory: 'bank',
    description: 'Начисление процентов по вкладу',
    date: '2018-10-31T10:47:10.214Z',
    trType: 'outcome'
  },
  {
    amount: 273.67,
    currency: 'RUB',
    side: 'Восьмерочка',
    sideCategory: 'shopping',
    description: 'Покупка в магазине восьмерочка',
    date: '2018-10-31T15:47:10.214Z',
    trType: 'income'
  }
];

export const TRANSACTIONS: Transaction[] = transactions.map(
  tr =>
    new Transaction(
      tr.date,
      tr.amount,
      tr.currency,
      tr.side,
      tr.sideCategory,
      tr.description,
      tr.trType
    )
);
