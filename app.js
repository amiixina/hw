class Cat{
    constructor(catType, catAge, catGender, catColor, catName, catStatus, catPhoto){
        this.type = catType;
        this.age = catAge;
        this.gender = catGender;
        this.color = catColor;
        this.name = catName;
        this.isSleep = catStatus;
        this.photo = catPhoto;

    }
}




let cats = [];

$(document).ready(function () {
    cats = [
    new Cat('bengal', 3, 'female', 'brown and black', 'Sumire', false , 'images.jpeg'), 
    new Cat('none', 2, 'male', 'black', 'Suguru', true, 'National_Black_Cat_Day.jpg.webp'),
    new Cat('Maine coon', 4, 'male', 'grey', 'Tomoe', true , 'Unknown.jpeg')];

});


$(".btns").click(function(e) {
    let cat_id = e.target.id;
    let btns = document.querySelectorAll(".btns input");
    btns.forEach((btn)=>{btn.classList.remove("active_btn")});

    e.target.classList.add("active_btn");
    console.log("Cat number:", cat_id);
    console.log(cats[cat_id]);
    cat_id= parseInt(e.target.id) - 1;
    displayCat(cats[cat_id])}
);



function displayCat(cat){
    $("#img").html(`<img src="${cat.photo}" alt="">`);
    $("#breed").html("Breed: " + cat.type);
    $("#age").html("Age: " + cat.age + " year");
    $("#gender").html("Gender: " + cat.gender);
    $("#color").html("Color: " + cat.color);
    $("#name").html("Name: " + cat.name);
    $("#status").html("Status: " + (cat.isSleep ? "Sleeping" : "No sleep")); 
    nowCat = cat;
}
