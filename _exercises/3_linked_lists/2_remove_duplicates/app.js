function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null'; // Indicate the end of the list
  console.log(listStr);
}

function deleteDuplicates(list){
  let currentNode = list;
  let nextNode;

  while(true){
    nextNode = structuredClone(currentNode.next);
    if (currentNode.val === nextNode.val){
      currentNode.next = null;
    }
    currentNode = nextNode;
  }
  console.log(list)
}

// function countKeyOccurrences(list, key) {
//   return loopThroughList(list, (acc, val) => val === key ? acc + 1 : acc, 0);
// }


function tests() {
  let list1 = createLinkedList([1, 1, 2]);
  let list2 = createLinkedList([1, 1, 2, 3, 3]);
  let list3 = createLinkedList([1, 2, 3, 3, 4]);
  let list4 = createLinkedList([2, 2, 2, 3, 3]);
  let list5 = createLinkedList([5]);

  console.log(deleteDuplicates(list1))
  // traverseList(list1)
  return
  printLinkedList(deleteDuplicates(list1)); // Expected: "1 -> 2 -> null"
  printLinkedList(deleteDuplicates(list2)); // Expected: "1 -> 2 -> 3 -> null"
  printLinkedList(deleteDuplicates(list3)); // Expected: "1 -> 2 -> 3 -> 4 -> null"
  printLinkedList(deleteDuplicates(list4)); // Expected: "2 -> 3 -> null"
  printLinkedList(deleteDuplicates(list5)); // Expected: "5 -> null"
}
tests();