import {Item} from './index';

export class News extends Item {
  title: string;
  content: string;
  viewed: boolean;
  type: string;
  constructor(
    id: string,
    date: string,
    title: string,
    content: string,
    viewed: boolean,
    type: string
  ) {
    super(id, date);
    this.title = title;
    this.content = content;
    this.viewed = viewed;
    this.type = type;
  }
}
