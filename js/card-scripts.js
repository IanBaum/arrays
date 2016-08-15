$(document).ready(function(){
  var cardNum = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];
  var cardSuit = ["clubs","spades","diamonds","hearts"];

  cardSuit.forEach(function(suit){
    cardNum.forEach(function(card){
      $("#cardList").append("<li>" + card + " of " + suit);
    });
  });

  // for(var i = 0; i < cardSuit.length; i++){
  //   for(var j = 0; j < cardNum.length; j++){
  //     $("#cardList").append("<li>" + cardNum[j] + " of " + cardSuit[i]);
  //   };
  // }

});
