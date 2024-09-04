// alert("Hello world");
// console.log("HI");
// var a=prompt("Enter a number : ");

// console.log("your number is " + a);
// const student = {
//     name : 'Mehul',
//     age : 20,
//     gender: 'male',
// }
// for(let i in student){
//     console.log(student[i]);
// }
// let str="Mehul";
// console.log(str.slice(0,3));
// console.log(str.slice(0,str.length));

// let newarr = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// newarr.shift();
// newarr[1]="Ola";
// newarr.push("Amazon");
// console.log(newarr);

// const Shop={
//     budget:15000,
//     price_overall:18000,

// }
// console.log(Shop.budget)
// console.log(Shop.price_overall)
// Shop.budget=Shop.budget+2000
// console.log(Shop.budget)

function mehul(){
    // console.log(this)
}
// mehul()

const print = function(){
    for(let i=0;i<5;i++){
        // console.log(i);
    }
}
// print()

// const printt = () =>{
//     for(let i=0;i<4;i++){
//         console.log(i*i);
//     }
// } 
// printt()

// const some_print  = (num1,num2) =>{
//     while(num1!=0 || num2!=0){
//         console.log(num1+num2);
//         num1--;
//         num2--;
//     }
// }

// const add_two_num = (num1,num2) => (num1*num2)

// some_print(4,2);
// console.log(add_two_num(32,32));

// console.log("Hello everyone")
// console.table([2,2,3])
// // always use const or let
// {
//     var a=3;
//     console.log(a)
// }
// a=a+3
// console.log(a)
// alert("g")  // we are using node.js not browser

// null - stanalone value
// undefined - when value is not assigned

// symbol -> unique

// object - 

// console.log(Number("3")==3)

// Datatypes - 1)Primitive 2) Non - Primitive
// primitive - String,Number,Boolean,null,undefined,Symbol,BigInt(after 10^53)    all this is pass by value call in function
// non primitive - Arrays,Objects,Functions    (pass by reference value)
// JavaScript - not defining the datatype ,ex const email=92 or const email="mehulgupta@gmail.com" - means can be string or number , we are not defining it earlier
// means JavaScript is dynamically type language

// const bignumber=894849233328443n //then inside BigInt is only used
// console.log(typeof(bignumber))

// object are those which are written in curly braces for example
const myObject={
    name:"Mehul Gupta",
    age:22
}

let myFun = function(){
// console.log("l");
}
// d3
// myFun()
// console.log(typeof(myFun))

// Memory - two types of Memory - Stack , Heap
// Stack memory - primitive data type  (Copy banta h)
// Heap memory - Non primitive data type   (reference of original value)

// const name =prompt("enter number ");
// console.log(`Hello my name is ${name}`)
// Prompt the user for input
// const userInput = prompt("Please enter your name:");

// // Display the input
// console.log("User's name is: " + userInput);
// // Prompt the user to enter a number
// const userInput = prompt("Please enter a number:");

// // // Convert the input to a number
// const number = Number(userInput);

// // Display the number
// alert("The number you entered is: " + number);
// console.log("The number you entered is:", number);

const name=new String("Mhulee");
// console.log(name.length)
// console.log(name.indexOf('e'))

let myDate=new Date();
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

// shallow copy - pass by reference - on heap 
// deep copy - pass by value(do not share same reference points) - on stack 


