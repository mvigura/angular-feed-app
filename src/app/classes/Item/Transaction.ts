import {Item} from './index';

export class Transaction extends Item {
  amount: number;
  currency: string;
  from: string;
  fromCategory: string;
  description: string;
  trType: string;
  type: string;
}
