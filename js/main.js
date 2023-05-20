(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

  // var heroBackgroundElement = document.getElementById("hero-background");
  //   var imageIndex = 0;
  //   var totalImages = 10;

  //   function fadeIn() {
  //       heroBackgroundElement.style.backgroundImage = `linear-gradient(rgba(20, 20, 31, .7), rgba(20, 20, 31, .7)), url(img/images/image${imageIndex}.jpeg)`;
  //       heroBackgroundElement.style.opacity = 1;

  //       setTimeout(fadeOut, 1000); // Adjust the duration of the fade-out (in milliseconds) as needed

  //       imageIndex++;
  //       if (imageIndex >= totalImages) {
  //           imageIndex = 0;
  //       }
  //   }

  //   function fadeOut() {
  //       heroBackgroundElement.style.opacity = 0;
  //   }

  //   // Set the initial background image for the "hero-header" section
  //   heroBackgroundElement.style.backgroundImage = `linear-gradient(rgba(20, 20, 31, .7), rgba(20, 20, 31, .7)), url(img/images/image0.jpeg)`;

  //   // Set the interval for changing background images in the "hero-header" section (in milliseconds)
  //   setInterval(fadeIn, 5000); // Change the image every 5 seconds