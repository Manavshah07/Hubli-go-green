/*****************************************************************************************************************************************************************
                                                                        GALLERY-ISOTOPE SECTION
*****************************************************************************************************************************************************************/$(document).ready(function () {
    $('.isotope-container').isotope({});

    $("#isotope-filters").on("click", "button", function () {
        let filterValue = $(this).attr("data-filter");
        console.log(filterValue);
        $(".isotope-container").isotope({
            filter: filterValue
        });
//        active-button
        $("#isotope-filters").find('.active_iso').removeClass('active_iso');
        
        $(this).addClass('active_iso');
    });
});
/*****************************************************************************************************************************************************************
                                                                        GALLERY-MAGNIFIC-POPUP SECTION
*****************************************************************************************************************************************************************/$(document).ready(function(){
    $("#gallery-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: 'true'
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

