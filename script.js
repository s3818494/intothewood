document.addEventListener("DOMContentLoaded", () => {

    isClicked = false;

    $(document).ready(function(){


        // --------- FADE ELEMENTS ON SCROLL ---------------

        var position = $(window).scrollTop();
        
        $(window).scroll(function() {

            // current scrolltop value/scroll position

            // if the current scrolltop is bigger than the last scrolltop -> scrolling down
            var scroll = $(window).scrollTop(); 

            if (scroll > position) {

                $("#inst").fadeOut(1500);

                console.log('scrollDown');
                // console.log($(window).scrollTop);

                if ((scroll >= 0) && (scroll < 300)) {
                    $("#tree1").fadeTo(0, 0);
                    $("#title1").fadeOut(1500); 
                    $("#title2").fadeOut(1500);
                }

                if ((scroll >= 600) && (scroll < 900)) {
                    $("#tree2").fadeTo(0, 1);
                    $("#text2").fadeTo(0, 1);
                }
                if ((scroll >= 1200) && (scroll < 1500)) {
                    $("#tree2").fadeTo(0, 0);
                    $("#text2").fadeTo(0, 0);
                }

                if ((scroll >= 1800) && (scroll < 2100)) {
                    $("#tree3").fadeTo(0, 1);
                    $("#text3").fadeTo(0, 1);
                }
                if ((scroll >= 2400) && (scroll < 2700)) {
                    $("#tree3").fadeTo(0, 0);
                    $("#text3").fadeTo(0, 0);
                }

                if ((scroll >= 3000) && (scroll < 3300)) {
                    $("#tree4").fadeTo(0, 1);
                    $("#text4").fadeTo(0, 1);
                }
                if ((scroll >= 3600) && (scroll < 3900)) {
                    $("#tree4").fadeTo(0, 0);
                    $("#text4").fadeTo(0, 0);
                }

                if ((scroll >= 4200) && (scroll < 4500)) {
                    $("#tree5").fadeTo(0, 1);
                    $("#text5").fadeTo(0, 1);
                }

                if ((scroll >= 4800) && (scroll < 5100)) {
                    $(".black-bg").stop().animate({top: '0vh'}, 1500);
                }

                
            } else { // else, the current scrolltop is smaller than the last scrolltop -> scrolling up
                if ((scroll >= 0) && (scroll < 300)) {
                    $("#tree1").fadeTo(0, 1);
                    $("#title1").fadeIn(1500); 
                    $("#title2").fadeIn(1500);
                }

                if ((scroll >= 600) && (scroll < 900)) {
                    $("#tree2").fadeTo(0, 0.2);
                    $("#text2").fadeTo(0, 0);
                }
                if ((scroll >= 1200) && (scroll < 1500)) {
                    $("#tree2").fadeTo(0, 1);
                    $("#text2").fadeTo(0, 1);
                }

                if ((scroll >= 1800) && (scroll < 2100)) {
                    $("#tree3").fadeTo(0, 0.15);
                    $("#text3").fadeTo(0, 0);
                }
                if ((scroll >= 2400) && (scroll < 2700)) {
                    $("#tree3").fadeTo(0, 1);
                    $("#text3").fadeTo(0, 1);
                }

                if ((scroll >= 3000) && (scroll < 3300)) {
                    $("#tree4").fadeTo(0, 0.1);
                    $("#text4").fadeTo(0, 0);
                }
                if ((scroll >= 3600) && (scroll < 3900)) {
                    $("#tree4").fadeTo(0, 1);
                    $("#text4").fadeTo(0, 1);
                }

                if ((scroll >= 4200) && (scroll < 4500)) {
                    $("#tree5").fadeTo(0, 0.05);
                    $("#text5").fadeTo(0, 0);
                }

                if ((scroll >= 4800) && (scroll < 5100)) {
                    $(".black-bg").stop().animate({top: '100vh'}, 1500);
                    console.log("go down")
                }
                
                console.log('scrollUp');

            }
            position = scroll; // save the last scrolltop value/the last scroll position


        });


        // ------------- FORCE THE SCROLLBAR TO GO BACK TO THE TOP AFTER REFRESHING -----------------------

        history.scrollRestoration = "manual"; //set the scroll restoration behavior on history navigation to manual to prevent it go back to the old location

        $(window).on('beforeunload', function(){ //beforeunload event fired before the webpage and its resources are about to be unloaded
            $(window).scrollTop(0); //back to 0px when webpage is reloaded
        });



        // --------------- DAY/NIGHT MODE BASED ON COMPUTER TIME -----------------

        $(function() {

            var hour = (new Date).getHours();

            // var hour = 20;
        
            if (hour >= 6 && hour <= 17) {
            $('.day').css("opacity", 1);
            $("#day_audio").css("display", "flex");
            } else {
            $('.night').css("opacity", 1);
            $("#night_audio").css("display", "flex");
            }
            console.log(hour)

        });
        


        // -------------- TOGGLE FUNCTION FOR HIGH CONTRAST/WEB ACCESSIBILITY BUTTON -----------------

        $("#contrast").click(function() {
            if ( isClicked === false ) {
                isClicked = true;

                $("#contrast").css("border-color", "white");
                $("#contrast").css("background-color", "rgba(0, 0, 0, 0.5");
                $("#contrast").css("color", "white");

                $(".white-bg").css("opacity", 0);

                $("#title2").css("opacity", 0);
                $("#title1").css("opacity", 1);

                $("#inst").css("color", "white");

                $("#text2").css("color", "white");
                $("#text2").css("background-color", "transparent");

                $("#text3").css("color", "white");
                $("#text3").css("background-color", "transparent");

                $("#text4").css("color", "white");
                $("#text4").css("background-color", "transparent");

                $("#text5").css("color", "white");
                $("#text5").css("background-color", "transparent");

                // $("#tree2").css("opacity", 0.2);
                // $("#tree3").css("opacity", 0.15);
                // $("#tree4").css("opacity", 0.1);
                // $("#tree5").css("opacity", 0.05);
                
                console.log("clicked again");
              } 
              
            else {
                isClicked = false;

                $("#contrast").css("border-color", "black");
                $("#contrast").css("background-color", "rgb(204, 204, 204)");
                $("#contrast").css("color", "black");

                $(".white-bg").css("opacity", 1);

                $("#title2").css("opacity", 1);
                $("#title1").css("opacity", 0);

                $("#inst").css("color", "black");

                $("#text2").css("color", "black");
                $("#text2").css("background-color", "rgb(255,255,255)");

                $("#text3").css("color", "black");
                $("#text3").css("background-color", "rgb(255,255,255)");

                $("#text4").css("color", "black");
                $("#text4").css("background-color", "rgb(255,255,255)");

                $("#text5").css("color", "black");
                $("#text5").css("background-color", "rgb(255,255,255)");

                console.log("clicked");
              }
        });

    
    });


})

    
