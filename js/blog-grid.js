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
