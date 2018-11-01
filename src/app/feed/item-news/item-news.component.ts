import {Component, OnInit, Input} from '@angular/core';
import {News} from '../../_classes';
import {ModalService} from '../../modal.service';

@Component({
  selector: 'app-item-news',
  templateUrl: './item-news.component.html',
  styleUrls: ['./item-news.component.less']
})
export class ItemNewsComponent implements OnInit {
  @Input() news: News;
  @Input() selected: boolean;

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  openDetailsModal() {
    this.modalService.open('news-detailed');
  }
}
