// Binary Search Tree Implementation
export class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  root: BSTNode | null;

  constructor() {
    this.root = null;
  }

  insertNode(node: BSTNode, newNode: BSTNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // EASY: Insert a value into the BST
  insert(value: number): void {
    // TODO: Implement insert method
    const newNode = new BSTNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  containsNode(node: BSTNode | null, value: number): boolean {
    if (node === null) {
      return false;
    } else if (value < node.value) {
      return this.containsNode(node.left, value);
    } else if (value > node.value) {
      return this.containsNode(node.right, value);
    } else {
      return true;
    }
  }

  // EASY: Check if a value exists in the BST
  contains(value: number): boolean {
    // TODO: Implement contains method
    return this.containsNode(this.root, value);
  }

  // MEDIUM: Find the minimum value in the BST
  findMin(node = this.root): number | null {
    // TODO: Implement findMin method
    if (node?.left === null) {
      return node.value;
    }
    return this.findMin(node?.left);
  }

  // MEDIUM: Find the maximum depth of the BST
  maxDepth(node = this.root): number {
    // TODO: Implement maxDepth method
    if (node === null) return -1;
    let leftDepth = this.maxDepth(node.left);
    let rightDepth = this.maxDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }

  // MEDIUM: Depth-First Search (DFS) Traversal
  dfs(node = this.root, memo: number[] = []): number[] {
    // TODO: Implement DFS traversal
    if (node) {
      memo.push(node.value);
      this.dfs(node.left, memo);
      this.dfs(node.right, memo);
    }
    return memo;
  }

  bfsRecursive(root: BSTNode | null, level: number, result: number[][]) {
    if (!root) return;
    if (result.length <= level) {
      result.push([]);
    }
    result[level].push(root.value);
    this.bfsRecursive(root.left, level + 1, result);
    this.bfsRecursive(root.right, level + 1, result);
  }

  // MEDIUM: Breadth-First Search (BFS) Traversal
  bfs(): number[] {
    // TODO: Implement BFS traversal
    let result: number[][] = [];
    this.bfsRecursive(this.root, 0, result);
    return result.flat();
  }
}

// Test Cases
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);

console.log("BST Contains 7:", bst.contains(7)); // Expected: true
console.log("BST Min Value:", bst.findMin()); // Expected: 3
console.log("BST Max Depth:", bst.maxDepth()); // Expected: 2
console.log("BST DFS Traversal:", bst.dfs()); // Expected: [10, 5, 3, 7, 15, 13, 17] (or similar)
console.log("BST BFS Traversal:", bst.bfs()); // Expected: [10, 5, 15, 3, 7, 13, 17] (or similar)
