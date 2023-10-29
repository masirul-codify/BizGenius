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

// faq area start

		const accordionItemHeaders = document.querySelectorAll(
			".accordion-item-header"
		  );
		  
		  accordionItemHeaders.forEach((accordionItemHeader) => {
			accordionItemHeader.addEventListener("click", (event) => {
			  // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
		  
			  const currentlyActiveAccordionItemHeader = document.querySelector(
				".accordion-item-header.active"
			  );
			  if (
				currentlyActiveAccordionItemHeader &&
				currentlyActiveAccordionItemHeader !== accordionItemHeader
			  ) {
				currentlyActiveAccordionItemHeader.classList.toggle("active");
				currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
			  }
			  accordionItemHeader.classList.toggle("active");
			  const accordionItemBody = accordionItemHeader.nextElementSibling;
			  if (accordionItemHeader.classList.contains("active")) {
				accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
			  } else {
				accordionItemBody.style.maxHeight = 0;
			  }
			});
		  });
		  
		  
		  
	// faq area end