var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.lowest = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var lowestElement = this.storage[this.lowest];
  delete this.storage[this.lowest];
  this.lowest++;
  return lowestElement;
};

Queue.prototype.size = function() {
  var size = this.count - this.lowest;
  if (size >= 0) {
    return size;
  } else {
    return 0;
  }
};