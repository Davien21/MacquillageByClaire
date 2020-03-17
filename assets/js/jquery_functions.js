
$(document).ready(function(){
	let hideSideBar = () => {
		$('body').css('overflow','auto');
		$('#side-menu-nav div.overlay').removeClass('animated slideInRight');
		$('#side-menu-nav div.overlay').addClass('animated slideOutRight faster');	
		setTimeout(function(){$('header nav#side-menu-nav').addClass('d-none')}, 500);
	};
	let showSideBar = () => {
		$('body').css('overflow','hidden');
		$('header nav#side-menu-nav').removeClass('d-none');
		$('#side-menu-nav div.overlay').addClass('slideInRight');
		$('#side-menu-nav div.overlay').removeClass('slideOutRight faster');
	};
	$(window).scroll(function(){
		let scrollTop = $(window).scrollTop();
		if (scrollTop >70) {
			$('header nav#sticky-nav #sticky-nav-wrapper').removeClass('d-none');
			$('header nav#sticky-nav #sticky-nav-wrapper').addClass('fadeInDown')
			$('header nav#sticky-nav #sticky-nav-wrapper').removeClass('fadeOutUp')
		}else if (scrollTop < 100){
			$('header nav#sticky-nav #sticky-nav-wrapper').removeClass('fadeInDown')
			$('header nav#sticky-nav #sticky-nav-wrapper').addClass('fadeOutUp')
		}


	})

	$('button.navbar-toggler').click(function(){
		$('#side-menu-nav').toggleClass('show-sidebar');
		if($('#side-menu-nav').hasClass('show-sidebar')) {
			showSideBar();
		}else if(!$('#side-menu-nav').hasClass('show-sidebar')){
			hideSideBar();
		}

	})
	$('#side-menu-nav #menu-div').click(function(e){
		e.stopPropagation();
	})
	$('#side-menu-nav div.overlay').click(function(){
		$('#side-menu-nav').removeClass('show-sidebar');
		hideSideBar();
	})
	$('.close-side-nav-btn').click(function(){
		$('#side-menu-nav').removeClass('show-sidebar');
		hideSideBar();
	});
	

 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
     

	
	  
	// $('#what-we-do a.get-claired').mouseenter(function(){
	// 	$('#what-we-do a.get-claired .animated').addClass('bounce infinite')
	// });
	// $('#what-we-do a.get-claired').mouseleave(function(){
	// 	$('#what-we-do a.get-claired .animated').removeClass('bounce infinite')
	// });
}); 
