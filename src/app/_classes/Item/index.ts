export class Item {
  id: string;
  typeSortIndex: number = 0;
  date: string;
  constructor(date: string, sortIndex: number) {
    this.id = `item_${new Date().getTime()}_${String(Math.random()).substr(2, 5)}`;
    this.date = date;
    this.typeSortIndex = sortIndex;
  }
}
