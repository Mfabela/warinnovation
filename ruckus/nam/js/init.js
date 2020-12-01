selectDemeo();



function addNetworkCaptivePortalTerms(desc)
{
    if (desc.length <= 1)
    { $("#cn_cp_tnc").hide();}
    else
        $("#cn_cp_tnc").show();
}

function addNetworkCaptivePortalMarketing(ty,desc)
{
    var t = "#cn_cp_mm", tt = "#cn_pwp_mm";
    if (ty == "w")
    {    t = "#cn_cp_wm"; tt = "#cn_pwp_wt";}

    if (desc.length <= 1)
    { $(t).hide();}
    else
    {
        setTimeout(function(){
            $(t).show().text($(tt).val());
        },300);
    }
        
}

function addNetworkVerify(desc, dat)
{   

   
    if (desc == "net_name")
    {
        if (dat.length < 1)
        {
            $(".frmRow:first-of-type > input").css({'border': '1px solid red'});
            $("#modal_add_network_next").attr("onclick", "");
                 
        }
        else
        {
            $("#modal_add_network_next").attr("onclick", "dashAddNext(\"step2\");modalSignUpClose()");
            console.log(dat);
            $(".netName").text(dat);
            
              
           

        }
    }

    selectDemeo();
}

function addNetworkVerifyReset(desc)
{

    if (desc == "net_name")
    {
        $(".frmRow:first-of-type > input").css({'border': '1px solid #dde6e9'});
        //realtime
        /*$('#cn_nd_name').keyup(function () {
            
          $('#cn_nd_desc').text($(this).val());
        });*/
        //realtime

    }
}

function adminToggle(desc, li)
{
    //alert(desc + " " + $("#adminToggleActive").text());
    if (desc == $("#adminToggleActive").text())
    {}
    else
    {
        $("#admin_nav > li").removeClass("adminSelect");
        var t = "#" + $("#adminToggleActive").text(), te = ":nth-of-type(" + li + ")";
        $(t).fadeOut('fast', function(){
            $("#" + desc).fadeIn('fast');
            $("#admin_nav > li" + te).addClass("adminSelect");
            $("#adminToggleActive").text(desc);  
            console.log(te);
        });
    }
}

function analyticsToggle(desc)
{
    $.ajax({
        type: "GET",
        url: "../analytics/" + desc,
        success: function(r){
            $(".content").html(r);
        },
        error: function(){}
    });
}

function dashAdd(desc)
{
    modalCheck();
    var u, id = "modal_";
    if (desc == "ap")
    {    u = "../php/addAp.php"; id = id + "add_ap"; }
    else if (desc == "network")
    {    u = "../php/addNetwork.php"; id = id + "add_network"; }
    else
    {    u = "../html/addVenue.html"; id = id + "add_venue"; }

    $.ajax({
        type: "GET",
        url: u,
        cache: false,
        beforeSend: function(){
            $(".modal").remove();
        },
        complete: function(){
        },
        success: function(r){
            $("<div id='" + id + "' class='modal'></div>").appendTo("body");
            $("#" + id).html(r);

            if (desc == "ap")
            {    demoAddAp(); }
            else if (desc == "network")
            {     }
            else
            {     }
        },
        error: function(){
            console.log("failed to retrieve " + desc + " script");
        },
    });

    selectDemeo();
}

function dashAddClose()
{  
    modalSignUpClose();

     $(".modal").fadeOut("fast");
    setTimeout(function(){
        $(".modal").remove();
    }, 500);

    $("analyticspopholder").fadeOut("fast");
    setTimeout(function(){
        $("#analyticspopholder").remove();
    }, 500);
}

function dashAddNext(desc)
{

    modalSignUpClose();
    if (desc == "step2")
    {
        $("#li_step1 > div:first-of-type, #li_step1 > hr").removeClass("onStep");
        $(".modal #step1").fadeOut("fast", function(){
            $(".modal #step2").fadeIn("fast");
            $("#li_step2 > div:first-of-type, #li_step2 > hr").addClass("onStep");
            $("#modal_add_network_next").attr("onclick", "dashAddNext('step3'); modalSignUpClose()");
            $("#modal_add_network_prev").attr("onclick", "dashAddPrevious('step1')").css({'display': 'list-item'});
        });
    }
    else if (desc == "step3")
    {
        $("#li_step2 > div:first-of-type, #li_step2 > hr").removeClass("onStep");
        $(".modal #step2").fadeOut("fast", function(){
            $(".modal #step3").fadeIn("fast");
            $("#li_step3 > div:first-of-type, #li_step3 > hr").addClass("onStep");
            $("#modal_add_network_next").attr("onclick", "dashAddNext('step4'); modalSignUpClose()");
            $("#modal_add_network_prev").attr("onclick", "dashAddPrevious('step2'); modalSignUpClose()");
        });
    }
    else if (desc == "step4")
    {
        $("#li_step3 > div:first-of-type, #li_step3 > hr").removeClass("onStep");
        $(".modal #step3").fadeOut("fast", function(){
            $(".modal #step4").fadeIn("fast");
            $("#li_step4 > div:first-of-type, #li_step4 > hr").addClass("onStep");
            $("#modal_add_network_next").attr("onclick", "dashAddNext('step5'); modalSignUpClose();switchtoggle();");
            $("#modal_add_network_prev").attr("onclick", "dashAddPrevious('step3'); modalSignUpClose();");
        });
    }
    else if (desc == "step5")
    {
        $("#li_step4 > div:first-of-type, #li_step4 > hr").removeClass("onStep");
        $(".modal #step4").fadeOut("fast", function(){
            $(".modal #step5").fadeIn("fast");
            $("#li_step5 > div:first-of-type, #li_step5 > hr").addClass("onStep");
            $("#modal_add_network_next").attr("onclick", "dashAddNext('step6'); modalSignUpClose();");
            $("#modal_add_network_prev").attr("onclick", "dashAddPrevious('step4'); modalSignUpClose();");
        });
    }
    else if (desc == "step6")
    {
        $("#li_step5 > div:first-of-type, #li_step5 > hr").removeClass("onStep");
        $(".modal #step5").fadeOut("fast", function(){
            $(".modal #step6").fadeIn("fast");
            $("#li_step6 > div:first-of-type, #li_step6 > hr").addClass("onStep");
            $("#frm_add_network > div:last-of-type > p").html("<a>Advanced Network Settings</a>");
            $("#modal_add_network_next").attr("onclick", "networkave()").text("Create");
            $("#modal_add_network_prev").attr("onclick", "dashAddPrevious('step5'); modalSignUpClose()");
        });
    }
}

