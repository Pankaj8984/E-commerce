// JavaScript Document

 var player,
    time_update_interval = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder');
}



$(function(e) {
var heightW = $(".video_wrapper").height();
if($(window).width()>1024){
var heightW = $(window).height();
$('#contents-main').css('margin-top', heightW + 'px');
}
//$('#contents-main').css('margin-top', heightW + 'px');
$(window).resize(function () {
var heightW = $(".video_wrapper").height();
//$('#contents-main').css('margin-top', heightW + 'px');
});
});







$(function(e) {
	if($(window).width()>1024){
    $(".top_sec").height($(window).height());
	}
	
	if($(window).width()>1024){
$("#video-placeholder").height(screen.height)
}
});

//		$(function(e) {
//	
//				
//   $(".happytoconnect-icon").click(function(){			
//	 $(".happyconnection").toggleClass("open");   
//	 $("body").toggleClass("open-btn");   				
//   });
//   
//   $(".happytoconnect-open-icon h3, .overlay").click(function(){			
//	 $(".happyconnection").removeClass("open");   
//	 $("body").removeClass("open-btn");   						
//   });
//
//	});
	


//-->

$(function(){
	//alert('aa');
	//onYouTubeIframeAPIReady();

$('#nextSec').click(function(e){
	e.preventDefault();
	$.fn.fullpage.moveSectionDown();
});



$('#home_banner_slider').slick({
		dots: false,
		dotsClass: 'banner-dots-home',
	   customPaging: function(slider, i) {
    return '<a href="#" data-role="none">' + (i + 1) + '</a>';
	},
		autoplay: true,
		arrows: true,
		prevArrow: '<span href="" data-role="none" class="slider_prev">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="slider_next">Next</span>',
		infinite: true,
		speed: 1500,
		fade: false,
		cssEase: 'linear',
		lazyLoad: 'progressive',
		pauseOnHover: true,
		//pauseOnDotsHover: true,
		slide: 'li',
		autoplaySpeed:8000,
		responsive: [
    {
      breakpoint: 680,
      settings: {
        dots: true,
        arrows: false,
		autoplay: true
      }
    }
  ]

 

	});	


$('#home_banner_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
	if($(window).width>1025){
	player.stopVideo();	
	}
	//$('#home_banner_slider').slick('slickPlay');
});



		
/* $('#home_banner_slider li.slick-active').hover(function(){
	player.playVideo();	
	}) */


	
$('.highlightSlider').slick({
		dots: false,
		autoplay: false,
		arrows: true,
		prevArrow: '<span href="" data-role="none" class="slider_prev2">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="slider_next2">Next</span>',
		infinite: true,
		speed:500,
		fade: false,
		cssEase: 'linear',
		pauseOnHover: false,
		slide: 'li',
		autoplaySpeed:5000,
		vertical:true
	});	
	
	
	$('.world_slider').slick({
		dots: false,
		autoplay: false,
		arrows: true,
		prevArrow: '<span href="" data-role="none" class="slider_prev_world">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="slider_next_world">Next</span>',
		infinite: true,
		speed:500,
		fade: false,
		cssEase: 'linear',
		pauseOnHover: false,
		slide: 'li',
		autoplaySpeed:5000,
		slidesToShow: 3,
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
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 520,
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
	
	
$('.news_slider').slick({
		dots: false,
		autoplay: false,
		arrows: true,
		prevArrow: '<span href="" data-role="none" class="slider_prev2">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="slider_next2">Next</span>',
		infinite: true,
		speed:500,
		fade: false,
		cssEase: 'linear',
		pauseOnHover: false,
		slide: 'li',
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
	
$('.latestImgSlider').slick({
		dots: false,
		autoplay: true,
		arrows: false,
		prevArrow: '<span href="" data-role="none" class="slider_prev">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="slider_next">Next</span>',
		infinite: true,
		speed:500,
		fade: false,
		cssEase: 'linear',
		pauseOnHover: false,
		slide: 'li',
		autoplaySpeed:5000,
		asNavFor: '.latest-text'
	});	
	
$('.latest_text').slick({
		dots: false,
		autoplay: true,
		arrows: true,
		prevArrow: '<span href="" data-role="none" class="slider_prev">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="slider_next">Next</span>',
		infinite: true,
		speed:500,
		fade: false,
		cssEase: 'linear',
		pauseOnHover: false,
		slide: 'li',
		autoplaySpeed:5000,
		asNavFor: '.latestImgSlider'
	});	
	
	
	

$(".search_ic").click(function(){
$(".search_container").slideToggle();
$(".searcharea").toggleClass('active');
$("body").toggleClass('search-active');
//$('body').append("<div class='overlay'></div>");		
});

$(".search-overlay").click(function(){
	//alert(0);
	$(".search_container").slideUp();
	$("body").removeClass('search-active');
	$(".searcharea").removeClass('active');
	})


$(".our_world_head_box h3").click(function(){
$(".our_world_head_box ul").slideToggle();
$(".world_block").toggleClass('active');
$(".gray_bg").toggleClass('ourworld-active');
});

$(".ourworld-overlay").click(function(){
	//alert(0);
	$(".our_world_head_box ul").slideUp();
	$(".gray_bg").removeClass('ourworld-active');
	$(".world_block").removeClass('active');
	})



$(".news_head_box h3").click(function(){
    if ( $(".news_head_box ul").is( ':visible' ) ) {
        $(".news_head_box ul").slideToggle( 600, function() {
            $(".news_bg").toggleClass('news-active');
            $(".news_block").toggleClass('active');
        });
    } else {
        $(".news_block").toggleClass('active');
        $(".news_bg").toggleClass('news-active');
        $(".news_head_box ul").slideToggle();
    }

});

$(".news-overlay, .news_head_box ul li").click(function(){
        $(".news_head_box ul").slideToggle( 600, function() {
            $(".news_bg").removeClass('news-active');
            $(".news_block").removeClass('active');
        });
});


				//Examples of how to assign the Colorbox event to elements
				
 var cboxOptions9 = {
		iframe: true,
        width: '80%',
        //height: $(window).height()/2- parseInt(50)+'px',
		 height: $(window).height()- parseInt(50)+'px',
        maxWidth: '692px',
        maxHeight: '400px',
        rel: false,
		 className: 'box1'
        //initialWidth: 100
    }

    $('.iframetest').colorbox(cboxOptions9);
    //$(".leadership-pop").colorbox();
    $(window).resize(function () {
        $.colorbox.resize({
            width: window.innerWidth > parseInt(cboxOptions9.maxWidth) ? cboxOptions9.maxWidth : cboxOptions9.width,
            height: window.innerHeight > parseInt(cboxOptions9.maxHeight) ? cboxOptions9.maxHeight : cboxOptions9.height
        });
    });
				
				
  
$('ul.account-tab').each(function(){		  
  var $active, $content, $links = $(this).find('a');
    
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');

  $content = $($active[0].hash);
  
  $links.not($active).each(function () {
    $(this.hash).hide();
  });
  
  $(this).on('click', 'a', function(e){
	  
    $active.removeClass('active');
    $content.hide();
	
    $active = $(this);
    $content = $(this.hash);
	
    $active.addClass('active');
    $content.show();
	
    e.preventDefault();
  });
});

if($(window).width() < 1030){
$('.accordion ul li:first-child').addClass('haActive');
$('.accordion ul li').click(function(){
	$('.accordion ul li').removeClass('haActive');
	$(this).addClass('haActive');
	})
}




 });
 
 
 $(function(){

var cboxOptionsgeneva = {
  //iframe:false,
  iframe:true,
  width: '100%',
  height: '100%',
  className: 'geneva_popup',
  //maxWidth: '950px',
 // maxHeight: 600,
}



$('.geneva_pop').colorbox(cboxOptionsgeneva);

$(window).resize(function(){
  $.colorbox.resize({
    width: window.innerWidth > parseInt(cboxOptionsgeneva.maxWidth) ? cboxOptionsgeneva.maxWidth : cboxOptionsgeneva.width,
    width: window.innerWidth > parseInt(cboxOptionsgeneva.maxWidth) ? cboxOptionsgeneva.maxWidth : cboxOptionsgeneva.width
  });
}); 

	$(document).bind('cbox_open', function() {
  $('body,html').addClass("noScrollSimple");
}).bind('cbox_cleanup', function() {
  $('body,html').removeClass("noScrollSimple");
});

}); 

		(function($){
			$(window).load(function(){
				
				$(".ins_scroll").mCustomScrollbar({
					theme:"light-thick"
				});
				
			});
			
			$(".ins_scroll").height($(window).height()-10);
		})(jQuery);
			
			




			   
		
(function($){
   $(".page-wheel-nav .next").on('mousemove',function(e){
	 $(this).prev('.page-wheel').addClass("spinRight");			   
	
   }).on('mouseout', function(e){            
	  $(this).prev().removeClass("spinRight");
	  
   });	
   
   
	$(".page-wheel-nav .prev").on('mousemove',function(e){
	 $(this).prevAll('.page-wheel').addClass("spinLeft");
	 
   }).on('mouseout', function(e){            
	  $(this).prevAll('.page-wheel').removeClass("spinLeft");
	  
   });			
})(jQuery);	   
			   

		
			(function($){
			if($(window).width()>1080){
			$(window).load(function(){
				
				$("#ourworld_scroll").mCustomScrollbar({
					theme:"minimal"
				});
				
			});
		}
		})(jQuery);	
		
		

		









