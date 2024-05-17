const cup = {
    color:'red',
    size:'small',
    texture:'smooth',
    shape: 'round',
    functionality:{
        drinkType:'tea',
        temperature:'hot'
    },
    drink:function(){
        console.log('Use me to drink')
        console.log(`My main purpose is to drink ${this.functionality.temperature}${this.functionality.drinkType}`)

    }
}
console.log({colour:cup.color});
console.log('size',cup.color);
console.log('temperature',cup.functionality.temperature);
console.log('texture',cup['texture']);
cup.model ='glass'
console.log({cup});

delete cup.model
console.log({cup})
cup.color = 'green'
console.log({cup})

cup.drink();

const keys =Object.keys(cup);//to get keys
console.log({keys})

const values = Object.values(cup);//to get values
console.log({values})
//looping in objects
const loops=Object.keys(cup).map(item => {
    return({key:item,value:cup[item]})
})
console.log(loops)

Object.keys(cup).forEach(item =>{
    console.log({loops})
})