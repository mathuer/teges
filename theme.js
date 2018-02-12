Bliss.Theme = function() {
};

//Create a function for each one of your javascript/jQuery operations to maintain order!


Bliss.Theme.HandleHeaderScroll = function() {
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll >= 1){
			$("#header").addClass("header-scroll");
			 $("#slideshow-wrapper").addClass("scroll");
		}else{
			$("#header").removeClass("header-scroll");
			$("#slideshow-wrapper").removeClass("scroll");
		}
	});
};

// Create an instace of your function.
$(function($) {
	Bliss.Theme.HandleHeaderScroll();
} );

