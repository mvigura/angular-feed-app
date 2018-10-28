import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input() appearance: string = 'primary';
  @Output() onClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  click() {
    this.onClick.emit();
  }
}
