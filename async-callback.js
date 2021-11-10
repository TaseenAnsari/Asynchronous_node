// Synchronous
console.log("My");

console.log("name");

console.log("is");

console.log("Taseen");

//Asynchronous
console.log("Start");

setTimeout(()=>{
    console.log('Perform');
},2000)

console.log("End")

//problem with asynchronous
// const num = getnumber()

// function getnumber(){
//     setTimeout(()=>{
//         return 12;
//     },2000)
// }

// console.log(num); //it return undefined

// //Use callback to avoid undefined

const num = getnumber()

function display(num){
    console.log(num)
}

function getnumber(){
    setTimeout(()=>{
        display(8)
    },2000)
}


console.log(num);


