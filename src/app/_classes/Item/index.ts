export class Item {
  id: string;
  date: string;
  constructor(date: string) {
    this.id = `item_${new Date().getTime()}_${String(Math.random()).substr(2, 5)}`;
    this.date = date;
  }
}
