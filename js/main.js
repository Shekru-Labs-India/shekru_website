/*-----------------------------------------------------------------------------------

    Theme Name: Crizal - Multipurpose Responsive Template + Admin
    Description: Multipurpose Website Template + Admin + RTL
    Author: Chitrakoot Web
    Version: 3.1
    ---------------------------------- */

!(function (p) {
  "use strict";
  var f = p(window);
  function o() {
    var e, o;
    (e = p(".full-screen")),
      (o = f.height()),
      e.css("min-height", o),
      (e = p("header").height()),
      (o = p(".screen-height")),
      (e = f.height() - e),
      o.css("height", e);
  }
  p("#preloader").fadeOut("normall", function () {
    p(this).remove();
  }),
    f.on("scroll", function () {
      var e = f.scrollTop(),
        o = p(".navbar-brand img"),
        a = p(".navbar-brand.logodefault img");
      e <= 50
        ? (p("header").removeClass("scrollHeader").addClass("fixedHeader"),
          o.attr("src", "img/logo-inner.png"),
          a.attr("src", "img/logo.png"))
        : (p("header").removeClass("fixedHeader").addClass("scrollHeader"),
          o.attr("src", "img/logo.png"),
          a.attr("src", "img/logo.png"));
    }),
    f.on("scroll", function () {
      500 < p(this).scrollTop()
        ? p(".scroll-to-top").fadeIn(400)
        : p(".scroll-to-top").fadeOut(400);
    }),
    p(".scroll-to-top").on("click", function (e) {
      e.preventDefault(), p("html, body").animate({ scrollTop: 0 }, 600);
    }),
    p(".parallax,.bg-img").each(function (e) {
      p(this).attr("data-background") &&
        p(this).css(
          "background-image",
          "url(" + p(this).data("background") + ")"
        );
    }),
    p(".story-video,.about-video").magnificPopup({
      delegate: ".video",
      type: "iframe",
    }),
    p(".popup-youtube").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    }),
    0 !== p(".copy-clipboard").length &&
      (new ClipboardJS(".copy-clipboard"),
      p(".copy-clipboard").on("click", function () {
        var e = p(this);
        e.text();
        e.text("Copied"),
          setTimeout(function () {
            e.text("Copy");
          }, 2e3);
      })),
    p(".source-modal").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
    }),
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !1,
      live: !0,
    }).init(),
    0 !== p(".tilt").length &&
      p(".tilt").tilt({
        maxTilt: 6,
        perspective: 1e3,
        scale: 1,
        speed: 300,
        reset: !0,
      }),
    p("#tab1").click(function () {
      p("#second, #third").fadeOut(), p("#first").fadeIn(1e3);
    }),
    p("#tab2").click(function () {
      p("#first, #third").fadeOut(), p("#second").fadeIn(1e3);
    }),
    p("#tab3").click(function () {
      p("#second, #first").fadeOut(), p("#third").fadeIn(1e3);
    }),
    f.resize(function (e) {
      setTimeout(function () {
        o();
      }, 500),
        e.preventDefault();
    }),
    o(),
    p(document).ready(function () {
      var e, o, a, i;
      0 === p("#chBar").length ||
        ((e = document.getElementById("chBar")) &&
          new Chart(e, {
            type: "bar",
            data: {
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  data: [
                    350, 365, 425, 475, 525, 575, 625, 675, 725, 775, 825, 875,
                  ],
                  backgroundColor: [
                    "rgba(28, 51, 65,0.8)",
                    "rgba(0, 135, 115,0.8)",
                    "rgba(107, 185, 131,0.8)",
                    "rgba(242, 201, 117,0.8)",
                    "rgba(237, 99, 83,0.8)",
                    "rgba(242, 190, 84,0.8)",
                    "rgba(240, 217, 207,0.8)",
                    "rgba(135, 174, 180,0.8)",
                    "rgba(21, 62, 92,0.8)",
                    "rgba(237, 85, 96,0.8)",
                    "rgba(201, 223, 241,0.8)",
                    "rgba(240, 217, 207,0.9)",
                  ],
                },
              ],
            },
            options: {
              scales: {
                xAxes: [{ barPercentage: 0.5, categoryPercentage: 1 }],
                yAxes: [{ ticks: { beginAtZero: !1 } }],
              },
              legend: { display: !1 },
            },
          })),
        0 !== p("#myPieChart").length &&
          ((e = document.getElementById("myPieChart").getContext("2d")),
          new Chart(e, {
            type: "pie",
            data: {
              labels: ["Red", "Blue", "Yellow", "Green"],
              datasets: [
                {
                  data: [10, 15, 20, 30],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.8)",
                    "rgba(54, 162, 235, 0.8)",
                    "rgba(255, 206, 86, 0.8)",
                    "rgba(75, 192, 192, 0.8)",
                  ],
                },
              ],
            },
          })),
        p(".testmonials-style1").owlCarousel({
          loop: !1,
          responsiveClass: !0,
          nav: !0,
          dots: !1,
          margin: 0,
          smartSpeed: 900,
          navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
          ],
          responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
        }),
        p(".testimonial-style2").owlCarousel({
          loop: !1,
          responsiveClass: !0,
          nav: !1,
          dots: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          margin: 0,
          smartSpeed: 900,
          responsive: { 0: { items: 1 }, 768: { items: 1 }, 1e3: { items: 1 } },
        }),
        p(".testimonial-style3").owlCarousel({
          loop: !1,
          responsiveClass: !0,
          nav: !0,
          dots: !1,
          margin: 0,
          smartSpeed: 900,
          navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
          ],
          responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
        }),
        p(".testimonial-style4").owlCarousel({
          loop: !1,
          responsiveClass: !0,
          items: 1,
          nav: !0,
          dots: !0,
          margin: 0,
          smartSpeed: 900,
          navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
          ],
          responsive: { 0: { items: 1, nav: !1, dots: !1 }, 768: { dots: !1 } },
        }),
        p(".testmonial-style5").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !0,
          dots: !1,
          smartSpeed: 900,
          navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
          ],
          responsive: {
            0: { items: 1, margin: 10 },
            768: { items: 2, margin: 15 },
            992: { items: 2, margin: 40 },
          },
        }),
        p(".testmonials-style6 .owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          margin: 15,
          mouseDrag: !1,
          autoplay: !0,
          smartSpeed: 900,
        }),
        p(".testimonial-style7").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          margin: 0,
          autoplay: !0,
          autoplayTimeout: 3e3,
          smartSpeed: 900,
          responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
        }),
        p(".testmonials-style8").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !0,
          dots: !1,
          navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
          ],
          smartSpeed: 900,
          responsive: {
            0: { items: 1, margin: 10 },
            768: { items: 2, margin: 15 },
            992: { items: 2, margin: 40 },
          },
        }),
        p(".testimonial-style8").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          margin: 0,
          autoplay: !0,
          thumbs: !0,
          thumbsPrerendered: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 900,
          responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
        }),
        p(".testimonial-style9").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 3e3,
          smartSpeed: 500,
          smartSpeed: 900,
          dots: !1,
          nav: !1,
          margin: 0,
          navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
          ],
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 3 },
          },
        }),
        p(".testimonial-style10").owlCarousel({
          loop: !1,
          responsiveClass: !0,
          nav: !1,
          dots: !0,
          autoplay: !0,
          autoplayTimeout: 3e3,
          smartSpeed: 900,
          margin: 0,
          navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
          ],
          responsive: {
            0: { items: 1 },
            768: { items: 1 },
            992: { items: 2, margin: 45 },
            1200: { items: 3, margin: 45 },
          },
        }),
        p(".testimonial-style11").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 900,
          nav: !1,
          dots: !0,
          margin: 0,
          responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 } },
        }),
        p(".testimonial-style12").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 900,
          nav: !1,
          dots: !0,
          margin: 0,
          responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 } },
        }),
        p(".testimonial-block-01").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          autoplay: !0,
          autoplayTimeout: 5e3,
          margin: 0,
          smartSpeed: 900,
          responsive: {
            0: { items: 1 },
            576: { items: 1 },
            1200: { items: 2 },
          },
        }),
        p(".testimonial-02").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          margin: 0,
          autoplay: !0,
          thumbs: !0,
          thumbsPrerendered: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 900,
          responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
        }),
        p(".testimonial-04").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          margin: 0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 900,
          responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
        }),
        p(".featured-products").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          dots: !0,
          autoplay: !0,
          autoplayTimeout: 3e3,
          smartSpeed: 900,
          margin: 0,
          navText: [
            "<i class='ti-arrow-left'></i>Prev",
            "Next<i class='ti-arrow-right'></i>",
          ],
          responsive: {
            0: { items: 1 },
            481: { items: 2, margin: 15 },
            768: { items: 3, margin: 20 },
            992: { items: 4, margin: 30 },
            1200: { items: 4, margin: 30 },
          },
        }),
        p(".team .owl-carousel").owlCarousel({
          loop: !0,
          margin: 30,
          dots: !1,
          nav: !1,
          autoplay: !0,
          smartSpeed: 900,
          responsiveClass: !0,
          responsive: {
            0: { items: 1, margin: 0 },
            700: { items: 2, margin: 15 },
            1e3: { items: 4 },
          },
        }),
        p(".team-style5").owlCarousel({
          loop: !1,
          responsiveClass: !0,
          nav: !1,
          dots: !0,
          margin: 30,
          smartSpeed: 900,
          responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 2 } },
        }),
        p("#services-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          dots: !1,
          nav: !0,
          navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
          ],
          smartSpeed: 900,
          responsive: {
            0: { items: 1, margin: 0 },
            768: { items: 2, margin: 0 },
            992: { items: 3, margin: 0 },
          },
        }),
        p(".carousel-style1 .owl-carousel").owlCarousel({
          loop: !0,
          dots: !1,
          nav: !0,
          navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>",
          ],
          autoplay: !0,
          autoplayTimeout: 5e3,
          responsiveClass: !0,
          autoplayHoverPause: !1,
          smartSpeed: 900,
          responsive: {
            0: { items: 1, margin: 0 },
            481: { items: 2, margin: 5 },
            500: { items: 2, margin: 20 },
            992: { items: 3, margin: 30 },
            1200: { items: 4, margin: 30 },
          },
        }),
        p(".carousel-style2 .owl-carousel").owlCarousel({
          loop: !1,
          dots: !0,
          nav: !1,
          autoplay: !0,
          autoplayTimeout: 5e3,
          responsiveClass: !0,
          autoplayHoverPause: !1,
          smartSpeed: 900,
          responsive: {
            0: { items: 1, margin: 0 },
            481: { items: 2, margin: 5 },
            500: { items: 2, margin: 20 },
            992: { items: 3, margin: 30 },
            1200: { items: 3, margin: 30 },
          },
        }),
        p(".blog-style-8").owlCarousel({
          loop: !0,
          dots: !1,
          nav: !1,
          autoplay: !0,
          autoplayTimeout: 4e3,
          responsiveClass: !0,
          smartSpeed: 900,
          autoplayHoverPause: !1,
          responsive: {
            0: { items: 1, margin: 15 },
            481: { items: 2, margin: 15 },
            500: { items: 2, margin: 20 },
            992: { items: 2, margin: 30 },
          },
        }),
        p("#service-grids").owlCarousel({
          loop: !0,
          dots: !1,
          nav: !1,
          autoplay: !0,
          autoplayTimeout: 2500,
          responsiveClass: !0,
          autoplayHoverPause: !1,
          smartSpeed: 900,
          responsive: {
            0: { items: 1, margin: 0 },
            768: { items: 2, margin: 20 },
            992: { items: 3, margin: 30 },
          },
        }),
        p(".home-business-slider").owlCarousel({
          items: 1,
          loop: !0,
          autoplay: !0,
          smartSpeed: 900,
          nav: !0,
          dots: !1,
          navText: [
            '<span class="fas fa-chevron-left"></span>',
            '<span class="fas fa-chevron-right"></span>',
          ],
          responsive: { 0: { nav: !1 }, 768: { nav: !0 } },
        }),
        p("#clients").owlCarousel({
          loop: !0,
          nav: !1,
          dots: !1,
          autoplay: !0,
          autoplayTimeout: 3e3,
          responsiveClass: !0,
          autoplayHoverPause: !1,
          smartSpeed: 900,
          responsive: {
            0: { items: 2, margin: 20 },
            768: { items: 3, margin: 40 },
            992: { items: 4, margin: 60 },
            1200: { items: 5, margin: 80 },
          },
        }),
        p("#project-single").owlCarousel({
          loop: !1,
          nav: !1,
          responsiveClass: !0,
          dots: !1,
          smartSpeed: 900,
          responsive: {
            0: { items: 1, margin: 15 },
            600: { items: 2, margin: 15 },
            1e3: { items: 3, margin: 15 },
          },
        }),
        p(".project-single-two .owl-carousel").owlCarousel({
          loop: !1,
          nav: !1,
          responsiveClass: !0,
          dots: !1,
          margin: 15,
          smartSpeed: 900,
          responsive: {
            0: { items: 1, margin: 15 },
            576: { items: 2, margin: 20 },
            768: { items: 3, margin: 20 },
            992: { items: 3, margin: 25 },
            1200: { items: 4, margin: 30 },
          },
        }),
        p(".portfolio-01").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          autoplay: !0,
          autoplayTimeout: 5e3,
          margin: 30,
          smartSpeed: 900,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            1200: { items: 3 },
          },
        }),
        p(".slider-fade .owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          margin: 0,
          autoplay: !0,
          smartSpeed: 900,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
        }),
        p(".slider-fade-shop .owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          margin: 0,
          autoplay: !0,
          nav: !1,
          dots: !0,
          smartSpeed: 900,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: {
            0: { items: 1 },
            1200: {
              dots: !1,
              nav: !0,
              navText: [
                '<span class="fas fa-chevron-left"></span>',
                '<span class="fas fa-chevron-right"></span>',
              ],
            },
          },
        }),
        p(".slider-fade1").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          nav: !1,
          autoplay: !0,
          smartSpeed: 1500,
          smartSpeed: 900,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: {
            992: {
              nav: !0,
              navText: [
                "<span class='fas fa-arrow-left'></span>",
                "<span class='fas fa-arrow-right'></span>",
              ],
              dots: !1,
            },
          },
        }),
        p(".services-grids").owlCarousel({
          loop: !1,
          nav: !1,
          responsiveClass: !0,
          dots: !1,
          autoplay: !0,
          smartSpeed: 500,
          smartSpeed: 900,
          mouseDrag: !1,
          responsive: {
            0: { items: 1, margin: 15, mouseDrag: !0 },
            768: { items: 2, margin: 20, mouseDrag: !0 },
            1200: { items: 3, margin: 25, mouseDrag: !1 },
          },
        }),
        p(".client-01").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          autoplay: !0,
          autoplayTimeout: 5e3,
          margin: 30,
          smartSpeed: 900,
          responsive: {
            0: { items: 2, margin: 20 },
            575: { items: 3 },
            576: { items: 4 },
            768: { items: 5 },
            1199: { items: 5 },
            1400: { items: 7, margin: 50 },
          },
        }),
        p(".client-02").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          autoplay: !0,
          autoplayTimeout: 5e3,
          margin: 30,
          smartSpeed: 900,
          responsive: {
            0: { items: 2, margin: 20 },
            575: { items: 3 },
            576: { items: 4 },
            768: { items: 5 },
            1199: { items: 5 },
            1400: { items: 7, margin: 50 },
          },
        }),
        p(".owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          autoplay: !0,
          smartSpeed: 900,
        }),
        p(".slider-fade").on("changed.owl.carousel", function (e) {
          e = e.item.index - 2;
          p("h3").removeClass("animated fadeInUp"),
            p("h1").removeClass("animated fadeInUp"),
            p("p").removeClass("animated fadeInUp"),
            p(".butn").removeClass("animated fadeInUp"),
            p(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h3")
              .addClass("animated fadeInUp"),
            p(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h1")
              .addClass("animated fadeInUp"),
            p(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("p")
              .addClass("animated fadeInUp"),
            p(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".butn")
              .addClass("animated fadeInUp");
        }),
        p(".slider-fade-shop").on("changed.owl.carousel", function (e) {
          e = e.item.index - 2;
          p("p").removeClass("animated fadeInUp"),
            p("h1").removeClass("animated fadeInUp"),
            p(".subheading").removeClass("animated fadeInUp"),
            p(".butn").removeClass("animated fadeInUp"),
            p(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".subheading")
              .addClass("animated fadeInUp"),
            p(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h1")
              .addClass("animated fadeInUp"),
            p(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("p")
              .addClass("animated fadeInUp"),
            p(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".butn")
              .addClass("animated fadeInUp");
        }),
        p(".slider-fade1").on("changed.owl.carousel", function (e) {
          e = e.item.index - 2;
          p("h1").removeClass("animated fadeInUp"),
            p("p").removeClass("animated fadeInUp"),
            p("a").removeClass("animated fadeInUp"),
            p(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h1")
              .addClass("animated fadeInUp"),
            p(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("p")
              .addClass("animated fadeInUp"),
            p(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("a")
              .addClass("animated fadeInUp");
        }),
        0 !== p("#rev_slider_149_1").length &&
          (a = jQuery)(document).ready(function () {
            null == a("#rev_slider_149_1").revolution
              ? revslider_showDoubleJqueryError("#rev_slider_149_1")
              : a("#rev_slider_149_1")
                  .show()
                  .revolution({
                    sliderType: "standard",
                    jsFileLocation: "revolution/js/",
                    sliderLayout: "fullwidth",
                    dottedOverlay: "none",
                    delay: 9e3,
                    snow: {
                      startSlide: "first",
                      endSlide: "last",
                      maxNum: "400",
                      minSize: "0.2",
                      maxSize: "6",
                      minOpacity: "0.3",
                      maxOpacity: "1",
                      minSpeed: "30",
                      maxSpeed: "100",
                      minSinus: "1",
                      maxSinus: "100",
                    },
                    navigation: {
                      keyboardNavigation: "off",
                      keyboard_direction: "vertical",
                      mouseScrollNavigation: "off",
                      mouseScrollReverse: "default",
                      onHoverStop: "off",
                      touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: !1,
                      },
                      arrows: {
                        style: "uranus",
                        enable: !0,
                        hide_onmobile: !1,
                        hide_onleave: !1,
                        tmp: "",
                        left: {
                          h_align: "left",
                          v_align: "center",
                          h_offset: 10,
                          v_offset: 0,
                        },
                        right: {
                          h_align: "right",
                          v_align: "center",
                          h_offset: 10,
                          v_offset: 0,
                        },
                      },
                    },
                    responsiveLevels: [1240, 1024, 778, 480],
                    visibilityLevels: [1240, 1024, 778, 480],
                    gridwidth: [1240, 1024, 778, 480],
                    gridheight: [868, 768, 960, 720],
                    lazyType: "none",
                    scrolleffect: {
                      blur: "on",
                      maxblur: "20",
                      on_slidebg: "on",
                      direction: "top",
                      multiplicator: "2",
                      multiplicator_layers: "2",
                      tilt: "10",
                      disable_on_mobile: "off",
                    },
                    parallax: {
                      type: "scroll",
                      origo: "slidercenter",
                      speed: 400,
                      levels: [
                        5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50,
                        51, 55,
                      ],
                    },
                    shadow: 0,
                    spinner: "spinner3",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenAutoWidth: "off",
                    fullScreenAlignForce: "off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "60px",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: !1,
                    fallbacks: {
                      simplifyAll: "off",
                      nextSlideOnWindowFocus: "off",
                      disableFocusListener: !1,
                    },
                  });
          }),
        0 !== p("#rev_slider_2").length &&
          (a = jQuery)(document).ready(function () {
            null == a("#rev_slider_2").revolution
              ? revslider_showDoubleJqueryError("#rev_slider_2")
              : a("#rev_slider_2")
                  .show()
                  .revolution({
                    sliderType: "standard",
                    sliderLayout: "fullwidth",
                    dottedOverlay: "none",
                    delay: 9e3,
                    spinner: "spinner4",
                    navigation: {
                      keyboardNavigation: "off",
                      keyboard_direction: "horizontal",
                      mouseScrollNavigation: "off",
                      onHoverStop: "off",
                      touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: !1,
                      },
                      arrows: {
                        enable: !0,
                        style: "metis",
                        tmp: "",
                        rtl: !1,
                        hide_onleave: !0,
                        hide_onmobile: !0,
                        hide_under: 0,
                        hide_over: 9999,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        left: {
                          container: "slider",
                          h_align: "left",
                          v_align: "center",
                          h_offset: 20,
                          v_offset: 0,
                        },
                        right: {
                          container: "slider",
                          h_align: "right",
                          v_align: "center",
                          h_offset: 20,
                          v_offset: 0,
                        },
                      },
                      bullets: { enable: !1 },
                    },
                    responsiveLevels: [1240, 1024, 767, 480],
                    gridwidth: [1350, 1170, 767, 480],
                    gridheight: [700, 700, 600, 600],
                    lazyType: "none",
                    shadow: 0,
                    shuffle: "off",
                    autoHeight: "off",
                  });
          }),
        0 !== p("#rev_slider_1014_1").length &&
          (a = jQuery)(document).ready(function () {
            null == a("#rev_slider_1014_1").revolution
              ? revslider_showDoubleJqueryError("#rev_slider_1014_1")
              : (o = a("#rev_slider_1014_1")
                  .show()
                  .revolution({
                    sliderType: "standard",
                    jsFileLocation: "revolution/js/",
                    sliderLayout: "fullscreen",
                    dottedOverlay: "none",
                    delay: 9e3,
                    navigation: {
                      keyboardNavigation: "off",
                      keyboard_direction: "horizontal",
                      mouseScrollNavigation: "off",
                      mouseScrollReverse: "default",
                      onHoverStop: "off",
                      touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: !1,
                      },
                      arrows: {
                        style: "uranus",
                        enable: !1,
                        hide_onmobile: !0,
                        hide_under: 768,
                        hide_onleave: !1,
                        tmp: "",
                        left: {
                          h_align: "left",
                          v_align: "center",
                          h_offset: 20,
                          v_offset: 0,
                        },
                        right: {
                          h_align: "right",
                          v_align: "center",
                          h_offset: 20,
                          v_offset: 0,
                        },
                      },
                    },
                    responsiveLevels: [1240, 1024, 778, 480],
                    visibilityLevels: [1240, 1024, 778, 480],
                    gridwidth: [1240, 1024, 778, 480],
                    gridheight: [868, 768, 960, 600],
                    lazyType: "none",
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "on",
                    stopAfterLoops: 0,
                    stopAtSlide: 1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenAutoWidth: "off",
                    fullScreenAlignForce: "off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "0",
                    disableProgressBar: "on",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: !1,
                    fallbacks: {
                      simplifyAll: "off",
                      nextSlideOnWindowFocus: "off",
                      disableFocusListener: !1,
                    },
                  })),
              RsTypewriterAddOn(a, o);
          }),
        0 !== p("#rev_slider_3").length &&
          (a = jQuery)(document).ready(function () {
            null == a("#rev_slider_3").revolution
              ? revslider_showDoubleJqueryError("#rev_slider_3")
              : a("#rev_slider_3")
                  .show()
                  .revolution({
                    sliderLayout: "fullscreen",
                    delay: 12e3,
                    responsiveLevels: [1400, 1200, 992, 576],
                    gridwidth: [1350, 1200, 750, 350],
                    gridheight: 600,
                    hideThumbs: 10,
                    fullScreenAutoWidth: "on",
                    fullScreenOffsetContainer: ".rev-offset",
                    navigation: {
                      onHoverStop: "off",
                      touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: !1,
                      },
                      arrows: {
                        enable: !0,
                        style: "hermes",
                        tmp: '<div class="tp-arr-allwrapper">  <div class="tp-arr-imgholder"></div> <div class="tp-arr-titleholder">{{title}}</div> </div>',
                        left: {
                          h_align: "left",
                          v_align: "center",
                          h_offset: 0,
                          v_offset: 0,
                        },
                        right: {
                          h_align: "right",
                          v_align: "center",
                          h_offset: 0,
                          v_offset: 0,
                        },
                      },
                      bullets: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        space: 12,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 30,
                        tmp: "",
                      },
                    },
                    parallax: {
                      type: "scroll",
                      levels: [
                        5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70,
                        75, 80, 85,
                      ],
                      origo: "enterpoint",
                      speed: 400,
                      bgparallax: "on",
                      disable_onmobile: "on",
                    },
                    spinner: "spinner4",
                  });
          }),
        0 !== p("#rev_slider_151_1").length &&
          (a = jQuery)(document).ready(function () {
            null == a("#rev_slider_151_1").revolution
              ? revslider_showDoubleJqueryError("#rev_slider_151_1")
              : a("#rev_slider_151_1")
                  .show()
                  .revolution({
                    sliderType: "standard",
                    jsFileLocation: "revolution/js/",
                    sliderLayout: "fullscreen",
                    dottedOverlay: "none",
                    delay: 9e3,
                    navigation: {
                      keyboardNavigation: "off",
                      keyboard_direction: "vertical",
                      mouseScrollNavigation: "off",
                      mouseScrollReverse: "default",
                      onHoverStop: "off",
                      touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: !1,
                      },
                      arrows: {
                        style: "uranus",
                        enable: !0,
                        hide_onmobile: !1,
                        hide_over: 479,
                        hide_onleave: !1,
                        tmp: "",
                        left: {
                          h_align: "left",
                          v_align: "center",
                          h_offset: 0,
                          v_offset: 0,
                        },
                        right: {
                          h_align: "right",
                          v_align: "center",
                          h_offset: 0,
                          v_offset: 0,
                        },
                      },
                    },
                    responsiveLevels: [1240, 1024, 778, 480],
                    visibilityLevels: [1240, 1024, 778, 480],
                    gridwidth: [1240, 1024, 778, 480],
                    gridheight: [868, 768, 960, 720],
                    lazyType: "none",
                    scrolleffect: {
                      blur: "on",
                      maxblur: "20",
                      on_slidebg: "on",
                      direction: "top",
                      multiplicator: "2",
                      multiplicator_layers: "2",
                      tilt: "10",
                      disable_on_mobile: "off",
                    },
                    parallax: {
                      type: "scroll",
                      origo: "slidercenter",
                      speed: 400,
                      levels: [
                        5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50,
                        51, 55,
                      ],
                    },
                    shadow: 0,
                    spinner: "spinner3",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenAutoWidth: "off",
                    fullScreenAlignForce: "off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "0",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: !1,
                    fallbacks: {
                      simplifyAll: "off",
                      nextSlideOnWindowFocus: "off",
                      disableFocusListener: !1,
                    },
                  });
          }),
        0 !== p("#rev_slider_1174_1").length &&
          (a = jQuery)(document).ready(function () {
            null == a("#rev_slider_1174_1").revolution
              ? revslider_showDoubleJqueryError("#rev_slider_1174_1")
              : a("#rev_slider_1174_1")
                  .show()
                  .revolution({
                    sliderType: "hero",
                    jsFileLocation: "revolution/js/",
                    sliderLayout: "fullscreen",
                    dottedOverlay: "none",
                    delay: 9e3,
                    navigation: {},
                    responsiveLevels: [1240, 1024, 778, 480],
                    visibilityLevels: [1240, 1024, 778, 480],
                    gridwidth: [1240, 1024, 778, 480],
                    gridheight: [868, 768, 960, 720],
                    lazyType: "none",
                    parallax: {
                      type: "scroll",
                      origo: "slidercenter",
                      speed: 400,
                      levels: [
                        10, 15, 20, 25, 30, 35, 40, -10, -15, -20, -25, -30,
                        -35, -40, -45, 55,
                      ],
                    },
                    shadow: 0,
                    spinner: "off",
                    autoHeight: "off",
                    fullScreenAutoWidth: "off",
                    fullScreenAlignForce: "off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "0",
                    disableProgressBar: "on",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: !1,
                    fallbacks: { simplifyAll: "off", disableFocusListener: !1 },
                  });
          }),
        0 !== p(".horizontaltab").length &&
          p(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
              var o = p(this),
                a = p("#nested-tabInfo");
              p("span", a).text(o.text()), a.show();
            },
          }),
        0 !== p(".childverticaltab").length &&
          p(".childverticaltab").easyResponsiveTabs({
            type: "vertical",
            width: "auto",
            fit: !0,
            tabidentify: "ver_1",
            activetab_bg: "#fff",
            inactive_bg: "#F5F5F5",
            active_border_color: "#c1c1c1",
            active_content_border_color: "#c1c1c1",
          }),
        0 !== p(".verticaltab").length &&
          p(".verticaltab").easyResponsiveTabs({
            type: "vertical",
            width: "auto",
            fit: !0,
            closed: "accordion",
            tabidentify: "hor_1",
            activate: function (e) {
              var o = p(this),
                a = p("#nested-tabInfo2");
              p("span", a).text(o.text()), a.show();
            },
          }),
        p(".countup").counterUp({ delay: 25, time: 2e3 }),
        p(function () {
          p('[data-bs-toggle="popover"]').popover();
        }),
        p(function () {
          p('[data-bs-toggle="tooltip"]').tooltip();
        }),
        p(".current-year").text(new Date().getFullYear()),
        0 !== p(".countdown").length &&
          (a = jQuery)(document).ready(function () {
            null == a(".countdown").countdown
              ? i(".countdown")
              : (i = a(".countdown")
                  .show()
                  .countdown({ date: "01 Nov 2024 00:01:00", format: "on" }));
          });
    }),
    f.on("load", function () {
      p(".single-img").magnificPopup({ delegate: ".popimg", type: "image" });
      var o = p(".portfolio-gallery-isotope").isotope({});
      p(".filtering").on("click", "span", function () {
        var e = p(this).attr("data-filter");
        o.isotope({ filter: e });
      }),
        p(".filtering").on("click", "span", function () {
          p(this).addClass("active").siblings().removeClass("active");
        }),
        p(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(),
        p(".portfolio-link").on("click", (e) => {
          e.stopPropagation();
        }),
        f.stellar();
    });
})(jQuery);
