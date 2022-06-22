function add(a,b){
     console.log(a + b)
}

function substract(a,b){
    console.log(b - a)
}


function multiply(a,b){
    console.log(a * b)
}

function divide(a,b){
    console.log(a/b)       
}


console.log("Choose an Operations")
console.log("A for addition")
console.log("B for substraction")
console.log("C for multiplication")
console.log("D for division")

let choice = prompt("Choose,A for addition,B for substraction,C for multiplication,D for division")
console.log(choice)

if (choice == 'A'){
    let aS = prompt("Please enter first number")
   a = parseInt(aS,10)
    let bS = prompt("Please enter second number")
    b = parseInt(bS,10)
    add(a,b)
}else if(choice == 'B'){
    let aS = prompt("Please enter first number")
    let bS = prompt("Please enter second number")
    a = parseInt(aS,10)
 b = parseInt(bS,10)
    substract(b,a)
}
else if(choice == 'C'){
    let aS = prompt("Please enter first number")
    let bS = prompt("Please enter second number")
    a = parseInt(aS,10)
 b = parseInt(bS,10)
    multiply(a,b)
}
else if(choice =='D'){
    let aS = prompt("Please enter first number")
    let bS = prompt("Please enter second number")
    a = parseInt(aS,10)
 b = parseInt(bS,10)
    divide(b,a)
}else{
    prompt("You selected nothing, try again")
}



