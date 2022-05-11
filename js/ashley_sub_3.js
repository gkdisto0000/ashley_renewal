$(function(){

    // 변수 선언문

    var cnt01Art = $('div.cntWrap>div.content.cnt01 div.article');
    var cnt01Li = $('div.cntWrap>div.content.cnt01>div.section>div.artWrap>div.arrowWrap>ul>li');
    var cont01ArtWrap = $('div.cntWrap>div.content.cnt01>div.section>div.artWrap');
    var cnt01Slide = $('div.cntWrap>div.content.cnt01>div.wrap>div.artGroup>div.slide');

    $(cnt01Art).mouseenter(function(){
        var ind = $(this).index();
        console.log(ind);
      $('div.cntWrap>div.content.cnt01 div.artGroup').css({
        marginLeft: ind * - 100 + '%'
      });
    });


    // 동그라미 적용
    $(cnt01Art).mouseover(function(){
        var ind = $(this).index();
        $(cnt01Li).eq(ind).css({
            backgroundColor: '#f5f5bf'
        });

    });

    $(cnt01Art).mouseleave(function(){
        $(cnt01Li).css({
        backgroundColor: ''
    });
});

$(cont01ArtWrap).mouseleave(function(){
    $(cnt01Slide).css({
    filter: ''  
    }); 
});

$(cont01ArtWrap).mouseover(function(){
    $(cnt01Slide).css({
    filter: 'grayscale(0)'
    });
});

});