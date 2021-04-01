let score = 0;

let giraffeButton = document.getElementById('Giraffe');
let lionButton = document.getElementById('Lion');
let whaleButton = document.getElementById('Whale');
let qOneAnswer = document.getElementById('Question_1_Answer');

giraffeButton.addEventListener('click', wrong);
lionButton.addEventListener('click', wrong);
whaleButton.addEventListener('click', correct);

function wrong () {
  qOneAnswer.innerHTML = 'Incorrect';
  qOneAnswer.style.visibility = 'visible';
}


function correct () {
  qOneAnswer.style.visibility = 'visible';
  score += 1;
}
