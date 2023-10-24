/***************************************************
==================== JS INDEX ======================
****************************************************
// 00. PreLoader
// 02. Mobile Menu
// 03. Sidebar
// 04. Sticky Header Js
// 05. Data Background
// 06. Nice Select
// 07. settings append in body
// 08. settings open btn
// 09. Mouse Custom Cursor
// 10. rtl & color setting 
// 11. slider__active Js
// 12. Masonary Js
// 13. magnificPopup js 
// 14. Wow Js
// 15. InHover Active Js
// 16. testimonial-activation
// 17. op-gallery-activation
// 18. service-slider activation
// 19. brand-active activation
// 20. blog-slide activation
// 21. team activation
// 22. testimonial activation
// 23. video activation
// 24. pricing activation
// 25. Services Details Circle Js 
// 26. Active Odometer Counter 
// 27. video play 
// 28. load more btn 

****************************************************/

(function($) {
	"use strict"

	var windowOn = $(window);
	
	// 00. PreLoader
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);

			if ($('#ctn-preloader').hasClass('loaded')) {
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
	loader();
	
	// 02. Mobile Menu
	$("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
		meanContract: ['<i class="fal fa-minus"></i>'],
	});
	$("#mobile-menu-media-all").meanmenu({
		meanMenuContainer: ".mobile-menu-media-all",
		meanScreenWidth: "8000",
		meanExpand: ['<i class="fal fa-plus"></i>'],
		meanContract: ['<i class="fal fa-minus"></i>'],
	});
