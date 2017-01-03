( function() {
  
  var resultContainer = document.getElementById('result');
  var reponse1 = prompt('joueur 1. Ecris une lettre ?');
  var reponse2 = prompt('joueur 2. Ecris une lettre ?');

  if(reponse1 === reponse2) {
    resultContainer.innerHTML ='Right';
  } else {
    resultContainer.innerHTML ='Wrong';
  }

})();