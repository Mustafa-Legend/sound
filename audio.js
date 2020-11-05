/*

 => Run Sound After click the buttons

*/
var bleep = new Audio();

bleep.src = "https://soi.netlify.app/layout/sound_n.mp3";

function sound(num){

  bleep.play();

}

/*

  => Open and close menu
  => check if display none or not

*/
// Button to open menu
var open_menu = document.getElementById('open-menu');

// menu list
var tog_menu = document.getElementById('tog-menu');

open_menu.onclick = function(){

  "use strict";

  // if menu is open -> close the menu
  if (tog_menu.style.display == 'block') {

    tog_menu.style.display = 'none';

  // if menu is close -> open the menu
  }else{

    tog_menu.style.display = 'block';
  }

}


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
