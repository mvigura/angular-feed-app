import {Component, OnInit, Input} from '@angular/core';
import {News} from 'src/app/_classes';
import {ModalService} from 'src/app/modal.service';

@Component({
  selector: 'app-news-detailed-modal',
  templateUrl: './news-detailed-modal.component.html',
  styleUrls: ['./news-detailed-modal.component.less']
})
export class NewsDetailedModalComponent implements OnInit {
  @Input() selectedItem: News = null;
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  setViewed(news: News) {
    news.viewed = true;
    this.modalService.close('news-detailed');
  }
}
