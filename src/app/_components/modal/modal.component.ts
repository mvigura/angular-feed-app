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
  private isActive: boolean;

  constructor(private modalService: ModalService, el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    this.element.style.display = 'none';
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function(e: any) {
      if (e.target.className === 'app-modal-overlay app-modal-overlay--active') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    console.log(this.element);
    this.element.style.display = 'block';
    setTimeout(() => {
      this.isActive = true;
    }, 20);
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    setTimeout(() => {
      this.isActive = false;
    }, 20);
  }
}
