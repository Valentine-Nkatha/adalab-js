// function extractWords(){
// let word = "extravaganza"
// let extractedWord=word[8]+word[9]+word[10]+word[11]
// console.log(extractedWord)}
// extractWords()

// function insertFourth(){ 
//     const a="The"
//     const food="quick fox jumped over the lazy dog"
//     const d=`${a} ${food}`
//     console.log(d)
// }
// insertFourth()
// function countOccurrences(){
//     const story="The quick brown fox jumps over the lazy dog"
//     const y=(story.match(/\bThe\b/ig)||[]).length
//     console.log(y)
// }
// countOccurrences()
// function followingWords(){
    
// }
//let arrNumbers=[2,3,5,6,8,8,9]
// function takeArray(arrNumbers){
// const a=arrNumbers.slice(0,4).map(x=>x*x)
// const b=arrNumbers.slice(-2).map(y=>y+10)
// const c=arrNumbers.slice(4,-2)
// const d=[ ...a, ...b, ...c]
// //return d
// }
// takeArray()
// console.log(arrNumbers[2,3,5,6,8,8,9])

// const names = [
//     {id:23, name:"John",salary:3456},
//     {id:2, name:"Ken",salary:3000},
// ];

// function employees() {

// const names = [
//     {id:23, name:"John",salary:3456},
//     {id:2, name:"Ken",salary:3000},
// ];
//     const newSalary = names.sort((a,b) => a.salary -b.salary)//arrow function is used to
//     console.log(newSalary)
// }
// employees()
const books=[
    {title:'The Catcher in the Rye',author:'Salin',publicationYear:1951,isAvailable:true},
    {title:'Great Expectations',author:'Charles',publicationYear:1861,isAvailable:false}
]
function getAvailableBooks(books){
    let availablebooks = books.filter((book)=>book.isAvailable===true).map((book)=>book.title)
    return availablebooks

}

console.log(getAvailableBooks(books))


function getBoooksByAuthor(books,authors){
    let allBooks = books.filter((book)=>book.author===authors).map((book)=>book.title)
    return allBooks
}
console.log(getBoooksByAuthor(books,'Salin'))

function addNeBook(books,book){
    let library = books. push(book)
    return library
}
function checkVowels(word){
    let vowels=['a','e','i','o','u']
    let words = word.toLowerCase().split('')
    for(let i=0;i<words.length;i++){
        if(vowels.includes(words[i])){
          console.log(`${words[i]} is a vowel`)
        }else{
            console.log(`${words[i]} is a consonant`)
        }
    }
}

checkVowels("food")

function addition(array){
    let sum = 0
    for(let i=0;i<array.length;i++){
        sum +=array[i]
    }
    console.log(sum)
}
let numbers=[1,2,3,4,5,6]
addition(numbers)

function countOccurrences(word, letter) {
    const charArray = word.split('');
    const occurrencesArray = charArray.filter(char => char === letter);
    return occurrencesArray.length;
}

console.log(countOccurrences("hello", "l")); 

function countingOccurrences(newWord){
let  letteCount='o'
let splitWord = newWord.split('')
let newsplitWord=splitWord.filter(a=>a===letteCount);
return newsplitWord.length
}
// }the 
// class Followers{
//     constructor (user){
//     this.user=user
//     this.followers=[]
//     }
//     addUser(follower){
//     if(this.followers.includes(follower)){
//     console.log("exists")}
//     else{
//         this.followers.push(follower)
//     }

//     }
// }
// const following=new Followers("Val")
// Followers.ddUser("Valentine")

function findRadius(radius){
    const pi=3.147
    const area=pi*radius*radius
    console.log(area)
}
findRadius(7)

function findLongest(word){
    let words=word.split(" ")
    let largest=" "
    for(let i=0;i<words.length;i++){
        if(words[i].length>largest.length){
            largest=words[i];
        }
    }
    return largest.length
}
console.log(findLongest("I can Code"))
console.log(findLongest("I was watching"))

function insertTomato(array){
    if(array.length>=5){
        array.splice(4,0,"tomato")
    }else{
        console.log("the aray is too short")
    }
}


const array=["Banana","Mango","Orange","Kiwi","Avocado","Apple","tomato"]
insertTomato(array)
console.log(array)

function arrangeDescending(numbers){
    return numbers.sort((a,b)=>b-a)
}
const number=[1,2,2,4,4,4,9]
arrangeDescending(number)
console.log(number)

let students=[
    {name:"Dave",grade:[80,70,8]},
    {name:"Joe",grade:[7,9,10]}
]
function calculateAvg(students){
let totalGrade=0
for(let i=0;i<students.length;i++){
    totalGrade+=students[i].grade.reduce((a,b)=>a+b)
    return totalGrade
}
}
console.log(calculateAvg(students))



