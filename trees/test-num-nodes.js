const BinarySearchTree = require('./BinarySearchTree');

let bst = new BinarySearchTree();

bst.insert(3)
bst.insert(7)
bst.insert(4)
bst.insert(6)
bst.insert(9)
bst.insert(11)
bst.insert(5)
bst.insert(17)
bst.insert(8)


console.log(bst.countNodes(bst.root))