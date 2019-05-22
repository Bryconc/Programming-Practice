# Populating Next Right Pointers in Each Node II

Given a binary tree

```c
struct Node {
    int val;
    Node *left;
    Node *right;
    Node *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

## Example

![Figure A and B](https://assets.leetcode.com/uploads/2019/02/15/117_sample.png)

```test
Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":null,"right":null,"val":7},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"6","left":null,"next":null,"right":{"$ref":"5"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"\$ref":"6"},"val":1}

Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
```

## Approaches

### Approach 1 - Level Order Traversal - Iterative

The problem suggests we must visit each node in order from top to bottom, a level-order traversal. However, the problem suggests we must use constant space, so we cannot use a queue.

What makes this problem unique, is that we have a reference to the _next_ property while iterating. So we can use that in our code to make our traversal more efficient.

Time Complexity - O(n) We will visit each node in the tree once and perform constant operations.
Space Complexity - O(1) Ignore space complexity for the call stack (as requested by the problem), other space usage is constant complexity.