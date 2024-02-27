let form_btn = document.querySelector('#submit');
let form = document.querySelector('#form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let days = Number(document.querySelector('#expire').value);

    console.log(name, days);
    document.cookie = `name=${name};max-age=${60*60*24*days}`
});


document.cookie = "name=Rob;";
document.cookie = "id=6;";


let cookies = document.cookie.split(";");



for (let i=0; i<cookies.length; i++){
    let part = cookies[i].split("="),
    key = part[0],
    value = part[1];
    document.write("Ключ:", key);
    document.write(" Значення:", value, "<br><br>");
}



let expDate = new Date();
expDate.setHours(expDate.getHours()+3);

document.cookie = "username=NewDATA;Expires=" + expDate.toUTCString();


document.cookie = "user=NewUser;max-age=300";
