//all the usual declarations
//note: for concept clarity sake, the clouds will be known as holes and the powerups are the moles
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const time = document.getElementById("time");
let lastHole;
let timeUp = false;
let score = 0;

//checkScore function 
function checkscore(){
  if (score>11){
    alert("Good job! your score is " + score + ". Press OK to join Panny in defeating Danny the diabetes monster!");
        window.location.replace("../7finalBoss/index.html");
  }
  else{
    alert("Times Up! Your score is " + score + ". Press OK to try again");
      location.reload();
  }
}

//countdown decreases the innertext of the timer 
function countdown(){
     time.innerText--;
     console.log(time.innerText);
     if (time.innerText==0){
      {checkscore()}

     }
};


/*Math.random() generates a random number between 0 and 1, which is then multiplied 
by the difference between max and min,added to min, and then rounded to the nearest 
integer using Math.round().*/
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//takes an array holes as an argument and returns a random element from that array. 
function randomHole(holes) {
  /*generates a random index idx using the Math.random() method and then retrieves 
  the element at that index from the holes array.*/
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  /* if the randomly selected hole is the same as the previously selected hole, 
  contiinue to generate a new holel*/
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

//generating the time for the powerups to pop up
function peep() {
  const time = randomTime(500, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

//start function
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 20000);
  setInterval(countdown,1000)
  document.getElementById("my_audio").play();
}

//bonk is to get the score 
function bonk(e) {
  //score tracking and make the powerup go down after being pressed  
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}
//adding something to listen for user interaction
moles.forEach(mole => mole.addEventListener('click', bonk));