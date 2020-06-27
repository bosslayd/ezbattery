/*

	Template Name: ezbattery - Landing HTML Template
	Author: bosslayd
	Author URI: 
	Description: 
	Version: 1.0
   =====================
   table of content 
   ====================
   1.   menu toogle
   2.   Banner
   3.  back to top
  
*/


jQuery(function ($) {



   /**-------------------------------------------------
    *Fixed HEader
    *----------------------------------------------------**/
   $(window).on('scroll', function () {

      /**Fixed header**/
      if ($(window).scrollTop() > 250) {
         $('.header').addClass('sticky fade_down_effect');
      } else {
         $('.header').removeClass('sticky fade_down_effect');
      }
   });

   /* ---------------------------------------------
                     Menu Toggle 
   ------------------------------------------------ */

   if ($(window).width() < 991) {
      $(".navbar-nav li a").on("click", function () {
         $(this).parent("li").find(".dropdown-menu").slideToggle();
         $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
      });

   }

	// if($('.navbar li.dropdown ul').length){
	// 	 //Disable dropdown parent link
   //     $('.navbar .navbar-nav li.dropdown > a').on('click', function(e) {
	// 		e.preventDefault();
	// 	});
	// }


   

   /*==========================================================
          main slider
  ======================================================================*/

   if ($('.main-slider','.slider').length > 0) {
      var bannerSlider = $(".main-slider",".slider");
      bannerSlider.owlCarousel({
         items: 1,
         mouseDrag: true,
         loop: true,
         touchDrag: true,
         autoplay:true,
         dots: true,
         autoplayTimeout: 5000,
         animateOut: 'fadeOut',
         autoplayHoverPause: true,
         smartSpeed: 250,
      });
   }
   if ($('.slider').length > 0) {
      var bannerSlider = $(".slider");
      bannerSlider.owlCarousel({
         items: 1,
         mouseDrag: true,
         loop: true,
         touchDrag: true,
         autoplay:true,
         dots: true,
         autoplayTimeout: 5000,
         animateOut: 'fadeOut',
         autoplayHoverPause: true,
         smartSpeed: 250,
      });
   }

   /*=============================================================
   			gallery
   	=========================================================================*/

   $('.ts-popup').magnificPopup({
      type: 'image'
   });
   
  
   /*=============================================================
   			video popup
   	=========================================================================*/

   $('.ts-video-popup').magnificPopup({
      type: 'iframe',
      closeOnContentClick: false,
      midClick: true,
      callbacks: {
         beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
         }
      },
      zoom: {
         enabled: true,
         duration: 500, // don't foget to change the duration also in CSS
      },
      mainClass: 'mfp-fade',
   });

   

   /*==========================================================
   wow animated
    ======================================================================*/
   var wow = new WOW({
      animateClass: 'animated',
      mobile: false
   });
   wow.init();


   /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

   $(window).on('scroll', function () {
      if ($(window).scrollTop() > $(window).height()) {
         $(".BackTo").fadeIn('slow');
      } else {
         $(".BackTo").fadeOut('slow');
      }

   });
   $("body, html").on("click", ".BackTo", function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 0
      }, 800);
   });
});
