
//prompt user for name and use the inputted name to respond 
function promptMe(){
    var nameInput= prompt("Panny: Hi there! What's your name?");
    alert("Hi " + nameInput + "! It's nice meeting you. Thanks for coming along on this adventure with me!")
}

//click on sound button to startplay bg music 
const sound=document.getElementById('sound');
sound.onclick=function(){
    document.getElementById("my_audio").play();
  }
