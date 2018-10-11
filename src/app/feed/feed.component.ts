import {Component, OnInit} from '@angular/core';
import {Item, News, Transaction} from '../_classes';

import {ItemService} from '../item.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {
  items: Item[];
  selectedItem: Item = null;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => (this.items = items));
  }

  isTransaction(item: Item) {
    return item instanceof Transaction;
  }

  isNews(item: Item) {
    return item instanceof News;
  }
}
