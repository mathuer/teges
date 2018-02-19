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


Bliss.Theme.HandleColumnTransform = function(){
	if( !$("#content-wrapper .page").length ){
		return;
	}
	
	$(".column-transform").each(function(){
		var column = $(this);
		var class_list = $(this).attr("class").split(" ");

		column_class = class_list[class_list.length-1];
		
		var split = column_class.split("-");
		var col_size = split[split.length-1];
		
					
		column.removeClass( column_class );
		column.addClass( "col-md-" + col_size);


	});
}



// Create an instace of your function.
$(function($) {
	Bliss.Theme.HandleHeaderScroll();
	Bliss.Theme.HandleColumnTransform();
} );

