//menu
$(document).ready(function() {
  $('.nav-icon').click(function() {
    $(this).toggleClass('open');
  });
});

//moving the container
var operator = '+=';
$('.nav-icon').click(function() {

  $('#body-container').animate({
    right: operator + '200'
  }, 400);

  $('.menu').animate({
    right: operator + '200'
  }, 400);

  if (operator == '+=') {
    operator = '-=';
  } else {
    operator = '+=';
  }
});


var operator = '+=';
$('.menu a').click(function() {

  $('#body-container').animate({
    right: operator + '200'
  }, 400);

  $('.menu').animate({
    right: operator + '200'
  }, 400);

  if (operator == '+=') {
    operator = '-=';
  } else {
    operator = '+=';
  }
});

//random image
var randomImage = new Array("images/gallery/photo1.jpg", "images/gallery/photo2.jpg", "images/gallery/photo3.jpg", "images/gallery/photo4.jpg", "images/gallery/photo5.jpg", "images/gallery/photo6.jpg", "images/gallery/photo7.jpg", "images/gallery/photo8.jpg", "images/gallery/photo9.jpg", "images/gallery/photo10.jpg", "images/gallery/photo11.jpg");



function getRandomImage() {
  var number = Math.floor(Math.random() * randomImage.length);
  document.getElementById('picture').src = randomImage[number];
}
getRandomImage();

//change of head position
$(document).ready(function() {
  $(".first").mouseover(function() {
    $(".img-photo-video").css("z-index", "2");
  });
  $(".first").mouseout(function() {
    $(".img-photo-video").css("z-index", "0");
  });
});

$(document).ready(function() {
  $(".second").mouseover(function() {
    $(".img-development").css("z-index", "2");
  });
  $(".second").mouseout(function() {
    $(".img-development").css("z-index", "0");
  });
});

$(document).ready(function() {
  $(".third").mouseover(function() {
    $(".img-skills").css("z-index", "2");
  });
  $(".third").mouseout(function() {
    $(".img-skills").css("z-index", "0");
  });
});

$(document).ready(function() {
  $(".fourth").mouseover(function() {
    $(".img-contact").css("z-index", "2");
  });
  $(".fourth").mouseout(function() {
    $(".img-contact").css("z-index", "0");
  });
});

$(document).ready(function() {
  $(".photo-img").mouseover(function() {
    $(".photo h3").css("display", "block");
  });
  $(".photo-img").mouseout(function() {
    $(".photo h3").css("display", "none");
  });
});

//quiz
function addPoint() {
  var points = 0;
  for (var i = 1; i <= 15; i++) {
    var r = document.getElementsByName('answer' + i);
    for (var j = 0; j < r.length; j++) {
      var radio = r[j];
      if (radio.value == "1" && radio.checked) {
        points++;
      }

    }
  }

  if (points >= 3) {
    document.getElementById('here').innerHTML = 'Yes, this is her email address milakozlowska2000@gmail.com!';
  } else {
    document.getElementById('here').innerHTML = 'Keep looking!';
  }
}

//generator
var userName = document.getElementById('username');
var randomStory = document.querySelector('.random-story');
var tale = document.querySelector('.tale');


function randomArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
var mainStory = "It was an ordinary summer morning in Norway. Day as ususal. Krzysztof was looking for a new employee for his fast growing organization. While browsing candidate profiles on inputV, suddenly found Milena Kozlowska's  resume, inputR, so he decided to hire her in a glimpse."

var inputV = ['GitHub', 'finn.no', 'email'];
var inputR = ['whose experience and professional profile matched the job description perfectly', 'whose professional experience and skills looked interesting and promising ', 'whose portfolio website was delightful'];

randomStory.addEventListener('click', result);

function result() {
  var newStory = mainStory;
  var storyV = randomArray(inputV);
  var storyR = randomArray(inputR);

  newStory = newStory.replace('inputV', storyV);
  newStory = newStory.replace('inputR', storyR);


  if (userName.value != '') {
    var name = userName.value;
    newStory = newStory.replace('Krzysztof', name);
  }
  tale.textContent = newStory;
  tale.style.visibility = 'visible';
}

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    $('#myBtn').fadeIn(200);
  } else {
    $('#myBtn').fadeOut(200);
  }
});
$('#myBtn').click(function() {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});


//from csstricks
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
