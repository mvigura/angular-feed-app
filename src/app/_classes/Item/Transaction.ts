import {Item} from './index';

export class Transaction extends Item {
  amount: number;
  currency: string;
  from: string;
  fromCategory: string;
  description: string;
  trType: string;
  constructor(
    id: string,
    date: string,
    amount: number,
    currency: string,
    from: string,
    fromCategory: string,
    description: string,
    trType: string
  ) {
    super(id, date);
    this.amount = amount;
    this.currency = currency;
    this.from = from;
    this.fromCategory = fromCategory;
    this.description = description;
    this.trType = trType;
  }
}
