const user = {
  id: 1,
  name: "John",
  age: 25,
};


function saveObj(user) {
  const userJson = JSON.stringify(user)
  localStorage.setItem('utente', JSON.stringify(user));
}

saveObj(user)