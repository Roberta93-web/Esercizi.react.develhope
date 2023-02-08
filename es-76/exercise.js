const number = 15;

const promise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve("Il numero è più grande di 10")
    } else {
        reject("Il numero non è più grande di 10")
    }

})

promise
    .then(result => console.log(result))
    .catch (error => console.log(error));

