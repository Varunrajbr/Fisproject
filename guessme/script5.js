'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number ';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
// when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No secretNumber';
    
  }
  //when wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; 
  }
    //when too high
  else if (guess > secretNumber) {

    if (score > 1) {
       document.querySelector('.message').textContent = 'Too High';
    score--;
    document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
    //when too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
   score--;
   document.querySelector('.score').textContent = score;
   }
   else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
   }
   }
});

