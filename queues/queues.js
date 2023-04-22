// Un queue es una estructura la cual maneja una logica parecida a un stack, la diferencia es que dentro de un queue se debe poder manipular el primer elento
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first=null;
        this.last=null;
        this.length=0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.length==0){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    //DEqueue tiene que borrar el primer elemento del queue
    dequeue(){
        if(this.length===0){
            console.warn('There are not any elements in the queue');
        }else if(this.length===1){
            this.first=null;
            this.last=null;
        }else{
            const myNewFirst = this.first.next;
            this.first= myNewFirst;
        }
        this.length--;
        return this;
    }
}

let myQueue = new Queue();