$(document).ready(function(){
    $("#blog-grid-popup").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: 'true'
        },
        gallery: {
			enabled: true,
			navigateByImgClick: true,
			//preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
        zoom:{
            enabled: 'true',
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement){
                return openerElement.is('img') ? openerElement : 
                    openerElement.find('img');
            }
        }
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

