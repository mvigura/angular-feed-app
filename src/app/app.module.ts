import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {EllipsisModule} from '@thisissoon/angular-ellipsis';

import {AppComponent} from './app.component';
import {IconComponent, ButtonComponent, ModalComponent} from './_components';
import {ItemNewsComponent} from './feed/item-news/item-news.component';
import {ItemTransactionComponent} from './feed/item-transaction/item-transaction.component';
import {FeedComponent} from './feed/feed.component';
import {HeaderComponent} from './header/header.component';
import {AddEventModalComponent} from './modals/add-event-modal/add-event-modal.component';

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
    AddEventModalComponent
  ],
  imports: [BrowserModule, EllipsisModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
