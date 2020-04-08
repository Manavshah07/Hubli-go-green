/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */
/*********************************************
GENERAL LOADERS
**********************************************/

document.getElementById('mission-click').addEventListener("click", missionClick);
document.getElementById('vision-click').addEventListener("click", visionClick);
document.getElementById('philosophy-click').addEventListener("click", philosophyClick);

const missionContent = document.getElementById('mission-content');
const visionContent = document.getElementById('vision-content');
const philosophyContent = document.getElementById('philosophy-content');

/****************************************************************************************************************************************************************
                                                                        MISIION CLICK
****************************************************************************************************************************************************************/

function missionClick() {
    if (missionContent.classList.contains('inactive')) {
        missionContent.classList.remove('inactive');
        missionContent.classList.add('active');
    } else if (missionContent.classList.contains('active')) {
        missionContent.classList.remove('active');
        missionContent.classList.add('inactive');
    }
    const ansV = visionContent.classList.contains('active')
    if (ansV) {
        visionContent.classList.remove('active');
        visionContent.classList.add('inactive');

    }
    const ansP = philosophyContent.classList.contains('active')
    if (ansP) {
        philosophyContent.classList.remove('active');
        philosophyContent.classList.add('inactive');

    }
}

/****************************************************************************************************************************************************************
                                                                        VISION CLICK
****************************************************************************************************************************************************************/


function visionClick() {
    if (visionContent.classList.contains('inactive')) {
        visionContent.classList.remove('inactive');
        visionContent.classList.add('active');
    } else if (visionContent.classList.contains('active')) {
        visionContent.classList.remove('active');
        visionContent.classList.add('inactive');
    }
    const ansM = missionContent.classList.contains('active')
    if (ansM) {
        missionContent.classList.remove('active');
        missionContent.classList.add('inactive');

    }
    const ansP = philosophyContent.classList.contains('active')
    if (ansP) {
        philosophyContent.classList.remove('active');
        philosophyContent.classList.add('inactive');
    }
}

/****************************************************************************************************************************************************************
                                                                        PHILOSOPHY CLICK
****************************************************************************************************************************************************************/


function philosophyClick() {
    if (philosophyContent.classList.contains('inactive')) {
        philosophyContent.classList.remove('inactive');
        philosophyContent.classList.add('active');
    } else if (philosophyContent.classList.contains('active')) {
        philosophyContent.classList.remove('active');
        philosophyContent.classList.add('inactive');
    }
    const ansM = missionContent.classList.contains('active')
    if (ansM) {
        missionContent.classList.remove('active');
        missionContent.classList.add('inactive');

    }
    const ansV = visionContent.classList.contains('active')
    if (ansV) {
        visionContent.classList.remove('active');
        visionContent.classList.add('inactive');

    }
}

/****************************************************************************************************************************************************************
                                                                        PROGRESS BAR
****************************************************************************************************************************************************************/

$(document).ready(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 800);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/****************************************************************************************************************************************************************
                                                                        RECYCLE CLICK
****************************************************************************************************************************************************************/

function rLearnClick() {
    if (recycleContent.classList.contains('inactive')) {
        recycleContent.classList.remove('inactive');
        recycleContent.classList.add('active');
    } else if (recycleContent.classList.contains('active')) {
        recycleContent.classList.remove('active');
        recycleContent.classList.add('inactive');
    }
    const ansE = ecosystemContent.classList.contains('active')
    if (ansE) {
        ecosystemContent.classList.remove('active');
        ecosystemContent.classList.add('inactive');
    }
    const ansW = windContent.classList.contains('active')
    if (ansW) {
        windContent.classList.remove('active');
        windContent.classList.add('inactive');
    }
    const ansF = forestContent.classList.contains('active')
    if (ansF) {
        forestContent.classList.remove('active');
        forestContent.classList.add('inactive');
    }
}

/****************************************************************************************************************************************************************
                                                                        ECOSYSTEM CLICK
****************************************************************************************************************************************************************/

