/* LESSON 3 - Programming Tasks */

/* STEP 2: Object Literal*/
/* Profile Object  */

// Declare a new object literal variable named myProfile
let myProfile = {
    name: "Leydi Hernandez Gadea",
    photo: "images/perfil_Leydi.png", 
    favoriteFoods: ["Rondon", "pasta", "chocolate"],
    hobbies: ["Running", "Strength Exercises", "Cycling"],
    placesLived: []
};

// Adding places lived
myProfile.placesLived.push({ place: "🏠 Bluefields, Nicaragua", length: "17 years" });
myProfile.placesLived.push({ place: "🏠 Managua, Nicaragua", length: "9 years" });
myProfile.placesLived.push({ place: "🏠 Madrid, Spain", length: "1 year" });
myProfile.placesLived.push({ place: "🏠 Toledo, Spain", length: "3 years" });

/* STEP 3: DOM Manipulation  - Output */

/* Name */

/* Photo with attributes */
// Assigning values to HTML elements
document.getElementById("name").textContent = myProfile.name;
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

// Favorite Foods
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});

// Hobbies
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
});

// Places Lived
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});