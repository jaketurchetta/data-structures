var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.lowest = 0;
  return someInstance;
};

var queueMethods = {
  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue() {
    var lowestElement = this.storage[this.lowest];
    delete this.storage[this.lowest];
    this.lowest++;
    return lowestElement;
  },
  size() {
    var size = this.count - this.lowest;
    if (size >= 0) {
      return size;
    } else {
      return 0;
    }
  }
};


