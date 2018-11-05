import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  styleUrls: ['./icon.component.less'],
  templateUrl: './icon.component.html'
})
export class IconComponent implements OnInit {
  @Input() icon: string;
  @Input() inverse: boolean = false;
  ngOnInit() {}
}
