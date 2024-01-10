/*let user={
    name:"Endri",
    age:"18",
    email:"endri@gmail.com",
    gender:"male",
    location:"Tirana",
    login:function(){
        console.log('Useri sapo u logua');
    },
    logout:function(){
        console.log('Useri sapo beri logout')
    },
    blog:['mosha','ideale','30'],
    log:function(){
        console.log(this.blog)},

}

console.log(user.age)
user['email']="bega15@gmail.com"
user.skill="none"
console.log(user.skill)
console.log(user["email"])
user.login()
user.logout()
user.log()

let calculator={
    Add:function(x,y){
    return x+y;
    },
    multiply:function(x,y){
    return x*y;
    },
    divide:function(x,y){
    return x/y;
    },
    subtract:function(x,y){
    return x-y;},
}
console.log(calculator.Add(4,2))
console.log(calculator.multiply(5,2))
console.log(calculator.divide(12,2))
console.log(calculator.subtract(4,24))*/

let fruits={
    apple:'yellow',
    kiwi:'green',
    berries:'red'

}
let keys=Object.keys(fruits)
for (let i=0; i<keys.length; i++) 
{
    let names = keys[i]
    console.log(names,fruits[names])
}
    
    
    
    