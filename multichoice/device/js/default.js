// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

$(document).ready(function(e){
	$('.button_up').mouseover(function()
  		{
			$(this).stop().animate({"opacity": "0"}, 150);
    		$(this).find('.b').stop().animate({"opacity": "1"}, 150);
  		});
  	$('.button_up').mouseout(function()
  		{
			$(this).stop().animate({"opacity": "1"}, 150);
    		$(this).find('.b').stop().animate({"opacity": "0"}, 150);
  		});
})

jQuery(function (){	
	/*
	jQuery('.gallery').flexslider({controlNav:false});
	initIeFunctions();
	
	var navItems = jQuery('#mainNav li');
	navItems.find('a').click(function (){
		navItems.removeClass('active');
		this.parentNode.className += ' active';
	});
	
	initScrollNav({
		nav:'#mainNav a'
	});
	*/
});

function initIeFunctions(){
	if(jQuery.browser.msie){
		createFormValues();
		clearInputs();
	}
}

function createFormValues(){
	jQuery("input[type='text'], textarea").each(function (){
		this.value = jQuery(this).attr('placeholder');
	});
}

function clearInputs(){
	jQuery('input:text, input:password, textarea').each(function(){
		var _el = jQuery(this);
		_el.data('val', _el.val());
		_el.bind('focus', function(){
			if(_el.val() == _el.data('val')) _el.val('');
		}).bind('blur', function(){
			if(_el.val() == '') _el.val(_el.data('val'));
		});
	});
}

function initScrollNav(_options){
	var options = jQuery.extend({
		nav:'#nav a',
		animSpeed:750
	}, _options);
	var window = jQuery('html,body');
	var addingHeight = jQuery("#header").outerHeight(true);
	
	var nav = jQuery(options.nav);;
	nav.each(function (){
		var hold = jQuery(this);
		var block = jQuery(hold.attr('href'));
		if(block.length){
			hold.click(function (){
				var curPos = window.scrollTop();
				var blockPost = block.offset().top - addingHeight;
				
				window.stop().animate({scrollTop: blockPost},{duration: options.animSpeed});
				return false;
			});
		}
	});
}