 /* comunity js */   

document.addEventListener("DOMContentLoaded", function () {
    const bannerTxt = document.getElementById('bannerTxt');

    // 약간의 지연을 줄 수도 있음 (선택 사항)
    setTimeout(() => {
        bannerTxt.classList.add('active');
    }, 500);
});

$(function () {
    $('.gnb > li').mouseenter(function () {
        $(this).find('.lnb').slideDown();
    }).mouseleave(function () {
        $('.lnb').stop().slideUp();
    });
});