function dashAddPrevious(desc)
{
    if (desc == "step5")
    {
        $("#li_step6 > div:first-of-type, #li_step6 > hr").removeClass("onStep");
        $(".modal #step6").fadeOut("fast", function(){
            $(".modal #step5").fadeIn("fast");
            $("#li_step5 > div:first-of-type, #li_step5 > hr").addClass("onStep");
            $("#frm_add_network > div:last-of-type > p").html("<span class='asterix req'>*</span> Required field");
            $("#modal_add_network_next").attr("onclick", "dashAddNext('step6'); modalSignUpClose()").text("Next");
            $("#modal_add_network_prev").attr("onclick", "dashAddPrevious('step4'); modalSignUpClose()");
        });
    }
    else if (desc == "step4")
    {
        $("#li_step5 > div:first-of-type, #li_step5 > hr").removeClass("onStep");
        $(".modal #step5").fadeOut("fast", function(){
            $(".modal #step4").fadeIn("fast");
            $("#li_step4 > div:first-of-type, #li_step4 > hr").addClass("onStep");
            $("#modal_add_network_next").attr("onclick", "dashAddNext('step5'); modalSignUpClose()");
            $("#modal_add_network_prev").attr("onclick", "dashAddPrevious('step3'); modalSignUpClose()");
        });
    }
    else if (desc == "step3")
    {
        $("#li_step4 > div:first-of-type, #li_step4 > hr").removeClass("onStep");
        $(".modal #step4").fadeOut("fast", function(){
            $(".modal #step3").fadeIn("fast");
            $("#li_step3 > div:first-of-type, #li_step3 > hr").addClass("onStep");
            $("#modal_add_network_next").attr("onclick", "dashAddNext('step4'); modalSignUpClose()");
            $("#modal_add_network_prev").attr("onclick", "dashAddPrevious('step2'); modalSignUpClose()");
        });
    }
    else if (desc == "step2")
    {
        $("#li_step3 > div:first-of-type, #li_step3 > hr").removeClass("onStep");
        $(".modal #step3").fadeOut("fast", function(){
            $(".modal #step2").fadeIn("fast");
            $("#li_step2 > div:first-of-type, #li_step2 > hr").addClass("onStep");
            $("#modal_add_network_next").attr("onclick", "dashAddNext('step3'); modalSignUpClose()");
            $("#modal_add_network_prev").attr("onclick", "dashAddPrevious('step1'); modalSignUpClose()");
        });
    }
    else if (desc == "step1")
    {
        $("#li_step2 > div:first-of-type, #li_step2 > hr").removeClass("onStep");
        $(".modal #step2").fadeOut("fast", function(){
            $(".modal #step1").fadeIn("fast");
            $("#li_step1 > div:first-of-type, #li_step1 > hr").addClass("onStep");
            $("#modal_add_network_next").attr("onclick", "dashAddNext('step2'); modalSignUpClose()");
            $("#modal_add_network_prev").attr("onclick", "").css({'display': 'none'});
        });
    }
}

function dashAddSubmit(desc)
{
    var u; 
    if (desc == "frm_add_ap")
    {    u = "../php/addApSubmit.php"; }
    else if (desc == "frm_add_network")
    {    u = "../php/addNetworkSubmit.php"; }
    else
    {    u = "../php/addVenuesSubmit.php"; }

    $.ajax({
        type: "POST",
        url: u,
        beforeSend: function(){},
        complete: function(){},
        success: function(){},
        error: function(){
            console.log("failed to process" + desc);
        }
    });
}

/*function dashAddNetwork()
{
    $("")
}

function dashAddVenue()
{
    $("")
}*/

function dashExpandRemove(desc)
{
    console.log("removing");
    $(desc).text("Expand");
}

function dashExpandV()
{   
    //$("#dash_expand").remove();
        //$("#content_pos1_dash_venues > p:last-of-type").text("Hide");
        //$("#content_pos1_dash_aps > p:last-of-type").text("Expand");
        
        $.ajax({
            type: "GET",
            cache: false,
            url: "../php/dashExpandVenues.php",
            beforeSend: function(){},
            complete: function(){},
            success: function(r){
                //$("<div id='dash_expand'><p style='display: block;'>venues</p></div>").appendTo("#content_pos1");
                $("#dash_expand").html(r);
            },
            error: function(){
                console.log("error");
            }
        });
    
    

    //debugger;
}

