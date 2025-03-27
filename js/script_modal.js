//메뉴 상세정보 모달 팝업 관련

$(function(){


    //001
    $('.modal_01').hide();

    $('.m-001').click(function(ev){
        ev.preventDefault();
        //a성질을 없애는게 더 간단하고 쉽다
        $('.modal_01').fadeIn(100);
    });

    $('.popup>a>i').click(function(ev){
        ev.preventDefault();
        $('.modal_01').fadeOut(100); //모달 숨김처리
    });

    $('.modal_01').click(function(event) {
        if ($(event.target).closest('.popup , .modal-b').length === 0) {
            $('.modal_01').fadeOut(100); // 모달 숨김 처리
        }
    });



    //002
    $('.modal_02').hide();

    $('.m-002').click(function(ev){
        ev.preventDefault();
        //a성질을 없애는게 더 간단하고 쉽다
        $('.modal_02').fadeIn(100);
    });

    $('.popup>a>i').click(function(ev){
        ev.preventDefault();
        $('.modal_02').fadeOut(100); //모달 숨김처리
    });

    $('.modal_02').click(function(event) {
        if ($(event.target).closest('.popup , .modal-b' ).length === 0) {
            $('.modal_02').fadeOut(100); // 모달 숨김 처리
        }
    });



    //003
    $('.modal_03').hide();

    $('.m-003').click(function(ev){
        ev.preventDefault();
        //a성질을 없애는게 더 간단하고 쉽다
        $('.modal_03').fadeIn(100);
    });

    $('.popup>a>i').click(function(ev){
        ev.preventDefault();
        $('.modal_03').fadeOut(100); //모달 숨김처리
    });

    $('.modal_03').click(function(event) {
        if ($(event.target).closest('.popup , .modal-b').length === 0) {
            $('.modal_03').fadeOut(100); // 모달 숨김 처리
        }
    });



    
    //004
    $('.modal_04').hide();

    $('.m-004').click(function(ev){
        ev.preventDefault();
        //a성질을 없애는게 더 간단하고 쉽다
        $('.modal_04').fadeIn(100);
    });

    $('.popup>a>i').click(function(ev){
        ev.preventDefault();
        $('.modal_04').fadeOut(100); //모달 숨김처리
    });

    $('.modal_04').click(function(event) {
        if ($(event.target).closest('.popup , .modal-b').length === 0) {
            $('.modal_04').fadeOut(100); // 모달 숨김 처리
        }
    });



    //005
    $('.modal_05').hide();

    $('.m-005').click(function(ev){
        ev.preventDefault();
        //a성질을 없애는게 더 간단하고 쉽다
        $('.modal_05').fadeIn(100);
    });

    $('.popup>a>i').click(function(ev){
        ev.preventDefault();
        $('.modal_05').fadeOut(100); //모달 숨김처리
    });

    $('.modal_05').click(function(event) {
        if ($(event.target).closest('.popup , .modal-b').length === 0) {
            $('.modal_05').fadeOut(100); // 모달 숨김 처리
        }
    });



    //006
    $('.modal_06').hide();

    $('.m-006').click(function(ev){
        ev.preventDefault();
        //a성질을 없애는게 더 간단하고 쉽다
        $('.modal_06').fadeIn(100);
    });

    $('.popup>a>i').click(function(ev){
        ev.preventDefault();
        $('.modal_06').fadeOut(100); //모달 숨김처리
    });

    $('.modal_06').click(function(event) {
        if ($(event.target).closest('.popup , .modal-b').length === 0) {
            $('.modal_06').fadeOut(100); // 모달 숨김 처리
        }
    });



    //007
    $('.modal_07').hide();

    $('.m-007').click(function(ev){
        ev.preventDefault();
        //a성질을 없애는게 더 간단하고 쉽다
        $('.modal_07').fadeIn(100);
    });
    
    $('.popup>a>i').click(function(ev){
        ev.preventDefault();
        $('.modal_07').fadeOut(100); //모달 숨김처리
    });

    $('.modal_07').click(function(event) {
        if ($(event.target).closest('.popup , .modal-b').length === 0) {
            $('.modal_07').fadeOut(100); // 모달 숨김 처리
        }
    });



    //008
    $('.modal_08').hide();

    $('.m-008').click(function(ev){
        ev.preventDefault();
        //a성질을 없애는게 더 간단하고 쉽다
        $('.modal_08').fadeIn(100);
    });

    $('.popup>a>i').click(function(ev){
        ev.preventDefault();
        $('.modal_08').fadeOut(100); //모달 숨김처리
    });

    $('.modal_08').click(function(event) {
        if ($(event.target).closest('.popup , .modal-b').length === 0) {
            $('.modal_08').fadeOut(100); // 모달 숨김 처리
        }
    });



    //009
    $('.modal_09').hide();

    $('.m-009').click(function(ev){
        ev.preventDefault();
        //a성질을 없애는게 더 간단하고 쉽다
        $('.modal_09').fadeIn(100);
    });

    $('.popup>a>i').click(function(ev){
        ev.preventDefault();
        $('.modal_09').fadeOut(100); //모달 숨김처리
    });

    $('.modal_09').click(function(event) {
        if ($(event.target).closest('.popup, .modal-b').length === 0) {
            $('.modal_09').fadeOut(100); // 모달 숨김 처리
        }
    });



    //010
    $('.modal_10').hide();

    $('.m-010').click(function(ev){
        ev.preventDefault();
        //a성질을 없애는게 더 간단하고 쉽다
        $('.modal_10').fadeIn(100);
    });

    $('.popup>a>i').click(function(ev){
        ev.preventDefault();
        $('.modal_10').fadeOut(100); //모달 숨김처리
    });

    $('.modal_10').click(function(event) {
        if ($(event.target).closest('.popup , .modal-b').length === 0) {
            $('.modal_10').fadeOut(100); // 모달 숨김 처리
        }
    });



    //011
    $('.modal_11').hide();

    $('.m-011').click(function(ev){
        ev.preventDefault();
        //a성질을 없애는게 더 간단하고 쉽다
        $('.modal_11').fadeIn(100);
    });

    $('.popup>a>i').click(function(ev){
        ev.preventDefault();
        $('.modal_11').fadeOut(100); //모달 숨김처리
    });

    $('.modal_11').click(function(event) {
        if ($(event.target).closest('.popup , .modal-b').length === 0) {
            $('.modal_11').fadeOut(100); // 모달 숨김 처리
        }
    });


});