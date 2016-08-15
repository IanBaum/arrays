$(document).ready(function(){
  $("#sentenceEntry").submit(function(event){
    event.preventDefault();

    var sentence = $("#sentence").val();

    var sentenceArray = sentence.split(" ");
    console.log(sentenceArray);

    var longWordArray = [];
    sentenceArray.forEach(function(word){
      if(word.length >= 3){
        longWordArray.push(word);
      }
      console.log(longWordArray);
    });
    $("#endSentence").text(longWordArray.reverse().join(" "));
    // var backwardsSentence = "";
    // longWordArray.forEach(function(word){
    //   backwardsSentence += (word + " ");
    //   $("#endSentence").text(backwardsSentence);
    // })
  });
});
