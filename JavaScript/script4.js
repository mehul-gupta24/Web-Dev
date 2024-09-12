// DOM - document object model

// innerText - jo dikh rha h website pe wahi milega
// textContent - jo code me hai woh dikhega
// innerHTML - gives all html code inside of it(written in code)


// Query Selector

// document.querySelector('h1')
//     - will give 1st h1 para inside full content 
// document.querySelectorAll('p')
//     - will give all p tag inside content

// document.querySelector('#id') //hash for selecting by id
// document.querySelector('.class') //hash for selecting by class

// document.querySelectorAll('.bg-black')
// const myheading=document.querySelector('h1')
// const paraInsideMyHeading=myheading.querySelector('p')
// paraInsideMyHeading.style.backgroundColor='green'


// const LiList=document.querySelectorAll('ul')
// LiList.style.backgroundColor('green') - will give error
// LiList[0].style.backgroundColor('red) - won't give error - but also don't consider it as full array
// LiList[1].style.backgroundColor('red) - won't give error - but also don't consider it as full array

// LiList.forEach(function chai(listt){
//     listt.querySelector.style.backgroundColor='red'
// })

// if we want to convert any list to array we use 
// let li is list
// Array.from(li)
// then we can use map function
// storing it below
// const storeArray=Array.from(i)

const key=document.querySelectorAll('h2')
const to_arr=Array.from(key)
to_arr.forEach((each_h2)=>{
    each_h2.style.backgroundColor='red';
    each_h2.style.fontSize='20px';
    each_h2.style.color='red';
})

