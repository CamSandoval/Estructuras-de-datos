

class Node{
    constructor(value) {
        this.left=null;
        this.rigth=null;
        this.value=value;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root===null){
            this.root=newNode;
        }else{
            let currentNode= this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode = currentNode.left;
                }else if(value == currentNode.value){
                    console.warn('This node already exists');
                    return;
                }else{
                    if(!currentNode.rigth){
                        currentNode.rigth = newNode;
                        return this;
                    }
                    currentNode = currentNode.rigth;
                }
            }
        }
    }
    search(value){
        if(this.root== null) {
            return console.warn('This tree is void');
        }else{
            let currentNode= this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left.value==value){
                        currentNode = currentNode.left;
                    }else{
                        return currentNode.left;
                    }
                }else if(value == currentNode.value){
                    return this;
                }else{
                    if(!currentNode.rigth.value==value){
                        currentNode = currentNode.rigth;
                    }else{
                        return currentNode.rigth;
                    }
                }
            }
        }
        
    }
}

const myTree = new BinarySearchTree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(15);
myTree.insert(4);
myTree.insert(6);
myTree.insert(12);
myTree.insert(18);
