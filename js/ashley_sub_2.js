
$(function () {
  var i = 0;
  // cnt01
  var tab = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.texts>div.tabs>div.tab');
  var txt = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.texts>h5');
  var p1 = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.texts>p');
  var p2 = $('div.cntWrap>div.content.cnt01>div.section>div.article>div.texts>p').eq(1);

  tab.eq(0).click(function () {
    txt.text('전국 다양한 곳에서 즐길 수 있는 애슐리 매장');
    p1.text('애슐리에서만 즐길 수 있는 다양한 음식 뷔페요리를');
    p2.text('전국 어디에서나 즐기실 수 있습니다.');
  });
  tab.eq(1).click(function () {
    txt.text('이제, 애슐리를 배달하세요!');
    p1.text('배달APP 또는 매장전화를 통해 주문가능 여부를');
    p2.text('확인 후 이용하실 수 있습니다.');
  });
  tab.eq(2).click(function () {
    txt.text('애슐리퀸즈 식사부터 디저트까지 한 곳에!');
    p1.text('각 시즌별에 따른 여러가지 맛있는 디저트를');
    p2.text('한곳에서 다양하게 즐길 수 있습니다.');
  });
  tab.eq(3).click(function () {
    txt.text('간편조리식품, 신선함을 식탁까지 새벽배송');
    p1.text('애슐리 홈스토랑 밀키트 모음전');
    p2.text('여러가지 배달 할인 쿠폰도 만나보세요.');
  });

  $('div.cntWrap>div.content.cnt01>div.section>div.article>div.texts>div.tabs>div.tab').click(function () {
    var ind = $(this).index();
    console.log(ind);
    $('div.cntWrap>div.content.cnt01>div.section>div.article>div.view>div.group').css({
      marginLeft: ind * -100 + '%'
    });
  });

  var wd = $(window).width();
  var cnt03ArtG = $('div.cntWrap>div.content.cnt03>div.section>div.artTop');
  var cnt03li = $('div.cntWrap>div.content.cnt03>div.section>ul.paging>li');

  // tab, mobile swipe
  if (wd <= 1025) {
    cnt03ArtG.swipeleft(function () {
      i++;
      if (i > 2) {
        i = 2
      }
      $(this).css({
        marginLeft: i * -100 + '%'
      });

      cnt03li.removeClass('on');
      cnt03li.eq(i).addClass('on');
    });

    cnt03ArtG.swiperight(function () {
      i--;
      if (i < 0) {
        i = 0
      }
      $(this).css({
        marginLeft: i * -100 + '%'
      });

      cnt03li.removeClass('on');
      cnt03li.eq(i).addClass('on');
    });

    cnt03li.click(function () {
      cnt03li.removeClass('on');
      $(this).addClass('on');

      var ind = $(this).index();
      i = ind;

      cnt03ArtG.css({
        marginLeft: ind * -100 + '%'
      })
    });
  }
  
  // bnr02 video
  var videoBtn = $('div.bnrWrap.bnrWrap02>div.banner.bnr02>div.video>div.btn>i');

  $(videoBtn).click(function () {
    $('video').get(0).play();
    $(this).css({
      display: 'none'
    });
  });
  $('video').on('ended', function () {
    $(videoBtn).css({
      display: 'block'
    });
  });
});