

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(index);

  if (list === undefined) {
    this._storage.set(index, []);
    list = this._storage.get(index);
  }

  var flag = true;
  for (var i = 0; i < list.length; i++) {
    var tuple = list[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      flag = false;
    }
  }

  if (flag) {
    list.push([k, v]);
    console.log(list);
    console.log(this._storage.get(index));
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(index);
  for (var i = 0; i < list.length; i++) {
    var tuple = list[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */