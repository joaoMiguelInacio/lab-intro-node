class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.items.length === 0){
      this.items.push(item);
      this.length = this.items.length;
    } else {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) => a-b);
    }
  }

  get(pos) {
    if (this.items[pos] === undefined){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
