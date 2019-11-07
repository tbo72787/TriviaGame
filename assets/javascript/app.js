$(document).ready(function() {
  // declare global variables 
  var starting = true;
  var game = false;
  var result = false;
  var score = false;

  function reset() {
    $('.rst').css('display', 'none');
  }

  $('#start-button').click(function() {
    $('#start-button').css('display', 'none');
    $('.st-question').css('display', 'block');
  })

  reset();
});  