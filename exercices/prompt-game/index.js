( function() {

  var responseContainer = document.querySelector('#response');
  var idCard = document.querySelector('#side');

  var btn = document.querySelector('#btn');

  var arrPerso = [
    {nom: 'obi-wan', side: 'lumineux'},
    {nom: 'dark vador', side: 'obscur'},
    {nom: 'palpatine', side: 'obscur'},
    {nom: 'luke', side: 'lumineux'}
  ]

  var btnClickHandler = function(e) {

    var userResponse = responseContainer.value;

    var arrResult = arrPerso.filter( function(item) {
        return item.nom === userResponse;
    });

    idCard.innerHTML = arrResult[0].side;
  };
  
  //btn.onclick = btnClickHandler;
  btn.addEventListener('click', btnClickHandler);
  console.log('btn: ', btn);

})();