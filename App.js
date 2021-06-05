//const os = require('os');
const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Robert', 'Marek', 'Jurek', 'Paweł', 'Marcin']; 
const femaleNames = ['Joanna', 'Katarzyna', 'Małgorzata', 'Zofia', 'Marlena'];
const lastNames = ['Kowalski', 'Nowak', 'Doe', 'Fritz', 'Divine'];
const people = [];

const randChoice = (arr) => {
    const min = 0;
    const max = arr.length - 1;
    const choice = arr[Math.floor(Math.random() * (max - min + 1)) + min];
    console.log('choice: ', choice);
    return choice;
};

const drawPeople = function () {
for (let i=1; i<=20; i++) {
    const draw = [];
    
    const gender = (randChoice (genders));
    draw.push(gender);

    if (gender == 'M'){
    draw.push(randChoice (maleNames));
    } else {
    draw.push(randChoice (femaleNames));
    }
    draw.push(randChoice (lastNames));

    const age = Math.floor(Math.random() * (100 + 1));
    draw.push(age);

    people.push(draw);
    console.log('people(i):', i, people);
};

console.log('people', people);
return;
}

drawPeople ();