const multiply=(num)=>{
    let newArray=[];
    for(let i=0;i<num.length;i++){//uses the index
        const multiplyByTwo=num[i]*2;
        newArray.push(multiplyByTwo);
    }
    return newArray;
}
console.log(multiply([2,3,4,5,6,7,8]));

const totalSum=(numbers)=>{
    let sum=0;
    for(let num of numbers){//uses the element//has of inside and is the syntax
        sum+=num;

    }
    return sum;
}
console.log(totalSum([2,3,4,5,6,7,8]))


// const students=(studentNames) =>{
//     while(studentNames.length > 2){
//         console.log("Teach students")
//         if(studentNames.length === 2){
//             console.log("You are left with two students")
//         }
//     }
// };
// students(["Ema","Eve","Ann","Judith"])
 
const kickBall=(leg)=>{//you console.log first
    do{
        console.log("KIck the ball");
    }while(leg)
};
kickBall(false)

fu1