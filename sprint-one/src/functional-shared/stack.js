var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create instace, storage, count vars
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;

  // use _.extend to copy the methods onto the instance
  _.extend(someInstance, stackMethods);

  // return storage obj
  return someInstance;
};

var stackMethods = {
  push(value) {
    // push value to storage
    this.storage[this.count] = value;
    // increment counter
    this.count++;
  },
  pop(value) {
    // decrement counter
    this.count--;
    // create popped var
    var newestElement = this.storage[this.count];
    // deleted var from storage
    delete this.storage[this.count];
    // return popped var
    return newestElement;
  },
  size() {
    if (this.count >= 0) {
      return this.count;
    } else {
      return 0;
    }
  }
};