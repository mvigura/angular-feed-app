import {Item} from './index';

export class News extends Item {
  title: string;
  content: string;
  viewed: boolean;
  constructor(id: string, date: string, title: string, content: string, viewed: boolean) {
    super(id, date);
    this.title = title;
    this.content = content;
    this.viewed = viewed;
  }
}
