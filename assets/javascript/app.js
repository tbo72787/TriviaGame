$(document).ready(function() {
  // declare global variables 
  var starting = true;
  var game = false;
  var result = false;
  var score = 0;
  var time = 30;
  var timing = false;
  var answered;
  var y;
  var answeredArr = [];
  var soFar = 0;
  
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
    },
    question2: {
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

  function ranGen() {
    // console.log(Object.keys(questions).length);
    var x = Math.floor(Math.random()*(Object.keys(questions).length));
    if (answeredArr.includes(x)) {
      ranGen();
    }
    else {
      answeredArr.push(x)
      y = 'question' + (x + 1);
    }
  }

  function questionPop() {
    ranGen();
    console.log('y is ' + y);
    $('#question').text(questions[y].q);
    $('#answer1').text(questions[y].a1);
    $('#answer2').text(questions[y].a2);
    $('#answer3').text(questions[y].a3);
    $('#answer4').text(questions[y].a4);
    answered = false;
    time = 30;
    $('#secs').text(time);
    var timerInterval = setInterval(count, 1000);
    function count() {
      if (time >= 1 && answered != true) {
        time--;
        $('#secs').text(time);
        }
      else if (answered == true) {
        clearInterval(timerInterval);
      }
      else {
        $('#result').text('You took too long! The answer is ' + questions.question1.ca + '!');
        $('.st-question').css('display', 'none');
        $('#result').css('display', 'block');
        clearInterval(timerInterval);
        time = 30;
        $('#secs').text(time);
        soFar++;
        console.log('answered ' + soFar);
        console.log('score ' + score);
        setTimeout(askQuestion, 3000);
      }
    }
  }

  $('.btn-block').click(buttons);
    
  function buttons() {
    var btnText = $(this).text();
    if (btnText == questions.question1.ca) {
      $('#result').text('Correct! The answer is ' + questions.question1.ca + '!');
      $('.st-question').css('display', 'none');
      $('#result').css('display', 'block');
      score++;
      soFar++;
      console.log('answered ' + soFar);
      console.log('score ' + score);
      setTimeout(askQuestion, 3000);
      }
    else {
      $('#result').text('Wrong! The answer is ' + questions.question1.ca + '!');
      $('.st-question').css('display', 'none');
      $('#result').css('display', 'block');
      soFar++;
      console.log('answered ' + soFar);
      console.log('score ' + score);
      setTimeout(askQuestion, 3000);
    }
    answered = true;
    }


  reset();
});  