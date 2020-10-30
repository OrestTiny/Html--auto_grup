$(document).ready(function () {

    $(".arrow_up").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
      });



    $(".block").click(function () {
        var block = $(this);
        $('.block .block_title span').removeClass('arrow_rotate');
        $('.block .block_title span svg path').removeClass('arrow_color');
        $('.block .block_title').removeClass('block_title_rotate');
        $(".block .block_content").slideUp();



        $('.block_title span', block).toggleClass('arrow_rotate');
        $('.block_title span svg path', block).toggleClass('arrow_color');
        $('.block_title', block).toggleClass('block_title_rotate');
        $(".block_content", block).slideDown();


    });


    $('.price_car .block_price').is(function () {
        var block_price = $(this);
        $('div', block_price).click(function () {
            $('div', $(this).parent()).removeClass('active');
            $(this).addClass('active');
        })
    })




    $('.car_rev').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: true,
        autoplayTimeout: 2000,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
            },
            600: {
                items: 1,
                dots: false,
                nav: false,                
            },
            760:{
                items: 2,
                dots: false,
                nav: false, 
            },
            1000: {
                items: 3
            },
            1144: {
                items: 4
            },
            1680:{
                items: 4
            }
        }
    })

    var st = $('.car_rev .owl-dots').width();
    $('.car_rev .owl-next').css('margin-left', st + 15 + 'px');




    var hWindow = ($(window).height() - 105) / 2;    
    var wWindow = $(window).width();

    // new Splide('.splide', {
    //     direction: wWindow <= 1044 ? 'ltr' : 'ttb',
    //     height: '906px',
    //     width: '1742px',
    //     interval: '3000',
    //     speed: '700',
    //     breakpoints: {
    //         1044: {
    //             height: hWindow ,
    //             perPage: 1,
    //             // destroy: true, 
    //             // pagination: false,
    //             // arrows: false,
    //         },
          
    //     },   
        
    // }).mount();
   
    new Splide('.splide', {
        direction: wWindow <= 1044 ? 'ltr' : 'ttb',
        height: '906px',
        width: '1742px',
        interval: '2000',
        speed: '400',
        cover  : true,
        breakpoints: {
            1144: {
                height: hWindow ,
                // destroy: true, 
                pagination: false,
                // arrows: false,
            },            
        },  
        
    }).mount();

    function arrowMove() {
        let sp = $('.splide__pagination').height();
        $('.splide__arrows').css('height', sp + 105 + 'px');

    }   
    

    function dotsMove() {
        let arrow_posit = $('.splide__arrows').position().left;
        $('.splide__pagination').css('left', arrow_posit - 66 + 'px');

    }

    arrowMove();
    dotsMove();

    $(window).resize(function() {
        // location.reload();
        // dotsMove();
        // arrowMove();
    });



    $('.button_show_phone').click(function() {
        if($(this).hasClass('one'))  {
            $(this).text('Показать').removeClass('one');            
        } else {
            $(this).text('Показать телефони').addClass('one');
        }

       $('.button_show_phone_wrap').toggle();
    })

    $('.price_car_info_header div').click(function() {
        $('.price_car_info_header div').removeClass('active');
        $(this).addClass('active');        
    })




   
        var div = $("#popup"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
     


});