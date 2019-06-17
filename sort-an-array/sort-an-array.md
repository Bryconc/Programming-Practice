# Sort an Array

Given an array of integers nums, sort the array in ascending order.

## Examples

### Example 1

```text
Input: [5,2,3,1]
Output: [1,2,3,5]
```

### Example 2

```text
Input: [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
```

## Approaches

### Approach 1 - Heap Sort

Items can be sorted using a heap data structure. A heap is a Complete Binary Tree whose children are either both greater than or less than the root (a max heap or min heap respectively). A Complete Binary Tree is a binary tree which all levels are completely filled, except the last - where all nodes are as far left as possible.

A max heap can be created from an array by comparing the left and right children of a root, swapping with the largest child, and recursively "heapifying" the children. To create a min heap, you would do the same bug take the smallest child to swap with.

Once a heap is created, an ascending sort can be done by taking the root (which is the largest item in a max heap) and swapping it with the last node in the tree, then heapify the remaining elements, repeat the process decreasing the size of the heap each time. The resulting array is sorted. For descending sort repeat with a min tree.

![Heap sort explained visually.](https://he-s3.s3.amazonaws.com/media/uploads/e9d6f12.png)

Time Complexity O(n \* log(n)) - The heap sort must iterate on n nodes and the heapify algorithm will take about log n iterations.
Space Complexity O(n) - The size of the array in memory will be n. Since heap sort is an in-place sort algorithm it uses no additional space.
