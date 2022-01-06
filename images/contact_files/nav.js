jQuery(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MqL = 1170;
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	//mobile - open lateral menu clicking on the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		
		event.preventDefault();
		if( $('.cd-main-content').hasClass('nav-is-visible') ) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
		} else {
			$(this).addClass('nav-is-visible');
			$('.cd-primary-nav').addClass('nav-is-visible');
			$('.cd-main-header').addClass('nav-is-visible');
			$('html, body').addClass('noScrollSimple');
			$('.cd-main-content').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
			toggleSearch('close');
			$('.cd-overlay').addClass('is-visible');
		}
	});

	//open search form
	$('.cd-search-trigger').on('click', function(event){
		event.preventDefault();
		toggleSearch();
		closeNav();
	});
	
		//open search form


	//close lateral menu on mobile 
	$('.cd-overlay').on('swiperight', function(){
		if($('.cd-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
		}
	});
	$('.nav-on-left .cd-overlay').on('swipeleft', function(){
		if($('.cd-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
		}
	});
	$('.cd-overlay').on('click', function(){
		closeNav();
		toggleSearch('close')
		$('.cd-overlay').removeClass('is-visible');
	});


	//prevent default clicking on direct children of .cd-primary-nav  changes sumit if problem for main link
//	$('.cd-primary-nav').children('.has-children').children('a').on('click', function(event){
//		event.preventDefault();
//	});
	
	$('.cd-primary-nav > li > a').on('click', function(event){
		//alert();
		//if( !checkWindowWidth() ) event.preventDefault(); changes 23 jan 2018 sumit
		var selected = $(this);
		if( selected.next('ul').hasClass('is-hidden') ) {			
			$('.cd-overlay').addClass('is-visible');
		} else {
			$('.cd-overlay').removeClass('is-visible');
		}
		
	});
	
	
	//open submenu
	/* $('.has-children').children('a').on('click', function(event){
		if( !checkWindowWidth() ) event.preventDefault();
		var selected = $(this);
		if( selected.next('ul').hasClass('is-hidden') ) {
			//desktop version only
			selected.addClass('selected').next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('moves-out');
			selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
			//$('.cd-overlay').addClass('is-visible');
		} else {
			selected.removeClass('selected').next('ul').addClass('is-hidden').end().parent('.has-children').parent('ul').removeClass('moves-out');
			//$('.cd-overlay').removeClass('is-visible');
		}
		toggleSearch('close');
	}); */
	
	
	
	if($(window).width()>1080){
		 $('.has-children').hover(function(event){
		if( !checkWindowWidth() ) event.preventDefault();
		var selected = $(this);
		if( selected.children('ul').hasClass('is-hidden') ) {
			//desktop version only
			selected.children('a').addClass('selected').next('ul').removeClass('is-hidden').end().parent('ul').addClass('moves-out');
			selected.siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
			//$('.cd-overlay').addClass('is-visible');
		} else {
			selected.children('a').removeClass('selected').next('ul').addClass('is-hidden').end().parent('ul').removeClass('moves-out');
			//$('.cd-overlay').removeClass('is-visible');
		}
		toggleSearch('close');
	});
	}else{
		$('.has-children').children('a').on('click', function(event){
		if( !checkWindowWidth() ) event.preventDefault();
		var selected = $(this);
		if( selected.next('ul').hasClass('is-hidden') ) {
			//desktop version only
			selected.addClass('selected').next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('moves-out');
			selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
			//$('.cd-overlay').addClass('is-visible');
		} else {
			selected.removeClass('selected').next('ul').addClass('is-hidden').end().parent('.has-children').parent('ul').removeClass('moves-out');
			//$('.cd-overlay').removeClass('is-visible');
		}
		toggleSearch('close');
	}); 
		}
		
				$(function(e) {
	
				
   $(".happytoconnect-icon").click(function(){			
	 $(".happyconnection").toggleClass("open");   
	 $("body").toggleClass("open-btn");   				
   });
   
   $(".happytoconnect-open-icon h3, .overlay").click(function(){			
	 $(".happyconnection").removeClass("open");   
	 $("body").removeClass("open-btn");   						
   });

	});
	
	
//	$(".marketcenter_nav .is-hidden:not(:first)").hide();
//	
//
//		$('.marketcenter_nav .tab_link').click(function(){
//			
//			$(this).next('.has-children').show();
//			})
	
	
	

	
	
	
//		$('.has-children').children('a.tab_link').on('click', function(event){
//			;
//			$("ul.is-hidden").addClass("demo");
//		//$(this).next('ul').show();
//	});

	//submenu items - go back link
	$('.go-back span').on('click', function(){
		//alert(0);
		//$(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
		$(".cd-nav-gallery").addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
	});
	
		$('.cd-secondary-nav .go-back span').on('click', function(){
		//$(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
		$(this).parent().parent().addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
	});
	
	
		$('.cd-secondary-nav .go-back span').on('click', function(){
		//$(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
		$(this).parent().parent().parent().addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
	});

	function closeNav() {
		$('.cd-nav-trigger').removeClass('nav-is-visible');
		$('.cd-main-header').removeClass('nav-is-visible');
		$('html, body').removeClass('noScrollSimple');
		$('.cd-primary-nav').removeClass('nav-is-visible');
		$('.has-children ul').addClass('is-hidden');
		$('.has-children a').removeClass('selected');
		$('.moves-out').removeClass('moves-out');
		$('.cd-main-content').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$('body').removeClass('overflow-hidden');
		});
	}

	function toggleSearch(type) {
		if(type=="close") {
			//close serach 
			$('.cd-search').removeClass('is-visible');
			$('.cd-search-trigger').removeClass('search-is-visible');
			$('.cd-overlay').removeClass('search-is-visible');
			
		} else {
			//toggle search visibility
			$('.cd-search').toggleClass('is-visible');
			
			$('.cd-search-trigger').toggleClass('search-is-visible');
			$('.cd-overlay').toggleClass('search-is-visible');
			if($(window).width() > MqL && $('.cd-search').hasClass('is-visible')) $('.cd-search').find('input[type="search"]').focus();
			($('.cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible') ;
		}
	}

	function checkWindowWidth() {
		//check window width (scrollbar included)
		var e = window, 
            a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        if ( e[ a+'Width' ] >= MqL ) {
			return true;
		} else {
			return false;
		}
	}

	function moveNavigation(){
		var navigation = $('.cd-nav');
  		var desktop = checkWindowWidth();
        if ( desktop ) {
			navigation.detach();
			navigation.insertBefore('.cd-header-buttons');
		} else {
			navigation.detach();
			navigation.insertAfter('.cd-main-content');
		}
	}
	
	
	
	
	if($(window).width()>1080){
	$('.marketcenter_nav > li:first > a').addClass('mcnActive');
	$('.marketcenter_nav > li:not(:first) ul').hide();
	$('.marketcenter_nav > li > a').hover(function(){
		//alert('a');
		if($(window).width() > MqL){
			if($(this).next('ul').is(':visible')==false){
		$('.marketcenter_nav > li ul').fadeOut();
		$('.marketcenter_nav > li > a').removeClass('mcnActive');
			}
		$(this).next('ul').fadeIn();
		$(this).addClass('mcnActive');
		}
		});
	
	}
	
	
	
});


