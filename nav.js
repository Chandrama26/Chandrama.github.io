//create an alert
alert('Thank you for sending your message. We will come back to you within 24 hours')

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function openMenu() {
    var x = document.getElementById("portfolio Topnav");

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

   /*  Play sound on click  */
let sound = document.getElementById('beep')
let play = document.getElementById('submit')
 
   play.onclick =
     function() {
           console.log('submit');
     sound.play();
           return false;
       };
