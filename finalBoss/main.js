  

const totalCount= document.getElementById("count");

document.addEventListener('keypress', (e)=> {
        {fire();}
        totalCount.innerText++;
        console.log(totalCount.innerText);
        {checkScore()}
    });
    //why not working
function changeText(){
    document.getElementById("note").innerHTML= "press";
}
function checkScore(){
    var image = document.getElementById('danny');
    var note = document.getElementById('note');
    if(totalCount.innerText==4){
        image.src = "resources/danny3.svg";
        {endGame()};
        if(totalCount.innerText==3){
            image.src = "resources/danny3.svg";
            changeText()
        }
    }
    if(totalCount.innerText==3){
        image.src = "resources/danny3.svg";
    }
    if(totalCount.innerText==2){
        image.src = "resources/danny2.svg";
    }
}
function fire(){
    power.classList.add('power-animation')
    setTimeout(() => 
        power.classList.remove('power-animation'),1000);
        console.log('works!');
};

function endGame(){
    alert("You did it! Good job defeating the diabetes monster!")
    window.location.replace("index_end.html") 
}
