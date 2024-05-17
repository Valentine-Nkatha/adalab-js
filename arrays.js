let fruits=['mango','Banana','Orange'];

let arr = new Array(20,30);

console.log({fruits});
console.log({arr});

fruits[1] = 2;
console.log({fruits})

console.log("last item",fruits.slice(-1));

let addLast= fruits.push('Apple');
console.log({fruits})

let addStart=fruits.unshift('Pineapple');
console.log({fruits});

let removeLast=fruits.pop();
console.log({fruits});

let removeFirst=fruits.shift();
console.log({fruits});

let newFruits=fruits.push(['Tomato','Pear']);
console.log({fruits});

let items=[20,30,40,50,60];
let add= items.reduce((acc,cur)=> acc+cur);
console.log({add});

let multiply=items.map(item=> item * 2);
console.log({multiply});
//  let square= items.forEach(item=>item*item);
//  console.log({square})
 let square=[];
//  total += item
 
//   items.forEach(item=>{
//     const multiple = item*item;
//     console.log(multiple);
//     square.push(multiple);
//   });
//   console.log({square});

// console.log({square});
// console.log({total});
//DEstructuring
let[num1,num2,num3, ...rest]=items;//puts the remaining item together
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});
// let myPets=["Cow","Bird","Snake"];
// let myPets2=myPets.join();
// console.log({myPets2});
let myPets=["Cow","Bird","Snake"];
let myPets2=myPets.join();
console.log({myPets});
var arr3=[-5,9,5,3,2,-3,6,8,4,1];
var arr4=arr3.sort();
console.log({arr4});
