jQuery(window).scroll(function () {
     if (jQuery(this).scrollTop() > 45) {
         jQuery("header").addClass("fixed-header");
       } else {
         jQuery("header").removeClass("fixed-header");
       }
     });

     jQuery(document).ready(function () {
        jQuery(".toggle-me-now").click(function () {
            jQuery(this).toggleClass("collapse-now");
        });
    });

     $('.owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      autoplay:true,
      nav:true,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  })