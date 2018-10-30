import {Injectable} from '@angular/core';
import {Item} from './_classes';

import {TRANSACTIONS, NEWS} from './_mocks';
import {Observable, of} from 'rxjs';

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

  deleteItem(item: Item) {
    const index: number = this.items.indexOf(item);
    if (index !== -1) {
        this.items.splice(index, 1);
    }  
  }
}
