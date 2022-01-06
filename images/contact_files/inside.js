$(function(e) {
    $('.history_slider').slick({
		dots: false,
		autoplay: false,
		arrows: true,
		prevArrow: '<span href="" data-role="none" class="slider_prev2">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="slider_next2">Next</span>',
		infinite: false,
		speed:500,
		fade: false,
		cssEase: 'linear',
		pauseOnHover: false,
		autoplaySpeed:5000,
		slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
	{
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});	
});

$(function(e) {
var heightW = $(".top_banner_parallax").height()+80;
if($(window).width()>1024){
//var heightW = $(window).height();
$('.parallax_bottom').css('margin-top', heightW + 'px');
}
//$('#contents-main').css('margin-top', heightW + 'px');

});

	function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
	}
	
	$(function() {
		
		
		// display the first div by default.
$(".accordion .accordion-section-content").first().css('display', 'block');
//$('.accordion .accordion-section-title a').removeClass('active');


// Get all the links.
var links = $(".accordion-section-title a");

// On clicking of the links do something.
links.on('click', function(e) {
	$('.accordion .accordion-section-title a').removeClass('active');
$(this).addClass('active');
    e.preventDefault();

    var a = $(this).attr("href");

    $(a).slideDown('fast');

    //$(a).slideToggle('fast');
    $(".accordion .accordion-section-content").not(a).slideUp('fast');
    
});
		
		
		
		
		
//	function close_accordion_section() {
//		$('.accordion .accordion-section-title a').removeClass('active');
//		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
//	}
//
//
//	$('.accordion-section-title a').click(function(e) {
//
//		// Grab current anchor value
//		var currentAttrValue = $(this).attr('href');
//
//		if($(e.target).is('.active')) {
//			close_accordion_section();
//		}else {
//			close_accordion_section();
//
//			// Add active class to section title
//			$(this).addClass('active');
//			// Open up the hidden content panel
//			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
//		}
//		
//
//
//		e.preventDefault();
//	});
});

$(function(e) {
    	//$('.share_ic').on('click', function(event){
			$(document).on('click','.share_ic', function(event){
			//alert(0);
		$(".open_share").fadeIn();
		$('.share-overlay').toggleClass('is-visible');
		//$("html, body").toggleClass("noScrollSimple");
	});
	
		$('.share-overlay, .open_share li a, .open_share').on('click', function(){
		$(".open_share").fadeOut();
		$('.share-overlay').removeClass('is-visible');
	});
});



$(function(){


var cboxOptions_pol = {
  iframe:false,
  width: '100%',
  height: '100%',
  className: 'leadershippopup',
  //maxWidth: '950px',
 // maxHeight: 600,
  scrolling:$(window).width()>1024 ? false : true,
  fixed:true,

 onComplete:function(){
	$(".scroll2").mCustomScrollbar({
		scrollButtons:{
			enable:false
		},
		theme:"minimal"
		
	});
 }
}
 var cboxOptions_pol = {
  iframe:false,
  width: '100%',
  //maxWidth: '600px',
  scrolling:$(window).width()>1024 ? false : true,
  fixed:true
}

$('.policies_pop').colorbox(cboxOptions_pol);

$(window).resize(function(){
  $.colorbox.resize({
    width: window.innerWidth > parseInt(cboxOptions_pol.maxWidth) ? cboxOptions_pol.maxWidth : cboxOptions_pol.width,
    width: window.innerWidth > parseInt(cboxOptions_pol.maxWidth) ? cboxOptions_pol.maxWidth : cboxOptions_pol.width
  });
}); 


}); 
$(function(){

if($(window).width()>1080){

$('.nav-wheel').hide();
$(window).scroll(function() {
   if($(window).scrollTop() > 200) {
      // alert("bottom!");
      $('.nav-wheel').fadeIn();
   }else{
	   $('.nav-wheel').fadeOut();
	   }
})
}
});

$(function(){
	
	$('.stories_slider').slick({
		dots: false,
		autoplay: false,
		arrows: true,
		prevArrow: '<span href="" data-role="none" class="story_prev3">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="story_next3">Next</span>',
		infinite: true,
		speed:500,
		fade: false,
		cssEase: 'linear',
		pauseOnHover: false,
		slide: 'li',
		autoplaySpeed:5000,
		slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
	{
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});	
	


	});
	
	$(function(e) {
    	//$('.share').on('click', function(event){
			//$('.share').click(function(){
			$(document).on('click','.share', function(event){
			//alert(0);
		$(".open_share").fadeIn();
		$('.share-overlay').toggleClass('is-visible');
		//$("html, body").toggleClass("noScrollSimple");
	});
	
		$('.share-overlay, .open_share li a, .open_share').on('click', function(){
		$(".open_share").fadeOut();
		$('.share-overlay').removeClass('is-visible');
	});
});

  $(function(){
	  
	  $('ul.gallery-tab').each(function(){
  // For each set of tabs, we want to keep track of
  // which tab is active and its associated content
  var $active, $content, $links = $(this).find('a');

  // If the location.hash matches one of the links, use that as the active tab.
  // If no match is found, use the first link as the initial active tab.
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');

  $content = $($active[0].hash);

  // Hide the remaining content
  $links.not($active).each(function () {
    $(this.hash).hide();
  });

  // Bind the click event handler
  $(this).on('click', 'a', function(e){
    // Make the old tab inactive.
    $active.removeClass('active');
    $content.hide();

    // Update the variables with the new link and content
    $active = $(this);
    $content = $(this.hash);

    // Make the tab active.
    $active.addClass('active');
    $content.show();

    // Prevent the anchor's default click action
    e.preventDefault();
  });
});


	





 });
 
 $(function(e) {
	 

	 
    $('#storiesInside_slide').slick({
		dots: false,
		autoplay: false,
		arrows: true,
		prevArrow: '<span href="" data-role="none" class="detail_slider_prev">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="detail_slider_next">Next</span>',
		infinite: true,
		speed:500,
		fade: false,
		cssEase: 'linear',
		pauseOnHover: false,
		slide: 'li',
		autoplaySpeed:5000
	}).on('afterChange',function(e,o){
    //on change slide = do action
    $('iframe').each(function(){
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
    });
});
	
	


});