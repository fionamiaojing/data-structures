var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //input: primitive value;
    //output: nothing;
    var node = Node(value);
    if (list.tail) {
      list.tail.next = node;
      list.tail = node;
    } else {
      list.head = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    //remove head
    //return head

    //check if head is truthy
    //if true:
    //create a var currentHead to store the head
    //let currentHead.next = new head
    //return current head
    //if false:
    //return undefined
    
    if (list.head !== null) {
      var currentHead = list.head.value;
      list.head = list.head.next;
      if (list.head === null) {
        list.tail = null;
      }
      return currentHead;
    } else {
      return undefined;
    }
  };

  list.contains = function(target) {
    //input: primitive value;
    //output: boolean

    //check if list.head is truthy;
    //if true:
    //check if the value of headnode equals target;
    //  if true:
    //     return true;
    //  else:
    //     go to the next node;
    // repeat until there's no next node (or the target is find);

    if (list.head) {
      var node = list.head;
      var result = false;
      while (node && !result) {
        if (node.value === target) {
          result = true;
        } else {
          node = node.next;
        }
      }
    }
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: O(1);
 removeHead: O(1);
 Contains: O(n);
 */
