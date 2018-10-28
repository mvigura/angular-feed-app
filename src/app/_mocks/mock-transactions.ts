import {Transaction} from '../_classes';

const transactions: Transaction[] = [
  {
    id: 'transaction_1',
    amount: 139.99,
    currency: 'USD',
    side: 'Starcups',
    sideCategory: 'restaurants',
    description: 'Покупка в starcups',
    date: Date().toString(),
    trType: 'income'
  },
  {
    id: 'transaction_2',
    amount: 134.44,
    currency: 'RUB',
    side: 'Банк',
    sideCategory: 'bank',
    description: 'Начисление процентов по вкладу',
    date: Date().toString(),
    trType: 'outcome'
  },
  {
    id: 'transaction_3',
    amount: 273.67,
    currency: 'RUB',
    side: 'Восьмерочка',
    sideCategory: 'shopping',
    description: 'Покупка в магазине восьмерочка',
    date: Date().toString(),
    trType: 'income'
  }
];

export const TRANSACTIONS: Transaction[] = transactions.map(
  tr =>
    new Transaction(
      tr.id,
      tr.date,
      tr.amount,
      tr.currency,
      tr.side,
      tr.sideCategory,
      tr.description,
      tr.trType
    )
);
