class Arrays {
    constructor() {
        this.data={}
        this.length=0
    }
    push(item){
        //Agregar al finals
        this.data[this.length]=item;
        this.length++;
        return item
    }
    pop(){
        //eliminar al final
        const deletedItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length --;
        return deletedItem
    }
    get(index){
        // ver el valor del elemento
        return this.data[index]
    }
    delete(index){
        //eliminar deacuerdo al item
        const deletedItem = this.data[index];
        for (let i = index; i < this.length-1 ; i++) {
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
        return deletedItem
    }
    unShift(item){
        //agregaral inicio
        for (let i = this.length-1; i >= 0; i--) {
            this.data[i+1]= this.data[i];
        }
        this.data[0]=item;
        this.length++;
        return this.length;
    }
    shift(){
        //cortar el valor del inicio
        if (this.length == 0) return undefined;
        const item = this.data[0];
        for (let i = 0; i < this.length-1; i++) {
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1]
        this.length--;
        return item
    }
}
const myArray = new Arrays();
myArray.push('ana');
myArray.push('juan');
myArray.push('sara');
myArray.push('david');
console.log(myArray);