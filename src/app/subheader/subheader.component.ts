import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.less']
})
export class SubheaderComponent implements OnInit {
  constructor(private itemService: ItemService) {}

  sortSettings: {type: string; date: string} = {type: 'asc', date: 'asc'};

  ngOnInit() {}

  getSortIcon(sortType: string) {
    return this.sortSettings[sortType] === 'asc' ? 'icon-sort-asc' : 'icon-sort-desc';
  }

  setSort(sortType: string) {
    this.sortSettings[sortType] === 'asc'
      ? (this.sortSettings[sortType] = 'desc')
      : (this.sortSettings[sortType] = 'asc');
    this.itemService.sortItems(this.sortSettings);
  }
}
