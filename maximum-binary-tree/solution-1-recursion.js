class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const constructMaximumBinaryTree = nums => {
  if (nums.length == 0) {
    return null;
  }
  if (nums.length == 1) {
    return new TreeNode(nums[0]);
  }

  const maxIndex = indexOfMax(nums);
  const rootNode = new TreeNode(nums[maxIndex]);
  rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  rootNode.right = constructMaximumBinaryTree(
    nums.slice(maxIndex + 1, nums.length)
  );

  return rootNode;
};

const indexOfMax = nums => {
  let max = -1;
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      maxIndex = i;
      max = nums[i];
    }
  }

  return maxIndex;
};

exports.constructMaximumBinaryTree = constructMaximumBinaryTree;
