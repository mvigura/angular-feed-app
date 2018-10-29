import {Injectable} from '@angular/core';
import {Item} from './_classes';

import {TRANSACTIONS, NEWS} from './_mocks';
import {Observable, of} from 'rxjs';
import {TouchSequence} from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() {}

  items: Item[] = [];

  getItems(): Observable<Item[]> {
    this.items = [...TRANSACTIONS, ...NEWS];
    return of(this.items);
  }

  addItem(item: Item) {
    this.items.push(item);

    console.log(this.items);
  }

  deleteItem(itemId: string) {
    console.log(this.items);
    this.items = this.items.filter(item => item.id !== itemId);
    return of(this.items);
  }
}
