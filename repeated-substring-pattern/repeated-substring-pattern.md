# Repeated Substring Pattern

Problem originally from: <https://leetcode.com/problems/repeated-substring-pattern/>

Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

## Examples

### Example 1

```text
Input: "abab"
Output: True
```

### Example 2

```text
Input: "aba"
Output: False
```

### Example 3

```text
Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
```

## Approaches

### Approach 1 - Recursion

First iterate on the first n/2 characters. To detect a pattern, we know the length of the pattern cannot be greater than n/2, or the pattern could not repeat.

Test increments of the first n/2 characters against the string to see if the string is made entirely of that pattern.

Using recursion we can repeatedly break down the string until we are left with less characters that the length of the pattern. If the base case reaches 0 characters, we have a full match. If we have any left over characters, the pattern is not a match.

Time Complexity: O(n²) - We must iterate the first n/2 characters and the recursive check will worst case iterate n times.  
Space Complexity: O(n) - The largest pattern will be n/2 characters

### Approach 2 - Constant

The maximum length of a repeated substring is hald the length of the string.

1. When the string _s_, which is "abab", is combined with itself so that _ss_ = _s_ + _s_, we will have 4 copies of the substring.
2. By removing the first and last characters of the string, we are now left with only 2 copies of the substring.
3. But with 2 copies of the substring, we will still have the original string _s_. Meaning that the original string _s_ is made of repeated substrings.

s = abab  
ss = abababab  
ss = b**abab**a

Time Complexity: O(n) - The in order to determine if the string of size n contains a given substring, we will have to walk through the entire string at worst case, which is O(n) operation.  
Space Complexity: O(n) - We will have to store _ss_ which is 2 times the size of the input substring, size _n_.
