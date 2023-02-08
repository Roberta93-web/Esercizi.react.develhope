const isLogged = true;

const firstPromise = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      const randomNumber = Math.random();
      resolve(randomNumber);
    } else {
      reject(new Error("Not logged in"));
    }
  });
};

const secondPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Number is not greater than 0.5"));
    }
  });
};

firstPromise(isLogged)
  .then((val) => secondPromise(val))
  .then((val) => console.log(val))
  .catch(error => console.error(error));

