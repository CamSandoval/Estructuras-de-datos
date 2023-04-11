//Una Hash Table es una estructura de datos compleja que tiene un funcionamiento parecido al de un objeto, guardando la informacion en grupos de arrays con dos elementos dentro de si, se parece a un objeto, ya que estos dos seran considerados como un key y un value

    //Esta se diferencia ya que la posicion en la que se ubicara este sera dada por un algoritmo que encripte el valor de su key en numeros y ubique este deacuerdo a esto, esta sera considerada la adress del array.
class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
    hashMetod(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)*i) % this.data.length
        }
        return hash
    }
    set(key,value){
        const adress = this.hashMetod(key);
        if(!this.data[adress]){
            this.data[adress]=[];
        }
        this.data[adress].push([key,value]);
        return this.data
    }
    get(key){
        const adress = this.hashMetod(key);
        const currentBucket = this.data[adress];
        if(currentBucket){
            for (let index = 0; index < currentBucket.length; index++) {
                if(currentBucket[index][0]===key){
                    return currentBucket[index][1]
                }
            }
        }
    }
    delete(key){
        const adress = this.hashMetod(key);
        const currentBucket = this.data[adress];
        for (let index = 0; index < currentBucket.length; index++) {
            if(currentBucket[index][0]===key){
                let deletedElement = currentBucket[index];
                currentBucket.splice(index,1);
                return deletedElement
            }else{
                return undefined;
            }
        }
        return this.data
    }
    getAllKeys(){
        const occupiedSpaces = this.data.filter(i => i != null).flat();
        const allKeys = occupiedSpaces.map(i => i[0]);
        return allKeys
    }
}


const myHashTable = new HashTable(50);
myHashTable.set('Diego',1990);
myHashTable.set('Mariana',1998);
myHashTable.set('Alejandra',2000);
myHashTable.set('Juan',2015);