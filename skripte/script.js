
// registracija


function warning(){
    alert("Upravo ste obrisali sve podatke.")
}

function validacija(){

    var ime = document.forms["forma"]["ime"].value;
    if (ime == "" || ime ==null) {
      alert("Ime je neophodno");
      return false;
    }

    var prezime = document.forms["forma"]["prezime"].value;
    if (prezime == "" || prezime ==null) {
        alert("Prezime je neophodno");
        return false;
      }

      var password = document.forms["forma"]["pass"].value;
      if (password == "" || password ==null) {
        alert("Password je neophodan");
        return false;
      }

}


function klik(){

    document.getElementById("ime").style.borderColor="blue" ;
    document.getElementById("ime").style.borderStyle="solid 5px"

}

//kupovina
$(document).ready(function(){
 
  $('.slicica').hover(
    function() {
      $(this).animate({"opacity": "0.4"}, 500);
    },
    function() {
      $(this).animate({"opacity": "1"}, 500);
    });
    });
    
  
  

//istorija
$( function() {
    $( ".wrap" ).accordion()
    
  } )




  


  