class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

const connect = root => {
  let pre = root;
  const dummy = new Node(0);
  while (pre !== null) {
    dummy.next = null;
    let current = dummy;
    console.log(`Outer: pre is ${pre.val}`);
    while (pre !== null) {
      console.log(`Inner: pre is ${pre.val}`);
      if (pre.left !== null) {
        current.next = pre.left;
        current = current.next;
      }
      if (pre.right !== null) {
        current.next = pre.right;
        current = current.next;
      }
      pre = pre.next;
    }
    pre = dummy.next;
  }
  return root;
};

console.log(
  connect({
    $id: '1',
    left: {
      $id: '2',
      left: { $id: '3', left: null, next: null, right: null, val: 4 },
      next: null,
      right: { $id: '4', left: null, next: null, right: null, val: 5 },
      val: 2
    },
    next: null,
    right: {
      $id: '5',
      left: null,
      next: null,
      right: { $id: '6', left: null, next: null, right: null, val: 7 },
      val: 3
    },
    val: 1
  })
);
