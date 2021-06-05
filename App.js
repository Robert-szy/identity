const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Robert', 'Marek', 'Jurek', 'Paweł', 'Marcin']; 
const femaleNames = ['Joanna', 'Katarzyna', 'Małgorzata', 'Zofia', 'Marlena'];
const lastNames = ['Kowalski', 'Nowak', 'Doe', 'Fritz', 'Divine'];
const emails = ['@gmail.com', '@live.com', '@hotmail.com', '@outlook.com', '@op.pl', '@interia.pl']
const people = [];

const randChoice = (arr) => {
    const min = 0;
    const max = arr.length - 1;
    const choice = arr[Math.floor(Math.random() * (max - min + 1)) + min];
    return choice;
};

const createEmail = (first, last) => {
    const email = (first + '.' + last + randChoice(emails)).toLowerCase();
    return email;
}

const createPhone = () => {
    const phone = [];
    
    for (let i=1; i<=9; i++){
        let number = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        phone.push(number);
    }

    return phone.join('');
}

const drawPeople = function () {
    for (let i=1; i<=20; i++) {
        const draw = [];
        let first = '';
        let last = '';
        let phone = '';
        
        const gender = (randChoice (genders));
        draw.push(gender);

        if (gender == 'M'){
            first = randChoice (maleNames);
            draw.push(first);
        } else {
            first = randChoice (femaleNames);
            draw.push(first);
        }

        last = randChoice (lastNames);
        draw.push(last);

        const email = createEmail(first, last);
        draw.push(email);

        const age = Math.floor(Math.random() * (100 - 18 + 1)) + 18;
        draw.push(age);

        phone = createPhone();
        draw.push(phone);

        people.push(draw);
    };

    console.log('people', people);

    const jsonstring = JSON.stringify(people);

    fs.writeFile('people.json', jsonstring, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

    return;
}

drawPeople ();