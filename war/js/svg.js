$(document).ready(function() {

setTimeout(svg, 1000);
setTimeout(homesvg, 1000);
//setInterval(svg, 3000);
setTimeout(svglogo, 1000);
//setInterval(svglogo, 10000);
setTimeout(category, 2000);



});// JavaScript Document







//Home Page
function homesvg(){
//Background color
var bgColor = $(".headerbgcolor").css("background-color");	
	
// Tux image is from creative commons, I didn't create it!
var s = Snap("#homesvg");
var g = s.group();
var svgsource = s.attr("data-svgsrc");
//Start
Snap.load(svgsource, function ( loadedFragment ) {

g.append( loadedFragment );
testPath();
									
//Custom

//Path function Start
function testPath(){									
var someObj = {};

var testPath = g.selectAll("path");
//testPath.remove();
testPath.forEach(function(el) {

var lenB = el.getTotalLength();

var defaultColor = el.attr("fill");
var strokeColor = el.attr("stroke");

var animationTime = 4000;
var animationFillTime = 1000;
el.attr({
id: "#fff5e7",
fill: bgColor,
strokeWidth: "1",
stroke: strokeColor,
strokeMiterLimit: "2",
"stroke-dasharray": lenB + " " + lenB,
"stroke-dashoffset": lenB
}).animate({"stroke-dashoffset": 0},  animationTime ,mina.easeinout,

//Callback
 function(){
el.attr({fill: bgColor}).animate({fill:defaultColor, stroke:strokeColor}, animationFillTime,mina.easeinout,loadedEl);


}
//Callback
);
//console.log(el.attr('fill'))
});
//console.log( testPath, someObj );
}
//Path Function End
//Custom									
});
//End
}
//Home Page






function svg(){
	
var bgColor = $(".headerbgcolor").css("background-color");	
// Tux image is from creative commons, I didn't create it!

var s = Snap(".svg");
var g = s.group();
var svgsource = s.attr("data-svgsrc");
//Start
Snap.load(svgsource, function ( loadedFragment ) {

g.append( loadedFragment );

testPath();
											
//Custom

//Path function Start
function testPath(){									


var someObj = {};

var testPath = g.selectAll("path");
//testPath.remove();
testPath.forEach(function(el) {

var lenB = el.getTotalLength();

var defaultColor = el.attr("fill");

var animationTime = 1500;

el.attr({
id: "squiggle",
fill: bgColor,
strokeWidth: "3",
stroke: defaultColor,
strokeMiterLimit: "2",
"stroke-dasharray": lenB + " " + lenB,
"stroke-dashoffset": lenB
}).animate({"stroke-dashoffset": 0},  animationTime ,mina.easeinout,

//Callback
 function(){

el.attr({fill: bgColor}).animate({fill:defaultColor, stroke:defaultColor}, animationTime,mina.easeinout, loadedEl);

}
//Callback
);

//console.log(el.attr('fill'))
});

//console.log( testPath, someObj );

}
//Path Function End
//Custom									


});
//End

}



function svglogo(){
	
	
// Tux image is from creative commons, I didn't create it!

var s = Snap(".svglogo");
var g = s.group();
var svgsource = s.attr("data-svgsrc");
//Start
Snap.load(svgsource, function ( loadedFragment ) {

g.append( loadedFragment );

testPath();
											
//Custom

//Path function Start
function testPath(){									


var someObj = {};

var testPath = g.selectAll("path");
//testPath.remove();
testPath.forEach(function(el) {

var lenB = el.getTotalLength();

var defaultColor = el.attr("fill");

var animationTime = 1500;

el.attr({
id: "squiggle",
fill: "#fff",
strokeWidth: "3",
stroke: defaultColor,
strokeMiterLimit: "2",
"stroke-dasharray": lenB + " " + lenB,
"stroke-dashoffset": lenB
}).animate({"stroke-dashoffset": 0},  animationTime ,mina.easeinout,

//Callback
 function(){

el.attr({fill: "#fff"}).animate({fill:"rgb(93, 189, 181)", stroke:defaultColor}, animationTime,mina.easeinout, loadedEl);

}
//Callback
);

//console.log(el.attr('fill'))
});

//console.log( testPath, someObj );

}
//Path Function End
//Custom									


});
//End
									

}


function loadedEl(){
$(".loading").fadeOut();
$(".contents , .content, #fp-nav, footer, nav").fadeIn();

functions();

}



function functions(){

fullPage();

pageHeight();
//popUp();




}








function progressBar(){


    //Pace calback
    Pace.on('done', function() {
    alert("loaded!");
    });
    //Pace calback


}


function pageHeight(){
	
	/*var windowHeight = window.innerHeight;
	$( ".landingPage" ).css( "height", windowHeight+"px" );*/
	
}







function category(){

$(".btn_all").click(function(){
   console.log("ALL");
  $(".project").fadeIn();
});

$(".btn_ux").click(function(){
  console.log("UX");
  $(".project").fadeOut();
  $(".ux").fadeIn();
  
});

$(".btn_design").click(function(){
  console.log("DESIGN");
  
  $(".project").fadeOut();
  $(".design").fadeIn();
});

$(".btn_illustration").click(function(){
  console.log("ILLUSTRATION");
  
  $(".project").fadeOut();
  $(".illustration").fadeIn();
});


$(".btn_development").click(function(){
  console.log("DEVELOPMENT");
 
  $(".project").fadeOut();
   $(".development").fadeIn();
});
	
}











function modal(){
	
 //demo 01
 //alert("Moald")
            $(".viewbutton a").animatedModal();

            //demo 02
            $("#demo02").animatedModal({
                modalTarget:'modal-02',
                animatedIn:'lightSpeedIn',
                animatedOut:'bounceOutDown',
                color:'#3498db',
                // Callbacks
                beforeOpen: function() {
                    console.log("The animation was called");
                },           
                afterOpen: function() {
                    console.log("The animation is completed");
                }, 
                beforeClose: function() {
                    console.log("The animation was called");
                }, 
                afterClose: function() {
                    console.log("The animation is completed");
                }
            });	
	
}

















