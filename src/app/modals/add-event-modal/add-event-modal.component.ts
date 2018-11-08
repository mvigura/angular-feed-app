import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-event-modal',
  templateUrl: './add-event-modal.component.html',
  styleUrls: ['./add-event-modal.component.less']
})
export class AddEventModalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  eventOptions: object[] = [
    {title: 'Транзакция', value: 'transaction'},
    {title: 'Новость', value: 'news'}
  ];

  setActiveType(type: string) {
    this.activeEventType = type;
  }
  activeEventType: string = 'transaction';
}