function dashExpandA()
{   
    //$("#dash_expand").remove();

        //Open
        //$("#content_pos1_dash_aps > p:last-of-type").text("Hide");
        //$("#content_pos1_dash_venues > p:last-of-type").text("Expand");
        
        /*$.ajax({
            type: "GET",
            cache: false,
            url: "../php/dashExpandAps.php",
            beforeSend: function(){},
            complete: function(){},
            success: function(r){

              //$("<div id='dash_expand'><p style='display: block;'>aps</p></div>").appendTo("#content_pos1");
              $("#dash_expand").html(r);

            },
            error: function(){
                console.log("error");
            }
        });*/
        //Open

        
    
   // debugger;
}

// Removing the dashExpand and toggling between the dashExpands still needs to be done

function testToggle(){

    //Toggle AP
        var myBool = true;
        $('.apCtrl').on('click', function() {
  if (myBool) {
     $('.apCtrl').html("Hide");
    
        $('.apCtrl').parent().addClass("itemSelect");
        $('.venueCtrl').parent().removeClass("itemSelect");

        $.ajax({
            type: "GET",
            cache: false,
            url: "../php/dashExpandApspop.php",
            beforeSend: function(){},
            complete: function(){},
            success: function(r){

              //$("<div id='dash_expand'><p style='display: block;'>aps</p></div>").appendTo("#content_pos1");
              $("#dash_expand").html(r);
              //$(this).addClass("adminSelect");

            },
            error: function(){
                console.log("error");
            }
        });
        //Open
       
  }
  else {
    //function 2 here
      $('.apCtrl').html("Expand");
      //$('.venueCtrl').html("Hide");
       $("#dash_expand").empty();

       $('.apCtrl').parent().removeClass("itemSelect");
       $('.venueCtrl').parent().removeClass("itemSelect");
  }
  myBool = !myBool;
});
        //Toggle AP




//Toggle Venue
        var myBoolVenue = true;
        $('.venueCtrl').on('click', function() {
  if (myBoolVenue) {
     $('.venueCtrl').html("Hide");

        $('.venueCtrl').parent().addClass("itemSelect");
        $('.apCtrl').parent().removeClass("itemSelect");

        $.ajax({
            type: "GET",
            cache: false,
            url: "../php/dashExpandVenuespop.php",
            beforeSend: function(){},
            complete: function(){},
            success: function(r){
                //$("<div id='dash_expand'><p style='display: block;'>venues</p></div>").appendTo("#content_pos1");
                $("#dash_expand").html(r);
            },
            error: function(){
                console.log("error");
            }
        });
        //Open
       
  }
  else {
    //function 2 here
      //$('.apCtrl').html("Hide");
      $('.apCtrl').parent().removeClass("itemSelect");
       $('.venueCtrl').parent().removeClass("itemSelect"); 

      $('.venueCtrl').html("Expand");
       $("#dash_expand").empty();
  }
  myBoolVenue = !myBoolVenue;
});
        //Toggle Venue



}

function dashNotifications()
{
    $.ajax({
        type: "GET",
        url: "../html/dashNotifications.html",
        cache: false,
        beforeSend: function(){},
        complete: function(){
        },
        success: function(r){
            $("<div id='modal_notifications' class='modal'></div>").appendTo("body");
            $("#modal_notifications").html(r);},
        error: function(){
            console.log("failed to retrieve demo script");
        },
    });
}

function demo()
{   
    //Cookie Function Start
    function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }


  function cookie(){
    var x = getCookie("iwashere");

    if (x == "" || x == null) {
      //alert("Welcome to Steampunk Inc!");
      ajaxCall()
      setCookie("iwashere", "iwashere", 365);
    } else if (x == "iwashere") {
      console.log("You came back!");
    }
  }

  
   //Cookie Function End

    function ajaxCall(){
        //Start Ajax
        $.ajax({
        type: "GET",
        url: "../html/demo.html",
        cache: false,
        beforeSend: function(){},
        complete: function(){},
        success: function(r){
            $("<div id='modal_demo' class='modal'></div>").appendTo("body");
            $("#modal_demo").html(r);
            //alert("started");
            democharts();
            selectDemeo();
            //socialActive();
        },
        afterSend: function(){
            

        },
        error: function(){
            console.log("failed to retrieve demo script");
        },
    });
        
        //End Ajax
    }


//Call the cookie function here 
//ajaxCall()
cookie();

}



function demoClose()
{
    $(".modal").fadeOut("fast");
    setTimeout(function(){
        $(".modal").remove();
    }, 500);

    $("analyticspopholder").fadeOut("fast");
    setTimeout(function(){
        $("#analyticspopholder").remove();
    }, 500);


}

function demoNext(desc)
{
    if (desc == "step2")
    {
        $("#modal_demo > #step1").fadeOut("fast");
        setTimeout(function(){
            $("#modal_demo > #step2").fadeIn("fast");
            $(".flex-container").css({'opacity':'1'});
        }, 500);
    }
    else if (desc == "step3")
    {
        $("#modal_demo > #step2").fadeOut("fast");
        setTimeout(function(){
            $("#modal_demo > #step3").fadeIn("fast");
            $(".modal").css({'background-image':'url(../img/modal_back.png)'});
            $(".overDemo").css({'opacity':'0'});
            //$(".modal").css({'background':'transparent'});

        }, 500);
    }
    else if (desc == "step4")
    {
        $("#modal_demo > #step3").fadeOut("fast");
        setTimeout(function(){
            $("#modal_demo > #step4").fadeIn("fast");
            $(".modal").css({'background-image':'url(../img/modal_back.png)'});
            $(".overDemo").css({'opacity':'1'});  
            $(".flex-container1").css({'opacity':'0'});
            $(".addNetworkIcon").css({'opacity':'1'});                                  
        }, 500);
    }
}

