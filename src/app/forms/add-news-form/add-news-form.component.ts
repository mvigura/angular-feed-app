import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {News} from 'src/app/_classes';
import {ModalService} from 'src/app/modal.service';
import {ItemService} from 'src/app/item.service';

@Component({
  selector: 'app-add-news-form',
  templateUrl: './add-news-form.component.html',
  styleUrls: ['./add-news-form.component.less']
})
export class AddNewsFormComponent {
  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private itemService: ItemService
  ) {}

  addNewsForm = this.fb.group({
    title: '',
    content: ''
  });

  onSubmit(values) {
    const newNews = new News(Date().toString(), values.title, values.content, false);
    this.itemService.addItem(newNews);
    this.modalService.close('add-event');
  }
}
