import {Injectable} from '@angular/core';
import {Item} from './_classes';

import {TRANSACTIONS, NEWS} from './_mocks';
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
