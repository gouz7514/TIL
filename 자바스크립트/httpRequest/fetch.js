const getBtn = document.getElementById('get-btn');
const getBtn2 = document.getElementById('get-btn2');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? {'Content-Type': 'application/json'} : {}
  })
    .then(response => {
      if (response.status >= 400) {
        return response.json().then(errResData => {
          const error = new Error('Somtehing went wrong!');
          error.data = errResData;
          throw error;
        })
      }
      return response.json();
    });
}

const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users')
    .then(responseData => console.log(responseData));
}

const getData2 = () => {
  fetch('https://reqres.in/api/users')
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then(data => console.log(data));
}

const sendData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    "email": "eve.holt@reqres.in",
    // "password": "pistol"
  }).then(responseData => console.log(responseData));
}

getBtn.addEventListener('click', getData);
getBtn2.addEventListener('click', getData2);
postBtn.addEventListener('click', sendData);