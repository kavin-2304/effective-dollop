class Animal {
    constructor(name,breed){
        this.name=name;
        this.breed=breed;
    }
    walks(){
        console.log("The animal can walk")
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name,breed);
    }

    bark(){
        console.log(`The breed ${this.breed} speaks "Woof"`);
    }
}

let myDog=new Dog("Happy","Lebrador");
myDog.bark();
myDog.walks();