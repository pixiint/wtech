
(function ($) {
  "use strict";
  if (jQuery(".rt-nav-sidebar-menu")[0]) {
    jQuery('body').addClass('rt-side-menu');
  }
  jQuery(document).on("ready", function () {
    $("#comment").attr("placeholder", "Your review *");
    $("#author").attr("placeholder", "Name  *");
    $("#email").attr("placeholder", "Email *");
    $("#calc_shipping_state_field span").css("width", "100%");
    $('select.rt-selectbox, select.mptt-navigation-select, .widget_archive select, .widget_categories select, .widget_text select, .wp-block-archives-dropdown select, .wp-block-categories-dropdown select')
      .each(function (index) {
        $(this).each(function () {
          var $el = $(this);
          $el.insertBefore($el.parent('.rt-select-wrapper'));
          $el.next('.rt-select-wrapper').remove();
          $el.css({
            'opacity': 0,
            'position': 'absolute',
            'left': 0,
            'right': 0,
            'top': 0,
            'bottom': 0
          });
          var $comboWrap = $('<span class="rt-select-wrapper" />').insertAfter($el);
          var $text = $('<span class="rt-select-text" />').appendTo($comboWrap);
          var $button = $('<span class="rt-select-button" />').appendTo($comboWrap);
          $el.appendTo($comboWrap);
          $el.change(function () {
            $text.text($('option:selected', $el).text());
          });
          $text.text($('option:selected', $el).text());
          $el.comboWrap = $comboWrap;
        });
      });
    jQuery(".header-flyout-searchbar i, .header-flyout-searchbar span[class*='ti-']").on("click", function () {
      jQuery("body").toggleClass("flyout-searchbar-active");
    });
    jQuery(".flyout-search-close").on("click", function () {
      jQuery("body").removeClass("flyout-searchbar-active");
    });
    jQuery(".comments-area .comment-form > p input[type='submit']").each(function () {
      jQuery(this).replaceWith("<button type='submit'><span>" + jQuery(this).attr("value") +
        "</span></button>");
    });
    jQuery(".comments-area .comment-form > p input[type='reset']").each(function () {
      jQuery(this).replaceWith("<button type='reset'><span>" + jQuery(this).attr("value") +
        "</span></button>");
    });
    jQuery("[data-toggle='tooltip']").tooltip();
    jQuery(".header-responsive-nav").each(function () {
      jQuery(this).sidr({
        side: 'right',
        speed: 600,
        displace: false,
        renaming: false,
        source: '.mobile-menu',
        name: 'mobile-menu',
        onOpen: function () {
          jQuery("body").addClass("mobile-menu-open");
        },
        onClose: function () {
          jQuery("body").removeClass("mobile-menu-open");
        },
      });
      jQuery(".mobile-menu-close, .overlay").on("click", function () {
        jQuery.sidr('close', 'mobile-menu');
      });
    });
    jQuery(".header-hamburger-menu").each(function () {
      jQuery(this).sidr({
        side: 'right',
        speed: 400,
        displace: false,
        renaming: false,
        source: '.hamburger-menu-holder',
        name: 'hamburger-menu',
        onOpen: function () {
          jQuery("body").addClass("hamburger-menu-open");
        },
        onClose: function () {
          jQuery("body").removeClass("hamburger-menu-open");
        },
      });
      jQuery(".hamburger-menu-close-lines").on("click", function () {
        jQuery.sidr('close', 'hamburger-menu');
      });
    });
    jQuery("body[data-header-style='header-style-three']").each(function () {
      jQuery(this).find(".vc_section, .vc_row").removeAttr(
        "style data-vc-full-width data-vc-full-width-init data-vc-stretch-content");
    });
    jQuery(".responsive-sidemenu-open").each(function () {
      jQuery(this).sidr({
        side: 'left',
        speed: 600,
        displace: false,
        renaming: false,
        source: '.sidemenu-holder',
        name: 'sidemenu',
        onOpen: function () {
          jQuery("body").addClass("sidemenu-open");
        },
        onClose: function () {
          jQuery("body").removeClass("sidemenu-open");
        },
      });
      jQuery(".responsive-sidemenu-close").on("click", function () {
        jQuery.sidr('close', 'sidemenu');
      });
    });
    jQuery("body[data-header-style='header-style-three'] .nav li").on("click", function () {
      jQuery(this).children("ul").slideToggle(500);
    });
    jQuery(".header-sidebar-menu-open, .mobile-sidebar-menu-open").each(function () {
      jQuery(this).sidr({
        side: 'left',
        speed: 300,
        displace: false,
        renaming: false,
        source: '.sidemenu-holder',
        name: 'sidemenu',
        onOpen: function () {
          jQuery("body").addClass("sidemenu-open");
        },
        onClose: function () {
          jQuery("body").removeClass("sidemenu-open");
        },
      });
      jQuery(".sidemenu-close").on("click", function () {
        jQuery.sidr('close', 'sidemenu');
      });
    });
    jQuery("body[data-header-style='header-style-four'] .nav li").on("click", function () {
      jQuery(this).children("ul").slideToggle(500);
    });
    jQuery(".header-flyout-menu").on("click", function () {
      jQuery("body").addClass("flyout-menu-active");
    });
    jQuery(".flyout-menu-close").on("click", function () {
      jQuery("body").removeClass("flyout-menu-active");
    });
    jQuery("body[data-header-style='header-style-five'] .flyout-menu-nav li").on("click", function () {
      jQuery(this).children("ul").slideToggle(500);
    });
    jQuery(".header-slideout-menu").on("click", function () {
      jQuery("body").addClass("slideout-menu-active");
    });
    jQuery(".slideout-menu-close").on("click", function () {
      jQuery("body").removeClass("slideout-menu-active");
    });
    jQuery("body[data-header-style='header-style-fourteen'] .slideout-menu-nav li").on("click", function () {
      jQuery(this).children("ul").slideToggle(500);
    });
    jQuery(".header-flexi-menu").on("click", function () {
      jQuery("body").addClass("flexi-menu-active");
    });
    jQuery(".flexi-menu-close").on("click", function () {
      jQuery("body").removeClass("flexi-menu-active");
    });
    jQuery("body[data-header-style='header-style-seven'] .flexi-menu-nav li").on("click", function () {
      jQuery(this).children("ul").slideToggle(500);
    });
    jQuery(".sidr .menu-item-has-children").each(function () {
      jQuery(this).children("ul, .rt-mega-menu, div ul").css({
        "display": "none",
      });
      jQuery(this).append("<span class='radiantthemes-open-submenu'></span>");
      jQuery(this).find(".radiantthemes-open-submenu").on("click", function () {
        jQuery(this).parent(".menu-item-has-children").toggleClass("radiantthemes-menu-open");
        jQuery(this).parent(".menu-item-has-children").children("ul, .rt-mega-menu").slideToggle(700);
      });
    });
    jQuery("body[data-page-transition='1'] a:not(.fancybox):not(.video-link):not([data-fancybox])").each(
      function () {
        jQuery(this).on("click", function (event) {
          let PageLink = jQuery(this).attr("href");
          if ("#" == PageLink) { } else if (PageLink.startsWith("#")) { } else {
            event.preventDefault();
            jQuery("body").addClass("page-transition-active");
            setTimeout(function () {
              window.location.href = PageLink;
            }, 700);
          }
        });
      });
    jQuery(".shop_single .quantity input[type=number]").each(function () {
      jQuery(this).addClass("form-control");
      jQuery(this).parent().addClass("input-group");
      jQuery(this).before(
        "<div class='input-group-addon quantity-decrease'><i class='fa fa-caret-down' aria-hidden='true'></i></div>"
      );
      jQuery(this).after(
        "<div class='input-group-addon quantity-increase'><i class='fa fa-caret-up' aria-hidden='true'></i></div>"
      );
      jQuery(this).parent().find(".quantity-decrease").on("click", function () {
        if (jQuery(this).parent().find("input[type=number]").val() == jQuery(this).parent().find(
          "input[type=number]").attr("min")) {
          alert("Sorry! You're already on lowest value.");
        } else {
          jQuery(this).parent().find("input[type=number]").val(+jQuery(this).parent().find(
            "input[type=number]").val() - 1);
        }
      });
      jQuery(this).parent().find(".quantity-increase").on("click", function () {
        jQuery(this).parent().find("input[type=number]").val(+jQuery(this).parent().find(
          "input[type=number]").val() + 1);
      });
    });
    jQuery(".matchHeight").matchHeight();
    jQuery("ul.menu.single-page-mode").onePageNav({
      currentClass: "current-menu-item",
      changeHash: true,
      scrollSpeed: 1000,
      easing: "swing",
    });
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      mobile: true,
      live: true,
      scrollContainer: null,
    });
    wow.init();
    if (jQuery(window).width() > 767) {
      jQuery(".infinity-scroll").niceScroll({
        cursorcolor: jQuery("body").data("nicescroll-cursorcolor"),
        cursorwidth: jQuery("body").data("nicescroll-cursorwidth"),
        cursorborder: "none",
        cursorborderradius: "0",
      });
    }
    jQuery(window).on("scroll", function () {
      jQuery(".sticky-header").each(function () {
        if (jQuery(window).scrollTop() > (jQuery(this).innerHeight() + 30)) {
          jQuery(this).addClass("delayed-sticky-mode");
        } else {
          jQuery(this).removeClass("delayed-sticky-mode");
        }
        if (jQuery(window).scrollTop() > (jQuery(this).innerHeight() + 40)) {
          jQuery(this).addClass("delayed-sticky-mode-acivate");
          jQuery(".rt-main-toggle-menu-trigger span").addClass("sticky-toggle-menu");
          jQuery(".main-header .elementor-widget-radiant-custom-logo").addClass("menu-detail-box");
          jQuery(".main-header .primary").addClass("menu-detail-box");
          jQuery(".main-header .elementor-widget-radiant-custom-search").addClass("menu-detail-box");
          jQuery(".wraper_header").css({
            "padding-bottom": jQuery(this).innerHeight() + "px",
          });
        } else {
          jQuery(this).removeClass("delayed-sticky-mode-acivate");
          jQuery(".rt-main-toggle-menu-trigger span").removeClass("sticky-toggle-menu");
          jQuery(".main-header .elementor-widget-radiant-custom-logo").removeClass("menu-detail-box");
          jQuery(".main-header .primary").removeClass("menu-detail-box");
          jQuery(".main-header .elementor-widget-radiant-custom-search").removeClass(
            "menu-detail-box");
          jQuery(".wraper_header").css({
            "padding-bottom": "0",
          });
        }
        if (jQuery(window).scrollTop() > jQuery(this).data("delay")) {
          jQuery(this).addClass("i-am-delayed-sticky");
        } else {
          jQuery(this).removeClass("i-am-delayed-sticky");
        }
      });
    });
    jQuery('a.woocommerce-review-link').click(function () {
      jQuery('a.nav-link').removeClass("active");
      jQuery('.tab-pane').removeClass("active show");
      jQuery('.reviews.tab-pane').addClass("active show");
      jQuery('a.reviews').addClass("active");
    });
    jQuery("img").attr("data-no-retina", "");
    jQuery(".radiantthemes-retina img").removeAttr("data-no-retina");
    const logoWidthDefault = jQuery(".radiantthemes-retina .logo-default img").attr("data-logoWidth");
    if (typeof logoWidthDefault !== "undefined") {
      jQuery(".radiantthemes-retina .logo-default img").css('width', logoWidthDefault + 'px');
    }
    const logoWidthDark = jQuery(".radiantthemes-retina .logo-rt-dark img").attr("data-logoWidth");
    if (typeof logoWidthDark !== "undefined") {
      jQuery(".radiantthemes-retina .logo-rt-dark img").css('width', logoWidthDark + 'px');
    }
    jQuery(".fancybox").fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 500,
      zoomOpacity: "auto",
    });
  });
  jQuery(window).on("load", function () {
    jQuery(".mixblend-preloader").animate({
      width: "100%",
    }, 3000, function () {
      jQuery(".container-preloader").animate({
        height: 0
      }, 1000);
    });
    setTimeout(function () {
      jQuery(".preloader").addClass("loaded");
    }, jQuery(".preloader").data("preloader-timeout"));
    setTimeout(function () {
      jQuery(".page-transition-layer").removeClass("i-am-active");
    }, 700);
    setTimeout(function () {
      jQuery(".matchHeight").matchHeight();
    }, 2000);
    setTimeout(function () {
      jQuery(".isotope-blog-style").isotope({
        itemSelector: '.isotope-blog-style-item',
        layoutMode: 'masonry',
      });
    }, 100);
    if (jQuery(window).width() > 768) {
      jQuery(document).ready(StuckingFooter);
      jQuery(window).resize(StuckingFooter);

      function StuckingFooter() {
        jQuery(".footer-custom-stucking-container").css({
          "height": jQuery(".footer-custom-stucking-mode").innerHeight(),
        });
      };
    }
    if (jQuery.fn.owlCarousel) {
      jQuery('.blog-carousel').owlCarousel({
        stagePadding: 250,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 2500,
        lazyLoad: true,
        margin: 0,
        dots: false,
        responsive: {
          0: {
            items: 1,
            stagePadding: 0
          },
          600: {
            items: 2,
            margin: 10,
          },
          1000: {
            items: 2,
          }
        }
      });
    }
    if (jQuery.fn.owlCarousel) {
      jQuery('.landing-portfolio-carousel').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 2500,
        lazyLoad: true,
        margin: 0,
        dots: false,
        responsive: {
          0: {
            items: 1,
            stagePadding: 0
          },
          600: {
            items: 2,
            margin: 10,
          },
          1000: {
            items: 2,
          }
        }
      });
    }
    setTimeout(function () {
      jQuery(".radiantthemes-counterup").each(function () {
        jQuery(this).text(jQuery(this).data("counterup-value"));
      });
    }, 1);
  });
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery(".scrollup").addClass("active");
    } else {
      jQuery(".scrollup").removeClass("active");
    }
  });
  jQuery(".scrollup").on("click", function () {
    jQuery("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
})(jQuery);