function demoAddAp()
{
    $.ajax({
        type: "GET",
        url: "../html/demoAp.html",
        cache: false,
        beforeSend: function(){},
        complete: function(){
        },
        success: function(r){
            $("<div id='modal_demo_ap' class='modal'></div>").appendTo(".modal");
            $("#modal_demo_ap").html(r);
             selectDemeo()},
        error: function(){
            console.log("failed to retrieve ap demo script");
        },
    });
}

function demoAddApClose()
{
    $("#modal_demo_ap").fadeOut("fast");
    setTimeout(function(){
        $("#modal_demo_ap").remove();
    }, 500);
}

function demoAddApNext(desc)
{
    if (desc == "step2")
    {
        $("#modal_demo_ap > #step1").fadeOut("fast");
        setTimeout(function(){
            $("#modal_demo_ap > #step2").fadeIn("fast");
        }, 500);
    }
    else if (desc == "step3")
    {
        $("#modal_demo_ap > #step2").fadeOut("fast");
        setTimeout(function(){
            $("#modal_demo_ap > #step3").fadeIn("fast");
        }, 500);
    }
}

function demoAddApPrev(desc)
{
    if (desc == "step2")
    {
        $("#modal_demo_ap > #step3").fadeOut("fast");
        setTimeout(function(){
            $("#modal_demo_ap > #step2").fadeIn("fast");
        }, 500);
    }
    else if (desc == "step1")
    {
        $("#modal_demo_ap > #step2").fadeOut("fast");
        setTimeout(function(){
            $("#modal_demo_ap > #step1").fadeIn("fast");
        }, 500);
    }
}

function modalCheck()
{
    var t = document.getElementsByClassName("modal");
    //alert(t.length);

    if (t.length > 0)
    {
        $(".modal").remove();
    }
}

function modalSignUp()
{
    $.ajax({
        type: "GET",
        url: "../html/modalSignUp.html",
        cache: false,
        beforeSend: function(){},
        complete: function(){
        },
        success: function(r){
            $("<div id='modal_signup' class='modal'></div>").appendTo("body");
            $("#modal_signup").html(r).focus();
        },
        error: function(){
            console.log("failed to retrieve sighn up script");
        },
    });
}

function modalSignUpSmall()
{
    if ($("#modal_signup_small").length == 0)
    {
        $.ajax({
            type: "GET",
            url: "../html/modalSignUpSmall.html",
            cache: false,
            beforeSend: function(){},
            complete: function(){
                //$("#cn_nd_access_type4").prop("checked", true);
            },
            success: function(r){
                $("<div id='modal_signup_small_2'></div>").appendTo("#modal_add_network");
                $("#modal_signup_small_2").html(r);
                selectDemeo();
            },
            error: function(){
                console.log("failed to retrieve small sign up script");
            },
        });
    }
    else
    { 
        //$("#cn_nd_access_type4").prop("checked", true);
    }   
}




function modalSearchSignUp()
{
   //alert("Search");
    
    if ($("#modal_signup_small").length == 0)
    {
        $.ajax({
            type: "GET",
            url: "../html/modalSignUpSmallSearch.html",
            cache: false,
            beforeSend: function(){},
            complete: function(){
                //$("#cn_nd_access_type4").prop("checked", true);
            },
            success: function(r){
                $("<div id='modal_signup_search'></div>").appendTo("body");
                $("#modal_signup_search").html(r);
                selectDemeo();
            },
            error: function(){
                console.log("failed to retrieve small sign up script");
            },
        });
    }
    else
    { 
        //$("#cn_nd_access_type4").prop("checked", true);
    }  
}



function modalSignUpClose()
{
    $("#modal_signup_small").fadeOut("fast");
    setTimeout(function(){
        $("#modal_signup_small").remove();
    }, 500);

    $("#modal_signup_small_2").fadeOut("fast");
    setTimeout(function(){
        $("#modal_signup_small_2").remove();
    }, 500);

    $("#modal_signup_search").fadeOut("fast");
    setTimeout(function(){
        $("#modal_signup_search").remove();
    }, 500);

}


function tipClose()
{
    $("#tip").fadeOut("fast");
    setTimeout(function(){
        $("#modal_signup_search").remove();
    }, 500);
}




/*Luthando *
$("#ca_fp").change( function(){
  alert("state changed");
});
/*Luthando*/

function signupcreateAP(){
    //alert("state changed");
    if ($("#modal_signup_small").length == 0)
    {
        $.ajax({
            type: "GET",
            url: "../html/modalSignUpSmall.html",
            cache: false,
            beforeSend: function(){},
            complete: function(){
                //$("#cn_nd_access_type4").prop("checked", true);
            },
            success: function(r){
                $("<div id='modal_signup_small'></div>").appendTo("#footsignup");
                $("#modal_signup_small").html(r);
                selectDemeo();
            },
            error: function(){
                console.log("failed to retrieve small sign up script");
            },
        });
    }
    else
    { 
        //$("#cn_nd_access_type4").prop("checked", true);
    }
}



