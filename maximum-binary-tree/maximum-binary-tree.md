# Maximum Binary Tree

Problem originally from: <https://leetcode.com/problems/maximum-binary-tree/>

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

- The root is the maximum number in the array.
- The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
- The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of this tree.

## Examples

### Example 1

```text
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
   \     /
    2   0
     \
      1
```

## Approaches

### Approach 1 - Recursion

The problem criteria strongly suggests a recursive approach as the definition includes the term itself.

First, at each step of the recursion, we must find the index for the maximum value of the array. Then we construct a TreeNode for that maximum value.

We then set the left and right nodes for that node with recursive calls to the construct method.

Time complexity O(n²) - To find the index of the maximum value of an unsorted array, we must iterate the whole array, O(n). Our worst case scenario is that the entire array is sorted, in which case we will have O(n) recursion. Yielding a total complexity of O(n²).

Space complexity O(n) - In the worst case there will be _n_ calls on the call stack.
