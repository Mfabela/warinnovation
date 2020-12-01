function regionSelectUs(){
   var language;
   var selectval = $(".langselectus").val();
   //alert(selectval);
    if(selectval == "English"){
      window.location.href = "nam/dashboard/index.html#English";
    }else if(selectval == "Deutsche"){
      window.location.href = "nam/dashboard/index.html#Deutsche";
    }else if(selectval == "Dutch"){
      window.location.href = "nam/dashboard/index.html#Dutch";
    }else if(selectval == "English"){
      window.location.href = "nam/dashboard/index.html#English";
    }else if(selectval == "Spanish"){
      window.location.href = "nam/dashboard/index.html#Spanish";
    }else if(selectval == "Italian"){
      window.location.href = "nam/dashboard/index.html#Italian";
    }else if(selectval == "English"){
        window.location.href = "nam/dashboard/index.html#English";
    }else if(selectval == "French"){
        window.location.href = "nam/dashboard/index.html#French";
    }
     
}



function regionSelectEu(){
   var language;
   var selectval = $(".langselecteu").val();
   //alert(selectval);
    if(selectval == "English"){
      window.location.href = "emea/dashboard/index.html#English";
    }else if(selectval == "Deutsche"){
      window.location.href = "emea/dashboard/index.html#Deutsche";
    }else if(selectval == "Dutch"){
      window.location.href = "emea/dashboard/index.html#Dutch";
    }else if(selectval == "English"){
      window.location.href = "emea/dashboard/index.html#English";
    }else if(selectval == "Spanish"){
      window.location.href = "emea/dashboard/index.html#Spanish";
    }else if(selectval == "Italian"){
      window.location.href = "emea/dashboard/index.html#Italian";
    }else if(selectval == "English"){
      window.location.href = "emea/dashboard/index.html#English";
    }else if(selectval == "French"){
        window.location.href = "emea/dashboard/index.html#French";
    }
     
}



function selectFlag(){

    $("#us").click(function(){
        $(".selectopara_us").show();
        $(".selectopara_eu").hide();
        $(".flags>img").css("border", "none");
        $(this).css("border", "#d5611e solid 2px");
    })


    $("#eu").click(function(){
        $(".selectopara_eu").show();
        $(".selectopara_us").hide();
        $(".flags>img").css("border", "none");
        $(this).css("border", "#d5611e solid 2px");
    })

}