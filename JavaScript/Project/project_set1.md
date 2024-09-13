# Projects related to DOM
## projectlink
[Click here](https://www.youtube.com/watch?v=EGqHVjU-fas&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=35)

```javascript
console.log("df")
function project_1(){
        const box=document.querySelectorAll('.b')
        const body=document.querySelector('body')
        box.forEach(function(uniq){
            uniq.addEventListener('click',function(e){
                // if(e.target.id==="r"){
                //     body.style.backgroundColor='red'
                // }
                // else if(e.target.id==="b"){
                //     body.style.backgroundColor='blue'
                    
                // }
                // else if(e.target.id==="g"){
                //     body.style.backgroundColor='black'
                    
                // }
                // else{
                //     body.style.backgroundColor='brown'
    
                // }
                body.style.backgroundColor=e.target.id
            })
        })
    }
    project_1()
```