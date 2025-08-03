if( jQuery('header .menu').length > 0 ){
    // Create a clone of the menu, right next to original.
    jQuery('header .menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

    scrollIntervalID = setInterval(stickIt, 10);
}



function stickIt() {

  var orgElementPos = jQuery('.original').offset();
  orgElementTop = orgElementPos.top;               

  if (jQuery(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = jQuery('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    jQuery('.header .cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    jQuery('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    jQuery('.header .cloned').hide();
    jQuery('.original').css('visibility','visible');
  }
}