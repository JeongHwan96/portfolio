$(function() {
	
	  $(document).ready(function() {
	
	    var scrollOffset = $('.MenuBar').offset();
	
	    $(window).scroll(function() {
	      if ($(document).scrollTop() > scrollOffset.top) {
	        $('.MenuBar').addClass('scroll-fixed');
	      }
	      else {
	        $('.MenuBar').removeClass('scroll-fixed');
	      }
	    });
	  } );
	
	});