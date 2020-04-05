/****************************************************************************************************************************************************************
                                                                SMOOTH SCROLL
****************************************************************************************************************************************************************/

$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop:$(section_id).offset().top +50
        },1250,"easeInOutExpo")
    });
});

$(document).ready(function(){ 
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 100) { 
				$('#back-to-top').fadeIn(); 
			} else { 
				$('#back-to-top').fadeOut(); 
			} 
		}); 
		$('#back-to-top').click(function(){ 
			$("html, body").animate({ scrollTop: 0 }, 600); 
			return false; 
		}); 
	});

/****************************************************************************************************************************************************************
                                                                HEADER
****************************************************************************************************************************************************************/


$(function (){
    showHideNav();
    $(window).scroll(function(){
        showHideNav();
    });
    function showHideNav(){
        if($(window).scrollTop()>50){
            $("nav").addClass("scrolled-navbar green-nav-top");
            $("#back-to-top").fadeIn();
        }else{
            $("nav").removeClass("scrolled-navbar green-nav-top");
            $("#back-to-top").fadeOut();
        }
    }
});