function analyticsLoad()
{   
        //Cookie Function Start
    function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }


  function cookie(){
    var x = getCookie("iwashere");

    if (x == "" || x == null) {
      //alert("Welcome to Steampunk Inc!");
      ajaxPopLoad();
      setCookie("analyticspg", "analyticspg", 365);
    } else if (x == "analyticspg") {
      console.log("You came back!");
    }
  }




function ajaxPopLoad(){
    $.ajax({
        type: "GET",
        url: "../html/analycticsload.html",
        cache: false,
        beforeSend: function(){},
        complete: function(){},
        success: function(r){
            $("<div id='analyticspopholder' class='modal'></div>").appendTo("body");
            $("#analyticspopholder").html(r);
            var $target = $('html,body'); 
            var scroll=$('#scroll');
            scrollDown();
            selectDemeo();
            //alert("Scroll")
        },
        afterSend: function(){},
        error: function(){
            console.log("failed to retrieve demo script");
        },
    });

}



cookie();



}


function scrollDown(){

    var elmnt = document.getElementById("trafficid");
    elmnt.scrollLeft = 50;
    elmnt.scrollTop = 10;

}



function menumate(){

    function handler1() {
    $(this).animate({
        width: "260px"
    }, 1500);
    $(this).one("click", handler2);
}

function handler2() {
    $(this).animate({
        width: "30px"
    }, 1500);
    $(this).one("click", handler1);
}

$(".nav").one("click", handler1);

}



function biggerScreen()
{   
    $.ajax({
        type: "GET",
        url: "../html/biggerscreen.html",
        cache: false,
        beforeSend: function(){},
        complete: function(){},
        success: function(r){
            $("<div id='biggerscreenHolder' class='modal modal_analyctics'></div>").appendTo("body");
            $("#biggerscreenHolder").html(r);
        },
        afterSend: function(){},
        error: function(){
            console.log("failed to retrieve demo script");
        },
    });
}




function democharts(){
    var ctxv = document.getElementById("chart-area-venues_2").getContext("2d");
    window.myDoughnut = new Chart(ctxv, configv);
    var ctxa = document.getElementById("chart-area-ap_2").getContext("2d");
    window.myDoughnut = new Chart(ctxa, configa);
    var ctxc = document.getElementById("chart-area-clients_2").getContext("2d");
    window.myDoughnut = new Chart(ctxc, configc);

}
         

function relocate(){
    window.location.href = "../networks/index.html";
}


function advertChange(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#advert')
                    .attr('src', e.target.result)
                    .width(100)
                    .height(54);
               $("#advertname").html("New Advert Selected");
            };

            reader.readAsDataURL(input.files[0]);
        }
}



function logoChange(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#logo')
                    .attr('src', e.target.result)
                    .width(100)
                    .height(64);
                $("#logoname").html("New Logo Selected");
            };

            reader.readAsDataURL(input.files[0]);
        }
}




function socialActiveFB(checkbox){
    //checksocial.checked=false;
    //facebook
    

    //alert("Hellow");
    if(checkbox.checked == true){
        
        $(".facebook").show();
        $(".facebookholder").show()
    
    }else if(checkbox.checked == false)
    {

         $(".facebook").hide();
         $(".facebookholder").hide()

    }

/*
    //Google
    #cn_o_sign_in3
    .google


    //Linkedin
    #cn_o_sign_in4
    .lnkedin


    //Twitter
    #cn_o_sign_in5
    .twitter

*/

}





function socialActiveG(checkbox){
    //checksocial.checked=false;
    //facebook
    

    //alert("Hellow");
    if(checkbox.checked == true){
        
        $(".google").show();
        $(".googleholder").show()
    
    }else if(checkbox.checked == false)
    {

         $(".google").hide();
         $(".googleholder").hide()

    }



}



function socialActiveL(checkbox){
    //checksocial.checked=false;
    //facebook
    

    //alert("Hellow");
    if(checkbox.checked == true){
        
        $(".linkedin").show();
        $(".linkedinholder").show()
    
    }else if(checkbox.checked == false)
    {

         $(".linkedin").hide();
         $(".linkedinholder").hide()

    }



}



function socialActiveT(checkbox){
    //checksocial.checked=false;
    //facebook
    

    //alert("Hellow");
    if(checkbox.checked == true){
        
        $(".twitter").show();
        $(".twitterholder").show()
    
    }else if(checkbox.checked == false)
    {

         $(".twitter").hide();
         $(".twitterholder").hide()

    }



}


//Venues Toggle
function venuesToggle(desc)
{  

    $.ajax({
        type: "GET",
        url: "../venues/" + desc,
        success: function(r){
            $(".content").html(r);
        },
        error: function(){}
    });
}
//Venues Toggle


function venuecookiesave(){
  
  var venue = $("#vene_location").val();
  var venue_details = $("#venue_details").val();
  var venue_city = $("#venue_city").val();
  var venue_country = $("#venue_country").val();
  //Set Cookie
  Cookies.remove('setvenue');
  Cookies.set('setvenue', venue, { expires: 1 });
  Cookies.remove('setvenue_details');
  Cookies.set('setvenue_details', venue_details, { expires: 1 });
  Cookies.remove('setvenue_city');
  Cookies.set('setvenue_city', venue, { expires: 1 });
  Cookies.remove('setvenue_country');
  Cookies.set('setvenue_country', venue_details, { expires: 1 });

  //Get Cookies
  var checkCookie =  Cookies.get('setvenue')+Cookies.get('setvenue_details')+Cookies.get('setvenue_city')+Cookies.get('setvenue_country');
  venueCreated();
    setTimeout(function(){
   window.location.href = "../venues/index.html";
  },1000);
 

}



