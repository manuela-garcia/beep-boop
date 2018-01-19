var beepBoop = function(number) {
  return false;
  console.log(beepBoop);
};










$(document).ready(function(){
  $("#input-number").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var returnNumbers = beepBoop(number);
    $("#return-numbers").text(returnNumbers);
    console.log();
  });







});
