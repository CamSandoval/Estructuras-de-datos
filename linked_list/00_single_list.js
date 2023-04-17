


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

    getIndex(index){
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

        const newNode = new Node(value);
        const firstPointer = this.getIndex(index -1);
        const holdingPointer = firstPointer.next;
        firstPointer.next= newNode;
        newNode.next = holdingPointer;

        this.length++;
        return this;
    }

    //Reto: crear un metodo remove el cual sea capaz de quitar un metodo de la lista y si es llegado el caso reasignarlo en su pocision ideal
    remove(value){
        // const pointer = this.getIndex(value);
        // if( pointer >= this.tail.value){
        //     return this.append(value);
        // }
        
        const firstPointer = this.getIndex(value-2);
        const deletedNode = this.getIndex(value-1);
        const holdingPointer = deletedNode.next;
        firstPointer.next= holdingPointer;

        this.length--;
        return this;
    }
};

let myLinkedList = new SinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
