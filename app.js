let form_btn = document.querySelector('#submit');
let form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let days = Number(document.querySelector('#expire').value);

    console.log(name, days);
    document.cookie = `name=${name};max-age=${60*60*24*days}`;
    document.cookie = `age=${days};max-age=${60*60*24*days}`;

});

function displayCookies() {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        let keyValue = cookie.split("=");

        if (keyValue[0] === "name" || keyValue[0] === "age") {
            document.write(`Ключ: ${keyValue[0]} Значення: ${decodeURIComponent(keyValue[1])}<br><br>`);
        }
    }
}

let expDate = new Date();
expDate.setHours(expDate.getHours()+3);

document.cookie = "username=NewDATA;Expires=" + expDate.toUTCString();

document.cookie = "user=NewUser;max-age=300";

displayCookies();

