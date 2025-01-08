console.log('This is the script file');

async function getData() {
    const res = await fetch('http://localhost:3000/json');
    const data = await res.json();
    console.log(res.headers);
    console.log("FETCH data: ", data);

    const container = document.querySelector('.container');
    container.innerHTML = data;
}

async function postData() {
    const res = await fetch('http://localhost:3000/json', {
        method: 'POST',
    });
    const data = await res.text();
    console.log("POST data: ", data);
}

async function putData() {
    const res = await fetch('http://localhost:3000/json', {
        method: 'PUT',
    });
    const data = await res.text();
    console.log("PUT data: ", data);
}

putData();
postData();
getData();