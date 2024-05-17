function add(num1,num2){
    const sum=num1+num2;
     console.log({console:sum});//this is not important
    return{"sum":sum};//stores the value
}
 console.log(add(2,3));//prints the value stored in the return//has the function add inside
add(4,5);
//console.log({console:sum});//this won't run 
let student="Agnes"//global variable(global variable)//can be accessed inside or outside
function item(){
    const names=['Anne','Eunice']
    console.log({names})
    let child
}
item()
console.log({outside:student})//if a variable is inside a function this won't run hence is a local scope
child="boy"
//Function expressions
const subtract=function(num1,num2){//function expressions the arrow replaces the functions
    console.log(num1-num2);
}
    subtract(20,10)
const multiply=(num1,num2)=>{console.log(num1*num2)};//curly races are not important
multiply(6,9);
//IFEs
(function(){
    console.log("hello there");//immediately call a function with()//works on some frameworks e.g react//
})();
//Hoisting//console.log after declaring it//only var allows you to host
console.log({person});
var person="human"
console.log("person 2...",person)
greet()
function greet(){
    console.log("Hi person");
}
hello()
const hello = () => console.log("This is a greeting")