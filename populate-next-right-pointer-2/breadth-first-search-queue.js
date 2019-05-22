class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const breadthFirstSearch = root => {
  if (root === null) {
    return;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const current = queue[0];
    console.log(current.val);

    if (current.left !== null) {
      queue.push(current.left);
    }

    if (current.right !== null) {
      queue.push(current.right);
    }
    queue.shift();
  }
};

breadthFirstSearch({
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
});
