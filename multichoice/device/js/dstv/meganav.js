//Mega Nav Mian Navigation 
var PrevSelectedMenu = "";
var PrevMainSelectedMenu = "";
var FadeorSlide = "";
var hoverTimerActive = false;
$(document).ready(function () {
    var mainNav = $('#main-nav').find('li');
    mainNav.data('isHidden', true);

    for (var i = 0; i < mainNav.length; i++) {
        var item_id = '#' + $(mainNav[i]).attr('id');
        AddHoversupport(item_id);
    }

    $('#home').find('a').html('<span class="translatable">Home</span>');

    $('#main-nav-wrap').each(
        function () {
            $(this).mouseleave(function () {
                HideMenu();
            });
        });

    $('#search').mouseenter(function () {
        HideMenu();
    });

    $('#txtsearch').click(function () {
        var $text = $(this);
        if ($text.val() == 'Search') {
            $text.val('');
        }
    });
    $('#btnSearch').click(function (event) {
        event.preventDefault();
        DoSearch();
    });
});


function AddHoversupport(id) {
    $(id).data("menuIsHidden", true);

    $(id).on('touchstart', function (e) {
        this.trigger("click");
    });

    //$(id).toggle(function () {
    //    HideMenu();
    //    if (id != '#home') {
    //        $(id).find('a:first').css('color', '#FFF');
    //    }
    //}, function () {
    //    var nav = $(id);
    //    if (nav.length < 1) {
    //        HideMenu();
    //        return;
    //    }

    //    ShowMenu(id);
    //    $(id).addClass("highlighted");
    //    PrevMainSelectedMenu = id;

    //    $(id).find('a:first').css('color', '#0066a2');
    //});

    $(id).click(function () {
        //$(id).find('a:first').css('color', '#0066a2');
        if (hoverTimerActive == "false") {
            if (id == "#home") {
                var homeUrl = $(this).children('a')[0];
                window.location = homeUrl;
            }

            if (($("#main-nav").data("isHidden") == true) || (PrevMainSelectedMenu != id)) {
                var nav = $(id);
                if (nav.length < 1) {
                    HideMenu();
                } else {
                    $(id).addClass("highlighted");
                    ShowMenu(id);
                    $(id).find('a:first').css('color', '#0066a2');
                    PrevMainSelectedMenu = id;
                }
            } else {
                HideMenu();
            }
        }
    });
    var timeout;
    $(id).hover(
            function () {
                if (id == "#home") {
                    $(id).find('a:first').css('color', '#0066a2');
                }

                hoverTimerActive = "true";

                timeout = setTimeout(function () {
                    var nav = $(id);
                    if (nav.length < 1) {
                        $(id).find('a:first').css('color', '#0066a2');
                        HideMenu();
                        return;
                    }
                    $(id).addClass("highlighted");
                    $(id).find('a:first').css('color', '#0066a2');
					

                    ShowMenu(id);

                    PrevMainSelectedMenu = id;

                }, 350);
            },
       function () {
           hoverTimerActive = "false";
           //$(id).find('a:first').css('color', '#FFF');
           $(id + "-subnav").find('*').mouseenter(
                  function () {
                      $(id).find('a:first').css('color', '#0066a2');
                  });
           if (id != '#home') {


           }
           else {
               $(id).removeClass("highlighted");
               $(id).find('a:first').css('color', '#FFF');
               clearTimeout(timeout);
           }
           clearTimeout(timeout);
       }
        );
    var timeout;
}

// submenu
function ShowMenu(id) {

    var selectedMenu = id + "-subnav";

    //$(id).find('a:first').css('color', '#0066a2');
    if (selectedMenu != PrevMainSelectedMenu + "-subnav") {
        $(PrevMainSelectedMenu + "-subnav").hide()
        .slideUp("fast", function () {
            hoverTimerActive = "false";
        });
        $(PrevMainSelectedMenu).removeClass("highlighted")

    }

    $(selectedMenu).height(selectedMenu);

    if (FadeorSlide == "fade") {
        $('#main-nav').find('li').find('a').css('color', '#FFF');
        $(id).find('a:first').css('color', '#0066a2');
        $(selectedMenu).fadeIn(0);
    }
    else {
        $(selectedMenu).stop(true, true).slideDown("fast", function () {
            hoverTimerActive = "false";
        });

        FadeorSlide = "fade";
    }

    PrevSelectedMenu = selectedMenu;
    $("#main-nav").data("isHidden", false);
}
function HideMenu(id) {
    FadeorSlide = "";
    $(PrevSelectedMenu).slideUp('fast', function () {
        $(PrevMainSelectedMenu).removeClass("highlighted");
        $('#home').find('a').css('color', '#FFF');
        $('#main-nav').find('li').find('a').css('color', '#FFF');
    });
    $("#main-nav").data("isHidden", true);
}

// Stop hover animation on submenu anchors
$('#main-subnav ul li a').click(function (e) {
    $("#" + e.target.parentNode.parentNode.parentNode.parentNode.id).css('display', 'none');
});
//End of Global Menu Navigation

function SearchKeyPress(e) {
    var evt = e ? e : event;

    if (evt.keyCode == 13) {

        DoSearch();
        e.returnValue = false;
        e.cancel = true;
        return false;
    }
}

function DoSearch() {
    var searchTerm = $.trim($('#txtsearch').val());

    if (searchTerm.length == 0) {
        alert('Please enter the value in Search Text Area provided\n before clicking GO.');
    }
    else {
        document.location = '/Search/?searchterm=' + searchTerm + '&section=all';
    }
}