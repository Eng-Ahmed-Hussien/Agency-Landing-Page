$(document).ready(function () {
  $("#hero-slider").owlCarousel({
     loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        navText: ["PREV", "NEXT"],
    smartSpeed: 1e3,
    autoplay: true,
    autoplayTimeout: 3e3,
    responsive: { 
            0: { nav: false }, 
            767: { nav: true } 
        },
   
        
  }),
    $("#project-slider").owlCarousel({
      loop: !0,
      margin: 0,
      nav: !0,
      dots: !1,
      navText: ["PREV", "NEXT"],
      smartSpeed: 1e3,
      margin: 24,
      autoplay: !0,
      autoplayTimeout: 4e3,
      responsive: {
        0: { items: 1, nav: !1, margin: 0 },
        767: { items: 2 },
        1140: { items: 2, center: !0 },
      },
    }),
    $("#reviews-slider").owlCarousel({
      loop: !0,
      margin: 10,
      nav: !1,
      dots: !0,
      items: 1,
      smartSpeed: 1e3,
      autoplay: !0,
      autoplayTimeout: 5e3,
    }),
    $(".nav-link").on("click", function () {
      $(".navbar-toggler").is(":visible") &&
        $(".navbar-collapse").collapse("hide");
    });
});
