import {Item} from './index';

export class News extends Item {
  title: string;
  content: string;
  viewed: boolean;
  constructor(date: string, title: string, content: string, viewed: boolean) {
    super(date, 1);
    this.title = title;
    this.content = content;
    this.viewed = viewed;
  }
}
