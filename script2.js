'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log('I can drive :D');
}

//const interface = 'Audio';
//const private = 534;


//Functions


/*
function logger() {
    console.log('My name is Varun');
}

logger();
logger();
logger();

function fruit(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
    return juice;
}

console.log(fruit(55, 0));


console.log(fruit(88, 90));

*/


/*
function calcAge(birthyear) {
    const age = 2022 - birthyear;
    return age;
}

console.log(calcAge(2001));
*/
/*
function calcAge(birthYear) {
    return 2022 - birthYear;
}
const age = calcAge(2021);

const age2 = function (birthYear) {
    return 2021 - birthYear;
}
const age21 = age2(2001);

console.log(age, age21);
*/
/*
const add = function (x, y) {
    return x + y;
}

const add1 = add(2, 3);
console.log(add1);
*/
/*
const calcAge3 = birthYear => 2022 - birthYear;
const age = calcAge3(2001);
console.log(age);
*/

/*
const retirementAge = (birthYear, name) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${name} retires in ${retirement} years`;
}

const w1 = retirementAge(2001, 'Varun');
console.log(w1);

const w2 = retirementAge(2000, 'Ganesh');
console.log(w2);


*/

/*
const fruit = function (ftt) {
    return ftt * 5;
}

const frt = function (apple, orange) {
    const applepiece = fruit(apple);
    const orangepiece = fruit(orange);
    return `Juice with ${applepiece} piece of apples and ${orangepiece} piece of oranges`;

}

console.log(frt(2, 5));
*/

/*
const calcAge = function (birthYear) {
    const age = 2022 - birthYear
    return age;
}

const retirement = function (birthYear, name) {
    const age1 = calcAge(birthYear);
    const retire = 65 - age1;
    return `${name} will retire in ${retire} age`;
}
console.log(retirement(2001, 'varun'));
console.log(retirement(1995, 'sam'));

*/

/*

const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDol = calcAverage(44, 23, 71);
const scorekaol = calcAverage(65, 54, 49);

console.log(scoreDol, scorekaol);

const checkWin = function (avgdol, avgkol) {
    if (avgdol >= 2 * avgkol) {
        console.log(`Dolphin wins the trophy ${avgdol} vs. ${avgkol}`);
    }
    else if (avgkol >= 2 * avgdol) {
        console.log(`Kola wins the trophy ${avgdol} vs. ${avgkol}`);
    }
    else {
        console.log('No one win');
    }
}
checkWin(scoreDol, scorekaol);
checkWin(512, 1024);
*/
/*
const friends = ['Varun', 'Ganesh', 'Satish'];
console.log(friends);
const years = new Array(1991, 1996, 2002);
console.log(years);
console.log(friends.length);
console.log(friends[friends.length - 1]);


friends[1] = 'Pexpo';
console.log(friends);

const firstname = 'Varun';
const varun = [firstname, 'varun', 2022 - 2001, 'Devop', friends];
console.log(varun);
console.log(varun.length);
*/
/*
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const years = [1997, 2001, 1902, 1382, 1908, 1967]
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);




*/
/*
const friends = ['varun', 'ganesh', 'satish'];
const newl = friends.push('Manas');
console.log(friends);
console.log(newl);

friends.unshift('Pexpo');

friends.pop();
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.indexOf('ganesh'));
console.log(friends.includes('satish'));
*/

/*

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}
const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(bill, tips);
const totals = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(totals);
*/
/*const jonas = {
    firstname: 'Jonas',
    lastName: 'Raj'
};
console.log(jonas);
console.log(jonas.firstname);
console.log(jonas['lastName']);
*/
/*
const varun = {
    firstname: 'Varun',
    lastname: 'Raj',
    birthYear: 2001,
    job: 'Deveop',
    friends: ['ganesh', 'alan', 'kiran'],
    hadDrive: true,

    calcage: function () {
        this.age = 2022 - this.behaviour;
        return this.age;
    }

};
console.log(varun.calcage());

*/
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/
/*


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Hi! I am Varun ${rep}`);

}

*/
/*
const varun = [
    'Varun',
    'Raj',
    2022 - 2001,
    ['ganesh', 'alan', 'kiran'],
];
for (let i = 0; i < varun.length - 1; i++) {
    console.log(varun[i]);
}
*/
/*
const years = [1991, 2002, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);
*/
/*
const varun = [
    'Varun',
    'Raj',
    2022 - 2001,
    ['ganesh', 'alan', 'kiran'],
];

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < varun.length; i++) {
    if (typeof varun[i] !== 'string') continue;

    console.log(varun[i], typeof varun[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < varun.length; i++) {
    if (typeof varun[i] === 'number') break;

    console.log(varun[i], typeof varun[i]);
}
*/

/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}
*/
/*
let rep = 1;
while (rep <= 10) {
    console.log('Hi');
    rep++;

}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

}
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));