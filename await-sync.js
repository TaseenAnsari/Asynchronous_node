async function display(){
    const customer = await getCustomer(1);
    console.log("Customer:", customer);
    const movie = await getTopMovies(customer);
    console.log("Top Movies:", movie)
    const email = await sendEmail(customer.email,movie);
    }
display()
function getCustomer(id) {
    return new Promise((resolve,reject) => {
        const customer = {
            id: 1,
            name: "taseen",
            isGold: true,
            email: 'abc@123',
        }
        setTimeout(() => {
            if (customer.isGold) {
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
            resolve(movies);
        }, 4000)
    })
}
function sendEmail(email, movie) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Email sent...')
            resolve()
        }, 4000)
    })
}