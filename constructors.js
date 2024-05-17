function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet=function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age}years old`);
    }
};
const adam = new Person('Adam',30)//creating an instance of a class
console.log({adam});
adam.language = 'English'
console.log({adam});

const eve = new Person('Eve',20);
console.log({eve})
Person.prototype.nationality='Kenyan';//an object inside an object
console.log({adam})
console.log('adam-nationality',adam.nationality)
console.log('eve-nationality',eve.nationality)
eve.nationality ='Ugandan';
console.log({eve})
console.log({adam})
adam.greet();
