
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