function venueload(){
  //Condition
  //Set Cookie
 if(Cookies.get('setvenue')){
  //Get Cookies
  var checkCookie =  Cookies.get('setvenue')+Cookies.get('setvenue_details');
   //alert(checkCookie);
   var tableAppend = '<tr id="justloaded">'
                    +'<td class="s2"><img src="../img/location_green.png" width="10px" />'+Cookies.get('setvenue')+'</td>'
                    +'<td class="s2">'+Cookies.get('setvenue_details')+'</td>'
                    +'<td class="s2">Los Angeles, CA</td>'
                    +'<td class="s3">US</td>'
                    +'<td class="s3">7</td>'
                    +'<td class="s3">15</td>'
                    +'<td class="s3">610</td>'
                  +'</tr>'

   
   /*var tableAppend = '<tr id="justloaded">'
                    +'<td class="s2"><img src="../img/location_green.png" width="10px" />'+Cookies.get('setvenue')+'</td>'
                    +'<td class="s2">'+Cookies.get('setvenue_details')+'</td>'
                    +'<td class="s2">'+Cookies.get('setvenue_city')+'</td>'
                    +'<td class="s3">'+Cookies.get('setvenue_country')+'</td>'
                    +'<td class="s3">7</td>'
                    +'<td class="s3">15</td>'
                    +'<td class="s3">610</td>'
                  +'</tr>'*/


  $(tableAppend ).insertBefore(".venuelink");
  $("#justloaded td").css({'background-color': '#fff0e1'});
  
  setTimeout(
    function(){
        $("#justloaded td").css({'background-color': '#fff'});
    },2000)
  }
 //Condition

 /*Count Elements*/
 var elementsNum =  $("tr").length - 1;
 //alert(elementsNum);
 $(".venueItems").text(elementsNum);
 Cookies.remove('venueItems');
 Cookies.set('venueItems', elementsNum, { expires: 1 });
 /*Count Elements*/

}





function apcookiesave(){
  
  var ap_venue = $("#ap_venue").val();
  var ap_name = $("#ap_name").val();
  var ap_description = $("#ap_description").val();
  var ap_seriealnumber = $("#ap_seriealnumber").val();
  var ap_tags = $("#ap_tags").val();
  //Set Cookie
  Cookies.remove('ap_venue');
  Cookies.set('ap_venue', ap_venue, { expires: 1 });
  Cookies.remove('ap_name');
  Cookies.set('ap_name', ap_name, { expires: 1 });
  Cookies.remove('ap_description');
  Cookies.set('ap_description', ap_description, { expires: 1 });
  Cookies.remove('ap_seriealnumber');
  Cookies.set('ap_seriealnumber', ap_seriealnumber, { expires: 1 });
  Cookies.remove('ap_tags');
  Cookies.set('ap_tags', ap_tags, { expires: 1 });

  //Get Cookies
  var checkCookie =  Cookies.get('ap_venue')+Cookies.get('ap_seriealnumber')+Cookies.get('ap_name')+Cookies.get('ap_tags');
  apCreated();

  
  setTimeout(function(){
     window.location.href = "../ap/index.html";
  },2000)
  

}



function apload(){
    //Condition
   if(Cookies.get('ap_name')){
   var tableAppend = '<tr id="justloaded" >'
                    +'<td class="s2"><img src="../img/access_points_10.png" width="20px" />'+Cookies.get('ap_name')+'</td>'
                    +'<td class="s2"><img src="../img/access_points_12.png" width="18px" />Operational</td>'
                    +'<td class="s2">R610</td>'
                    +'<td class="s2">10.1.46.5</td>'
                    +'<td class="s2 softmerge">30:87:I2:03:C2:00</td>'
                    +'<td class="s2"><img src="../img/location_green.png" width="16px" />'+Cookies.get('ap_venue')+'</td>'
                    +'<td class="s2">AP</td>'
                    +'<td class="s3">40</td>'
                  +'</tr>';

  $(tableAppend ).insertBefore(".loadbefore");
  $("#justloaded td").css({'background-color': '#fff0e1'});
  
  setTimeout(
    function(){
        $("#justloaded td").css({'background-color': '#fff'});
    },2000)
  }
  //Condition

 /*Count Elements*/
 var elementsNum =  $("tr").length - 1;
 //alert(elementsNum);
 $(".apItems").text(elementsNum);
 Cookies.remove('apItems');
 Cookies.set('apItems', elementsNum, { expires: 1 });
 /*Count Elements*/

}





function networkave(){
  
  var network_name = $("#cn_nd_name").val();
  var network_description = $("#cn_nd_desc").val();
  var network_ap = $("#networkap").text();
  var network_network = $("#networknetwork").text();
  //Set Cookie
  Cookies.remove('network_name');
  Cookies.set('network_name', network_name, { expires: 1 });
  Cookies.remove('network_description');
  Cookies.set('network_description', network_description, { expires: 1 });
  Cookies.remove('network_ap');
  Cookies.set('network_ap', network_ap, { expires: 1 });
  Cookies.remove('network_network');
  Cookies.set('network_network', network_network, { expires: 1 });

  //Get Cookies
  var checkCookie =  Cookies.get('network_name')+Cookies.get('network_description')+Cookies.get('network_ap')+Cookies.get('network_network');
  networkCreated();
  
  setTimeout(function(){
     window.location.href = "../networks/index.html";
  },2000);
  

}



