
 // A $( document ).ready() block.
$( document ).ready(function() {
   
   var packpremtext = '<h4>You Get:</h4>\
   <ul>\
   <li>\
 	Our biggest selection of channels, from live sport coverage and the latest news from around the globe, to award winning documentaries, non-stop movies, gripping series, kids edutainment and the hottest music\
       <li> \
          DStv mobile free for the first device </li> \
      <li> \
	  DStv TV Guide online  \
	  </li>\
	  <li>\
	  BoxOffice PVR & online at R27/movie \
	  </li>\
    </ul>';
	
	
	
	  var packextratext = '<h4>You Get:</h4>\
   <ul>\
    <li>\
 	Entertainment, news, sports and more with some of your favourite channels like BBC entertainment, Comedy Central, E! Entertainment, kykNET, Africa Magic Movies 1, FOX SD, The History Channel, TRACE Sports, Nickelodeon, VH1 Classic and Sky News<li>DStv Guide Online  </li><li>BoxOffice Online at R27/movie</li></ul>';

	
	
	
		
  var packcompacttext = '<h4>You Get:</h4>\
   <ul>\
    <li>\
  The latest in local and international entertainment, including Highlight Mzanis, SuperSport 3 & 4, Cartoon Network, and Disney Junior\
       <li> \
        DStv Guide online </li> \
      <li> \
	BoxOffice PVR & Online at R32/movie\
	  </li>\
    </ul>';
	
	
	
	
	
	var packfamtext = '<h4>You Get:</h4>\
   <ul>\
   <li>\
  	The latest news and sports highlights, your favourite décor and fashion shows, classic movies, great local content on KykNet and endless kids\' entertainment on Cartoon Network\
       <li> \
          DStv mobile free for the first device </li> \
      <li> \
	 DStv Guide Online \
	  </li>\
	  <li>\
	   BoxOffice Online at R32/movie\
	  </li>\
    </ul>';
	
	
	
	
	var packAccesstext = '<h4>You Get:</h4>\
   <ul>\
   <li>\
  A selection of fantastic local and international channels, including Mzanzi Wethu, Channel O, Africa Magic and M-Net Movies Zone\
       </li>\
       <li> \
         DStv Guide online \
		   </li> \
      <li> \
	BoxOffice Online at R32/movie\
	  </li>\
    </ul>';
	
	
	
	var packEasytext = '<h4>You Get:</h4>\
   <ul>\
   <li>\
  A selection of essential entertainment channels, including Africa Magic World, Mzanzi Bioskop, Soweto TV, 1KZN and Bay TV\
       </li>\
       <li> \
       DStv Guide online \
		   </li> \
      <li> \
	BoxOffice Online at R32/movie\
	  </li>\
    </ul>';
	
	
	
	
	
	var everywhereAccesstextprem = '<h4>You Get:</h4>\
   <ul>\
   <li>\
 Watch two different channels  on two different TVs with XtraView \
       </li>\
       <li> \
       Catch Up Online \
		   </li> \
      <li> \
	Live Sports online via SuperSport Apps\
	  </li>\
    </ul>';
	
	
	
	var everywhereAccesstextextra = '<h4>You Get:</h4>\
   <ul>\
   <li>\
  Watch two different channels  on two different TVs with XtraView \
       </li>\
       <li> \
      Sports highlights online via SuperSports Apps \
		   </li> \
    </ul>';
	
	
	var everywhereAccesstextcomp = '<h4>You Get:</h4>\
   <ul>\
   <li>\
   Watch two different channels  on two different TVs with XtraView \
       </li>\
       <li> \
      Sports highlights online via SuperSports Apps\
		   </li> \
    </ul>';


  var everywhereAccesstextfam = '<h4>You Get:</h4>\
   <ul>\
   <li>\
 Watch two different channels  on two different TVs with XtraView\
       </li>\
       <li> \
       Sports highlights online via SuperSports Apps\
		   </li> \
    </ul>';
	
	
	
	
	var everywhereAccesstextaccess = '<h4>You Get:</h4>\
   <ul>\
   <li>\
     Watch two different channels  on two different TVs with XtraView \
       </li>\
       <li> \
      Sports highlights online via SuperSports Apps\
		   </li> \
    </ul>';
	
	
	
	
	var everywhereAccesstexteasyview = '<h4>You Get:</h4>\
   <ul>\
   <li>\
 Watch two different channels  on two different TVs with XtraView  \
       </li>\
       <li> \
       Sports highlights online via SuperSports Apps\
		   </li> \
      <li> \
	BoxOffice Online at R32/movie\
	  </li>\
    </ul>';
	
	
	
	
	//Decoder Text
	var decodertextprem = '<li>\
Catch Up, so you can watch movies, sports highlights, doccies and series that you missed anytime you want\
       </li>\
       <li> \
       The latest blockbusters on BoxOffice at R27 per movie\
		   </li> \
      <li> \
	HD viewing\
	  </li>\
	   <li> \
	Ultra slow-mo & rewind\
	  </li>\
	   <li> \
	Up to 200 hours of recording space \
	  </li>\
  ';
	
	
	
	var decodertextextra = '<li>\
     Record live TV\
       </li>\
       <li> \
       The latest blockbusters on BoxOffice at R27 per movie\
		   </li> ';
	
	
	var decodertextcomp = '<ul>\
   <li>\
 Record live TV  \
       </li>\
       <li> \
      The latest blockbusters on BoxOffice at R32 per movie\
		   </li> \
      <li> \
	BoxOffice Online at R32/movie\
	  </li>\
    </ul>';
	
	
	var decodertexthd = '<h4>You Get:</h4>\
   <ul id="panel2ul">\
   <li>\
 recommended retail price, including installation. Optional R35pm insurance\
       </li>\
    </ul>';
	
	
	
	//Decoder Text
	
	
	
	var sumpm = 665;
	var sum = 665;
	var sum2 = 1999;
	var premium = 339;
	var extra = 339;
	var compact = 295;
	var family = 185;
	var access = 99;
	var easyview = 29;
	var explora = 1999;
	var hddecoder =  799;
	
	var rand = "R";
	var finalValue;
	var packageSum = document.getElementById("selectPkg").childNodes;
	var decodersSum = document.getElementById("decoderssum").childNodes;
	var totalFee = document.getElementById("totalFee");
	var panel1 = document.getElementById("panel1");
	var panel2 = document.getElementById("panel2");
	var panel3 = document.getElementById("panel3");
	var extrasSum = document.getElementById("extrasSum");
	var extrasSum2 = document.getElementById("extrasSum2");
	var panel2ul = document.getElementById("panel2ul");
	var perMonth = " pm";
	var Exploratxt = "Explora";
	var hddecodertxt = "HD Decoder";
	var toggle = 75;
	var totalpm = document.getElementById("extrasSum");
	var premiumtxt = "Premium";
    var extratxt = "Extra";
    var compacttxt = "Compact";
    var familytxt = "Family";
    var accesstxt = "Access";
    var easyviewtxt = "Easy View";

    //Packages
	
	$( "#premium" ).click(function() {
		$(panel1).html(packpremtext);
		//Replace Device Text
		$('#panel2ul').html(decodertextprem);
		//Button disable.
		$('#hddecoderbutt').attr("disabled","disabled");
		$('#explorerbutt').removeAttr("disabled");
		 //Change Background color
		$('#hddecoderbutt').attr("style","background-color:#bac5cc");
		$('#explorerbutt').attr("style","background-color:#01598e");
		//Change Background color 
		$(panel3).html(everywhereAccesstextprem);
		//Button disable.
		//replace header device txt
		$('#replacetxt').html(Exploratxt);
		//replace header device txt
		
		//Change Header Text and Color
		$('#dropdowntextpack').html(premiumtxt);
		$('#dropdownMenu1').attr("style","background-color:#a5aaaf");
		//More Button
		$('#morebtnpackages').attr("href","#premiumpoup");
      });
	
	
	
	
	$( "#extra" ).click(function() {
		sumpm = extra;
		sum = extra;
		$( packageSum).replaceWith(rand+sum+perMonth);
		//$(panel1).replaceWith(packextratext);
		$(panel1).html(packextratext);
		$(panel3).html(everywhereAccesstextextra);
		//Change Device Panel Txt.
		$('#panel2ul').html(decodertextextra);
		//Change Device Panel Txt.
		//Remove Disable attr
		$('#explorerbutt').removeAttr("disabled");
		$('#hddecoderbutt').removeAttr("disabled");
		//Remove Disable attr
		

		//Change Header Text and Color
		$('#dropdowntextpack').html(extratxt);
		$('#dropdownMenu1').attr("style","background-color:#5faeab");
		
		//More Button
		$('#morebtnpackages').attr("href","#extrapopup");
		
		
		//Change Background color
		$('#hddecoderbutt').attr("style","background-color:#01598e");
		$('#explorerbutt').attr("style","background-color:#01598e");
		//Change Background color 
		
      });
	
	
	$( "#compact" ).click(function() {
		sumpm = compact;
		sum = compact;
		$(packageSum ).replaceWith(rand+sum+perMonth);
        $(panel1).html(packcompacttext);
		$(panel3).html(everywhereAccesstextcomp);
		
		//Change Device Panel Txt.
		$('#panel2ul').html(decodertextcomp);
		//Change Device Panel Txt.
		//Remove Disable attr
		$('#explorerbutt').removeAttr("disabled");
		$('#hddecoderbutt').removeAttr("disabled");
		//Remove Disable attr
		
		//Change Header Text and Color
		$('#dropdowntextpack').html(compacttxt);
		$('#dropdownMenu1').attr("style","background-color:#f7dc06");
		
		//More Button
		$('#morebtnpackages').attr("href","#compactopup");
		
		//Change Background color
		$('#hddecoderbutt').attr("style","background-color:#01598e");
		$('#explorerbutt').attr("style","background-color:#01598e");
		//Change Background color 
    });
    
	
	$( "#family" ).click(function() {
		sumpm = family;
		sum = family;
		 $(panel1).html(packfamtext);
         $(panel3).html(everywhereAccesstextfam);
		 
		 //Replace panel2 body text
		$(panel2).html(decodertexthd);
		//Replace panel2 body text
		//Remove Disable attr
		$('#hddecoderbutt').removeAttr("disabled");
		//Remove Disable attr
		
		//replace header device txt
		$('#replacetxt').html(hddecodertxt);
		//replace header device txt
		
		//Button disable.
		$('#explorerbutt').attr("disabled","disabled");
		
	    //Change Background color
		$('#explorerbutt').attr("style","background-color:#bac5cc");
		$('#hddecoderbutt').attr("style","background-color:#01598e");
		//Change Background color
		
		//Change Header Text
		$('#dropdowntextpack').html(familytxt);
		$('#dropdownMenu1').attr("style","background-color:#84b341");
		
		//More Button
		$('#morebtnpackages').attr("href","#familypopup");
		 
    });
	
	$( "#access" ).click(function() {
		sumpm = access;
        sum = access;
		$( packageSum).replaceWith(rand+sum+perMonth);
		 $(panel1).html(packAccesstext);
		 $(panel3).html(everywhereAccesstextaccess);
		 //Replace panel2 body text
		$(panel2).html(decodertexthd);
		//Replace panel2 body text
		//Remove Disable attr
		$('#hddecoderbutt').removeAttr("disabled");
		//Remove Disable attr
		
		//replace header device txt
		$('#replacetxt').html(hddecodertxt);
		//replace header device txt
		
		//Button disable.
		$('#explorerbutt').attr("disabled","disabled");
		
		//Change Background color
		$('#explorerbutt').attr("style","background-color:#bac5cc");
		$('#hddecoderbutt').attr("style","background-color:#01598e");
		//Change Background color
		
		//Change Header Text
		$('#dropdowntextpack').html(accesstxt);
		$('#dropdownMenu1').attr("style","background-color:#c30336");
		
		
		//More Button
		$('#morebtnpackages').attr("href","#accesspopup");
    });
	
	
	
	
	
	$( "#easyView" ).click(function() {
		sumpm = easyview;
        sum = easyview;
		$(packageSum ).replaceWith(rand + sum+ perMonth );
		$(panel1).html(packEasytext);
		$(panel3).html(everywhereAccesstexteasyview);
		//Replace panel2 body text
		$(panel2).html(decodertexthd);
		//Replace panel2 body text
		//Remove Disable attr
		$('#hddecoderbutt').removeAttr("disabled");
		//Remove Disable attr
		
		//replace header device txt
		$('#replacetxt').html(hddecodertxt);
		//replace header device txt
		
		//Change Background color
		$('#explorerbutt').attr("style","background-color:#bac5cc");
		$('#hddecoderbutt').attr("style","background-color:#01598e");
		//Change Background color
		
		//Button disable.
		$('#explorerbutt').attr("disabled","disabled");
		
		//Change Header Text
		$('#dropdowntextpack').html(easyviewtxt);
		$('#dropdownMenu1').attr("style","background-color:#d57d1c");
		
		//More Button
		$('#morebtnpackages').attr("href","#easyviewpopup");
		
    });
	
	//Packages
	
	
	
	
	
	//Decoder
	$( "#explorer" ).click(function() {
        sum2 = explora;
		$(decodersSum ).replaceWith(rand + sum2+ perMonth );
		$('#panel2ul').html(decodertextprem);
		//replace header device txt
		$('#replacetxt').html(Exploratxt);
		//replace header device txt
		
		//Change Header Text
		$('#dropdowntextdec').html(Exploratxt);
		//$('#dropdownMenu2').attr("style","background-color:#01598e;");
		//var Exploratxt = "Explora";
	    //var hddecodertxt = "HD Decoder";
		
		
    });


	$( "#hddecoder" ).click(function() {
        sum2 = hddecoder;
		$(decodersSum ).replaceWith(rand + sum2+ perMonth );
		
		//Replace panel2 body text
		$(panel2).html(decodertexthd);
		//Replace panel2 body text
		
		//replace header device txt
		$('#replacetxt').html(hddecodertxt);
		//replace header device txt
		
		//Change Header Text
		$('#dropdowntextdec').html(hddecodertxt);
		//$('#dropdownMenu2').attr("style","background-color:#01598e");
		
    });
	//Decoder End
	
	
	$( "#extras" ).click(function() {
    //$( extrasSum).toggle();
	 //$( extrasSum2).toggle();
	if (toggle==0) {
            toggle=75;
         $('#extras').css('background-image', 'url("images/on.png")');
        }else {
            toggle=0;
          $('#extras').css('background-image', 'url("images/off.png")');
        }
    });
	
	
	
	
	function finalNumber(){
		
		$('#totalFee').html(sum+sum2+perMonth);
    }
	
	
	function finalNumbersum(){
		
		$(totalpm).html(sumpm+toggle+perMonth);
    }
	
	
	setInterval(finalNumber, 100);
	setInterval(finalNumbersum, 100);
	
	
	//Compare Btn
	$( "#comparebtn1" ).click(function() {
       // $("p").hide();
		//$("p").show();
		$( "#comparepack" ).addClass( "divshow" ).removeClass("divhide" );
		$( "#bundles" ).addClass( "divhide" ).removeClass("divshow" );
		//$("#comparepack").show();
		//$("#bundles").hide();
});
	
	
	
	
	$( "#comparebtn2" ).click(function() {
         $( "#comparedcoder" ).addClass( "divshow" ).removeClass("divhide" );
		$( "#bundles" ).addClass( "divhide" ).removeClass("divshow" );
		 
		 
		//$("#comparedcoder").show();
		//$("#bundles").hide();
});
	
	
	
	
	//Compare Btn
	
	
	//Back
	$( "#backtobundles2" ).click(function() {
        
		
		
		$("#bundles").addClass( "divshow" ).removeClass("divhide" );
		$("#comparepack").addClass( "divhide" ).removeClass("divshow" );
 });
	
	
	$( "#backtobundles1" ).click(function() {

		$("#bundles").addClass( "divshow" ).removeClass("divhide" );
		$("#comparedcoder").addClass( "divhide" ).removeClass("divshow" );

    });
	//Back
	
});
    // JavaScript Document