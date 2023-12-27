 <script>
/* Blurbs are missing VFIs. */
        (function(){
    // [ADA] Fix tabbing for some linked/clickable Divi modules v10
    var badSels = [
        '.et_pb_blurb',
        '.et_pb_blurb_extended',
        '.et_clickable .et_pb_text_inner',
        '.et_clickable .et_pb_divider_internal'
        ],
        badEls = $('.fl-ada-tab-fix').find(badSels.join(','));

        badEls = badEls.add('.fl-ada-tab-fix.et_clickable.et_pb_section');

        badEls.each(function(){
        var self = $(this),
        linkEls = self.find('a'),
        headerLinks = self.find('.et_pb_module_header').find('a'),
        clickEl = self.parents('.et_clickable'),
        isTextModule = self.hasClass('et_pb_text_inner'),
        targetEl = self;

        if (clickEl.length > 0){
            clickEl = clickEl.last();
        }
        else {
            clickEl = self.closest('.et_clickable');
        }

        if (isTextModule === true){
            if (clickEl.length > 0){
            targetEl = clickEl;
            }
        else {
            targetEl = self.parent();
            }
        }

        if (clickEl.length > 0){
            var isClickColText = isTextModule === true && clickEl.hasClass('et_pb_column') === true,
        clickChildren = clickEl.find('.et_clickable'),
        numClass = clickEl.attr('class').match(/\bet_pb_(?:section|row|column|text|blurb|blurb_extended|divider)_\d+(?:_tb_(?:body|header|footer))?\b/)?.[0],
                clickObj = et_link_options_data.find(x => x['class'] === numClass),
        url = clickObj?.['url'] ?? 'javascript://',
        target = clickObj?.['target'] ?? '',
        newLink = $('<a href="'+url+'"'+(target ? ' target="'+target+'"' : '')+' class="fl-ada-link-wrap"></a>');

if (isClickColText === true && clickChildren.length === 0 && target === '_blank') {
	// Skip clickable column with no clickable children and target blank link
}
else {
	if (target === '_blank') {
		// Fix Firefox opening multiple windows with target blank links
		clickEl.add(clickChildren).on('click', function (e) {
			e.preventDefault();
		});
	}

	if (url === 'javascript://') {
		newLink.on('click', function (e) {
			e.preventDefault();
			clickEl.click();
		});
	}

	linkEls.replaceWith(function () {
		var icon = this.getAttribute('data-icon');

		return '<a class="' + this.className + '"' + (icon !== null ? ' data-icon="' + icon + '"' : '') + '>' + this.innerHTML + '</a>';
	});

	if (clickEl.find('.et_pb_animation_top').length > 0) {
		// Fix for show-on-scroll animation
		(new IntersectionObserver((e, o) => {
			if (e[0].isIntersecting === true) {
				// Can't use variable for animated element since it is replaced
				clickEl.find('.et_pb_animation_top').addClass('et-animated');
				o.disconnect();
			}
		}, { threshold: 0.5 })).observe(clickEl[0]);
	}

	// Fix for flipbox animation
	if (clickEl.find('.flipbox').length > 0) {
		function addFlipFocus(el) {
			el.on('focus', function () {
				$(this).find('.et_pb_blurb_content').addClass('hover-in-top').attr('class', function (i, v) {
					return v.replace(/hover-out-\w+/, '');
				});
			});

			el.on('focusout', function () {
				$(this).find('.et_pb_blurb_content').removeClass('hover-in-top');
			});
		}

		addFlipFocus(clickEl);
		addFlipFocus(newLink);
	}

	if (isClickColText === true) {
		if (clickChildren.length > 0) {
			clickChildren.first().wrap(newLink);
		}
		else if (target !== '_blank') {
			clickEl.attr('tabindex', '0');
			clickEl.addClass('fl-ada-click-col');

			clickEl.on('keydown', function (e) {
				if (e.target === e.currentTarget && e.key.toUpperCase() === 'ENTER') {
					$(this).trigger('click');
				}
			});
		}
	}
	else {
		targetEl.wrap(newLink);
	}
}
        }
        else if (headerLinks.length > 0) {
	var headerLink = headerLinks.first(),
		url = headerLink.attr('href'),
		target = headerLink.attr('target'),
		newLink = $('<a href="' + url + '"' + (target ? ' target="' + target + '"' : '') + ' class="fl-ada-link-wrap"></a>');

	linkEls.replaceWith(function () {
		return '<a class="' + this.className + '">' + this.innerHTML + '</a>';
	});

	targetEl.wrap(newLink);
}
    });
}());
</script >


<script>
/*Button is not working using Spacebar*/
$('.et_pb_button_module_wrapper').on('keyup', function(e) {
 if (e.keyCode === 32){
 e.preventDefault();
 $(this).find('.et_pb_button')[0].click();
 }
});</script>

<script>
// [ADA] Close Disclaimer with ESC key
$(window).on('keydown', function(e){
    if (e.key.toUpperCase() === 'ESCAPE'){
$(' #fl-disclaimer.active #fl-disclaimer__close').click();
    }
});
</script>

<script>
/*Social icons is not working using Spacebar*/
$('.et_pb_social_network_link').on('keyup', function(e) {
if (e.keyCode === 32){
 e.preventDefault();
 $(this).find('.icon')[0].click();}});
</script>

<script>
/*Social icons in blogs is not working using Spacebar*/
$('.et_monarch .et_social_networks li').on('keyup', function(e) {
if (e.keyCode === 32){
 e.preventDefault();
 $(this).find('a')[0].click();}});
</script>











<script>
// [ADA] Fix Chat to close with ESCAPE key
var watchEl = document.querySelector('body');

if (watchEl !== null){
function fixStuff(m, o){
var closeBtn = $('.LPMcloseButton');

if (closeBtn.length > 0){
$(window).on('keydown', function(e){
        if (e.key.toUpperCase() === 'ESCAPE'){
closeBtn.click();
        }
    });
o.disconnect();
}
}

fixStuff();
(new MutationObserver(fixStuff)).observe(watchEl, {childList: true});
}
</script>




// new vfi

<script>
setInterval(function() { jQuery('.className').attr('tabindex','0');});
</script>

// remove vfi
<script>
setTimeout(function() {
jQuery('.fl-testimonal-slider #first-focus-element-0').attr('tabindex','-1');},10);
</script>


//

<script type="text/javascript">
//Blog page plus ninus click function

$(document).ready(function(){
  
//$.each('.widgettitle',function(){
  $('.widgettitle').each(function(){


if($(this).text()=='Archives'){

$(this).append('<a>+</a>');

$(this).next('ul').css({'display': 'none'});
  
}else{
    $(this).next('ul').css({'display': 'block'})
  }

});
//alert($('.widgettitle').length)
      
$('.widgettitle').click(function(){
        
if($(this).children('a').html()=='+'){

$(this).children('a').html('-');
  
}else{
    
$(this).children('a').html('+');
}
  
if($(this).children('a').length>0){
  
$(this).next('ul').slideToggle();
    
}
    
//$('.widgettitle a').html('-');
  
//$('div a').not($(this)).removeClass('arrow-down').addClass('arrow-up');

	});

	}); 
  
</script>




