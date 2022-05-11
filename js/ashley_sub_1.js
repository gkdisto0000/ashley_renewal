
        $(function(){

            // 변수 선언문
            var cnt02Image = $('div.cnt02 div.artTop>div.article>div.image');
            var cnt02HImage = $('div.content.cnt02>div.header>div.image');
            
            $(cnt02Image).click(function(){
                $(cnt02HImage).css({
                    backgroundImage: $(this).css('background-image')
                });
    
            });
    
            $('div.cnt02 div.artBtm>div.article>div.image').click(function(){
    
                $(cnt02HImage).css({
                backgroundImage: $(this).css('background-image')
                });
            });


            // 컨텐츠 1 컬러 활성화

            var cnt01Image = $('div.cntWrap>div.content.cnt01>div.section>div.artView>div.artGroup>div.article>div.image');

            $(cnt01Image).mouseenter(function(){

                $(cnt01Image).css('filter', 'grayscale(1)');
                $(this).css('filter', 'grayscale(0)');

            });

            // 컨텐츠 2 하트 클릭 시 색 변화

            $('div.cntWrap>div.content.cnt02>div.header>div.image>div.like>i').click(function(){

                $(this).css('color', 'red')

            });

            // 제이쿼리 마침
            });