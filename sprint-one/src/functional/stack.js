var Stack = function() {
  var someInstance = {};
  // Create counter to keep track of the current element
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Add current value to storage with count as key
    storage[count] = value;
    // Increment count var
    count++;
  };

  someInstance.pop = function() {
    // save top element in var to return later
    var newestElement = storage[count - 1];
    // delete top element from storage bin
    delete storage[count - 1];
    // decrement count var
    count--;
    // return deleted value
    return newestElement;
  };

  someInstance.size = function() {
    if (count >= 0) {
      return count;
    } else {
      return 0;
    }
  };

  return someInstance;
};