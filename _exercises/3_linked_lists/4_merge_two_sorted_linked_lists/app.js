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
  let current = head;
  let listStr = '';
  while (current !== null) {
    listStr += current.val + ' -> ';
    current = current.next;
  }
  listStr += 'null';
  console.log(listStr);
}

function mergeLists(list1, list2){
  if (list1 === null) return list2;

  let currentNode = list1;
  while(true){
    if (currentNode.next === null){
      currentNode.next = list2;
      return list1;
    }
    currentNode = currentNode.next;
  }
}

function sortList(list){
  let currentNode;
  let swapsCounter;

  do {
    currentNode = list;
    swapsCounter = 0;
    while(currentNode.next){
      const nextNode = currentNode.next;
      if (currentNode.val > nextNode.val){
        swapsCounter++;
        [nextNode.val, currentNode.val] = [currentNode.val, nextNode.val]
      }
      currentNode = currentNode.next;
    }
  } while (swapsCounter > 0)
    return list;
}

function mergeSortedLists(list1, list2){
  const mergedLists = mergeLists(list1, list2);
  return sortList(mergedLists);
}


function tests(){
  let list1 = createLinkedList([1, 3, 5]);
  let list2 = createLinkedList([2, 4, 6]);
  printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

  let list3 = createLinkedList([1, 2, 3]);
  let list4 = createLinkedList([]);
  printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> null

  let list5 = createLinkedList([]);
  let list6 = createLinkedList([1]);
  printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> null

  let list7 = createLinkedList([1, 5, 9]);
  let list8 = createLinkedList([2, 4, 6, 8, 10]);
  printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null

  let list9 = createLinkedList([1, 2, 5]);
  let list10 = createLinkedList([3, 6, 7]);
  printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null
}
tests();