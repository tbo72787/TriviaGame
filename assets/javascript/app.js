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
    if (answeredArr.length != Object.keys(questions).length) {
    $('#start-button').css('display', 'none');
    $('.st-question').css('display', 'block');
    $('#result').css('display', 'none');
    questionPop();
    }
    else {
      results();
    }
  }

  function results() {
    $('.st-question').css('display', 'none');
    $('.rst').css('display', 'none');
    $('#reset-button').css('display', 'block');
  }

  var questions = {
    question1: {
      q: 'What color light results from mixing blue and yellow light?',
      a1: 'Blue',
      a2: 'Yellow',
      a3: 'Red',
      a4: 'Green',
      ca: 'Green',
    },
    question2: {
      q: 'What color light results from mixing blue and red light?',
      a1: 'Red',
      a2: 'Orange',
      a3: 'Purple',
      a4: 'Green',
      ca: 'Purple',
    },
    question3: {
      q: 'What color light results from mixing red and yellow light?',
      a1: 'Green',
      a2: 'Orange',
      a3: 'Pink',
      a4: 'Blue',
      ca: 'Orange',
    },
    question4: {
      q: 'What are the three primary colors of light?',
      a1: 'Green, Orange, and Purple',
      a2: 'Magenta, Yellow, and Cyan',
      a3: 'Red, Yellow, and Blue',
      a4: 'Red, Yellow, and Green',
      ca: 'Red, Yellow, and Blue',
    },
    question5: {
      q: 'What color light results from mixing all three primary colors?',
      a1: 'White',
      a2: 'Red',
      a3: 'Black',
      a4: 'Darkness',
      ca: 'White',
    }

  }

  function reset() {
    $('.rst').css('display', 'none');
    $('#reset-button').css('display', 'none');
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
        $('#result').text('You took too long! The answer is: ' + questions.question1.ca + '!');
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
    if (btnText == questions[y].ca) {
      $('#result').text('Correct! The answer is: ' + questions[y].ca + '!');
      $('.st-question').css('display', 'none');
      $('#result').css('display', 'block');
      score++;
      soFar++;
      console.log('answered ' + soFar);
      console.log('score ' + score);
      setTimeout(askQuestion, 3000);
      }
    else {
      $('#result').text('Wrong! The answer is: ' + questions[y].ca + '!');
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