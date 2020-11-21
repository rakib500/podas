$(document).ready(function(){
// sticky-header
    $(window).scroll(function(){
        $('header').toggleClass('nav-active', $(this).scrollTop() > 30);  
    });


    var $grid = $('.masonry-active').isotope({
        itemSelector: '.masonry-item',
        percentPosition: true,
        masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth:1
        }
    });

// filter items on button click
    $('.work-filter-menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

// filter item activation
    $('.work-filter-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


// owl activation
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });

// mobile-menu
    $('.open-menu').on('click', function(){
      $('.menu-wrap').addClass('show-menu');
    });

    $('.close-menu').on('click', function(){
      $('.menu-wrap').removeClass('show-menu');
    });


 // loader 
    setTimeout(function(){
        $('.loader-wrapper').fadeToggle();
    }, 1500);

// change logo on scroll
    $(window).scroll(function(){
        if($(this).scrollTop()>30){
            $('.logo img').attr('src','assets/img/logo-dark.png');
        }
        else{
            $('.logo img').attr('src','assets/img/logo.png');
        }
    })
 
});
