const BinarySearchTree = require('./BinarySearchTree');

let bst = new BinarySearchTree();

bst.insert(6)
bst.insert(3)
bst.insert(7)
bst.insert(4)
bst.insert(9)
bst.insert(11)
bst.insert(5)
bst.insert(17)
bst.insert(8)
bst.insert(1)


//RIMUOVO UNA FOGLIA ----- OK
/*
console.log(bst.find(bst.root, 3))
bst.remove(1)
console.log(bst.find(bst.root, 3))
*/


//RIMUOVO NODO CON UN SOLO FOGLIO SINISTRO
//HO COSTRUITO UN ALBERO SENZA NODI CON SOLO FIGLI DESTRI, OPS



//RIMUOVO NODO CON UN SOLO FOGLIO DESTRO ----- OK
/*
console.log(bst.find(bst.root, 11))
bst.remove(17)
console.log(bst.find(bst.root, 11))
*/


//RIMUOVO NODO CON DUE FIGLI ----- OK
/*
console.log(bst.find(bst.root, 9))
bst.remove(9)
console.log(bst.find(bst.root, 7))
*/


//RIMUOVO LA RADICE ----- OK
/*
console.log(bst.getRoot())
bst.remove(bst.getRoot())
console.log(bst.getRoot())
*/