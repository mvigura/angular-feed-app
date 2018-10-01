import {Component, OnInit} from '@angular/core';
import {TRANSACTIONS} from '../mock-transactions';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {
  transactions = TRANSACTIONS;
  constructor() {}

  ngOnInit() {}
}
