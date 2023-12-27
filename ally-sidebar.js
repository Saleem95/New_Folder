/// < up/down arow ///



<script>
        $(document).ready(function(){
 // Fix expand/collapse sidebar menu
 var sidebar = $('.fl-new-sidebar'),
        menuList = sidebar.find('#menu-practice-areas');
        // Cloned to remove onfocus event handlers that add bad attribute (tabindex="-1")
        menuList.replaceWith(menuList.clone(false, false));
 sidebar.find('.menu-item-has-children > a').after( '<a href="#" class="fl-tag"><i class="fa fas fa-chevron-down icon-modify"></i></a>');
        sidebar.find('.current-menu-parent').parents('li').addClass('current-grand-menu-parent');
        sidebar.find('.menu-item-has-children .fl-tag').on('click touchstart', function(e){
            e.preventDefault();
        var self = $(this);
        if (self.children().hasClass('fa-chevron-down')){
            self.parent('li').parent('ul').children('li').children('a').children().addClass('fa-chevron-down').removeClass('fa-chevron-up');
        self.parent('li').parent('ul').children('li').children('ul').slideUp();
        self.next().slideDown();
        self.children().addClass('fa-chevron-up').removeClass('fa-chevron-down');
        self.attr('aria-label','Close Submenu');
 }
        else {
            self.children().addClass('fa-chevron-down').removeClass('fa-chevron-up');
        self.next().slideUp();
        self.attr('aria-label','Open Submenu');
 }
        setTimeout(function(){
            $('.fl-tag').parent('li').removeClass('et-touch-hover');
 }, 200);
 });
        sidebar.find('ul.menu li').each(function(){
 var self = $(this);
        if (self.is('.current-menu-parent, .current-grand-menu-parent, .current-menu-item')){
            self.children('ul').css("display", "block");
        self.children('.fl-tag').html('<i class="fa fas fa-chevron-up icon-modify"></i>');
 }
        else {
            self.children('ul').css("display", "none");
 }
 });
        setTimeout(function(){
            $('.fl-tag[aria-expanded="false"]').attr('aria-label', 'Open Submenu');
        $('.fl-tag[aria-expanded="true"]').attr('aria-label','Close Submenu');
 }, 500);
});
</script>





/// + and -///


<script>
        $(document).ready(function(){
 // Fix expand/collapse sidebar menu
 var sidebar = $('.fl-sidebar'),
        menuList = sidebar.find('#menu-practice-areas');
        // Cloned to remove onfocus event handlers that add bad attribute (tabindex="-1")
        menuList.replaceWith(menuList.clone(false, false));
 sidebar.find('.menu-item-has-children > a').after( '<a href="#" class="fl-tag"><i class="fa fas fa-plus icon-modify"></i></a>');
        sidebar.find('.current-menu-parent').parents('li').addClass('current-grand-menu-parent');
        sidebar.find('.menu-item-has-children .fl-tag').on('click touchstart', function(e){
            e.preventDefault();
        var self = $(this);
        if (self.children().hasClass('fa-plus')){
            self.parent('li').parent('ul').children('li').children('a').children().addClass('fa-plus').removeClass('fa-minus');
        self.parent('li').parent('ul').children('li').children('ul').slideUp();
        self.next().slideDown();
        self.children().addClass('fa-minus').removeClass('fa-plus');
        self.attr('aria-label','Close Submenu');
 }
        else {
            self.children().addClass('fa-plus').removeClass('fa-minus');
        self.next().slideUp();
        self.attr('aria-label','Open Submenu');
 }
        setTimeout(function(){
            $('.fl-tag').parent('li').removeClass('et-touch-hover');
 }, 200);
 });
        sidebar.find('ul.menu li').each(function(){
 var self = $(this);
        if (self.is('.current-menu-parent, .current-grand-menu-parent, .current-menu-item')){
            self.children('ul').css("display", "block");
        self.children('.fl-tag').html('<i class="fa fas fa-minus icon-modify"></i>');
 }
        else {
            self.children('ul').css("display", "none");
 }
 });
        setTimeout(function(){
            $('.fl-tag[aria-expanded="false"]').attr('aria-label', 'Open Submenu');
        $('.fl-tag[aria-expanded="true"]').attr('aria-label','Close Submenu');
 }, 500);
});
</script>










<script>
$(document).keyup(function(e) {
if (e.keyCode == 32) {
$(".mobile_menu_bar").css('display','block');
}
});
</script>
<script>
/*Button is not working using Spacebar*/
$('#fl-main-menu').on('keyup', function(e) {
 if (e.keyCode === 32){
 e.preventDefault();
 $(this).find('.mobile_menu_bar')[0].click();
 }
});</script>
<script>
/*Button is not working using Spacebar*/
$('#fl-main-menu').on('keyup', function(e) {
 if (e.keyCode === 13){
 e.preventDefault();
 $(this).find('.mobile_menu_bar')[0].click();
 }
});</script>


<script>
$(document).keyup(function(e) {
if (e.keyCode == 32) {
$(".mobile_menu_bar").css('display','block');
}
})
</script>




















<script>
// Button is not working using Spacebar
$('#fl-main-menu').on('keyup', function(e){
    if(e.keyCode === 32){
        e.preventDefault();$(this).find('.mobile_menu_bar')[0].click();
    }
});
</script>
