<script>
  (function($) {
    function setup_collapsible_submenus() {
      // mobile menu
      $('.fl-mobile-menu .et_mobile_menu .menu-item-has-children > a').after('<a href="#" class="menu-closed"></a>');
      $('.fl-mobile-menu .et_mobile_menu .menu-item-has-children > a').each(function() {
        $(this).next().next('.sub-menu').toggleClass('hide',1000);
      });
      $('.fl-mobile-menu .et_mobile_menu .menu-item-has-children > a + a').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('menu-open');
        $(this).next('.sub-menu').toggleClass('hide',1000);
      });
      // $('.fl-mobile-menu .et_mobile_menu>li:nth-child(3)>a:first-child').attr('tabindex', -1);
    }
    $(window).load(function() {
      setTimeout(function() {
        setup_collapsible_submenus();
      }, 700);
    });
  })(jQuery);

</script>





///



<script>
  (function($) {
       
function setup_collapsible_submenus() {
     
      var $menu = $('.et_mobile_menu');
    var $menuParentLink = $('.et_mobile_menu .menu-item-has-children > a[href]:not([href="#"])');
    var $menuParentToggleOnly = $('.et_mobile_menu .menu-item-has-children > a[href="#"], .et_mobile_menu .menu-item-has-children > a:not([href])');
    var $submenuExpandHTML = $('<a href="#" class="toggle-menu fl-toggle-icon" data-et-icon-before="L" data-et-icon-after="M"></a>');
    //add expand link after top-level parent link
      $menuParentLink.after($submenuExpandHTML);  
      //add toggle only class to top-level items withough page links
      $menuParentToggleOnly.addClass('fl-menu-toggle-only toggle-menu').attr('data-et-icon-before','L').attr('data-et-icon-after','M');

      $menu.find('a.toggle-menu').each(function() {
      $(this).off('click');
      if ( ! $(this).siblings('.sub-menu').length ) {
        $(this).on('click', function(event) {
          $(this).parents('.mobile_nav').trigger('click');
        });
      } else {
        $(this).on('click', function(event) { 
          event.preventDefault();
          $(this).parent().toggleClass('visible');
        });
      }
    });
      //stop keydown event from bubbling up from menu sub-items to the mobile menu hamburger button
     $menu.keydown(function(e){
      e.stopPropagation();
     });
    //trigger mobile menu on 'enter' and 'space' keypress, for users with browser zoom on desktop
      var $mblMenuTrigger = $('#fl-template .mobile_nav');
      var $mblMenuBtn =  $('#fl-template .mobile_menu_bar');
  $mblMenuTrigger.find('.mobile_menu_bar').attr('data-et-icon', 'M');
     $mblMenuTrigger.keydown(function(e){
      if(e.keyCode == 13 || e.keyCode == 32) {
        e.preventDefault();
        $mblMenuBtn.click();
      }
    });  
     $mblMenuBtn.on('click', function(e){
      $('html').toggleClass('fl-mbl-menu-active');
     });
     $('.mobile_nav').attr('aria-label','Menu'); 
 
}
       
$(window).load(function() {
setTimeout(function() {
setup_collapsible_submenus();
}, 700);
});
  
})(jQuery);



// Make "Menu" visible to screen readers
$('.mobile_nav').attr('aria-label','Menu');


// Grab divi menu text styles   
var diviSettings = $(".fl-mobile-menu .et-menu-nav > ul > li > a");
var menuColor = diviSettings.css("color");
var menuLetterSpacing = diviSettings.css("letter-spacing");
var menuFontFamily = diviSettings.css("font-family");
var menuFontWeight = diviSettings.css("font-weight");
var menuTextTransform = diviSettings.css("text-transform");
var menuFontSize = diviSettings.css("font-size");

// Apply menu text styles to mobile menu button text
$(".mobile_menu_bar").css({
    "color": menuColor,
    "letter-spacing": menuLetterSpacing,
    "font-family": menuFontFamily,
    "font-weight": menuFontWeight,
    "text-transform": menuTextTransform,
    "font-size": menuFontSize
});  


// Move phone cta to bottom when menu is open
$(".mobile_menu_bar").click(function() {
  $(".fl-jump-to-menu").toggleClass("opened");
});




</script>