function networkload(){

    //Condition
   if(Cookies.get('network_name')){
  var tableAppend = '<tr id="justloaded" >'
                    +'<td class="s1"><img src="../img/networks_06.png" width="20px">'+Cookies.get('network_name')+'</td>'
                    +'<td class="s1">'+Cookies.get('network_description')+'</td>'
                    +'<td class="s1">private</td>'
                    +'<td class="s2">1</td>'
                    +'<td class="s2">24</td>'
                    +'<td class="s2">55</td>'
                  +'</tr>';

  $(tableAppend).insertBefore(".loadbefore");
  $("#justloaded td").css({'background-color': '#fff0e1'});
  
  setTimeout(
    function(){
        $("#justloaded td").css({'background-color': '#fff'});
    },2000)
  }
  //Condition
  
   /*Count Elements*/
 var elementsNum =  $("tr").length - 1;
 //alert(elementsNum);
 $(".network_Items").text(elementsNum);
 Cookies.remove('network_Items');
 Cookies.set('network_Items', elementsNum, { expires: 1 });
 /*Count Elements*/

}



function clientload(){

   /*Count Elements*/
 var elementsNum =  $("tr").length - 1;
 //alert(elementsNum);
 $(".client_Items").text(elementsNum);
 Cookies.remove('client_Items');
 Cookies.set('client_Items', elementsNum, { expires: 1 });
 /*Count Elements*/

}



function venueCreated(){
    //alert("state changed");
    if ($("#modal_signup_small").length == 0)
    {
        $.ajax({
            type: "GET",
            url: "../html/venue_created.html",
            cache: false,
            beforeSend: function(){},
            complete: function(){
                //$("#cn_nd_access_type4").prop("checked", true);
            },
            success: function(r){
                $("<div id='modal_signup_small'></div>").appendTo("#footsignup");
                $("#modal_signup_small").html(r);
            },
            error: function(){
                console.log("failed to retrieve small sign up script");
            },
        });
    }
    else
    { 
        //$("#cn_nd_access_type4").prop("checked", true);
    }
}


function networkCreated(){
    //alert("state changed");
    if ($("#modal_signup_small").length == 0)
    {
        $.ajax({
            type: "GET",
            url: "../html/network_created.html",
            cache: false,
            beforeSend: function(){},
            complete: function(){
                //$("#cn_nd_access_type4").prop("checked", true);
            },
            success: function(r){
                $("<div id='modal_signup_small'></div>").appendTo(".networkFoot");
                $("#modal_signup_small").html(r);
            },
            error: function(){
                console.log("failed to retrieve small sign up script");
            },
        });
    }
    else
    { 
        //$("#cn_nd_access_type4").prop("checked", true);
    }
}


function apCreated(){
    //alert("state changed");
    if ($("#modal_signup_small").length == 0)
    {
        $.ajax({
            type: "GET",
            url: "../html/ap_created.html",
            cache: false,
            beforeSend: function(){},
            complete: function(){
                //$("#cn_nd_access_type4").prop("checked", true);
            },
            success: function(r){
                $("<div id='modal_signup_small'></div>").appendTo("#footsignup");
                $("#modal_signup_small").html(r);
            },
            error: function(){
                console.log("failed to retrieve small sign up script");
            },
        });
    }
    else
    { 
        //$("#cn_nd_access_type4").prop("checked", true);
    }
}



function switchtoggle(){
    var switchon = true;

    $(".switch").on('click', function() {
  if (switchon) {
     //function 1
    $(this).attr("src", "../img/switch.jpg");
      
  }
  else {
    //function 2 here
     $(this).attr("src", "../img/on_switch.png");
     
     
  }
  switchon = !switchon;
});
}


