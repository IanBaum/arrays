$(document).ready(function(){

  var list = [];

  $("#groceryList").submit(function(event){
    event.preventDefault();

    var item = $("#itemEntry").val()

    if(!item){
      alert("Please enter an item.")
    }else {
      list.push(item);
      $("#itemList").prepend("<li>" + item + "</li>")
      console.log(list);
      $("#itemEntry").val("");
    }
  });

  $("#doneButton").click(function(){
    var upperAlphaList = list.map(function(listItem){
      return listItem.toUpperCase();
    }).sort();
    $("#itemList li").remove();
    $("div#groceryForm").hide();
    upperAlphaList.forEach(function(listItem){
      $("#itemList").append("<li>" + listItem + "</li>");
    });
    console.log(list);
    console.log(upperAlphaList);
  });

});
