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

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0){
      return 0;
    }
    return this.items.reduce((a, b) => a + b);
  }

  avg() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    const sum = this.items.reduce((a, b) => a + b);
    return sum/this.length;
  }
}

module.exports = SortedList;
