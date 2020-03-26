class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.lowest = 0;
  }
  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  dequeue() {
    var lowestElement = this.storage[this.lowest];
    delete this.storage[this.lowest];
    this.lowest++;
    return lowestElement;
  }
  size() {
    var size = this.count - this.lowest;
    if (size >= 0) {
      return size;
    } else {
      return 0;
    }
  }
}