$(function(){

$('.qlClose').click(function(){
	$('.quick-links').animate({'left':'-70px'},function(){
		$('.qlOpen').animate({'right':'-30px'})
		})	
	})
	
$('.qlOpen').click(function(){
	$('.quick-links').animate({'left':'0px'})
		$('.qlOpen').animate({'right':'0px'})		
	})
		

for(var i=1; i<$('.inside_content_wrapper > div').length+1; i++){
  $('.page-wheel-nav').append("<span class='inside_content_sec_link' id='"+i+"'><b></b></span>")
} 

$('.page-wheel-nav span.inside_content_sec_link').each(function(i){
	$(this).find('b').text($('.inside_content_wrapper > div:eq('+i+')').attr('data-text'));
	})

 var $lis = $('.page-wheel-nav').find('.inside_content_sec_link');
   var $lis2 =  Math.round($lis.length/2);
   var $mod =  $lis.length%2;  

if($mod==1){
   for(var i = 0, len = $lis.length; i < len+1; i+=$lis2){          
     $lis.slice(i, i+$lis2).wrapAll("<div class='icsl'></div>");
  }
  } 
else{
  for(var i = 0, len = $lis.length; i < len; i+=$lis2){          
 $lis.slice(i, i+$lis2).wrapAll("<div class='icsl'></div>");
  }
  }
  

$('.icsl span').on('click', function(){
	$('html, body').animate({scrollTop:$('.inside_content_wrapper > div:nth-child('+$(this).attr('id')+')').offset().top-100})
	})

//$(window).scroll(function() {
//   if($(window).scrollTop() > 200) {
//     // alert("bottom!");
//      $('.cd-main-header').addClass('shrink');
//   }else{
//	   $('.cd-main-header').removeClass('shrink');
//	   }
//})


})

//$(function(){
// var shrinkHeader = 300;
//  $(window).scroll(function() {
//    var scroll = getCurrentScroll();
//      if ( scroll >= shrinkHeader ) {
//           $('.cd-main-header').addClass('shrink');
//        }
//        else {
//            $('.cd-main-header').removeClass('shrink');
//        }
//  });
//function getCurrentScroll() {
//    return window.pageYOffset || document.documentElement.scrollTop;
//    }
//});

