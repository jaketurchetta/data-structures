var Queue = function() {
  var someInstance = {};
  // create count variable to track current
  var count = 0;
  // need lowest count variable as well
  var low = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    // add value to the front of the queue (at the lowest key)
    storage[count] = value;
    // increment total queue count, lowest value remains the same
    count++;
  };

  someInstance.dequeue = function() {
    // create lowest var
    var lowestElement = storage[low];
    // remove lowest element
    delete storage[low];
    // increment low
    low++;
    // return deleted element var
    return lowestElement;
  };

  someInstance.size = function() {
    // set size var
    var size = count - low;
    // if positive, return the size
    if (size >= 0) {
      return size;
    } else {
      return 0;
    }
  };
  return someInstance;
};
