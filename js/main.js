$(function() {
  $(".menu a, .to-top").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 200) {
      $('.header__top').addClass("sticky");
    } else {
      $('.header__top').removeClass("sticky");
    }
  });

    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="стрелка вправо"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false
              }
            },
          ]
    });

    $('.menu__btn, .menu__link').on('click', function() {
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });

    var mixer = mixitup('.portfolio__content');
});