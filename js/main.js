
/* ----------------------------------------------------------
 * HOME PAGE SLIDER
 * ---------------------------------------------------------- */
+(function() {
  var Slider = (function() {
      function Slider(config) {
          this.activeClassName = 'active';
          this.sliderName = config.selector || '#our-slider';
          this.prevBtn = config.prevBtn || '#btn-prev';
          this.nextBtn = config.nextBtn || '#btn-next';
          this.setTotalSlider();
      }
      Slider.prototype.setTotalSlider = function() {
          console.log('ok here');
          this.totalSlider = $(this.sliderName).children().length;
          this.totalSlider && this.enableNav();
      };
      Slider.prototype.enableNav = function() {
          var self = this;
          self.setDetailInfo();
          // For Next button
          $(document).on('click', this.nextBtn, function() {
              var firstChild = $(self.sliderName).children().first().clone();
              $(self.sliderName).children().first().remove();
              $(self.sliderName).append(firstChild);
            //   self.setDetailInfo();
          });
          // For Prev button
          $(document).on('click', this.prevBtn, function() {
              var lastChild = $(self.sliderName).children().last().clone();
              $(self.sliderName).children().last().remove();
              $(self.sliderName).prepend(lastChild);
            //   self.setDetailInfo();
          });
      };
      Slider.prototype.setDetailInfo = function() {
          var dataVal = $($(this.sliderName).children()[2]).data(),
              $moreInfo = $(this.sliderName).parent().next();
          $moreInfo.children().removeClass('slide-in');
          var time = setTimeout(function() {
              $moreInfo.find('h1').text(dataVal.title);
              $moreInfo.find('p').text(dataVal.description);
              $moreInfo.find('a').text(dataVal.link);
              $moreInfo.children().addClass('slide-in');
          }, 300);
      };
      return Slider;
  }()); /* End slider class*/


  $(document).ready(function() {
      var sliderConfig = {
          selector: '#our-slider',
          prevBtn: '#btn-prev',
          nextBtn: '#btn-next'
      };
      var S = new Slider(sliderConfig);
  });

})();