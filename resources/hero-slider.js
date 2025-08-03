( function( $, document, window, i18n ) {
    function init() {    	
        /*----------------------------------------------------*/
		/*	Hero Slider
		/*----------------------------------------------------*/

		$('.slider').slider({
			full_width: false,
			interval:6000,
			transition:1000,
			draggable: false,
			indicators: false,
		});

		$('.slide-next').click(function() {
			$('.slider').slider('next');
		});

		$('.slide-prev').click(function() {
			$('.slider').slider('prev');
		});
    }

    // Run when a document ready on the front end.
    $( document ).ready( init );

    // Run when a block preview is done loading.
    $( document ).on( 'mb_blocks_preview/hero-slider', init );
} )( jQuery, document, window );
