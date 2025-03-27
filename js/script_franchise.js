// 프랜차이즈 페이지 스크롤 관련

$('.sub, .box_sub').hide();

$('.gnb').mouseover(function(){
    $('.sub, .box_sub').stop().slideDown();
});

$('.gnb').mouseout(function(){
    $('.sub, .box_sub').stop().slideUp();

});

    //퀵메뉴-업다운 스크롤 버튼 관련
    $('.up').click(function(ev){
        ev.preventDefault();
        //매개 변수
        $('html, body').animate({
            scrollTop : "0"
        },500);
    });

    let sHight = $(document).height();

    $('.down').click(function(ev){
        ev.preventDefault();
        $('html, body').animate({
            scrollTop : sHight
        },500);
    });


        // //스크롤 이벤트 관련
        // $(".scroll-e a").on('click',function(e){
        //     e.preventDefault();
    
        //     $('html, body').animate({
        //         scrollTop: $($(this).attr('href')).offset().top
        //     }, 800)

        //     $(this).addClass('on');
        //     $(this).siblings().removeClass('on');
        // })


        function updateSectionClass() {
            const scrollValue = $(window).scrollTop();
    
            $('.se1').toggleClass('on', scrollValue >= 0 && scrollValue < 2650);
            $('.se2').toggleClass('on', scrollValue >= 2650 && scrollValue < 3680);
            $('.se3').toggleClass('on', scrollValue >= 3680);
            // $('.se4').toggleClass('on', scrollValue >= 3530 && scrollValue < 4510);
        }
    
        // ✅ 페이지 로드 시 `.se1`이 활성화되도록 실행
        updateSectionClass();
    
        // ✅ 스크롤 시 클래스 업데이트
        $(window).on("scroll", updateSectionClass);
    
        // ✅ 클릭 시 부드러운 스크롤 이동 + 해당 섹션에 'on' 적용
        $(".scroll-e a").on("click", function (e) {
            e.preventDefault();
    
            const targetSection = $($(this).attr("href"));
            const targetPosition = targetSection.offset().top;
    
            $("html, body").animate({ scrollTop: targetPosition }, 800, function () {
                updateSectionClass(); // 스크롤 이동 후 클래스 업데이트
            });
    
            $(this).addClass("on").siblings().removeClass("on");
        });
    


$(window).scroll(function(){


    let scrollValue = $(this).scrollTop();


    //scroll-1 이미지
    if (scrollValue > 600 ) {
        $(".scroll-1>li:first-child").animate({
            opacity : "1",
            // marginLeft : "20px"
        },500) 
        $(".scroll-1 li:first-child").css({transform:"translateX(-20px)"},500)


        $(".scroll-1 li:last-child").animate({
            opacity : "1",
        })
        $(".scroll-1 li:last-child").css({transform:"translateX(20px)"},500)

    }
    
    //scroll-2 이미지
    if (scrollValue > 1200 ) {
        $(".scroll-2 li:first-child").animate({
            opacity : "1",
        })
        $(".scroll-2 li:first-child").css({transform:"translateX(-20px)"},500)


        $(".scroll-2 li:last-child").animate({
            opacity : "1",
        })
        $(".scroll-2 li:last-child").css({transform:"translateX(20px)"},500)

    }


    //scroll-3 이미지
    if (scrollValue > 1800 ) {
        $(".scroll-3 li:first-child").animate({
            opacity : "1",
        })
        $(".scroll-3 li:first-child").css({transform:"translateX(-20px)"},500)


        $(".scroll-3 li:last-child").animate({
            opacity : "1",
        })
        $(".scroll-3 li:last-child").css({transform:"translateX(20px)"},500)
    }

})

$('dd').hide();
$('dt').show();
$('dt:first').removeClass('on');

$('dl dt').click(function(){
    $('dl dt').removeClass();
    $(this).addClass('on');

    $('dd').slideUp();
    $(this).next().stop().slideToggle();
});