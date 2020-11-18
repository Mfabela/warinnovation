
// Add window scroll events here
$(window).scroll(function() {
    //
});

// jQuery functions
$(function() {
    $(".movenav").click(function() {
		TweenLite.to($('.aqua_submenu_first'), 0.5, {css:{marginLeft:'-100%'}, delay:0.1});
		TweenLite.to($('.aqua_submenu_01'), 0.5, {css:{marginLeft:'0%'}, delay:0.1, ease:Circ.easeOut}).duration(0.5);		
		
	});
	$(".movenav_sub").click(function() {
		TweenLite.to($('.aqua_submenu_01'), 0.5, {css:{marginLeft:'-100%'}, delay:0.1});
		TweenLite.to($('.on_tree'), 0.5, {css:{marginLeft:'0%'}, delay:0.1, ease:Circ.easeOut}).duration(0.5);		
		
	});
	$(".movenav_back_01").click(function() {
		TweenLite.to($('.aqua_submenu_first'), 0.5, {css:{marginLeft:'0%'}, delay:0.1});
		TweenLite.to($('.aqua_submenu_01'), 0.5, {css:{marginLeft:'100%'}, delay:0.1, ease:Circ.easeIn}).duration(0.5);		
		
	});
	$(".movenav_back_02").click(function() {
		TweenLite.to($('.aqua_submenu_01'), 0.5, {css:{marginLeft:'0%'}, delay:0.1});
		TweenLite.to($('.on_tree'), 0.5, {css:{marginLeft:'100%'}, delay:0.1, ease:Circ.easeIn}).duration(0.5);		
		
	});
	
	$(function() {

    	$('nav.black .drop-trigger').on('click', function(e) {

        $('nav.black .dropdown').toggle("slow");

    	});

	});
	
	$(function(){
  		var sublevel_count = 0;
  		$( "#TopNav-9-subnav h2" ).each(function(obj) { if ($( this ).length == 1) { sublevel_count++; $(this).replaceWith( "<a href='#' class='nav-class sublevel" + sublevel_count + "'>" + $( this ).text() + "</a>" ) } });
	});
	
});


//var find_and_watch_sub_items = $('#TopNav-9-subnav .grid_1');
		//document.getElementById("demo").innerHTML = find_and_watch_sub_items;
		//for (var i = 0;i<x.length;i++)
		//{
  			
		//}
		
		//var params = { dfghdfghdfdf:1680, height:1050 };
		//var str = jQuery.param( params );
		//$( "#results" ).text( str );
		  
		//var index;
    	//var text = $('#TopNav-9-subnav h2').html;
    	//var menu1 = ["Banana", "Orange", "Apple", "Mango"];
    	//for (index = 0; index < menu1.length; index++) {
        //text += "<a href='#test'>" + menu1[index] + "</a>";
    	//}
    	//document.getElementById("demo").innerHTML = text;
		//var cookieValue = document.getElementsByClassName('main-nav li a');
    	//alert(cookieValue);
		//alert('sdfds'); 
    	//$(this).children(".btn_over").fadeIn(500);
		//$('#TopNav-9-subnav h2').clone().appendTo(".xxxx");
		
		//$('#TopNav-10-subnav h2').clone().appendTo(".xxxx2");
		
		//$('.alpha li a').clone().appendTo(".yyyy");
		//var list = document.getElementsByClassName("xxxx").text();
		//for (var i = 0; i < list.length; i++) {
    		// list[i] is a node with the desired class name
				
		//}
		//var x = $('#TopNav-9-subnav h2').length;
		//alert(x);