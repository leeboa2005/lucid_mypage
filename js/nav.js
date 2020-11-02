$(function(){
    var cart = $("li.submenu >dl >dd:eq(3)");
    var width_size = window.outerWidth;
    if (width_size <= 1024) {
        $(cart).click(function(event){
            event.preventDefault();
            open("cart_m.html","_self");
          });
    }
/*------------------------------top event--------------------------------*/

$(function(){
    $("#btn_close>a>img").click(function(){
        $("#top_bar1").css("display","none");
        //$("#header").animate({ marginTop:"-40px"},500)    
    });
}); 


/*------------------------------hamburger--------------------------------*/
$(function(){
    $('.hamburger').on('click', function(event){
      event.preventDefault();
      
      $(this).toggleClass('active');
      $('.overlay').toggleClass('visible');    
    });
});

/*------------------------------inside menu--------------------------------*/
//1----------------------------------------------------------
$(function (){
    var width_size = window.outerWidth;
     //var reload =  window.location.reload();
    if (width_size > 1024) {
        $(".m_open1").mouseenter(function(){
            event.preventDefault();
            $(".hidden1").stop().slideDown(400);

            if($('.m_open1').mouseleave ){
                $(".hidden2, .hidden3, .hidden4, .hidden5, .hidden6, .hidden7").css('display','none');
            };
                    
            var swiper = new Swiper('.swiper1', {
                spaceBetween: 0,
                centeredSlides: true,
                autoplayDisableOnInteraction: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                el: '.swiper-pagination',
                type: true,
                },
                scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',} });
        });

        $(".hidden1").mouseleave(function(){
            $(".hidden1").slideUp(400);});         
        }
        
        else if(width_size>767){
            $(".m_open1").click(function(){
                location.reload();
                $(".hidden1, .hidden2, .hidden3, .hidden4, .hidden5, .hidden6, .hidden7").css('display','none');});
        }
    });

$(window).resize(function (){
    var width_size = window.outerWidth;
    if (width_size > 1024) {
        $(".m_open1").mouseenter(function(){
            $(".hidden1").stop().slideDown(400);
            if($('.m_open1').mouseleave ){
                $(".hidden2, .hidden3, .hidden4, .hidden5, .hidden6, .hidden7");};
                
            var swiper = new Swiper('.swiper1', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplayDisableOnInteraction: true,
                autoplay: { 
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                el: '.swiper-pagination',
                type: true,
                },
                scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',} });
        });

        $(".hidden1").mouseleave(function(){
            $(".hidden1").stop().slideUp(400);});
        }
        else if(width_size>767){
            $(".m_open1").mouseenter(function(){
                location.reload();
                $(".hidden1, .hidden2, .hidden3, .hidden4, .hidden5, .hidden6, .hidden7").css('display','none');});
        }

    });

     
//2-------------------------------------------------------------------
$(function (){
    var width_size = window.outerWidth;
    if (width_size > 1024) {
        $(".m_open2").mouseenter(function(){
            event.preventDefault();
            $(".hidden2").stop().slideDown(400);

            if($('.m_open2').mouseleave ){
                $(".hidden1, .hidden3, .hidden4, .hidden5, .hidden6").css('display','none');
            };
                    
            var swiper = new Swiper('.swiper1', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplayDisableOnInteraction: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                el: '.swiper-pagination',
                type: true,
                },
                scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',} });
        });

        $(".hidden2").mouseleave(function(){
            $(".hidden2").stop().slideUp(400);});         
        }
        
        else if(width_size>767){
            $(".m_open2").click(function(){
                location.reload();
                $(".hidden1, .hidden2, .hidden3, .hidden4, .hidden5, .hidden6").css('display','none');});
        }
    });
$(window).resize(function (){
    var width_size = window.outerWidth;
    if (width_size > 1024) {
        $(".m_open2").mouseenter(function(){
            $(".hidden2").stop().slideDown(400);
            if($('.m_open2').mouseleave ){
                $(".hidden1, .hidden3, .hidden4, .hidden5, .hidden6").css('display','none');};
                
            var swiper = new Swiper('.swiper1', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplayDisableOnInteraction: true,
                autoplay: { 
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                el: '.swiper-pagination',
                type: true,
                },
                scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',} });
        });

        $(".hidden2").mouseleave(function(){
            $(".hidden2").stop().slideUp(400);});
        }
        else if(width_size>767){
            $(".m_open2").click(function(){
                location.reload();
                $(".hidden1, .hidden2, .hidden3, .hidden4, .hidden5, .hidden6").css('display','none');});
        }
    });

//3-------------------------------------------------------------------
$(function (){
    var width_size = window.outerWidth;
    if (width_size > 1024) {
        $(".m_open3").mouseenter(function(){
            event.preventDefault();
            $(".hidden3").stop().slideDown(400);

            if($('.m_open3').mouseleave ){
                $(".hidden1, .hidden2, .hidden4, .hidden5, .hidden6").css('display','none');
            };
                    
            var swiper = new Swiper('.swiper1', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplayDisableOnInteraction: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                el: '.swiper-pagination',
                type: true,
                },
                scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',} });
        });

        $(".hidden3").mouseleave(function(){
            $(".hidden3").stop().slideUp(400);});         
        }
        
        else if(width_size>767){
            $(".m_open3").click(function(){
                location.reload();
                $(".hidden1, .hidden2, .hidden3, .hidden4, .hidden5, .hidden6").css('display','none');});
        }
    });
$(window).resize(function (){
    var width_size = window.outerWidth;
    if (width_size > 1024) {
        $(".m_open3").mouseenter(function(){
            $(".hidden3").stop().slideDown(400);
            if($('.m_open3').mouseleave ){
                $(".hidden1, .hidden2, .hidden4, .hidden5, .hidden6").css('display','none');};
                
            var swiper = new Swiper('.swiper1', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplayDisableOnInteraction: true,
                autoplay: { 
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                el: '.swiper-pagination',
                type: true,
                },
                scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',} });
        });

        $(".hidden3").mouseleave(function(){
            $(".hidden3").stop().slideUp(400);});
        }
        else if(width_size>767){
            $(".m_open3").click(function(){
                location.reload();
                $(".hidden1, .hidden2, .hidden3, .hidden4, .hidden5, .hidden6").css('display','none');});
        }
    });

//4--------------------------------------------------------------
$(function (){
    var width_size = window.outerWidth;
    if (width_size > 1024) {
        $(".m_open4").mouseenter(function(){
            event.preventDefault();
            $(".hidden4").stop().slideDown(400);

            if($('.m_open4').mouseleave ){
                $(".hidden1, .hidden2, .hidden3, .hidden5, .hidden6").css('display','none');
            };
                    
            var swiper = new Swiper('.swiper1' , {
                spaceBetween: 30,
                centeredSlides: true,
                autoplayDisableOnInteraction: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                el: '.swiper-pagination',
                type: true,
                },
                scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',} });
        });

        $(".hidden4").mouseleave(function(){
            $(".hidden4").stop().slideUp(400);});         
        }
        
        else if(width_size>767){
            $(".m_open4").click(function(){
                location.reload();
                $(".hidden1, .hidden2, .hidden3, .hidden4, .hidden5, .hidden6").css('display','none');});
        }
    });
$(window).resize(function (){
    var width_size = window.outerWidth;
    if (width_size > 1024) {
        $(".m_open4").mouseenter(function(){
            $(".hidden4").stop().slideDown(400);
            if($('.m_open4').mouseleave ){
                $(".hidden1, .hidden2, .hidden3, .hidden5, .hidden6").css('display','none');};
                
            var swiper = new Swiper('.swiper1', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplayDisableOnInteraction: true,
                autoplay: { 
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: {
                el: '.swiper-pagination',
                type: true,
                },
                scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
                },
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',} });
        });

        $(".hidden4").mouseleave(function(){
            $(".hidden4").stop().slideUp(400);});
        }
        else if(width_size>767){
            $(".m_open4").click(function(){
                location.reload();
                $(".hidden1, .hidden2, .hidden3, .hidden4, .hidden5, .hidden6").css('display','none');});
        }
    });


    $(".m_open5, .m_open6").mouseenter(function(){
        $(".hidden1, .hidden2, .hidden3, .hidden4, .hidden5, .hidden6").stop().slideUp(400);

    });

});
