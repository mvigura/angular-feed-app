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
  sortSettings: {type: string; date: string} = {type: 'desc', date: 'desc'};

  getItems(): Observable<Item[]> {
    this.items = [...TRANSACTIONS, ...NEWS];
    this.sortByType();
    this.sortByDate();
    return of(this.items);
  }

  addItem(item: Item) {
    this.items.push(item);
    this.sortByType();
    this.sortByDate();
  }

  deleteItem(item: Item) {
    const index: number = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  sortByType() {
    const sortDirection = this.sortSettings.type;
    this.items.sort((item_1: Item, item_2: Item) => {
      if (item_1.typeSortIndex === item_2.typeSortIndex) return 0;

      const result = item_1.typeSortIndex > item_2.typeSortIndex ? 1 : -1;

      return sortDirection === 'asc' ? result * -1 : result;
    });
  }

  sortByDate() {
    const sortDirection = this.sortSettings.date;
    this.items.sort((item_1: Item, item_2: Item) => {
      const date_1 = new Date(item_1.date).getTime();
      const date_2 = new Date(item_2.date).getTime();
      return sortDirection === 'asc' ? date_1 - date_2 : date_2 - date_1;
    });
  }

  setSort(sortType: string) {
    this.sortSettings[sortType] = this.sortSettings[sortType] === 'asc' ? 'desc' : 'asc';

    if (sortType === 'type') {
      this.sortByType();
    } else {
      this.sortByDate();
    }
  }
}
