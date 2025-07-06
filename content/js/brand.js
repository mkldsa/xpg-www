
$(function () {
    $('.gnb > li').mouseenter(function () {
        $(this).find('.lnb').slideDown();
    }).mouseleave(function () {
        $('.lnb').stop().slideUp();
    });
});

$(window).on('scroll', function () {
    var scTop = Math.ceil($(this).scrollTop());
    console.log(scTop);

    if (scTop > 1800) {
        $('.h-box').animate({
            opacity: 1
        }, 400);
    }
});

$(window).on('scroll', function () {
    var scTop = Math.ceil($(this).scrollTop());
    console.log(scTop);

    if (scTop > 1800) {
        $('.h-boxup').animate({
            opacity: 1
        }, 600);
    }

    if (scTop > 2300) {
        $('.h-adata').slideDown(800);
    }

    if (scTop > 3200) {
        $('.h-exo').slideDown(800);
    }
});



$(document).ready(function () {

    var his = $('.history').width();
    console.log('슬라이드 하나의 넓이:' + his);

    var max = 1;
    var ind = 0;
    console.log(ind);

    $('#next').click(function () {
        if (ind >= max) {
            console.log('더 이상 이동 불가');
            return; // 애니메이션 실행 전 종료
        }

        ind++;
        console.log(ind);

        $('.viewer .history-wrap').animate({
            marginLeft: -his * ind
        }, 800);
    });

    $('#prev').click(function () {
        if (ind <= 0) {
            console.log('더 이상 이동 불가 (이전)');
            return;
        }

        ind--;
        console.log('현재 인덱스 (이전):', ind);

        $('.viewer .history-wrap').animate({
            marginLeft: -his * ind
        }, 800);
    });
});









