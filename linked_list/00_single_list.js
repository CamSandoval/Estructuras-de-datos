


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
};

let myLinkedList = new SinglyLinkedList(1);