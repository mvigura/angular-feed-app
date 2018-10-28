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
}
