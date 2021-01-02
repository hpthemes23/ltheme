/*
Theme Name:     LTHEME
Version:        1.0
Description:    Custom JS for the theme
*/
/* 
	All custom ids and classes used for the theme, starts with "ltheme".
	For demo 1 to demo 6, it uses "ltheme".
	For demo 2, it uses "lthemeD2". 
	For demo 6, it uses "lthemeD6".
	For index page, it uses "lthemeIndex".
	For documentation page, it uses "lthemeDoc".
*/
/* TABLE OF CONTENTS
	1. owl carousel
		1.1 for demo 1 to demo 6
			1.1.1 .ltheme-owl-1
			1.1.2 .ltheme-owl-2
			1.1.3 .ltheme-owl-3
		1.2 for demo 2
			1.2.1 .lthemeD2-owl-1
	2. wow
	3. navigation
		3.1 for demo 1 to demo 6
			3.1.1 #ltheme-navbar
END OF TABLE OF CONTENTS */
/* CUSTOM JS */
/* OWL CAROUSEL */
$(document).ready(function () {
	$(".ltheme-owl-1").owlCarousel({
		items: 6,
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2500,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			768: {
				items: 3,
				nav: false
			},
			992: {
				items: 4,
				nav: false
			},
			1200: {
				items: 4,
				nav: false
			}
		}
	});
	$(".ltheme-owl-2").owlCarousel({
		items: 4,
		loop: true,
		margin: 50,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			768: {
				items: 3,
				nav: false
			},
			992: {
				items: 4,
				nav: false
			},
			1200: {
				items: 4,
				nav: false
			}
		}
	});
	$(".ltheme-owl-3").owlCarousel({
		singleItem: true,
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 2500,
    	slideTransition: 'linear',
    	responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				stagePadding: 10,
				nav: false
			},
			576: {
				items: 1,
				stagePadding: 20,
				nav: false
			},
			768: {
				items: 1,
				stagePadding: 150,
				nav: false
			},
			992: {
				items: 1,
				stagePadding: 200,
				nav: false
			},
			1200: {
				items: 1,
				stagePadding: 250,
				nav: false
			}
		}
	});
	$(".lthemeD2-owl-1").owlCarousel({
		singleItem: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		smartSpeed: 3000,
    	animateIn: 'linear',
    	animateOut: 'slideOutRight',
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
});
/* END OF OWL CAROUSEL */
/* WOW */
$(document).ready(function(){
	new WOW().init();
});
/* END OF WOW */
/* NAVIGATION BAR */
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#ltheme-navbar').addClass('solid');
	    } else {
	        $('#ltheme-navbar').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#ltheme-navbar').hide();
	    }
	    else{
	    	$('#ltheme-navbar').show();
	    }
	});
});
/* SMOOTH SCROLL */
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({
			    scrollTop: $(hash).offset().top
			  }, 800, function(){
			    window.location.hash = hash;
			  });
			}
		});
	});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* END OF CUSTOM JS */