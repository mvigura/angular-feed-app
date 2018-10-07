import {Component, OnInit} from '@angular/core';
import {Item} from '../classes/Item';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {
  items: Item[];
  selectedTransaction = null;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => (this.items = items));
  }
}
