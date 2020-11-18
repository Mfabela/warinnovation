jQuery(function(){
	/* Meny */
	var meny = Meny.create({
		// The element that will be animated in from off screen
		menuElement: document.querySelector( '.meny' ),
		// The contents that gets pushed aside while Meny is active
		contentsElement: document.querySelector( '.contents' ),
		// [optional] The alignment of the menu (top/right/bottom/left)
		position:'left',
		// [optional] The height of the menu (when using top/bottom position)
		height: 400,
		// [optional] The width of the menu (when using left/right position)
		width: 0,
		gradient: 'rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%)',
		overlap: 0,
		// [optional] Use mouse movement to automatically open/close
		mouse:false,
		// [optional] Use touch swipe events to open/close
		touch: false
	});
	//meny.open();
	// API Methods:
	// meny.close();
	// meny.isOpen();

	// Events:
	// meny.addEventListener( 'open', function(){ console.log( 'open' ); } );
	// meny.addEventListener( 'close', function(){ console.log( 'close' ); } );

	// Embed an iframe if a URL is passed in
	if( Meny.getQuery().u && Meny.getQuery().u.match( /^http/gi ) ) {
		var contents = document.querySelector( '.contents' );
		contents.style.padding = '0px';
		contents.innerHTML = '<div class="cover"></div><iframe src="'+ Meny.getQuery().u +'" style="width: 100%; height: 100%; border: 0; position: absolute;"></iframe>';
	}
	$("body").on("click","#menu-toggle",function(){
		if(meny.isOpen()){
			meny.close();
			$(this).removeClass("open");
			$('.slideshow').cycle('resume');
		}else{
			meny.open();
			$(this).addClass("open");
			$('.slideshow').cycle('pause');
		}
	});
	$(".cycle-pager span").html("");
	setInterval(function(){
		$("#cycle .prev").removeClass("prev");
		$("#cycle .next").removeClass("next");
		$("#cycle .cycle-slide-active").next().addClass("next");
		$("#cycle .cycle-slide-active").prev().addClass("prev");
		var a = $("#pager").find("span.cycle-pager-active");
		var i = $(a).index();
		$(".carousel-indicators.bottom").find(".on").removeClass("on");
		$(".carousel-indicators.bottom").find("#d-"+i).addClass("on");
	},500);
	$(".info").click(function(){
		console.log("More info...");
		$(".slideshow,#carousel,body").addClass("more");
		$(".slideshow").cycle('pause');
		$(".carousel-indicators.bottom>li,#prev,#next").off("click");
	});
	$(".x-info").click(function(){
		console.log("Close info...");
		$(".slideshow,#carousel,body").removeClass("more");
	  $(".slideshow").cycle('resume');
		$("#pager>span").on("click",function(){
			var i = $(this).index();
			$('.slideshow').cycle('goto', i);
		});
		$("#next").on("click",function(){
			$(".slideshow,#carousel,body").addClass("customise");
			$("#carousel .title").html("Upload your business logo");
			$("#prev").off("click");
			$("#prev").on("click",function(){
				$(".slideshow,#carousel,body").removeClass("customise");
				$("#carousel .title").html("Choose your Vito");
				$("#prev").off("click");
				$("#prev").on("click",function(){
					$(".carousel").carousel('prev');
				});
			});
		});
		$("#prev").on("click",function(){
			$(".carousel").carousel('prev');
		});
		$(".carousel-indicators.bottom>li").click(function(){
			var i = $(this).index();
			$(".carousel-indicators.bottom").find(".on").removeClass("on");
			$(this).addClass("on");
			$('.slideshow').cycle('goto', i);
			$(".info").click();
		});
	});
	$(".slideshow").on("click",".btm",function(){
		$(".slideshow").cycle($(this).data("slide"));
	});
	$("#carousel").bind("mouseover",function(){
		$(".slideshow").cycle("pause");
	});
	$("#carousel").mouseout(function(){
		if(!$(".slideshow").hasClass("more") && !$(".slideshow").hasClass("customise") && !$(".slideshow").hasClass("done")){
			$(".slideshow").cycle("resume");
		}
	});
	$(".slideshow").on("mouseover",".tip",function(){
		$(".slideshow div>text.tip"+$(this).data("shift")).addClass("shift");
	});
	$(".slideshow").on("mouseout",".tip",function(){
		$(".slideshow div>text.tip"+$(this).data("shift")).removeClass("shift");
	});
	$("#next").on("click",function(){
		$(".slideshow,#carousel,body").addClass("customise");
		$("#carousel .title").html("Upload your business logo");
		$("#prev").off("click");
		$("#prev").on("click",function(){
			$(".slideshow,#carousel,body").removeClass("customise");
			$("#carousel .title").html("Choose your Vito");
			$("#prev").off("click");
			$("#prev").on("click",function(){
				$(".carousel").carousel('prev');
				$(".slideshow,body").removeClass("started");
				$(".slideshow").cycle('pause');
			});
		});
	});
	$(".tools").on("click","i",function(){
		$(".tools .on").removeClass("on");
		$(this).addClass("on");
		$(".guide").addClass($(this).data("tool"));
	});
	$(".carousel").carousel({
		interval:false
	});
	$("#getstarted").click(function(){
		$(".carousel").carousel(1);
		$("#prev").on("click",function(){
			$(".carousel").carousel('prev');
			$(".slideshow,body").removeClass("started");
			$(".slideshow").cycle('pause');
		});
		$(".slideshow").cycle('resume');
		$("body").addClass("started");
		setTimeout(function(){
			if($("body").hasClass("started")){
				$(".slideshow").addClass("started");
			}
		},1000);
	});
	$(".slideshow").cycle('pause');
	$("#done").click(function(){
		var b = $(this);
		$(b).html("Enter <span class='arrow'></span>");
		if($("body").hasClass("done")){
			$("body").addClass("thank-u");
		}else{
			$(".tools,.carousel,body").addClass("done");
		}
		$("#carousel .title").html("Enter for your chance to win");
		$("#prev").off("click");
		$("#prev").on("click",function(){
			$(".tools,.carousel,body").removeClass("done");
			$("#carousel .title").html("Upload your business logo");
			$(b).html("Done <span class='arrow'></span>");
			$("#prev").off("click");
			$("#prev").on("click",function(){
				$(".slideshow,#carousel,body").removeClass("customise");
				$("body").removeClass("thank-u");
				$("#carousel .title").html("Choose your Vito");
				$("#prev").off("click");
				$("#prev").on("click",function(){
					$(".carousel").carousel('prev');
					$(".slideshow,body").removeClass("started");
					$(".slideshow").cycle('pause');
				});
			});
		});
	});
	$(".chosen-select").chosen({
		disable_search_threshold: 10,
		placeholder_text_single: "Select Project/Initiative..."
	});
	$(".chosen-container-single .chosen-single div").html("<i class='fa fa-caret-down'></i>");
	$(".chosen-container").click(function(){
		console.log("Click....");
		if($(this).hasClass("chosen-with-drop")){
			$(this).find("i").removeClass("fa-caret-down").addClass("fa-caret-up");
		}else{
			$(this).find("i").removeClass("fa-caret-up").addClass("fa-caret-down");
		}
	});
	$(".radio").click(function(){
		if($(this).find("input").is(":checked")){
			$(".radio").removeClass("checked");
			$(this).addClass("checked");
		}
	});
	$(".checkbox").click(function(){
		$(this).find("input").click();
		if($(this).find("input").is(":checked")){
			$(this).addClass("checked");
		}else{
			$(this).removeClass("checked");
		}
	});
	$("#done").on("mouseover",function(){
		if($(".carousel").hasClass("done")){
			$(this).html("Done <span class='arrow'></span>");
			$(this).on("mouseout",function(){
				$(this).html("Enter <span class='arrow'></span>");
			});
		}
	});
	$(".menu").on("click","li",function(){
		var i = $(".carousel-inner").find(".item.active").index();
		$("#menu-toggle").click();
		$(".slideshow").cycle('pause');
		if($(this).hasClass("enter")){
			$('#getstarted').click();
			$('#next').click();
			$('#done').click();
		}
		else{
			$("body").removeClass("done");
		}
		if($(this).hasClass("tcs")){
			$(".carousel").carousel(2);
			$("body").addClass("accept");
			$("#tcs-back").on("click",function(){
				$(".carousel").carousel(i);
			});
		}else{
			$("body").removeClass("accept");
		}
	});
	$("#tcs,#view-terms").click(function(){
		var i = $(".carousel-inner").find(".item.active").index();
		$(".carousel").carousel(2);
		$("body").addClass("accept");
		$("body").removeClass("done");
		$("#tcs-back").on("click",function(){
			$(".carousel").carousel(i);
		});
	});
	$("#accept-terms").click(function(){
		$(".checkbox").click();
	});
	$(".carousel-indicators.bottom>li").click(function(){
		var i = $(this).index();
		$(".carousel-indicators.bottom").find(".on").removeClass("on");
		$(this).addClass("on");
		$('.slideshow').cycle('goto', i);
		$(".info").click();
	});
});