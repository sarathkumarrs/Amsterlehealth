
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
    equalCard1($('#testimonials li p.first'));

    function equalwidth($selector){
        var h = 0;
        $selector.width('auto');
        $selector.each(function(){
            var width = $(this).width();
            if(width > h){
                h = width;
            }
        });
        $selector.width(h);
    }
    equalwidth($('.top_tab a'));

}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function(){
	resize();

$('#spotlight .owl-carousel').owlCarousel({
        loop: true,
        dots: false,    
        nav:true,             
        autoplay: true,
        autoplayspeed: 1000,
        margin:13,   
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1500: {
                items: 1
            },
        }
    });
 $('#testimonials .owl-carousel').owlCarousel({
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
            768: {
                items: 2
            },
            1500: {
                items: 3
            },
        }
    });

 $('#clients .owl-carousel').owlCarousel(
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
            900: {
                items: 4
            },
             1500: {
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
            }
        }

    });


});

$(window).on('load', function () {
	resize();
});

$(window).resize(function(){
	resize();
});


