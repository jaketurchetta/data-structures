var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // set variables
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.lowest = 0;

  // use extend underbar to manipulate object
  _.extend(someInstance, queueMethods);

  // return object
  return someInstance;
};

var queueMethods = {
  enqueue(value) {
    // add string to stop
    this.storage[this.count] = value;
    // increment counter
    this.count++;
  },
  dequeue() {
    // set var of lowest value
    var lowestElement = this.storage[this.lowest];
    // delete lowest el from storage
    delete this.storage[this.lowest];
    // increment lowest
    this.lowest++;
    // return lowest el
    return lowestElement;
  },
  size() {
    // create size var
    var size = this.count - this.lowest;
    // if positive
    if (size >= 0) {
      // return size
      return size;
    // otherwise
    } else {
      // return 0
      return 0;
    }
  }
};


