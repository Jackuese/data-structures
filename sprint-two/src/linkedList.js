// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  var storage = {};
  list.head = null;
  list.tail = null;
  list.order = 0;
  list.lastRemoved = -1;
  list.size = 0;
  var containsObject = {};

  list.addToTail = function(num){
    storage[list.order] = makeNode(num);
    containsObject[storage[list.order.value]] = true;
    storage[list.order-1].value = storage[list.order];
    list.order++;
    list.size++;
  };

  list.removeHead = function(){
    if(list.size) {
      list.size--;
      list.lastRemoved++;
      return list[lastRemoved];
    }};

  list.contains = function(num){
    _.contains(Object.keys(containsObject), num);
  };

  return list;
};

var makeNode = function(num){
  var node = {};
  node.value = num;
  node.next = null;

  return node;
};
