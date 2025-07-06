/* index js */

document.addEventListener("DOMContentLoaded", function () {
    const bannerTxt = document.getElementById('bannerTxt');
    const mImgBox = document.getElementById('mImgBox');

    // 약간의 지연을 줄 수도 있음 (선택 사항)
    setTimeout(() => {
        bannerTxt.classList.add('active');
        mImgBox.classList.add('active');
    }, 500);
});

$(function () {
    $('.gnb > li').mouseenter(function () {
        $(this).find('.lnb').slideDown();
    }).mouseleave(function () {
        $('.lnb').stop().slideUp();
    });
});

//전역변수 
/* var content1Pos = 0,
    content2Pos = 0,
    content3Pos = 0;
var gap = 200; */

$(window).on('scroll', function () {
    var scTop = Math.ceil($(this).scrollTop());
    console.log('현재 스크롤위치값: ' + scTop);

    // 어떤영역의 어떤 요소의 등장인지 써 놓으세요
    if (scTop > 400) {
        $('.t-box').each(function (i) {
            $(this)
                .delay(250 * i)
                .slideDown(600);
        });
    }

    // 누구등장?
    if (scTop > 950) {
        $('.c-banner img').addClass('active');
        $('.c-title').css({
            left: '1%',
            opacity: 1
        });
    }

    //누구등장?
    if (scTop > 2800) {
        $('.n-banner img').css({
            right: '5%',
            opacity: 1,
            transform: 'translateY(-50%)'
        });

        $('.n-inner .n-titlebox').css({
            left: '2%',
            opacity: 1,
            transform: 'translateY(-50%)'
        });
    }


    if (scTop > 3400) {
        $('.n-content1').addClass('active');
    }

    if (scTop > 3800) {
        setTimeout(function () {
            $('.n-content2').addClass('active');
        }, 200);
    }

    if (scTop > 4100) {
        setTimeout(function () {
            $('.n-content3').addClass('active');
        }, 300);
    }


    //2025.06.24
    /* if (scTop > 3400){
        $('.n-content1').animate({}, 600, function(){
            //.n-content1이 등장하고 난 후 실행!
        });

        //방법2 - animate() 앞에 delay() 적용!
        //$('.n-content2').delay().animate();
    } */

});







