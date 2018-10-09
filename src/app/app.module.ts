import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {EllipsisModule} from '@thisissoon/angular-ellipsis';

import {AppComponent} from './app.component';
import {ItemNewsComponent} from './feed/item-news/item-news.component';
import {ItemTransactionComponent} from './feed/item-transaction/item-transaction.component';
import {FeedComponent} from './feed/feed.component';
import {IconComponent} from './components/icon/icon.component';
import {ButtonComponent} from './components/button/button.component';
import {HeaderComponent} from './header/header.component';
import {ModalComponent} from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemNewsComponent,
    ItemTransactionComponent,
    FeedComponent,
    IconComponent,
    ButtonComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [BrowserModule, EllipsisModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
