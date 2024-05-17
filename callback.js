function greet(userName,callbacl){
    console,log(`hello there ${userName}`);
    cancelIdleCallback()
}
function intro(){
    console.log(`This is me`)
}
greet("Valentine",intro);//t
setTimeout(intro,2000);
setInterval(function(){
console.log(`this is an interval`)
},3000);