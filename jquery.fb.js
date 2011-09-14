  /**
 * jQuery Word Count Plugin by M. Svendsen and M. Pezzi
 * Version: 0.1-alpha (09/14/11)
 * Dual licensed under the MIT and GPL licences:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.4.2 or later
 */
;(function($){

  $.fb = function() {

    // Go through each Facebook feature and register and execute it's plugin.
    $.each($.fb, function(type, fb){
      var self = $(fb.selector);

      // Register plugin in jQuery.fn
      if ( typeof $.fn[type] == 'undefined' ) {
        $.fn[type] = fb.fn;
      }

      // Call plugin on page elements.
      self.each(function(){
        fb.fn.call( $(this), $(this).data() );
      })
    });

  };

  // Facebook Post to Wall Popup
  $.fb.fbWall = {
    selector: '.fb-wall',
    fn: function(options) {
      return this.each(function(){
        
      });
    }
  };

  // Facebook Like Button
  $.fb.fbLike = {
    selector: '.fb-like',
    fn: function(options) {
      return this.each(function(){
        
      });
    }
  };

  // Facebook Share Button
  $.fb.fbShare = {
    selector: '.fb-share',
    fn: function(options) {
      return this.each(function(){
        
      });
    }
  };

})(jQuery);

// Run the Facebook Plugin for all selectors found on page.
$(function(){ $.fb(); });
