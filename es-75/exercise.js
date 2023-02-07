function repeatHello(callback) {
    let intervalId = setInterval(callback, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000);
}

repeatHello(() => console.log("Ciao"))
