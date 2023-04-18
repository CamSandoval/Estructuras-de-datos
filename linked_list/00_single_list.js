


class Node{
    constructor(value) {
        this.value=value;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(value) {
        this.head = {
            value: value,
            next:null,
        }
        this.tail = this.head;/*{value: 1, next:{value:2, next:null}}*/ 
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next=newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);   
        newNode.next=this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    getObjectOfIndex(index){
        if(index >= this.length){
            return undefined;
        }
            let counter = 0;
            let currentNode = this.head;

            while(counter != index){
                currentNode = currentNode.next;
                counter++
            }
            return currentNode;
            
        
    }
    insert(index,value){

        if(index >= this.length){
            return this.append(value)
        }
        if(index < this.head.value){
            return this.prepend(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getObjectOfIndex(index -1);
        const holdingPointer = firstPointer.next;
        firstPointer.next= newNode;
        newNode.next = holdingPointer;

        this.length++;
        return this;
    }

    //Reto: crear un metodo remove el cual sea capaz de quitar un metodo de la lista y si es llegado el caso reasignarlo en su pocision ideal
    remove(index){
        const deletedNode = this.getObjectOfIndex(index);
        if(deletedNode == this.head){
            const newHead = this.head.next;
            this.head = newHead;
            this.length--;
            return this;
        }else if(deletedNode == undefined){
            console.warn('This node is not avalible in the list');
            return this;
        }else{
            const firstPointer = this.getObjectOfIndex(index-1);
            const holdingPointer = deletedNode.next;
            firstPointer.next= holdingPointer;

            this.length--;
            return this;
        }
    }
};

let myLinkedList = new SinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
