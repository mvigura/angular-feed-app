import {Component, OnInit, Input} from '@angular/core';
import {News} from '../../classes/News';

@Component({
  selector: 'app-item-news',
  templateUrl: './item-news.component.html',
  styleUrls: ['./item-news.component.less']
})
export class ItemNewsComponent implements OnInit {
  @Input() news: News;

  constructor() {}

  ngOnInit() {}
}
