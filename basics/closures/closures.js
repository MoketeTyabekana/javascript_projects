// Closures are functions that remember the scope they were created in.

function createCounter(){
    let counter=0;
     return function(){
        counter++;
        console.log(counter)
     }
}

const counter= createCounter();