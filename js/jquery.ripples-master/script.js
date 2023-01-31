$(document).ready(function() {
    try {
        $('.ripple-section').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
        });
    } catch (e) {
        console.log(e);
    }
});

$(document).ready(function(){
    $('.hat__items li a').click(function () {
        elementClick = $(this).attr('href');
        destination = $(elementClick).offset().top;
        $('body,html').animate({scrollTop: destination }, 1400);
    });
});

$(document).ready(function(){
    $('.about__descr .about__text .about__port').click(function () {
        elementClick = $(this).attr('href');
        destination = $(elementClick).offset().top;
        $('body,html').animate({scrollTop: destination }, 1400);
    });
});

const hat__hamburger = document.querySelector('.hat__hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hat__hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

