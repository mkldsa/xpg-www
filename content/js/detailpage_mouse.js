/* detailpage_mouse */

$(function () {
    $('.gnb > li').mouseenter(function () {
        $(this).find('.lnb').slideDown();
    }).mouseleave(function () {
        $('.lnb').stop().slideUp();
    });
});

var scTop = $(window).on('scroll', function () {
    scTop = Math.ceil($(this).scrollTop());
    console.log(scTop);

    if (scTop > 400) {
        $('.t-box').each(function (i) {
            $(this)
                .delay(250 * i)
                .slideDown(600);
        });
    }
});


var pageCount = 0;
var total; 

var stat = 0;

$(document).ready(function(){

    total = $('.page, .page1').length;
    console.log('총 페이지 갯수: ' + total);


    $(document).on('mousewheel DOMMouseScroll', function(){
   
        if (stat === 1) return false;
        stat = 1; 

        var evt = window.event;
        console.log(evt);


        var delta = evt.wheelDelta ? evt.wheelDelta : evt.detail;
        console.log('마우스휠 델타값: ' + delta);
        
        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.detail;
            console.log('파이어폭스 detail: '+ delta);
        }


        if (delta < 0) {
            pageCount++;
            if (pageCount === total) pageCount = total-1;

        } else {
            pageCount--;
            if (pageCount === -1) pageCount = 0;
        }

        console.log('현재 페이지번호: ' + pageCount);

        var pageTop = $('.page, .page1').eq(pageCount).offset().top;
        console.log('페이지 offset: ' + pageTop);

       
        $('html, body').animate({
            scrollTop: pageTop + 'px'
        }, 800, function(){
            stat = 0; 
        });
        
        menuChg2(pageCount);

    }); 


    $('.side-pager a').on('click', function(e){

        e.preventDefault();

       
        var idx = $(this).parent().index();
        console.log('클릭된 a의 부모(li) index값: ' + idx);

        pageCount = idx;
        console.log('변경된 page번호: '+ pageCount);

        var pageTop = $('.page').eq(pageCount).offset().top;

      

        $('html, body').animate({
            scrollTop: pageTop
        }, 800);

        menuChg2(pageCount);

    });


});


function menuChg (){
    $('.side-pager li').eq(pageCount).addClass('on').siblings().removeClass('on');
}


function menuChg2 (n){
    $('.side-pager li').eq(n).addClass('on').siblings().removeClass('on');
}