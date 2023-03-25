//declare kaya button
var kayaButton= document.getElementById("kayaButton");

function changeImage() {
    var image = document.getElementById('bbt');
    if (image.src.match("resources/kaya.svg")) {
        image.src = "resources/bbt.svg";
    }
    else {
        image.src = "resources/kaya.svg";
    }
}

function changeImage2() {
    var image = document.getElementById('bbt');
    if (image.src.match("resources/noodle.svg")) {
        image.src = "resources/bbt.svg";
    }
    else {
        image.src = "resources/noodle.svg";
    }
}

function changeImage3() {
    var image = document.getElementById('bbt');
        image.src = "resources/bbt.svg";
}

function changeText(){
    document.getElementById("text").innerHTML= "Did you know? Your Kaya toast can contain up 2 teaspoons of sugar!"
}
function changeText2(){
    document.getElementById("text").innerHTML= "Did you know? Your MeeSiam can contain up 7.5 teaspoons of sugar!"
}

function changeText3(){
    document.getElementById("text").innerHTML= "Did you know? A medium-sized 500ml bubble milk tea with pearls and the full amount of sugar has 8 teaspoons of sugar! So be careful when getting your daily bubble tea fix!"
}

//function should replace the background image of the food box to kaya when the button is clicked 
/*function kaya(){
    console.log("it works");
    food.style.background=url('resources/kaya.svg');
};*/