//Landing
function selectDemeo(){

        $(window).load(function() {
        // Run code
        setInterval(function(){

        hashSelect(".langdemo","#welcometrans","demo_2.html");
        hashSelect(".langdemo_2","#welcometrans_2","step2.html");
        hashSelect(".langdemo_3","#welcometrans_3","step3.html");
        hashSelect(".langdemo_4","#welcometrans_4","step4.html");
        hashSelect(".langdemo_5",".networktrans","networkmodal.html");
        hashSelect(".langdemo_5",".recommended","recommend.html");
        hashSelect(".langdemo_5","#previewpop","previewpop.html");
        hashSelect(".langdemo_6","#aptrans","apcont_1.html");
        hashSelect(".langdemo_6","#aptrans_2","apcont_2.html");
        hashSelect(".langdemo_6","#aptrans_3","apcont_3.html");
        hashSelect(".langdemo_7","#analytrans","analyticsswitch.html");
        hashSelect(".langdemo_7",".recommended","recommend.html");
        //Signup
        hashSelect(".langdemo",".networktrans","networkmodal.html");
        //Signup

        //Notice
        hashSelect(".langdemo","#createdVenue","venue_notice.html");
        hashSelect(".langdemo","#createdNetwork","network_notice.html");
        hashSelect(".langdemo","#createdAp","ap_notice.html");
        //Notice

        //Search
         hashSelect(".langdemo_8","#searchsiwtch","searchpop.html");
        //Search

        },1000)
        /**/

        });
          
        //Start
       $('.langdemo').on('change', function() {
         dropdownSelect(this,"#welcometrans","demo_2.html");
         dropdownSelect(this,".networktrans","networkmodal.html");

         dropdownSelect(this,"#createdVenue","venue_notice.html");
         dropdownSelect(this,"#createdNetwork","network_notice.html");
         dropdownSelect(this,"#createdAp","ap_notice.html");
        });
       //Signup

       /*$(".langdemo").on('change', function() {
        alert("Hello");
         
        });*/
       //Signup
        //End

        //Start
        $(".langdemo_2").on('change', function() {
         dropdownSelect(this,"#welcometrans_2","step2.html");
        });
        //End

        //Start
        $(".langdemo_3").on('change', function() {
         dropdownSelect(this,"#welcometrans_3","step3.html");
        });
        //End

        //Start
        $(".langdemo_4").on('change', function() {
         dropdownSelect(this,"#welcometrans_4","step4.html");
        });
        //End


        //Start
        $(".langdemo_5").on('change', function() {
         dropdownSelect(this,".networktrans","networkmodal.html");
        });

        $(".langdemo_5").on('change', function() {
        dropdownSelect(this,".recommended","recommend.html");
        });

        $(".langdemo_5").on('change', function() {
         dropdownSelect(this,"#previewpop","previewpop.html");
        });
        //End
             
        
        //Start
        $(".langdemo_6").on('change', function() {
         dropdownSelect(this,"#aptrans","apcont_1.html");
        });
        $(".langdemo_6").on('change', function() {
         dropdownSelect(this,"#aptrans_2","apcont_2.html");
        });
        $(".langdemo_6").on('change', function() {
         dropdownSelect(this,"#aptrans_3","apcont_3.html");
        });
        //End

        //Start
        $(".langdemo_7").on('change', function() {
         dropdownSelect(this,"#analytrans","analyticsswitch.html");
        });
        $(".langdemo_7").on('change', function() {
        dropdownSelect(this,".recommended","recommend.html");
        });
        //End


        //Search
        $(".langdemo_8").on('change', function() {
        dropdownSelect(this,"#searchsiwtch","searchpop.html");
        });
        //Search
        
        
        
        //alert(gethash);
        var translate = true;

         //Start Main function
        function dropdownSelect(targetSelect,targetDiv,locateFile){

        //Get Hash Value
        var gethash = window.location.hash.substr(1);

        //Get Input Value
        var selectval = $(targetSelect).val();
       

        //Select Value Start
        if(selectval){
       //Compare Values
        if(selectval == "Deutsche"){

        ajaxLocation("../html/deutche/"+locateFile);
        window.location.href = "#Deutsche";
        console.log(gethash);
        

        }else if(selectval == "Dutch"){

        ajaxLocation("../html/dutch/"+locateFile);
        window.location.href = "#Dutch";
        console.log(gethash);
        

        }else if(selectval == "French"){

        ajaxLocation("../html/french/"+locateFile);
        window.location.href = "#French";
        console.log(gethash);
       

        }else if(selectval == "Spanish"){

         ajaxLocation("../html/spanish/"+locateFile);
         window.location.href = "#Spanish";
         console.log(gethash);
         

        }else if(selectval == "Italian"){

         ajaxLocation("../html/italian/"+locateFile);
         window.location.href = "#Italian";
         console.log(gethash);
         

        }else if(selectval == "English"){

         ajaxLocation("../html/"+locateFile);
         window.location.href = "#English";
         console.log(gethash);
         

        }

        }
        //Select Value End
        
        
  
        //Get Relevant file
        function ajaxLocation(fileLocation){
        
        $.ajax({
        type: "GET",
        url: fileLocation,
        cache: false,
        beforeSend: function(){},
        complete: function(){},
        success: function(r){
           // $("<div id='modal_demo' class='modal'></div>").appendTo("body");
            $(targetDiv).html(r);
            //alert("started");
            //socialActive();
        },
        afterSend: function(){
            

        },
        error: function(){
            console.log("failed to retrieve demo script");
        },
        });


        }

        

        }
        //End Main Function



        //Check Hash Start
        function hashSelect(targetSelect,targetDiv,locateFile){
        //Get Hash Value
        var gethash = window.location.hash.substr(1);
        var selectval = $(targetSelect).val();
        if(gethash == "Deutsche"){

        ajaxLocation("../html/deutche/"+locateFile);
        console.log(locateFile);

        }else if(gethash == "Dutch"){

        ajaxLocation("../html/dutch/"+locateFile);
        console.log(locateFile);

        }else if(gethash == "French"){

        ajaxLocation("../html/french/"+locateFile);
        console.log(locateFile);

        }else if(gethash == "Spanish"){

         ajaxLocation("../html/spanish/"+locateFile);
         console.log(locateFile);

        }else if(gethash == "Italian"){

         ajaxLocation("../html/italian/"+locateFile);
         console.log(locateFile);

        }else if(gethash == "English"){

         ajaxLocation("../html/"+locateFile);
         console.log(locateFile);
        }

        //Hash Value End
  
        //Get Relevant file
        function ajaxLocation(fileLocation){
        
        $.ajax({
        type: "GET",
        url: fileLocation,
        cache: false,
        beforeSend: function(){},
        complete: function(){},
        success: function(r){
           // $("<div id='modal_demo' class='modal'></div>").appendTo("body");
            $(targetDiv).html(r);
            //alert("started");
            //socialActive();
        },
        afterSend: function(){
            

        },
        error: function(){
            console.log("failed to retrieve demo script");
        },
        });


        }

        }

        //Check hash End


}
//Landing



/*Luthando*/