$(document).ready( function() {
	console.log("js on");
	
    // Every time the window is scrolled ... 
    $(window).scroll( function(){
        // Check the location of each desired element
        $('.hideme').each( function(i){
        	// Below is a trial attempt
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            // var bottom_of_window = $(window).scrollTop() + $(window).height();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 450;// <-- You can edit how soon the div shows up by editing the number at the end
            // If the object is completely visible in the window, fade it it
            if( bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);      
            }
        }); 
    });

	//Initial Phone ScreenCap Default Selection
	$("#initSelect").addClass('phScrnCol');
	$("#pointerRight").hide();
	$("#captionHeader").html("TAB2");
	$("#captionContent").html("Tab2 the feed tab where every update from every business in your area is conveniently displayed.");
   	//Image Selection
  	$( ".phoneScrnCap" ).mouseenter(function() {
  		$( ".phoneScrnCap" ).each(function() {
  			$(this).addClass('phScrnGry');
  			$( this ).removeClass( "phScrnCol" );
		});
  		$(this).addClass('phScrnCol');
	});

  	//Caption Movement
	$(".photo1").mouseenter(function() {
		$("#cap1").removeClass("col-sm-offset-5 col-sm-offset-2 col-sm-offset-8 col-sm-offset-6");
		$("#cap1").addClass("col-sm-offset-2");
		$("#pointerLeft").show();
		$("#pointerRight").hide();
		//Caption content change
		$("#captionHeader").html("TAB1");
		$("#captionContent").html("Tab1 the feed tab where every update from every business in your area is conveniently displayed.");
	});
	$(".photo2").mouseenter(function() {
		$("#cap1").removeClass("col-sm-offset-5 col-sm-offset-2 col-sm-offset-8 col-sm-offset-6");
		$("#cap1").addClass("col-sm-offset-5");
		$("#pointerLeft").show();
		$("#pointerRight").hide();
		//Caption content change
		$("#captionHeader").html("TAB2");
		$("#captionContent").html("Tab2 the feed tab where every update from every business in your area is conveniently displayed.");
	});
	$(".photo3").mouseenter(function() {
		$("#cap1").removeClass("col-sm-offset-5 col-sm-offset-2 col-sm-offset-8 col-sm-offset-6");
		$("#cap1").addClass("col-sm-offset-8");
		$("#pointerLeft").show();
		$("#pointerRight").hide();
		//Caption content change
		$("#captionHeader").html("TAB3");
		$("#captionContent").html("Tab3 the feed tab where every update from every business in your area is conveniently displayed.");
	});
	$(".photo4").mouseenter(function() {
		$("#cap1").removeClass("col-sm-offset-5 col-sm-offset-2 col-sm-offset-8 col-sm-offset-6");
		$("#cap1").addClass("col-sm-offset-6");
		$("#pointerLeft").hide();
		$("#pointerRight").show();
		//Caption content change
		$("#captionHeader").html("TAB4");
		$("#captionContent").html("Tab4 the feed tab where every update from every business in your area is conveniently displayed.");
	});


});
