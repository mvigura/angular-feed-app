import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.less']
})
export class FormGroupComponent implements OnInit {
  @Input() label: string;
  constructor() {}

  ngOnInit() {}
}
