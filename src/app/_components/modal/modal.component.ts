import {Component, OnInit, OnDestroy, Input, ElementRef} from '@angular/core';
import {ModalService} from '../../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() title: string;
  private element: any;

  constructor(private modalService: ModalService, el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
    this.element.style.display = 'none';
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
  }

  // open modal
  open(): void {
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (e: any) => {
      if (e.target.className === 'app-modal-overlay') {
        this.close();
      }
    });

    this.element.style.display = 'block';
  }

  // close modal
  close(): void {
    this.element.remove();
  }
}
