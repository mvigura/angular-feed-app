import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedItemNewsComponent } from './feed/feed-item-news/feed-item-news.component';
import { FeedItemTransactionComponent } from './feed/feed-item-transaction/feed-item-transaction.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedItemNewsComponent,
    FeedItemTransactionComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
