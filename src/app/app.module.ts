import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {EllipsisModule} from '@thisissoon/angular-ellipsis';

import {AppComponent} from './app.component';
import {
  IconComponent,
  ButtonComponent,
  ModalComponent,
  InputComponent,
  SelectComponent,
  FormGroupComponent
} from './_components';
import {ItemNewsComponent} from './feed/item-news/item-news.component';
import {ItemTransactionComponent} from './feed/item-transaction/item-transaction.component';
import {FeedComponent} from './feed/feed.component';
import {HeaderComponent} from './header/header.component';
import {AddEventModalComponent} from './modals/add-event-modal/add-event-modal.component';
import {AddTransactionFormComponent} from './forms/add-transaction-form/add-transaction-form.component';
import {AddNewsFormComponent} from './forms/add-news-form/add-news-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemNewsComponent,
    ItemTransactionComponent,
    FeedComponent,
    IconComponent,
    ButtonComponent,
    HeaderComponent,
    ModalComponent,
    AddEventModalComponent,
    AddTransactionFormComponent,
    AddNewsFormComponent,
    InputComponent,
    SelectComponent,
    FormGroupComponent
  ],
  imports: [BrowserModule, EllipsisModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
