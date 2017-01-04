( function() {
  
  var resultContainer = document.getElementById('result');
  console.log('test1');
  var reponse1 = prompt('joueur 1. Ecris une lettre ?');
  console.log('test2');
  var reponse2 = prompt('joueur 2. Ecris une lettre ?');
  console.log('test3');
  debugger;
  if(reponse1 === reponse2) {
    resultContainer.innerHTML ='Right';
  } else {
    resultContainer.innerHTML ='Wrong';
  }

})();