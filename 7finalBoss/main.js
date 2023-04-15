  
//declaration for number of times the cannon has been fired 
const totalCount= document.getElementById("count");

//listening for when user presses, the cannon fires and count increates 
document.addEventListener('keypress', (e)=> {
        {fire();}
        totalCount.innerText++;
        console.log(totalCount.innerText);
        {checkScore()}
    });

//changes image as the number of fires increases 
function checkScore(){
    var image = document.getElementById('danny');
    if(totalCount.innerText>3){
        image.src = "resources/danny3.svg";
        {endGame()};
//if(totalCount.innerText==){
          //  image.src = "resources/danny3.svg";
          //  changeText()
       // }
    }
    if(totalCount.innerText==3){
        image.src = "resources/danny3.svg";
    }
    if(totalCount.innerText==2){
        image.src = "resources/danny2.svg";
    }
}
//adds the firing animation when fire() is called 
function fire(){
    power.classList.add('power-animation')
    document.getElementById("my_audio").play();
    setTimeout(() => 
        power.classList.remove('power-animation'),1000);
        console.log('works!');
};
//alerting and ending the game 
function endGame(){
    document.getElementById("my_audio2").play();
    alert("You did it! Good job defeating the diabetes monster!")
    window.location.replace("index_end.html") 
}
