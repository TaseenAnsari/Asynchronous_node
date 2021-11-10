getCustomer(1)
    .then((customer) => getTopMovies(customer))
    .then((email, movies) => sendEmail(email, movies))
    .then(() => console.log('Email sent...'))
    .catch((err)=>console.log(err))




function getCustomer(id) {
    return new Promise((resolve,reject) => {
        const customer = {
            id: 1,
            name: "taseen",
            isGold: false,
            email: 'abc@123',
        }
        setTimeout(() => {
            if (customer.isGold) {
                console.log("Customer:", customer);
                resolve(customer)
            }
            reject(new Error('Customer is not gold'))
        }, 4000)
    })
}

function getTopMovies(customer) {
    let movies = ['movie1', 'movie2']
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Top Movies:", movies)
            resolve(customer.email, movies);
        }, 4000)
    })
}
function sendEmail(email, movie) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 4000)
    })
}