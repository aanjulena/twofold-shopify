(function(){

  //
  // Change Navbar Style on scroll
  // ===============================

  $(window).scroll(function () {
      var top = $(document).scrollTop();
      if(top > 143)
        $('.site-header.navbar').removeClass('navbar-transparent');
      else
        $('.site-header.navbar').addClass('navbar-transparent');
  });

  //
  // Smooth Scrolling
  // ===============================

  $(".anchorLink").on('click', function(e) {
    var target = this.hash;

    e.preventDefault();

    var navOffset = $('.site-header').height();

    return $('html, body').animate({
      scrollTop: $(this.hash).offset().top - navOffset
    }, 300, function() {
      return window.history.pushState(null, null, target);
    });
    var winWidth = $(window).width();
    // console.log(winWidth)
    if (winWidth < 768) {
      $('#navbarNav').removeClass('show');
    }
  });


  //
  // 360deg Product Viewer
  // ===============================

  // $("#desk360").spritespin({
  //   source: SpriteSpin.sourceArray('../_assets/img/product/desk/360/Smaller/wall-desk-small_{frame}.png', {
  //     // this ramge of numbers is interpolated into the {frame} placeholder
  //     frame: [0,60],
  //     // the frame placeholder will be padded with leading '0' up to the number of 'digits'
  //     digits: 5
  //   }),
  //   // Add large version of your images with this property
  //   // this is optional and if missing, the source images will be used
  //   sourceZoom: SpriteSpin.sourceArray('../_assets/img/product/desk/360/wall-desk_{frame}.png', { frame: [0,45], digits: 5 }),
  //
  //   width   : 750,  // width in pixels of the window/frame
  //   height  : 566,  // height in pixels of the window/frame
  //   responsive: true,
  //   wrap: true,
  //   animate: false,
  //   sense: -1,
  //
  //   // plugins: [
  //   //   'zoom'  // zoom plugin
  //   // ]
  // });
  // //
  // // $('a.js-zoom').click(function(e){
  // //   e.preventDefault();
  // //   $('#desk360').spritespin('api').toggleZoom();
  // // });
  //
  // $('.spinner-handle').click(function(e){
  //   e.preventDefault();
  //   $('#desk360').spritespin('api').toggleAnimation();
  // });

})();
