class Person{
    constructor(name,age){
        this.name = name;
        this.age = age

    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}years old`);
    }
    profession(){
        console.log(`I am a student at ${this.school}`);
    }
}
const adam = new Person('Adam',30)
console.log({adam})
adam.greet()
class Student  extends Person{
    constructor(name,age,school){
        super(name,age)
        this.school = school
    }
};
const student = new Student('Jane',19,'Akirachix');
console.log({student});
student.profession();
