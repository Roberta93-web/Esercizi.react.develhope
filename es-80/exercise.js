const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveObj(user) {
  const userJson = JSON.stringify(user)
  localStorage.setItem('user', JSON.stringify(user));
}


function getObj() {
  const userStr = localStorage.getItem('user');
  const user = JSON.parse(userStr);
  console.log(user);
  return user;
}

getObj()