import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Option} from './option';

@Component({
  selector: 'app-buttongrp',
  templateUrl: './buttongrp.component.html',
  styleUrls: ['./buttongrp.component.less']
})
export class ButtongrpComponent implements OnInit {
  @Input()
  options: Option[] = [];
  activeOption: Option = {icon: '', title: '', value: ''};

  @Output()
  onClick = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {
    this.activeOption = this.options[0];
  }

  setActive(option) {
    this.activeOption = option;
    this.onClick.emit(option.value);
  }
}
