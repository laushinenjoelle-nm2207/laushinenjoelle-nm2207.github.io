//declaring all variables that will be interacted with 
const pancreas = document.getElementById("pancreas");
const sugar = document.getElementById("sugar");
const score = document.getElementById("score");


//allows the pancreas to jump 
function jump() {
    pancreas.classList.add('jump-animation');
    //removing the animation
    setTimeout(() => 
        pancreas.classList.remove('jump-animation'),500);
        console.log('works!');
}

//when player presses any key, it executes the jump function
document.addEventListener('keypress', (e)=> {
        {jump();}
    });

//checkScore() eexcutes an if else statement to determine if player has cleared the level
function checkScore() { 
    finalScore= score.innerHTML;
    console.log(finalScore);
    if (finalScore>0 && finalScore<100){
        //so that reload will go back to the starting page 
        alert("you got a score of: "+ score.innerText + ". You got caught by Danny! Play again!");
        window.location.replace("index_start.html");
    }
    else {
        //so that reload will go to the ending page 
        alert("you got a score of: "+ score.innerText + ". Good Job! You outran the danny! Click OK enter Powerup Valley.");
        window.location.replace("../5fixDiabetes/index.html");
    }   
}

//this function ensures the game does not go on infintely 
function levelClear() {
    finalScore= score.innerHTML;
    console.log(finalScore);
    if (finalScore>300){
        //so that reload will go back to the starting page 
        alert("you got a score of: "+ score.innerText + ". Level Cleared!");
        window.location.replace("../5fixDiabetes/index.html");
}
}

//main game loop
setInterval(() => {
    //sugar animation starts playing
    sugar.classList.add('sugar-animation');
    //score increases w time of player survival
    score.innerText++;
    console.log(score.innerText);
    if (score.innerText>300){
        levelClear();
    }
    //calculating the position of the pancreas and position of the sugar 
    const pancreasTop = parseInt(window.getComputedStyle(pancreas)
    .getPropertyValue('top'));
    const sugarLeft = parseInt(window.getComputedStyle(sugar)
    .getPropertyValue('left'));
    console.log(sugarLeft)
    //game ends when pancreas hits the sugar 
    if (sugarLeft < 5) {
    sugar.style.display = 'none';
    } else {
        sugar.style.display = ''
    }
    //runs the checkscore function when game ends aka when pancreas hits sugar 
    if(sugarLeft < 100 && sugarLeft >0 && pancreasTop> 180 ){
        checkScore();}
    
},50);






   