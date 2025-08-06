// JavaScript Document
jQuery(document).ready(function($) {
	"use strict";

	$(window).on('load', function() {
						
		/*----------------------------------------------------*/
		/*	Preloader
		/*----------------------------------------------------*/
		
		var preloader = jQuery('#loader-wrapper'),
			loader = preloader.find('.cssload-box-loading');
			loader.fadeOut();
			preloader.delay(400).fadeOut('slow');
				
		$(window).stellar({});
		
	});


	$(window).on('scroll', function() {
								
		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/	
		
		var b = jQuery(window).scrollTop();
		
		if( b > 100 ){		
			jQuery(".wsmainfull").addClass("scroll");
		} else {
			jQuery(".wsmainfull").removeClass("scroll");
		}				

	});
			
		

	$('table').addClass('table');
	$('blockquote').addClass('blockquote');
	$('.sidebar-div select, .footer-widget select, .orderby').selectize({
		create: false,
	});
	$('.ig_es_form_field_name, .ig_es_form_field_email').addClass('form-control');
	$('.es_submit_button').addClass('btn btn-primary');
	$(".es_shortcode_form label").addClass('d-block');
	


	/*----------------------------------------------------*/
	/*	Animated Scroll To Anchor
	/*----------------------------------------------------*/
	
	$('.page a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {
		
		e.preventDefault();

		var target = this.hash,
			$target = jQuery(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 60 // - 200px (nav-height)
		}, 'slow', 'easeInSine', function () {
			window.location.hash = target;
		});
		
	});

	
	/*----------------------------------------------------*/
	/*	ScrollUp
	/*----------------------------------------------------*/
	
	$.scrollUp = function (options) {

		// Defaults
		var defaults = {
			scrollName: 'scrollUp', // Element ID
			topDistance: 600, // Distance from top before showing element (px)
			topSpeed: 800, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: '', // Text for element
			scrollImg: false, // Set true to use image
			activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		};

		var o = $.extend({}, defaults, options),
			scrollId = '#' + o.scrollName;

		// Create element
		$('<a/>', {
			id: o.scrollName,
			href: '#top',
			title: o.scrollText
		}).appendTo('body');
		
		// If not using an image display text
		if (!o.scrollImg) {
			$(scrollId).text(o.scrollText);
		}

		// Minium CSS to make the magic happen
		$(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

		// Active point overlay
		if (o.activeOverlay) {
			$("body").append("<div id='"+ o.scrollName +"-active'></div>");
			$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
		}

		// Scroll function
		$(window).on('scroll', function(){	
			switch (o.animation) {
				case "fade":
					$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
					break;
				case "slide":
					$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
					break;
				default:
					$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
			}
		});

		// To the top
		$(scrollId).on('click', function(event){
			$('html, body').animate({scrollTop:0}, o.topSpeed);
			event.preventDefault();
		});

	};
	
	if( IMMIEX.backtotop != 'off' ){
		$.scrollUp();
	}
	


	/*----------------------------------------------------*/
	/*	Tabs #1
	/*----------------------------------------------------*/

	$('ul.tabs-1 li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs-1 li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	 /*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	var owl = $('.icons-carousel');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}	
		owl.owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			navBy: 1,
			dots: false,
			rtl: rtl,
			autoplayTimeout: 2500,
			autoplayHoverPause: true,
			smartSpeed: 900,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				768:{
					items:1
				},
				991:{
					items:1
				},
				1000:{
					items:1
				}
			}
	});
	/*----------------------------------------------------*/
	/*	Tabs #2
	/*----------------------------------------------------*/

	$('ul.tabs-2 li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs-2 li').removeClass('displayed');
		$('.tab-content').removeClass('displayed');

		$(this).addClass('displayed');
		$("#"+tab_id).addClass('displayed');
	});


	/*----------------------------------------------------*/
	/*	Hero Countries Carousel
	/*----------------------------------------------------*/

	var owl = $('.hero-coutries-carousel');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}
		owl.owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			navBy: 1,
			nav: true,
			dots: false,
			rtl: rtl,
			navText:['<span aria-label="Previous"><img loading="lazy" src="'+IMMIEX.IMMIEX_URI+'/images/prev.png"/></span>','<span aria-label="Next"><img loading="lazy" src="'+IMMIEX.IMMIEX_URI+'/images/next.png"/></span>'],	
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			smartSpeed: 900,
			responsive:{
				0:{
					items:1
				},
				550:{
					items:1
				},
				767:{
					items:1
				},
				768:{
					items:2
				},
				991:{
					items:3
				}
			}
	});


    /*----------------------------------------------------*/
	/*	Tabs Carousel
	/*----------------------------------------------------*/

	var owl = $('.services-carousel');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}
		owl.owlCarousel({
			items: 4,
			loop:true,
			autoplay:true,
			navBy: 1,
			nav: true,
			dots: false,
			rtl: rtl,
			navText:['<span aria-label="Previous"><img loading="lazy" src="'+IMMIEX.IMMIEX_URI+'/images/prev.png"/></span>','<span aria-label="Next"><img loading="lazy" src="'+IMMIEX.IMMIEX_URI+'/images/next.png"/></span>'],
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			smartSpeed: 900,
			responsive:{
				0:{
					items:1
				},
				550:{
					items:1
				},
				767:{
					items:2
				},
				768:{
					items:2
				},
				992:{
					items:3
				},
				1100:{
					items:4
				}
			}
	});


	/*----------------------------------------------------*/
	/*	Portfolio Grid
	/*----------------------------------------------------*/
	
		$('.grid-loaded').imagesLoaded(function () {

	        // filter items on button click
	        $('.brands-filter').on('click', 'button', function () {
	            var filterValue = $(this).attr('data-filter');
	            $grid.isotope({
	              filter: filterValue
	            });
	        });

	        // change is-checked class on buttons
	        $('.brands-filter button').on('click', function () {
	            $('.brands-filter button').removeClass('is-checked');
	            $(this).addClass('is-checked');
	            var selector = $(this).attr('data-filter');
	            $grid.isotope({
	              filter: selector
	            });
	            return false;
	        });

	        // init Isotope
	        var $grid = $('.masonry-wrap').isotope({
	            itemSelector: '.brand-3',
	            percentPosition: true,
	            transitionDuration: '0.7s',
	            masonry: {
	              // use outer width of grid-sizer for columnWidth
	              columnWidth: '.brand-3',
	            }
	        });
	        
	    });
	
	


		


	/*----------------------------------------------------*/
	/*	Single Image Lightbox
	/*----------------------------------------------------*/
			
	$('.image-link').magnificPopup({
	  type: 'image'
	});	


	/*----------------------------------------------------*/
	/*	Video Link #1 Lightbox
	/*----------------------------------------------------*/
	

	$('.video-popup1').each(function(){		
	var videoUrl = $(this).attr( 'href' );
	$(this).magnificPopup({
	    type: 'iframe',			  	  
		iframe: {
				patterns: {
					youtube: {				   
						index: 'youtube.com',
						src: videoUrl					
							}
						}
					}		  		  
	});
});
	/*----------------------------------------------------*/
	/*	Video Link #2 Lightbox
	/*----------------------------------------------------*/
	
	

	$('.video-popup2').each(function(){		
	var videoUrl = $(this).attr( 'href' );
	$(this).magnificPopup({
	    type: 'iframe',			  	  
		iframe: {
				patterns: {
					youtube: {				   
						index: 'youtube.com',
						src: videoUrl					
							}
						}
					}		  		  
	});
});

	/*----------------------------------------------------*/
	/*	Video Link #3 Lightbox
	/*----------------------------------------------------*/
	
	

	$('.video-popup3').each(function(){		
	var videoUrl = $(this).attr( 'href' );
	$(this).magnificPopup({
	    type: 'iframe',			  	  
		iframe: {
				patterns: {
					youtube: {				   
						index: 'youtube.com',
						src: videoUrl					
							}
						}
					}		  		  
	});
});


	/*----------------------------------------------------*/
	/*	Statistic Counter
	/*----------------------------------------------------*/

	$('.count-element').each(function () {
		$(this).appear(function() {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		},{accX: 0, accY: 0});
	});


	/*----------------------------------------------------*/
	/*	Brands Logo Rotator
	/*----------------------------------------------------*/

	var owl = $('.brands-carousel');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}
		owl.owlCarousel({
			items: 6,
			loop:true,
			autoplay:true,
			navBy: 1,
			rtl: rtl,
			autoplayTimeout: 4000,
			autoplayHoverPause: false,
			smartSpeed: 2000,
			responsive:{
				0:{
					items:2
				},
				550:{
					items:3
				},
				767:{
					items:3
				},
				768:{
					items:4
				},
				991:{
					items:4
				},				
				1000:{
					items:5
				}
			}
	});
		
	/*----------------------------------------------------*/
	/*	Sticky Bottom Quick
	/*----------------------------------------------------*/

	$('.help-btn').on('click', function(){
        $(".sticky-form").toggleClass("open");
        $(this).toggleClass("clicked");
    });

	/*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	var owl = $('.reviews-holder');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}
		owl.owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			navBy: 1,
			nav: true,
			dots: false,
			rtl: rtl,
			autoplayTimeout: 4500,
			autoplayHoverPause: true,
			smartSpeed: 1500,
			navText:['<span aria-label="Previous"><img loading="lazy" src="'+IMMIEX.IMMIEX_URI+'/images/prev.png"/></span>','<span aria-label="Next"><img loading="lazy" src="'+IMMIEX.IMMIEX_URI+'/images/next.png"/></span>'],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				768:{
					items:2
				},
				991:{
					items:3
				},
				1000:{
					items:3
				}
			}
	});


	/*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	var owl = $('.testimonials-holder');
		if ($('body').hasClass('rtl')) {
			var rtl = true;
		}else{
			var rtl = false;
		}
		owl.owlCarousel({
			items: 4,
			loop:true,
			autoplay:true,
			navBy: 1,
			nav: true,
			dots: false,
			rtl: rtl,
			autoplayTimeout: 4500,
			autoplayHoverPause: false,
			smartSpeed: 1500,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				768:{
					items:2
				},
				991:{
					items:3
				},
				1000:{
					items:4
				}
			}
	});

	// Woocommerce scripts
	/* count control */
    $(document).on('click', '.count-control',  function(){
    	var $quantity_input = $(this).closest('.quantity').find('.qty');
        var old = parseInt($quantity_input.val());
        var step = parseInt($quantity_input.attr('step'));
        if($(this).hasClass('plus')){
          $quantity_input.val(old+step);          

        }else{
          if(old > 1){
            $quantity_input.val(old-step);
          }     
        }

        $(this).closest('form').find('button[type="submit"]').prop('disabled', false);
        return false;
    });

    /*product-gallery-carousel*/
    $('.product-gallery-carousel').owlCarousel({
         margin: 15,
         nav: false,
         dots: true,
         items: 3
    });	

    $('.woocommerce-product-gallery__image a').magnificPopup({
	  type: 'image'
	});

	var preloader = $('#loader-wrapper'),
	loader = preloader.find('.loading-center');
	loader.fadeOut();
	preloader.delay(1500).fadeOut('slow');

	
});