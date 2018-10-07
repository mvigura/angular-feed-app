import {Injectable} from '@angular/core';
import {Item} from './classes/Item';

import {TRANSACTIONS} from './mock-transactions';
import {NEWS} from './mock-news';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() {}

  getItems(): Observable<Item[]> {
    let items: Item[] = [...TRANSACTIONS, ...NEWS];
    return of(items);
  }
}
