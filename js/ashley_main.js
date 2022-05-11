$(function(){

    // 변수 선언문
    var i = 0;
    var cnt01Image = $('div.content.cnt01 div.thumb>div.image');
    var cnt01Li = $('div.cnt01 ul.paging>li');

    $('div.content.cnt01 div.thumb>div.image').click(function(){
        i++;
        if(i > 3) {
            i = 0;
        }
        var ind = $(this).index();

        console.log(i);
        $('div.cnt01 div.article>div.image').css('background-image', $(this).css('background-image'));
        $(cnt01Li).removeClass('show');
        $(cnt01Li).eq(ind).addClass('show');
        $(cnt01Image).css('filter', 'grayscale(1)');
        $(this).css('filter', 'grayscale(0)');
    });

    $(cnt01Li).click(function(){
        i++;
        $(cnt01Li).removeClass('show');
        $(this).addClass('show');
        console.log(i);

        var ind = $(this).index();
        i = ind;

        $('div.content.cnt01 div.article>div.image').css({backgroundImage: $(cnt01Image).eq(i).css('background-image')});
        $(cnt01Image).css('filter', 'grayscale(1)');
        $(cnt01Image).eq(i).css('filter', 'grayscale(0)');;

    });


    // cnt02 슬라이드
    var cnt02I =$('div.content.cnt02 div.article>div.btn>i');
    var cnt02ThumImage = $('div.cnt02>div.section>div.thumb>div.image');


    $(cnt02ThumImage).click(function(){
        $('div.cnt02>div.section>div.article>div.image').css({backgroundImage: $(this).css('background-image')});

        $(cnt02ThumImage).css('filter', 'grayscale(1)');
        $(this).css('filter', 'grayscale(0)');

        var ind = $(this).index();

        i = ind;

        console.log(i);
        if(i==0){
            $(cnt02I).eq(0).css('opacity', '0');
        } else if (i>=0) {
            $(cnt02I).eq(0).css('opacity', '1');
        }

        if(i==5){
            $(cnt02I).eq(1).css('opacity', '0');
        } else if (i<=4) {
            $(cnt02I).eq(1).css('opacity', '1');
        }


    });

    $(cnt02I).eq(1).click(function(){
        i++;
        console.log(i);
        if(i>5){
            i = 5;
        }
        $('div.cnt02>div.section>div.article>div.image').css({backgroundImage: $(cnt02ThumImage).eq(i).css('background-image')});
        $(cnt02ThumImage).css('filter', 'grayscale(1)');
        $(cnt02ThumImage).eq(i).css('filter', 'grayscale(0)');

        if(i > 4) {
            $(cnt02I).eq(1).css('opacity', '0');
        } else if(i < 4) {
            $(cnt02I).eq(0).css('opacity', '1');
        }
    });

    $(cnt02I).eq(0).click(function(){
        i--;
        console.log(i);
        if(i<0){
            i = 0;
        }

        $('div.cnt02>div.section>div.article>div.image').css({backgroundImage: $(cnt02ThumImage).eq(i).css('background-image')});
        $(cnt02ThumImage).css('filter', 'grayscale(1)');
        $(cnt02ThumImage).eq(i).css('filter', 'grayscale(0)');
        if(i <= 0) {
            $(cnt02I).eq(0).css('opacity', '0');
        } else if(i > 0) {
            $(cnt02I).eq(1).css('opacity', '1');
        }

    });


    // 컨텐츠2 텍스트 뿌리기

    var thumli = $('div.cnt02>div.section>div.thumb>div.image');
    var txtTop = $('div.cntWrap>div.content.cnt02>div.section>div.article>div.texts>div').eq(0);
    var txtBtm = $('div.cntWrap>div.content.cnt02>div.section>div.article>div.texts>div').eq(1);

    $(cnt02ThumImage).eq(0).click(function(){
        txtTop.text('3가지 부위를 한번에 즐기는'); 
        txtBtm.text('압도적인 크기의 토마호크'); 
     });
 

    $(thumli).eq(1).click(function(){
       txtTop.text('언제 어디서나 즐길 수 있는'); 
       txtBtm.text('포터하우스 스테이크'); 
    });

    $(thumli).eq(2).click(function(){
        txtTop.text('매혹적인 풍미가 가득해요'); 
        txtBtm.text('슬라이스 스테이크'); 
     });
 
     $(thumli).eq(3).click(function(){
        txtTop.text('입안 가득 퍼지는 강렬한 육즙'); 
        txtBtm.text('스트립 스테이크'); 
     });
     $(thumli).eq(4).click(function(){
        txtTop.text('여러가지 디저트를 즐겨보세요'); 
        txtBtm.text('프리미엄 디저트'); 
     });
     $(thumli).eq(5).click(function(){
        txtTop.text('남녀노소 누구나 사랑하는'); 
        txtBtm.text('이국적인 빠네와 타코'); 
     });
});