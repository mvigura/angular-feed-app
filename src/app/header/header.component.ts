import {Component, OnInit} from '@angular/core';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  openAddModal() {
    this.modalService.open('custom-modal-1');
  }
}
