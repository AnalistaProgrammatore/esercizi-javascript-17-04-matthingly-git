class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

/** ABSTRACT DATA TYPE per le linked list
 * @property root -> Nodo radice dell'albero
 * @method insert(data) -> Inserisce un nodo nell'albero
 * @method remove(data) -> Rimuove un nodo dall'albero
 * @method inorder(node) -> Attraversamento in order -> O(n)
 * @method preorder(node) -> Attraversamento preorder -> O(n)
 * @method postorder(node) -> Attraversamento postorder -> O(n)
 * @method getRoot() -> ritorna il nodo radice -> O(1)
 * @method getMin() -> ritorna il nodo minimo dell'albero -> O(height)
 * @method getMax() -> ritorna il nodo massimo dell'albero -> O(height)
 * @method find(node,data) -> ritorna il nodo cercato -> O(logn)
 * @method countNodes -> ritorna il numero di nodi
 * @method countEdges -> ritorna il numero di connessioni
 */
class BinarySearchTree {
  constructor() {
    this.root = null
    this.insertNode = (node, newNode) => {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode
        } else {
          this.insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          this.insertNode(node.right, newNode)
        }
      }
    }
    this.removeNode = (node, key) => {
      if (node === null) return null

      if (key < node.data) {
        node.left = this.removeNode(node.left, key)
        return node
      }

      if (key > node.data) {
        node.right = this.removeNode(node.right, key)
        return node
      }

      /**HO TROVATO IL NODO D RIMUOVERE, COME LO RIMUOVO? */

      /** CASO 1: IL NODO DA RIMUOVERE È UNA FOGLIA -> IL CASO PIÙ SEMPLICE*/
      if (node.left === null && node.right === null) return null

      /** CASO 2: IL NODO DA RIMUOVERE HA UN SOLO FIGLIO */
      if (node.left === null) return node.right
      if (node.right === null) return node.left

      /** CASO 3: IL NODO DA RIMUOVERE HA 2 FIGLI 
       * DEVO:
       * 1. Cercare il valore minimo nel sottoalbero di destra (quindi il minimo dei maggiori)
       * 2. Devo sostituire il valore minimo trovato con il valore corrente del nodo ceh sto analizzando)
       * 3. Devo eliminare il nodo minimo trovato al passo 1
      */
      const min = this.getMin(node.right)
      node.data = min.data
      node.right = this.removeNode(node.right, min.data)
      return node
    }
  }

  insert(data) {
    const newNode = new Node(data)
    if (this.root === null) {
      return this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  getMin(node = null) {
    /*let current = node !== null ? node : this.root*/
    let current = node !== null ? node : this.root
    if (current.left === null) return current
    else return this.getMin(current.left)
  }

  getMax(node = null) {
    let current = node !== null ? node : this.root
    if (current.right === null) return current
    else return this.getMax(current.right)
  }

  getRoot() {
    return this.root
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.data) //questa può essere una funzione di callback passata come parametro
      this.preorder(node.left)
      this.preorder(node.right)
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left)
      this.postorder(node.right)
      console.log(node.data) //questa può essere una funzione di callback passata come parametro
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left)
      console.log(node.data) //questa può essere una funzione di callback passata come parametro
      this.inorder(node.right)
    }
  }

  find(node, data) {
    if (node === null) return null

    if (data < node.data) {
      return this.find(node.left, data)
    } else if (data > node.data) {
      return this.find(node.right, data)
    } else {
      return node
    }
  }

  countNodes(node) {
    let counter = 0;
    if (node !== null) {
      counter++
      counter = counter + this.countNodes(node.left)
      counter = counter + this.countNodes(node.right)
    }
    return count
  }

  countEdges(node) {
    return this.countNodes(node) - 1
  }
}



module.exports = BinarySearchTree