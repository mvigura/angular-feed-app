import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  styleUrls: ['./icon.component.less'],
  template: `<svg>
      <use attr.xlink:href="assets/icons/fontawesome-icomoon.svg#{{icon}}"></use>
    </svg>`
})
export class IconComponent implements OnInit {
  @Input() icon: string;
  ngOnInit() {}
}