function eLearnClick() {
    if (ecosystemContent.classList.contains('inactive')) {
        ecosystemContent.classList.remove('inactive');
        ecosystemContent.classList.add('active');
    } else if (ecosystemContent.classList.contains('active')) {
        ecosystemContent.classList.remove('active');
        ecosystemContent.classList.add('inactive');
    }
    const ansR = recycleContent.classList.contains('active')
    if (ansR) {
        recycleContent.classList.remove('active');
        recycleContent.classList.add('inactive');
    }
    const ansW = windContent.classList.contains('active')
    if (ansW) {
        windContent.classList.remove('active');
        windContent.classList.add('inactive');
    }
    const ansF = forestContent.classList.contains('active')
    if (ansF) {
        forestContent.classList.remove('active');
        forestContent.classList.add('inactive');
    }
}

/****************************************************************************************************************************************************************
                                                                        WIND ENERGY CLICK
****************************************************************************************************************************************************************/

function wLearnClick() {
    if (windContent.classList.contains('inactive')) {
        windContent.classList.remove('inactive');
        windContent.classList.add('active');
    } else if (windContent.classList.contains('active')) {
        windContent.classList.remove('active');
        windContent.classList.add('inactive');
    }
    const ansR = recycleContent.classList.contains('active')
    if (ansR) {
        recycleContent.classList.remove('active');
        recycleContent.classList.add('inactive');
    }
    const ansE = ecosystemContent.classList.contains('active')
    if (ansE) {
        ecosystemContent.classList.remove('active');
        ecosystemContent.classList.add('inactive');
    }
    const ansF = forestContent.classList.contains('active')
    if (ansF) {
        forestContent.classList.remove('active');
        forestContent.classList.add('inactive');
    }
}

/****************************************************************************************************************************************************************
                                                                        SAVE FOREST CLICK
****************************************************************************************************************************************************************/

function fLearnClick() {
    if (forestContent.classList.contains('inactive')) {
        forestContent.classList.remove('inactive');
        forestContent.classList.add('active');
    } else if (forestContent.classList.contains('active')) {
        forestContent.classList.remove('active');
        forestContent.classList.add('inactive');
    }
    const ansR = recycleContent.classList.contains('active')
    if (ansR) {
        recycleContent.classList.remove('active');
        recycleContent.classList.add('inactive');
    }
    const ansE = ecosystemContent.classList.contains('active')
    if (ansE) {
        ecosystemContent.classList.remove('active');
        ecosystemContent.classList.add('inactive');
    }
    const ansW = windContent.classList.contains('active')
    if (ansW) {
        windContent.classList.remove('active');
        windContent.classList.add('inactive');
    }
}

$(document).ready(function(){
    $('#testimonial-container').owlCarousel({
        autoplay: 'true',
        items: 2,
        loop: 'true',
        smartSpeed: 700,
        autoplayHoverPause: 'true'
    })
})

$(document).ready(function(){
    $('#review-container').owlCarousel({
        autoplay: 'true',
        items: 1,
        loop: 'true',
        smartSpeed: 700,
        autoplayHoverPause: 'true',
        nav:'true',
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    })
})

$(document).ready(function(){
    $('.counter').counterUp({
        delay:10,
        time: 1500
    })
})
$(document).ready(function(){
    $('.client-wrapper').owlCarousel({
        autoplay: 'true',
        items: 6,
        loop: 'true',
        smartSpeed: 500,
        slideBy: 2,
        nav: 'false'
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

/****************************************************************************************************************************************************************
                                                                NAVBAR
****************************************************************************************************************************************************************/
 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */   
function dropdown(){
    document.getElementById('#dropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#nav-link')) {
    var dropdowns = document.getElementsByClassName("dropdowncontent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




/****************************************************************************************************************************************************************
                                                                HEADER
****************************************************************************************************************************************************************/


//$(function (){
//    showHideNav();
//    $(window).scroll(function(){
//        showHideNav();
//    });
//    function showHideNav(){
//        if($(window).scrollTop()>50){
//            $("nav").addClass("scrolled-navbar green-nav-top");
//            $("#back-to-top").fadeIn();
//        }else{
//            $("nav").removeClass("scrolled-navbar green-nav-top");
//            $("#back-to-top").fadeOut();
//        }
//    }
//});















