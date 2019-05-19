# Minimum Height Trees

Problem originally from: <https://leetcode.com/problems/minimum-height-trees/>

For an undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

## Format

The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels).

You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

## Examples

### Example 1

```text
Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]

        0
        |
        1
       / \
      2   3

Output: [1]
```

### Example 2

```text
Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]

     0  1  2
      \ | /
        3
        |
        4
        |
        5

Output: [3, 4]
```

## Approaches

### Approach 1 Breadth First Search Approach

First we simplify the problem to a case where the tree has two terminal verticies and any other verticies have a degree of two (a single path graph). For this type of graph, we can can determine the minimum height tree root by selecting the middle node.

If we do not know the middle node, we can determine it by have two pointers which start at the ends and progress up the tree at the same rate. Where the pointers meet (or is they are one node apart depending on the parity of the number of verticies), will be the middle node, and the root for the MHT.

For any tree input, we can apply the same approach here, where we identify all the leaves (where degree is 1) and then traverse up the tree (removing leaves and updating vertex degrees) until we are left with n < 2 nodes.

Time Complexity O(n) - Because we must build the adjacency list from the edges this requires O(n) work.
Space Complexity O(n) - The adjacency list will the size of number of edges.
