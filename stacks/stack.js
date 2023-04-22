//Un stack es una estructura de tipo pila, dentro de la cual la logica solo debe permitir alojar elementos al final de esta y elimnar elemetos del final siguiendo una metodologia LIFO(Last In First Out)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    pop(){
        if(this.length ==0) return console.warn('There are not more elements in the stack');
        if(this.length ==1){
            this.bottom = null;
        }
        const newTop = this.top.next;
        this.top = newTop
        this.length--;
        return this
    }
    push(value){
        if(value != undefined){
            const newNode = new Node(value);
            if(this.length ===0){
                this.bottom= newNode
                this.top= newNode
            }else{
                const holdingPointer = this.top;
                this.top = newNode;
                this.top.next = holdingPointer;
            }
                this.length ++;
                return this
        }else{
            console.warn('Please, send a correct param');
        }

    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);