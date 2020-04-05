
/****************************************************************************************************************************************************************
                                                                        EXPERIRNCE VIDEO
****************************************************************************************************************************************************************/


//const play = document.getElementById('play-btn');
//play.addEventListener('click', playVideo)
//
//function playVideo(){
//    autoplay = document.createAttribute('autoplay');
//    controls = document.createAttribute('controls');
//    autoplay.value = "true";
//    controls.value = "true";
//    document.getElementById('home-bg-video').setAttributeNode(autoplay)
//    document.getElementById("home-bg-video").load();
//    document.querySelector('.video-overlay').style.display = "none";
//}

/****************************************************************************************************************************************************************
                                                                        CLIENT SECTION
****************************************************************************************************************************************************************/

$(document).ready(function(){
    $('.client-wrapper').owlCarousel({
        autoplay: 'true',
        items: 6,
        loop: 'true',
        smartSpeed: 500,
        slideBy: 2,
        nav: 'false',
        dots: 'false'
    })
})

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

