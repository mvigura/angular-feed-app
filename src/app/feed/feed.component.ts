import {Component, OnInit} from '@angular/core';
import {TRANSACTIONS} from '../mock-transactions';
import {NEWS} from '../mock-news';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {
  transactions = TRANSACTIONS;
  news = NEWS;
  selectedTransaction = null;
  constructor() {}

  ngOnInit() {}
}
