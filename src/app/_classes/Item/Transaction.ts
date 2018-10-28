import {Item} from './index';

export class Transaction extends Item {
  amount: number;
  currency: string;
  side: string;
  sideCategory: string;
  description: string;
  trType: string;
  constructor(
    id: string,
    date: string,
    amount: number,
    currency: string,
    side: string,
    sideCategory: string,
    description: string,
    trType: string
  ) {
    super(id, date);
    this.amount = amount;
    this.currency = currency;
    this.side = side;
    this.sideCategory = sideCategory;
    this.description = description;
    this.trType = trType;
  }
}
