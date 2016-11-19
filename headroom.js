 (function($) {
    var ost = 0;
    $(window).scroll(function() {
      var cOst = $(this).scrollTop();

      if(cOst > 200 && cOst > ost) {
         $('.custom-header-bg').addClass('fixed').removeClass('default');
      }
      else {
         $('.custom-header-bg').addClass('default').removeClass('fixed');
      }

      ost = cOst;
    });
  })(jQuery);
  
