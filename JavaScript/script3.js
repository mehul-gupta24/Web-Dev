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

// const name=new String("Mhulee");
// console.log(name.length)
// console.log(name.indexOf('e'))

// let myDate=new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// shallow copy - pass by reference - on heap 
// deep copy - pass by value(do not share same reference points) - on stack 



// Objects
// 1)singleton - Object.create
// 2)object literals - 
const JsUser={
    name:"Mehul",
    age:21,
    class:12,
}
// console.log(JsUser.name)
// JsUser.name="rakhi";
// console.log(JsUser.name)

// JsUser.greeting=function(){
    //     console.log("Hello Js User");
    // }
// JsUser.greeting_two=function(){
//         console.log(`Hello Js User , ${this.name}`);
//     }
// console.log(JsUser.greeting)
// console.log(JsUser.greeting())
// console.log(JsUser.greeting_two())

// 1)singleton - Object.create
// Object singleton

// const facebookUser=new Object()
// const facebookUser={}
// both above lines are same 

// const facebookUser_2={}
// facebookUser_2.name=10
// facebookUser_2.tile="2"
// facebookUser_2.loe=true
// // console.log(facebookUser_2)
// const real_number={
//     email:"mehulgupta@gmail.com",
//     full_name : {
//         name:"hero",
//         age:0,
//     }
// }
// console.log(real_number.full_name.age)


const obj1 = {name:"Amruta" ,gender:"female", vergin:true}
const obj2 = {name:"Mehul",gender:"male",vergin:false}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

// const obj3={...obj1,...obj2}
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

const a={
    name:"mehul",
    age:22,
}
// console.log(Object.keys(a));
// let arr=Object.keys(a)
// for(let i=0;i<2;i++){
//     console.log(arr[i]);
// }
// console.log(Object.values(a))

// console.log(a.hasOwnProperty("name"))

// const course={
//     name:"full stack web development",
//     course_fee:3500,
//     course_total_hours:"150+",
// }
// // console.log(course)
// const {name,course_fee,course_total_hours}=course;
// console.log(name)
// console.log(course_fee)
// console.log(course_total_hours)


// API

// below is not an object, because an object has a name,it is alomst as json
// {
//       "name":"jalwa hai",  //this is json
//       "gender":"male",
//       "price":"free",

// }

// sometimes we get API in array format , (aarray of objects)
// [
//     {

//     },
//     {

//     },
//     {

//     }
// ]


// Functions
// function print_my_name(a){
//     if(typeof(a)==Number){
//         console.log(a);
//     }
// }
// print_my_name(2)

// function add_two_num(num_1,num_2) {
//     // console.log(num_1+num_2)
//     return num_1+num_2;
// }
// // add_two_num(3,4)
// const store=add_two_num(3,4)
// console.log(store)



// function loginMessage(username){
//     if(username==undefined){
//         console.log("please enter valid username");
//         return;
//     }
//     return console.log(`${username} just logged in`);
// }
// loginMessage("w")


//amazon user is adding items in shopping cart , so we need to add the total amount of all the items in cart

// function calculate_cart_price(num1){
//     return num1;
// }
// console.log(calculate_cart_price(2));


// function calculate_cart_price(val1,val2,...num1){
//     return num1;
// }
// console.log(calculate_cart_price(2,3,5,8,9));

// ...num1 -> rest operator and spread operator

// const user={
//     name:"Mehul",
//     price:"20,000k",
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.name} and the price is ${anyobject.price}`);
// }
// handleObject(user)

// function one (){
//     const name ="Mehul"
//     const JSUSERr={
//         name:"Shreya",
//         age:19,
//     }
//     function two(){
//         const React={
//             name:"Sneha",
//             sex:"femal",
//         }
//         console.log(React)
//     }
//     console.log(two())
//     return JSUSERr;
// }
// console.log(one())


// console.log(mygun(8))
// function mygun(num){
//     return num+1
// }

// // console.log(funcc(9))  cant write above function because , value of function has been stored
// const funcc=function(num1){
//     return num1+6
// }
// console.log(funcc(9))


// const user={
//     username:"mehul",
//     age:function(){
//         console.log(`${this.username} has age 20`)
//         // console.log(this)
//     }

// }
// console.log(user.age())
// console.log(this)

// function coffee(){
//     console.log(this)
// }
// coffee()

// function chai(){
//     username="Mehul",
//     console.log(this)
// }
// chai()

// function chai(){
//     username="Mehul",
//     console.log(this.username)
// }
// chai()

// How to create funciton
// // 1)
// function mast_chai(){

// }

// // 2)
// const important =function(){

// }
// // 3)
// const more =()=>{
//     console.log(this)
// }
// more()

// Explicit return - means alag se lagana pad rha h return keyword
// const addTwoNum=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwoNum(9,5))

// implicit return arror function - implicit means (lagana nahi pad rha h alag se)
// const add_two_num=(num1,num2)=>num1+num2;
// const add_two_num=(num1,num2)=>(num1+num2);
// both above are having same meaning - just remember whenever we are making it into curly brackets then we have to use return keyword, otherwise in parenthethis no need to write return
// console.log(add_two_num(8,3))

// const details=()=>({username:"Mehul",leg:"injured",age:22})
// console.log(details())

// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log("hi")
// }()
// above function will give error

// (function chai(){
//     console.log("hi")
// })()
// chai()   - //IIFE- global scope ke variables ya declarations se pollution hota hai , to usko hatane ke liye hamne IIFE use kiya h

// (()=>{
//     console.log("Data base connected_1")
// } )();
// (()=>{
//     console.log("Data base connected_2")
// } )()

//error will ocme when 2 IIFE will be used, so use ';'at end to 2nd parenthethis to avoid this - and also in arrow function u dont need to give the name of the function

// ((name)=>{
//     console.log(`Data base connected_2 ${name}`)
// } )("Mehul")

// for each loop
// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
//     //every item is an object 
//     console.log(item.languageName);
// } )

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
// const save_book=books.forEach( (bk)=>{
//     if(bk.publish>=2000){
//         console.log(bk);
//     } })
// const savehere_1=books.filter( (bk)=>bk.publish>=2000 && bk.genre=='History' )
// // const savehere=books.filter( (bk)=>{
// //     if(bk.publish>=2000){
// //         return bk;
// //     }
// // })
// console.log(savehere_1)

// let arr=[1,2,3,4,5,6,7,8,9,10]
// arr=arr.map((num)=>(num=num+10))
// // const abc=arr.map((num)=>{num=num+10})
// // console.log(abc)  //undefined as didnt used return in curly brackets

// console.log(arr)


// let arr=[1,2,3,4,5,6,7,8,9,10]
// // this is called chaining
// // arr=arr.filter((num)=>(num>3)).filter((num)=>(num<8)).filter((num)=>(num%2==0))
// // console.log(arr)
// new_arr=arr.map((num)=>(num/3)).map((num)=>(num+3)).filter((num)=>(num>=4))
// console.log(new_arr)


// // reduce function 
// const arr=[1,2,3,1];
// // const newarr=arr.reduce(function (acc,curr){
// //     console.log(`acc : ${acc} and curr : ${curr}`)
// //     return acc+curr;
// // },0)
// const newarr=arr.reduce((acc,curr)=>acc+curr,0)
// console.log(newarr)

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]
// const SumOfPrices=shoppingCart.reduce((acc,shopping)=>(acc+shopping.price),0)
// console.log(SumOfPrices)