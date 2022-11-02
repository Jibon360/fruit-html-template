$(function () {


  $(".fa-sharp").on('click', function (param) {
    $('.searchboxicon').toggleClass('showing');
  })


  // stikcy navabr js
  $(window).on('scroll', function (param) {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $('.navbar').addClass('navsticky');
    } else {
      $('.navbar').removeClass('navsticky');

    }
  })

  // type js
  var typed = new Typed('.hometype', {
    strings: ['Seasonal Fruits', 'Best Fruits'],
    smartBackspace: true, // Default value
    typeSpeed: 100,
    startDelay: 100,
    backDelay: 600,
    loop: true,
    loopCount: Infinity,
  });

  // owl carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    // nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })





  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 4
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })




  // color switcher

  // color theme show
  $('.switcher-icon').on('click', function (param) {
    $('.color-switcher').toggleClass('colorshow');
  })

  $(".switchbtn").each(function (param) {
    $(this).on('click', function (param) {
      let colors = $(this).attr('data-color');
      document.documentElement.style.setProperty('--oranage', colors);
    })
  })


  jQuery('.imgZoom').mooZoom({
    zoom: {
      width: 100,
      height: 100,
      zIndex: 600,
    },

    // Overlay options
    overlay: {
      opacity: 0.65,
      zIndex: 500,
      backgroundColor: '#ffffff',
      fade: false,
    },

    // Options for the magnified image
    detail: {
      opacity: 1,
      zIndex: 600,
      margin: {
        top: 0,
        left: 0,
      },
      fade: false,
    },

    // duration of animation in ms
    animationDuration: 1000,
  });





})


//  kursor js
new kursor({
  type: 1
})




