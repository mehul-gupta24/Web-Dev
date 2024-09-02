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
    console.log(this)
}
// mehul()

const print = function(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
}
// print()

// const printt = () =>{
//     for(let i=0;i<4;i++){
//         console.log(i*i);
//     }
// } 
// printt()

const some_print  = (num1,num2) =>{
    while(num1!=0 || num2!=0){
        console.log(num1+num2);
        num1--;
        num2--;
    }
}

const add_two_num = (num1,num2) => (num1*num2)

// some_print(4,2);
console.log(add_two_num(32,32));