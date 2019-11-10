$(document).ready(function() {
  // declare global variables 
  var score = 0;
  var time = 30;
  var answered;
  var y;
  var answeredArr = [];
  var soFar = 0;
  var sourceNum = 0;
  var imgArr = ['assets\\images\\green.jpg', 'assets\\images\\purple.jpg', 'assets\\images\\orange.jpg', 
  'assets\\images\\colors.jpg', 'assets\\images\\white.jpg']

  $('#start-button').click(askQuestion);

  function askQuestion() {
    if (answeredArr.length != Object.keys(questions).length) {
    $('#start-button').css('display', 'none');
    $('.rst').css('display', 'block');
    $('.result').css('display', 'none');
    questionPop();
    }
    else {
      results();
    }
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

  function results() {
    $('.rst').css('display', 'none');
    $('.result').css('display', 'none');
    $('#you-got').text('You got ' + score + '/' + Object.keys(questions).length + '!');
    $('.reset').css('display', 'block');
  }

  $('#reset-button').click(reset);

  function reset() {
    answeredArr.length = 0;
    score = 0;
    soFar = 0;
    $('.rst').css('display', 'none');
    $('.reset').css('display', 'none');
    $('.result').css('display', 'none');
    $('#start-button').css('display', 'inline-block');
  }

  function ranGen() {
    var x = Math.floor(Math.random()*(Object.keys(questions).length));
    sourceNum = x;
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
        imgDis();
        $('#result').text('You took too long! The answer is: ' + questions[y].ca + '!');
        $('.rst').css('display', 'none');
        $('.result').css('display', 'block');
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
      imgDis();
      $('#result').text('Correct! The answer is: ' + questions[y].ca + '!');
      $('.rst').css('display', 'none');
      $('.result').css('display', 'block');
      score++;
      soFar++;
      console.log('answered ' + soFar);
      console.log('score ' + score);
      setTimeout(askQuestion, 3000);
      }
    else {
      imgDis();
      $('#result').text('Wrong! The answer is: ' + questions[y].ca + '!');
      $('.rst').css('display', 'none');
      $('.result').css('display', 'block');
      soFar++;
      console.log('answered ' + soFar);
      console.log('score ' + score);
      setTimeout(askQuestion, 3000);
      }
    answered = true;
    }
  
  function imgDis() {
    $('#image').empty();
    var pic = $('<img>');
    pic.attr('src', imgArr[sourceNum]);
    console.log(pic.attr('src'));
    $('#image').append(pic);
  }

  reset();
});  