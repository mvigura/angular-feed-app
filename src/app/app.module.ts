import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ItemNewsComponent} from './feed/item-news/item-news.component';
import {ItemTransactionComponent} from './feed/item-transaction/item-transaction.component';
import {FeedComponent} from './feed/feed.component';

@NgModule({
  declarations: [AppComponent, ItemNewsComponent, ItemTransactionComponent, FeedComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
