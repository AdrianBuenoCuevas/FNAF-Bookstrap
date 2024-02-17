/****************************************************** */
/*                                                      */
/* Página de JavaScript de mi página de FNAF            */
/*           Adrián Bueno                               */
/****************************************************** */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }