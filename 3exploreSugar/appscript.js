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
    var image = document.getElementById('text');
    if (image.src.match("resources/kayaText.svg")) {
        image.src = "resources/bbtText.svg";
    }
    else {
        image.src = "resources/kayaText.svg";
    }
}
function changeText2(){
    var image = document.getElementById('text');
    if (image.src.match("resources/noodleText.svg")) {
        image.src = "resources/bbtText.svg";
    }
    else {
        image.src = "resources/noodleText.svg";
    }  
}

function changeText3(){
    var image = document.getElementById('text');
        image.src = "resources/bbtText.svg";
}

//function should replace the background image of the food box to kaya when the button is clicked 
/*function kaya(){
    console.log("it works");
    food.style.background=url('resources/kaya.svg');
};*/





