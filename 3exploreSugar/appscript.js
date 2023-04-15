//declare kaya button
var kayaButton= document.getElementById("kayaButton");

//function changeImage() changes the image of the food in the food div. It uses bbt.svg as the original image 
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

//changeText changes the accompanying textbox under the food 
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





