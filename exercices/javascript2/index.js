( function() {

  // var apprenant = { 
  //   prenom: "Faustino", 
  //   nom: "kialungila"
  // };

  // var Apprenant = function(p, n) {
  //   this.prenom = p; 
  //   this.nom = n;
  // }

  // var fk = new Apprenant('faustino', 'kialungila');

  // console.log('fk: ', fk.prenom);

  // var sb = new Apprenant('sami', 'brahim');

  // console.log('sb: ', sb.prenom);

  /////

  // var fk = new Object();
  // fk.prenom = 'faustino';

  //////////////////////////////

  // var fkPrenom = 'faustino';
  // var fkAge = 22;
  // var arrayApprenantPromo7 = ['sami', 'faustino', 'tandi', 'teddy', 'fousseni', 'osman', 'paljor'];

  // // console.log('fkPrenom: ', fkPrenom);
  // // console.log('fkAge: ', fkAge);
  // console.log('2 : ', arrayApprenantPromo7[2]);
  // console.log('3 : ', arrayApprenantPromo7[3]);

  // var a = true;
  // var b = !true;

  // console.log('b : ', b );

  // je veux que le programme nous affiche si a est différent de b

  var resultContainer = document.getElementById('result');

  console.log('resultContainer: ', resultContainer);
  // console.log('contenu AVANT: ', resultContainer.innerHTML);
  // console.log('contenu APRES: ', resultContainer.innerHTML);

  //resultContainer.innerHTML = 'TEST';
/**/

  var reponse1 = prompt('1. Ecris une lettre ?');

  var reponse2 = prompt('2. Ecris une lettre ?');

  // console.log('reponse1: ', reponse1);
  // console.log('reponse2: ', reponse2);

  if(reponse1 === reponse2) {
    console.log('RIGHT');
    resultContainer.innerHTML ='Right';
  } else {
    console.log('WRONG');
    resultContainer.innerHTML ='Wrong';
  }
/**/


})();