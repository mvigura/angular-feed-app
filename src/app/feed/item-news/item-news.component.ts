import {Component, OnInit} from '@angular/core';
import {NEWS} from '../../mock-news';

@Component({
  selector: 'app-item-news',
  templateUrl: './item-news.component.html',
  styleUrls: ['./item-news.component.less']
})
export class ItemNewsComponent implements OnInit {
  news = NEWS[0];
  constructor() {}

  ngOnInit() {}
}
