// 아마스빈 메인 자바스크립트

$(document).ready(function(){

    $('.sub, .box_sub').hide();

    $('.gnb').mouseover(function(){
        $('.sub, .box_sub').stop().slideDown();
    });

    $('.gnb').mouseout(function(){
        $('.sub, .box_sub').stop().slideUp();

    });


    // Visual = fadeIn fadeOut
    setInterval(fd,4000);

    function fd(){
        $('.slide li:first').siblings().hide();
        $('.slide li:first').fadeOut(1000).next().fadeIn(1000).end().appendTo(".slide");
    };
    


    // //퀵메뉴-업다운 스크롤 버튼 관련
    // $('.up').click(function(ev){
    //     ev.preventDefault();
    //     //매개 변수
    //     $('html, body').animate({
    //         scrollTop : "0"
    //     },500);
    // });

    // let sHight = $(document).height();

    // $('.down').click(function(ev){
    //     ev.preventDefault();
    //     $('html, body').animate({
    //         scrollTop : sHight
    //     },500);
    // });

    function updateSectionClass() {
        const scrollValue = $(window).scrollTop();

        $('.se1').toggleClass('on', scrollValue >= 0 && scrollValue < 1150);
        $('.se2').toggleClass('on', scrollValue >= 1150 && scrollValue < 2130);
        $('.se3').toggleClass('on', scrollValue >= 2130 && scrollValue < 3530);
        $('.se4').toggleClass('on', scrollValue >= 3530 && scrollValue < 4510);
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



    //스크롤 이벤트 관련
    $(".scroll-e a").on('click',function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800)

        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    })

    


    // 스와이퍼 관련
    const sliderWrapper = $('.slider-wrapper');
    const itemWidth = $('.slider-item').outerWidth(true); // 각 아이템의 전체 너비
    const slideDuration = 500; // 슬라이드 속도 (0.5초)

    function updateMainImage() {
        // 모든 이미지에서 'main' 클래스 제거
        $('.slider-item').removeClass('main');
        // 현재 3번째 이미지에 'main' 클래스 추가 (현재 슬라이더의 3번째)이미지 찾기
        $('.slider-item').eq(2).addClass('main'); // 0부터 시작하므로 3번째가 4번째
    }

    function slide() {
        // 왼쪽으로 한 장씩 이동
        sliderWrapper.css('transform', 'translateX(' + (-itemWidth) + 'px)');

        // 슬라이드 완료 후 첫 번째 이미지를 마지막으로 이동
        setTimeout(() => {
            sliderWrapper.css('transition', 'none'); // 트랜지션 일시 제거
            $('.slider-item').first().appendTo(sliderWrapper); // 첫 번째 이미지를 끝으로 이동
            sliderWrapper.css('transform', 'translateX(0)'); // 초기 위치로 복귀

            // 트랜지션 다시 활성화
            setTimeout(() => {
                sliderWrapper.css('transition', 'transform ' + (slideDuration / 1000) + 's ease-in-out');
            }, 50);

            // 슬라이드 완료 후 메인 이미지 업데이트
            updateMainImage();
        }, slideDuration);
    }

        // 초기 메인 이미지 설정
        updateMainImage();

        // 3초마다 슬라이드
        setInterval(slide, 3000);



    // sub메뉴 아코디언
    // $('dd:not(:first)').css("width","0px");

    // $('dl dt').click(function(){
    //     $('dl dt').removeClass('active');
    //     $(this).addClass('active');

    //     $('dl dd').stop().animate({"width" : "0px" },800);
    //     $('+dd',this).stop().animate({ "width" : "673px" },800);
    // });

    //sub#sec1 두번째 시도
    $('dd:not(:first)').css( "width" , "0px");

    $('dl dt').click(function(){
        // dt active에 색 입히기
        $('dl dt').removeClass('active');
        $(this).addClass('active');

        $('dl dd').stop().animate({ "width" : "0px"},800);
        $('+dd',this).stop().animate({ "width" : "673px"},800);
        // $('+dd').stop().siblings().animate({ "width" : "0px"});
    });



    // 메뉴 페이지 sec2 탭 관련
    $('.panel1>li').hide();
    $('.panel1>li:first').show();

    $('.tab1 a').click(function(ev){
        ev.preventDefault();
        $('.tab1 a').removeClass('selected');
        $(this).addClass('selected');

        $('.panel1>li').hide();
        $($(this).attr('href')).show();
    });


    // 메뉴 페이지 sec3 탭 관련
    $('.panel2>li').hide();
    $('.panel2>li:first').show();

    $('.tab2 a').click(function(ev){
        ev.preventDefault();
        $('.tab2 a').removeClass('active');
        $(this).addClass('active');

        $('.panel2>li').hide();
        $($(this).attr('href')).show();
    });
});