/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

// Done

/* Step 2 - Variables */

// 2.1
let fullName = 'Leydi Hernandez Gadea';
// 2.2
let currentYear = new Date().getFullYear();
// 2.3
let profilePicture = 'images/perfil_Leydi.png';

/* Step 3 - Element Variables */

// 3.1
const nameElement = document.getElementById('name');
// 3.2
const foodElement = document.getElementById('food');
// 3.3
const yearElement = document.querySelector('#year');
// 3.4
let imageElement = document.querySelector('main#home picture img');

/* Step 4 - Adding Content */

// 4.1 
nameElement.innerHTML = fullName;
// 4.2 
nameElement.innerHTML = `<strong>${fullName}</strong>`;
// 4.3 
yearElement.textContent = currentYear;
// 4.4
imageElement.setAttribute('src', profilePicture);
// 4.5
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

// 5.1
let favoriteFoods = ['Rondon', 'Pati', 'Vigoron', 'Quesillo', 'Tacos'];
// 5.2
foodElement.innerHTML = favoriteFoods;
// 5.3 
let favoriteFood = 'Gallopinto';
// 5.4 
favoriteFoods.push(favoriteFood);
// 5.5 
foodElement.innerHTML += `<br>${favoriteFood}`;
// 5.6 
favoriteFoods.shift();
// 5.7
foodElement.innerHTML += `<br>${favoriteFoods}`;
// 5.8
favoriteFoods.pop();
// 5.9
foodElement.innerHTML += `<br>${favoriteFoods}`;
