/*

	Template Name: Exhibit - Conference & Event HTML Template
	Author: Themewinter
	Author URI: https://themeforest.net/user/themewinter
	Description: Exhibit - Conference & Event HTML Template
	Version: 1.0
   =====================
   table of content 
   ====================
   1.   menu toogle
   2.   event counter
   3.   funfact
   4.   isotope grid
   5.   main slider
   6.   speaker popup
   7.   gallery
   8.   video popup
   9.   hero area image animation
   10.  wow animated
   11.  back to top
  
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
     funfact 
     ======================================================================*/
   var skl = true;
   $('.ts-funfact').appear();

   $('.ts-funfact').on('appear', function () {
      if (skl) {
         $('.counterUp').each(function () {
            var $this = $(this);
            jQuery({
               Counter: 0
            }).animate({
               Counter: $this.attr('data-counter')
            }, {
               duration: 8000,
               easing: 'swing',
               step: function () {
                  var num = Math.ceil(this.Counter).toString();
                  if (Number(num) > 99999) {
                     while (/(\d+)(\d{3})/.test(num)) {
                        num = num.replace(/(\d+)(\d{3})/, '');
                     }
                  }
                  $this.html(num);
               }
            });
         });
         skl = false;
      }
   });

   /*=====================
    isotop grid
    ========================*/

   if ($('.grid').length > 0) {
      var $portfolioGrid = $('.grid'),
         colWidth = function () {
            var w = $portfolioGrid.width(),
               columnNum = 1,
               columnWidth = 0;
            if (w > 1200) {
               columnNum = 3;
            } else if (w > 900) {
               columnNum = 3;
            } else if (w > 600) {
               columnNum = 2;
            } else if (w > 450) {
               columnNum = 2;
            } else if (w > 385) {
               columnNum = 1;
            }
            columnWidth = Math.floor(w / columnNum);
            $portfolioGrid.find('.grid-item').each(function () {
               var $item = $(this),
                  multiplier_w = $item.attr('class').match(/grid-item-w(\d)/),
                  multiplier_h = $item.attr('class').match(/grid-item-h(\d)/),
                  width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
                  height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.3;
               $item.css({
                  width: width,
                  //height: height
               });
            });
            return columnWidth;
         },

         isotope = function () {
            $portfolioGrid.isotope({
               resizable: true,
               itemSelector: '.grid-item',
               masonry: {
                  columnWidth: colWidth(),
                  gutterWidth: 3
               }
            });
         };
      isotope();
      $(window).resize(isotope);
   } // End is_exists



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

   // service slider 

   if ($(".service-slide").length > 0) {
      var serviceSlider = $(".service-slide");
      serviceSlider.owlCarousel({
         items: 3,
         mouseDrag: true,
         loop: true,
         touchDrag: true,
         autoplay:true,
         dots: true,
         autoplayTimeout: 5000,
         animateOut: 'fadeOut',
         autoplayHoverPause: true,
         smartSpeed: 250,
         responsive : {
            0 : {
               items: 1
            },
            480 : {
               items: 2
            },
            768 : {
               items: 3
            }
        }
      });
   }
   // team slide 
   if ($(".team-slide").length > 0) {
      var serviceSlider = $(".team-slide");
      serviceSlider.owlCarousel({
         items: 4,
         mouseDrag: true,
         loop: true,
         touchDrag: true,
         autoplay:true,
         dots: true,
         autoplayTimeout: 5000,
         animateOut: 'fadeOut',
         autoplayHoverPause: true,
         smartSpeed: 250,
         margin: 0,
         responsive : {
            0 : {
               items: 1
            },
            480 : {
               items: 2
            },
            768 : {
               items: 2
            },
            992 : {
               items: 3
            }
        }
      });
   }

   if ($('.project-slider').length > 0) {
      var projectSlider = $(".project-slider");
      projectSlider.owlCarousel({
         items: 4,
         mouseDrag: true,
         loop: true,
         touchDrag: true,
         autoplay:true,
         dots: true,
         autoplayTimeout: 5000,
         animateOut: 'fadeOut',
         autoplayHoverPause: true,
         smartSpeed: 250,
         margin: 15,
         responsive : {
            0 : {
               items: 1
            },
            480 : {
               items: 2
            },
            768 : {
               items: 4
            }
        }
      });
   }

   if ($('.sponsor-slider').length > 0) {
      var bannerSlider = $(".sponsor-slider");
      bannerSlider.owlCarousel({
         items: 4,
         mouseDrag: true,
         loop: true,
         touchDrag: true,
         autoplay:true,
         dots: false,
         autoplayTimeout: 5000,
         animateOut: 'fadeOut',
         autoplayHoverPause: true,
         smartSpeed: 250,
         margin: 0,
         responsive : {
            0 : {
               items: 2
            },
            480 : {
               items: 3
            },
            768 : {
               items: 4
            }
        }
      });
   }

   if ($('.blog-slider').length > 0) {
      var blogslider = $(".blog-slider");
      blogslider.owlCarousel({
         items: 3,
         autoWidth:true,
         mouseDrag: true,
         loop: true,
         touchDrag: true,
         autoplay:true,
         dots: true,
         autoplayTimeout: 5000,
         animateOut: 'fadeOut',
         autoplayHoverPause: true,
         smartSpeed: 250,
         margin: 30
      });
   }


   // testimonial slider 

   if ($('.testimonial-slider').length > 0) {
      var testimonialSlider = $(".testimonial-slider");
      owl = testimonialSlider.owlCarousel({
         items 	 : 1,
         center	   : true, 
         nav        : true,
         dots       : true,
         loop       : true,
         margin     : 10,
         dotsContainer: '.testimonial-controls',
         navText: ['<i class="icon icon-arrow-right"></i>','<i class="icon icon-arrow-left"></i>'],
      });

      $('.testimonial-thumb').on('click', 'li', function(e) {
         owl.trigger('to.owl.carousel', [$(this).index(), 300]);
      });       
   }

   /*=============================================================
			 speaker popup
	=========================================================================*/

   $('.ts-image-popup').magnificPopup({
      type: 'inline',
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

   /*=============================================================
   			hero image animation
   	=========================================================================*/
   $('.tile')
      // tile mouse actions
      .on('mouseover', function () {
         $(this).children('.photo').css({
            'transform': 'scale(' + $(this).attr('data-scale') + ')'
         });
      })
      .on('mouseout', function () {
         $(this).children('.photo').css({
            'transform': 'scale(1)'
         });
      })
      .on('mousemove', function (e) {
         $(this).children('.photo').css({
            'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
         });
      })
      // tiles set up
      .each(function () {
         $(this)
            // add a photo container
            .append('<div class="photo"></div>')
            // some text just to show zoom level on current item in this example
            //.append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
            // set up a background image for each tile based on data-image attribute
            .children('.photo').css({
               'background-image': 'url(' + $(this).attr('data-image') + ')'
            });
      });

         // filter

         if ($('.portfolio').length > 0) {
           
            var $filter_project = $('.portfolio');
            var $filter_tiger = $('.portfolio-menu ul li');
   
            $filter_project.each(function(){
               $filter_project.filterizr({
                  layout: 'packed',
               });
            })
            $filter_tiger.on('click',function() { 
               $filter_tiger.removeClass('active');
               $(this).addClass('active');
            });

         }


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