# Beautiful Arrangement II

Problem originally from: <https://leetcode.com/problems/beautiful-arrangement-ii/>

Given two integers n and k, you need to construct a list which contains n different positive integers ranging from 1 to n and obeys the following requirement:
Suppose this list is [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] has exactly k distinct integers.

If there are multiple answers, print any of them.

## Example 1

```text
Input: n = 3, k = 1
Output: [1, 2, 3]
Explanation: The [1, 2, 3] has three different positive integers ranging from 1 to 3, and the [1, 1] has exactly 1 distinct integer: 1.
```

## Example 2

```text
Input: n = 3, k = 2
Output: [1, 3, 2]
Explanation: The [1, 3, 2] has three different positive integers ranging from 1 to 3, and the [2, 1] has exactly 2 distinct integers: 1 and 2.
Note:
The n and k are in the range 1 <= k < n <= 104.
```

## Approches

### Approach 1 - Brute Force

For the given array size _n_ with _n_ distinct values, generate all permutations of the array.

Then check each permutation to see if it meets the required condition. By calculating the adjancent differences, and storing the difference in a Set data structure. The permutation will be valid if the Set size is equal to _k_.

Time complexity O(n!) - O(n!) work to generate purmutations.  
Space complexity O(n!) - We will be collecting all permutations for checking. Could be optimized by acting on permutations while generating instead of generating then acting.

### Approach 2 - Construction

When k = 1, a valid construction is [1, 2, 3, ..., n].

When k = n - 1 a valid construction is [1, n, 2, n-1, 3, n-2, ...].

So we can break this problem into two components where we

1. Treat the first n - k - 1 elements for the k = 1 use case.
2. Treat the remaining k + 1 elements for the k = n - 1 use case.
3. Stict the two together for the final answer

Time complexity O(n) - We only iterate the array of size n once.  
Space complexity O(n) - The resulting answer will be of size n.
