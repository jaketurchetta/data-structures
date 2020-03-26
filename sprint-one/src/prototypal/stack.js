var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // set variables
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  // return object
  return someInstance;
};

var stackMethods = {
  // push
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  // pop
  pop() {
    this.count--;
    var lastElement = this.storage[this.count];
    delete this.storage[this.count];
    return lastElement;
  },
  // size
  size() {
    if (this.count >= 0) {
      return this.count;
    } else {
      return 0;
    }
  }
};


