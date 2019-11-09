$(document).ready(function() {
  // declare global variables 
  var starting = true;
  var game = false;
  var result = false;
  var score = false;
  var time = 30;
  var timesUp = false;
  
  $('#start-button').click(askQuestion);

  function askQuestion() {
    $('#start-button').css('display', 'none');
    $('.st-question').css('display', 'block');
    questionPop();
  }

  var questions = {
    question1: {
      q: 'Question about red?',
      a1: 'blue',
      a2: 'blue',
      a3: 'red',
      a4: 'blue',
      ca: 'red',
      yes: "yup, it's red!",
      no: "No! It's red! You suck!"
    }

  }

  function reset() {
    $('.rst').css('display', 'none');
  }

  function questionPop() {
    $('#question').text(questions.question1.q);
    $('#answer1').text(questions.question1.a1);
    $('#answer2').text(questions.question1.a2);
    $('#answer3').text(questions.question1.a3);
    $('#answer4').text(questions.question1.a4);
    var timerInterval = setInterval(count, 1000);
    function count() {
      if (time >= 1) {
        time--;
        $('#secs').text(time);
        }
      else {
        $('#result').text('You took too long! The answer is ' + questions.question1.ca + '!');
        $('.st-question').css('display', 'none');
        $('#result').css('display', 'block');
        clearInterval(timerInterval);
        time = 30;
        $('#secs').text(time);
        setTimeout(askQuestion, 3000);
      }
    }
  
  }

  $('.btn-block').click(function() {
    var btnText = $(this).text();
    console.log(btnText);
    console.log(questions.question1.ca);
    if (btnText == questions.question1.ca) {
      $('#result').text('Correct! The answer is ' + questions.question1.ca + '!');
      $('.st-question').css('display', 'none');
      $('#result').css('display', 'block');
      // clearInterval(timerInterval);
      // time = 30;
      setTimeout(askQuestion, 3000);
      }
    else {
      $('#result').text('Wrong! The answer is ' + questions.question1.ca + '!');
      $('.st-question').css('display', 'none');
      $('#result').css('display', 'block');
      // clearInterval(timerInterval);
      // time = 30;
      setTimeout(askQuestion, 3000);
    }
    })

  reset();
});  