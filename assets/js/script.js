
function resize(){
	


	function equalCard1($selector){
        var h = 0;
        $selector.height('auto');
        $selector.each(function(){
            var height = $(this).height();
            if(height > h){
                h = height;
            }
        });
        $selector.height(h);
    }
    equalCard1($('.API li p.first'));

}

$(document).ready(function(){
	resize();
 $('.API .owl-carousel').owlCarousel({
        loop: true,
        dots: true,    
        nav:false,             
        autoplay: true,
        autoplayspeed: 1000,
        margin:13,   
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            700: {
                items: 3
            },
        }
    });

 $('.V_CARE .owl-carousel').owlCarousel(
{
        loop: true,
        dots: true,    
        nav:false,             
        autoplay: true,
        autoplayspeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            700: {
                items: 5
            },
        }
    });

 $('#services .owl-carousel').owlCarousel(
  {

        loop: true,
        dots: true,    
        nav:true,             
        autoplay: true,
        autoplayspeed: 1000,
        autoplayHoverPause: true,
        responsive: {

            0: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 1
            },
        }

    });


});

$(window).on('load', function () {
	resize();
});

$(window).resize(function(){
	resize();
});
