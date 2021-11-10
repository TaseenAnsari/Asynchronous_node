// Synchronous
console.log("sync: Start");

console.log("sync: perform");

console.log("sync: End");

//Asynchronous
console.log("Start");

setTimeout(()=>{
    console.log('Perform');
},2000)

console.log("End")

// problem with asynchronous
const num = getnumber()

function getnumber(){
    setTimeout(()=>{
        return 12;
    },2000)
}

console.log(num); //it return undefined

//Use callback to avoid undefined


getCustomer(1,getTopMovies)


function getCustomer(id,callback) {
        const customer = {
            id: 1,
            name: "taseen",
            isGold: true,
            email: 'abc@123',
        }
        setTimeout(() => {
            if (customer.isGold) {
                console.log("Customer:", customer);
                callback(customer,sendEmail);
            }
        }, 4000)
}

function getTopMovies(customer,callback) {
    let movies = ['movie1', 'movie2']
        setTimeout(() => {
            console.log("Top Movies:", movies)
            callback(customer.email, movies);
        }, 4000)
}
function sendEmail(email, movie) {
        setTimeout(() => {
            console.log("Email sent...",email)
        }, 4000)
}

