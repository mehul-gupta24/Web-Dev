// alert("hi");
// console.log("Hello World !");
// let a=9;
// let b=3;
// a=a+b;
// console.log("a =",a);
// console.log("b =",b);
// console.log("a+b =",a+b);
// console.log("a-b =",a-b);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);
// console.log("a%b =",a%b);
// console.log("a**b =",a**b);
// console.log(a+b);
// a++;
// console.log(a+b);

// == do the comparision
// === check the datatype and number also

// let abc=9;
// if(abc==9){
//     console.log("true");
// }
// let age=18;
// console.log(age >= 18 ? "I am Adult" : " I am not Adult till now"); ternary operator

// https://developer.mozilla.org/en-US/docs/Web/API/Document for more info of the html css and javascript language

// let name =prompt("Enter number");
// if(name%5==0){
//     console.log("Number is divisible by 5");
// }
// else{
//     console.log("Number is not divisible by 5");
// }

// for(let i=0;i<5;i++){
//     console.log(i);
// }
// while loop same as Cpp
// do while loop also same
// for-of loop for strings and arrays
// for-in loop for objects

// const student = {
//     name : 'Mehul',
//     age : 20,
//     gender: 'male',
// }
// for(let i in student){
//     console.log(student[i]);
// }

// var aa=99;
// var input=prompt("Enter the number");
// console.log(input);
// while(input!=aa){
//     input=prompt("Enter the number");
//     console.log(input);
// }

// var str="Mehul";
// console.log(str.length);
// console.log(str[0]);

// let Shop = {
//     name: "pen",
//     price: 10,
// }
// let output =`the cost of ${Shop.name} is ${Shop.price} rupees`;  template literals
// console.log(output);
//par isme number bhi stirng ka part ban jaata hai
// string inpterpolation = ${Shop.price}  //in short convert karna string me
// console.log("Mehul\nGupta");

// let str="Mehul Gupta";
// console.log(str);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str);

// let str = "  Mehul Gupta  ";
// console.log(str.trim());

// let str="Mehul";
// console.log(str.slice(0,3));
//console.log(str.slice(start,end));

// let str1="Mehul";
// let str2=" Gupta";
// console.log(str1.concat(str2));
// console.log(str1.replace('Me','Ra'));

// console.log(str1.replaceAll());  here all values of that substrings will be replaced

// console.log(str1[1]);
// let str=prompt("Enter username");
// let newstr='@'+str+str.length;
// console.log(newstr);
// let arr =[1,2,3,4];
// let arrr=["Mehul",97,"Roman@"];
// console.log(arr);
// console.log(arrr);

//array is itself an object datatype
//array is mutable(can be changed ,not like string)
// slice method is same as strings 
// splice method is given below 

// let arr=[1,2,3,5,7];
// arr.splice(2,2,56,78,89,567);
// console.log(arr);
// let newarr = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// newarr.shift();
// newarr[1]="Ola";
// newarr.push("Amazon");
// console.log(newarr);
// let w=0;

// function myFunction(water){
//     for(let w=0;w<=3;w++){
//     console.log(water);
//     }
// }
//     myFunction('ji');

// function fun(hi){
//     console.log('hello');
// }
// fun('yes');

//arrow functions are part of modern javascript
// let k=3;
// const print = (k) => {
//     for(let i=0;i<k;i++){
//     console.log("hello");
//     }
// }



// const mult = (a,b) => {
//     // return console.log(a*b);
//     return a*b;
// }
// const hello=()=> console.log("helloworld");

// const str="Hello World";
// let count=0;
// function countVowel(str){
//     for (const ch of str){
//         if(ch=='a' || ch=='e' || ch=='i' ||ch=='o' ||ch=='u'){
//             count++;
//         }
//     }
// return count;
// }

// const countVowel=(str)=>{
//     for (const ch of str){
//         if(ch=='a' || ch=='e' || ch=='i' ||ch=='o' ||ch=='u'){
//             count++;
//         }
//     }
// return count;
// }

// a callbackfunction is a function passed as an arguement to another function

// let arr= [1 ,2 ,3];
// arr.forEach(function myfunc(value){
//     console.log(value);
// }
// )

// let brr=["Hello","World"];
// brr.forEach((val,index)=>{
//     console.log(val.toUpperCase(),index);
// })



// what are higher order functions ?
// this ques can be asked in interview
// higher order functions/methods -> dusre function ko as a parameter le lete hai,ya phir return karte hai dusre function ko, example = for each loop

// nums=[4 ,5 ,6];
// nums.forEach((num)=>{
//     console.log(num*num);
// })

// let arr=[1 ,2 ,3 ,4];
// calculateSquare= (num)=>{
//     console.log(num*num);   
// }
// arr.forEach(calculateSquare);//parameter is function

// let arr = [1 ,2 ,3 ,4,5,6,7,8];
// let newarr = arr.filter((value)=>{
//     return value%2==0;
// })
// console.log(newarr);

// nums=[2,3,4,5];
// NewArr=nums.map((val)=>{
//     return val/2>=2;
// })
// console.log(NewArr);

// nums=[2,3,4,5];
// NewArr=nums.map((val)=>{
//     return val/2;
// })
// console.log(NewArr);

// const arr=[2,5,3,1];
// // initially curr=5;prev=2;just adding it up
// let a=arr.reduce((previous,current)=>{
//     return previous+current;
// })
// console.log(a);

// printing maxinmum element from array
// const arr=[2,5,3,1];
// // initially curr=5;prev=2;just adding it up
// let a=arr.reduce((previous,current)=>{
// //     if (previous>current){
// //     return previous;
// // }
// // else{
// //     return current;
// // }
//  return previous>current ? previous:current;
// })
// console.log(a);

// console.log(window);
// window.console.log("Mehul Gupta");

// console.log() => just print the things
// but
// console.dir() => document ki properties dikhata hai

// window me jo document hota hai wo model hoti hai html ki
// Document Object Model;

// when a web page is loaded , then browser creates DOM(Document object model) of the page

// console.dir(window.document)
// console.log(window.document);
// console.dir(document.body);
// console.log(document.body);
// console.dir(document.head);
// console.log(document.head);
// console.log(document.body.childNodes[0]);
// console.dir(document.body.childNodes[0]);

// DOM manupulation

// console.log(document.getElementById("special"));
// console.dir(document.getElementsByClassName("yes"));

// console.log(document.getElementsByTagName("p"));
// console.dir(document.getElementsByTagName("p"));

//query selector
// console.dir(document.querySelector("p"));
// console.log(document.querySelector("p"));
// querySelector    - only for 1st Element
// querySelectorAll - for All

// console.dir(document.querySelectorAll(".yes"));

// console.log(document.querySelector("#Buttonn"));
// console.dir(document.querySelector("#Buttonn"));

