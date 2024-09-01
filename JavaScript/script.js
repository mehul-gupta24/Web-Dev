// alert("Sure to Reload ? ");
// console.log("Code is running ...");
// console.log("Code is also running ...");
// console.log("Code is running fast ...");

// var a=prompt("Enter a number : ");

// console.log("your number is " + a);

fullname="Mehul";
console.log(fullname);
// x=null;
// y=undefined;
// console.log(x);
// console.log(y);
isfollow=false;
console.log(isfollow);
// a=7;
// b=a;
// console.log("value of b is : ");
// console.log(b);
// const a=1;
// console.log(a);

// 1) const cant be updated or redeclared(and it is a block element ,means we can use it only in bracket scope)
// 2) let keyword can be updated but cant be redeclared(it is a block element , means we can use it only in block space)
// 3) var keyword can be uodated and can be redeclared (it is a global variable)

// {
//     const a=2;
//     console.log(a);
// }
// {
//     const a=9;
//     console.log(a);
// }

// {
//     var a=9;
// }
// console.log(a);
// primitive data types and non primitive data types

// primtive:
// 1)Number
// 2)String
// 3)null
// 4)Boolean
// 5)undefined
// 6)BigInt
// 7)Symbol

let age=24;
const name="mehul";
let x=null;
let y= BigInt("4");
let z=Symbol("Hello world ! ");

//non primitive data types contains object(array,function)

const student = {
    name : "Mehul Gupta",
    age : 20,
    pass : true,
};
console.log(student.age);
student.age=student.age+1;
console.log(student.age);
// const ko update nahi kar sakte hai but const object ke key ko update kar sakte hai
const product = {
    title: "Ball Pen",
    rating: 4.5,
    price: 10,
    offer: 5,
};
console.log(product);
console.log(product.title);
console.log(product.price);

const profile = {
    name: "Mehul Gupta",
    followers: 790000,
    following: 4,
    number_of_posts: 2700,
    doWeFollow: true,
    info: "Entrepreneur with 1billion $ evaluation of Company"
};
console.log(profile);
console.log(typeof profile.name);
