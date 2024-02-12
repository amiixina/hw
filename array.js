
// Constructor for cat
function Cat(breed, age, gender, color, name, photo, isAsleep) {
    this.breed = breed;
    this.age = age;
    this.gender = gender;
    this.color = color;
    this.name = name;
    this.photo = photo;
    this.isAsleep = isAsleep;
}

// Add methods to the Cat prototype
Cat.prototype.askForFood = function () {
    if (!this.isAsleep) {
        console.log(`${this.name} is asking for food.`);
    } else {
        console.log(`${this.name} is sleeping, can't ask for food.`);
    }
};

Cat.prototype.sleep = function () {
    this.isAsleep = true;
    console.log(`${this.name} is now sleeping.`);
};

Cat.prototype.wakeUp = function () {
    this.isAsleep = false;
    console.log(`${this.name} has woken up.`);
};

// Create cat instances and add them to an array
const cats = [
    new Cat(
        'bengal',
         3, 
         'female', 
         'brown and black', 
         'Sumire',
          'images.jpeg', 
          false
    ),
    new Cat(
        'none',
        2, 
        'male', 
        'black', 
        'Suguru', 
        'National_Black_Cat_Day.jpg.webp', 
        true
    ),
    new Cat(
        'Maine coon', 
        4, 
        'male', 
        'grey', 
        'Tomoe', 
        'Unknown.jpeg', 
        true
    ),
];
];

// Function to display cat information
function displayCatInfo(cat) {
    document.getElementById('cat-breed').innerText = `Breed: ${cat.breed}`;
    document.getElementById('cat-age').innerText = `Age: ${cat.age}`;
    document.getElementById('cat-name').innerText = cat.name;
    document.getElementById('cat-gender').innerText = `Gender: ${cat.gender}`;
    document.getElementById('cat-color').innerText = `Color: ${cat.color}`;
    document.getElementById('cat-status').innerText = `Status: ${cat.isAsleep ? 'Asleep' : 'Awake'}`;
    document.getElementById('cat-photo').setAttribute('src', cat.photo);
}

// Add event listeners to the buttons
const catBtns = document.querySelectorAll('.cat-btn');

for (let i = 0; i < catBtns.length; i++) {
    catBtns[i].addEventListener('click', () => {
        cats[i].askForFood();
        displayCatInfo(cats[i]);
    });
}


