const form = document.getElementById('cookieForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const daysInput = document.getElementById('days');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = nameInput.value;
  const age = ageInput.value;
  const days = daysInput.value;
  const expires = days * 24 * 60 * 60 * 1000; 
  const date = new Date(Date.now() + expires); 
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/;';


  displayCookies();
});

function setCookie(name, value, days) {
  const expires = days * 24 * 60 * 60 * 1000; 
  const date = new Date(Date.now() + expires); 
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function displayCookies() {
  const nameCookie = getCookie("name");
  const ageCookie = getCookie("age");
  if (nameCookie !== null) {
    document.write("Name: " + nameCookie + "<br>");
  } else {
    document.write("Name cookie not found.<br>");
  }
  if (ageCookie !== null) {
    document.write("Age: " + ageCookie + "<br>");
  } else {
    document.write("Age cookie not found.<br>");
  }
}
