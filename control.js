const personAge=(age)=>{//arrow function
if(age >=18){
    return "You are an adult"
}else if(age>=13&&age<18){
    return "You are a teenager"
}else{
    return "You are a child"
}

}
console.log(personAge(10))//for loop looks the iterating of an array//only use one
//for(index-initialhValue,)

const greeting=(dayOfTheWeek)=>{
    switch(dayOfTheWeek){
        case "Monday":
        console.log("Hello Monday");
          break
        case "Tuesday":
        console.log("Hello Monday");
          break
        case "Wednesday":
        console.log("Hello Monday");
          break
        case "Thursday":
        console.log("Hello Monday");
          break
          case "Friday":
        console.log("Hello Monday");
          break
          case "Saturday":
          console.log("Hello Monday");
            break
            case "SUnday":
          console.log("Hello Monday");
            break
    }
};
greeting("Tuesday");
greeting("when")