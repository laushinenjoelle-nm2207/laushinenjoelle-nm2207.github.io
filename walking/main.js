//timer for the progress bar 
var timeleft = 6;
var downloadTimer = setInterval(function(){
  //this function is so that once the time is up, pannny has walked out of frame and the next page can be loaded 
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    window.location.replace("../3exploreSugar/index.html") 
  }
  document.getElementById("progressBar").value = 6 - timeleft;
  timeleft -= 1;
}, 1000)



