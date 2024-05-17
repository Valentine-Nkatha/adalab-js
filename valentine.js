// let arr1=[3,4,5,9]
// console.log("last element", arr1.slice(-1))

// let arr2=[3,6,8];
// console.log("first element",arr2[0]);

// let arr=["in","in","it","to"]
// let arr3=[];
// let duplicates=[];
// arr.forEach (=>{
// if(!arr3 includes.)
// }
// function sortingArray(a,b){return a - b} {
//     const arr = [3,9,5,6,7,1,2]
//     console.log(arr.sort(sortingArray))
// }
// sortingArray()
// function getDuplicates(word){
//     let newWord=[...new Set(word)].join("")
//     console.log(newWord)
// }
// getDuplicates("assess")
// function descending(numbers){
//     return numbers.sort((a,b)=>b-a)
// }
//  console.log(descending([5,1,2,4]))
// function takeArray(Array){
//    const x = Array.slice(0,4).map((y)=>y*4)
//    const y = Array.slice(-2).map((z)=>z+10)
//   const z = Array.slice(4,-2)
//     const newArray = [...x,...z,...y]
//     return newArray
//  }
// console.log(takeArray([1,2,3,4,5,6,7,8,9]))

// function takesArray(array){
//     while ((array.length =[4])){
//     return array
//  break
//    }
//  }
// console.log(takesArray([4,5,6,7,8,9,10]))

// let fruits = ["apple","plum","banana","kiwi","strawberries"];

// function takeString(){
//     for(let i = 0;i < fruits.length;i++){
//         if(i === 2)continue;
//         console.log(fruits[i]);  
//     } 
// }
// //  console.log(fruits);
// takeString(fruits);


// let names = ["John","Ben","Dava"]
//  function acceptStrings(array){
//     for(i=0;i<array.length;i++){
//     console.log (array[i]);
// }
//  }
// acceptStrings(names)

// function color(){
//     const colors = ["blue","yellow","red"]
//     for(const color of colors){
//         console.log(color);
//     }
//     return colors
// }
// color()

// function takeString(String){

// }
// function Car(make,model,year,isAvailable){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.isAvailable = isAvailable
    
//     this.toggleAvailability = function(){
//     this.isAvailable = !this.isAvailable
//     }
//     const newCar = new 
// }
// function Rental(car,renterName,rentalStartDate,rentalEndDate){
//     this.car = car
//     this.renterName = renterName
//     this.rentalStartDate = rentalStartDate
//     this.rentalEndDate = rentalEndDate
    
//     this.calculateRentalDuration = function(){
//     const startDate = new Date(rentalStartDate)
//     const  endDate = new Date(rentalEndDate)
//     const rentalDuration = endDate - startDate
//     return (rentalDuration/(24*60*60*1000))
    
//     }
// }
// const myCar = new Car("Prado","Toyota",2020,true)
// console.log(myCar)
// const rental = new Rental(myCar,"BMW","2018-02-09","2020-01-08")
// console.log(rental)
// const duration=rental.calculateRentalDuration()
// console.log(duration)

// function Question(text,options,correctAnswer){
//     this.text = text
//     this.options = options
//     this.correctAnswer =correctAnswer
    
//     this.checkAnswer = function(usersAnswer){
//     if(usersAnswer==this.correctAnswer){
//         return true
//     }else{
//         return false
//     }
//     }
// }
// function Quiz(questions,currentQuestionIndex,score){
//     this.questions = questions
//     this.currentQuestionIndex = currentQuestionIndex
//     this.score = score

//     this.addQuestion = function(question){
//         this.questions.push(question)
//        const nextQuestion = this.currentQuestionIndex++
       

//     }
// }
class Person{
    constructor(age,retirement,retirementAge){
        this.age=age
        this.retirement=retirement
        this.retirementAge=retirementAge
    }
    yearUntilRetirement(){
        const retire=this.retirementAge-this.age
        console.log(retire)
    }
}
const people=new Person (20,"invest",60)
people.yearUntilRetirement()