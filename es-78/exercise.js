const isLogged = true;

function first(isLogged) {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            resolve(Math.random)
        } else {
            reject(new Error("Not logged"))
        }
    })
}

function second(n) {
    return new Promise((resolve, reject) => {
        if (n > 0.5) {
            resolve({ name: "John", age: 24 })
        } else {
            reject(new Error("User not found!"))
        }
    })
}

first(isLogged)
    .then(second)
    .then((val) => console.log(val))
    .catch((err) => console.log(err))
    .finally(() => console.log("sempre"))