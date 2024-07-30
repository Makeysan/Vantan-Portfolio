function showElementAnimation() {

	var element = document.getElementsByClassName('fadeIn');
	if(!element) return; // 要素がなかったら処理をキャンセル
						
	var showTiming = window.innerHeight > 768 ? 200 : 80; // 要素が出てくるタイミングはここで調整
	var scrollY = window.pageYOffset; //スクロール量を取得
	var windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得
					  
	for(var i=0;i<element.length;i++) { 
	  var elemClientRect = element[i].getBoundingClientRect(); 
	  var elemY = scrollY + elemClientRect.top; 
	  if(scrollY + windowH - showTiming > elemY) {
		element[i].classList.add('scrollin');
	  } else if(scrollY + windowH < elemY) {
	  // 上にスクロールして再度非表示にする場合はこちらを記述
		element[i].classList.remove('scrollin');
	  }
	}
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

let lastScrollPosition = window.scrollY;
// 現在のスクロール位置を保持する変数
let currentScrollPosition = 0;
// requestAnimationFrameの実行中かどうかを保持する変数。過剰な発火を防ぐ
let ticking = false;

function scrollUpDown(scrollPos, lastScrollPos) {
    // 現在のスクロール位置が前回のスクロール位置よりも大きい場合、スクロールダウンを検知
    if (scrollPos > lastScrollPos) {
        // スクロールダウン
        document.body.classList.remove('scroll-up');
        document.body.classList.add('scroll-down');
        console.log('SCROLLING DOWN: scrollPos: ',scrollPos,"lastScrollPos", lastScrollPos)
    } else {
        document.body.classList.add('scroll-up');
        document.body.classList.remove('scroll-down');
        console.log('SCROLLING UP: scrollPos: ',scrollPos,"lastScrollPos", lastScrollPos)
    }
}

// ウインドウのスクロールイベントを監視
window.addEventListener('scroll', function (e) {
    // スクロールイベントが発火したら、現在のスクロール位置を保持する
    currentScrollPosition = window.scrollY;

    //スクロールイベントの過剰な実行を制御します。
    if (!ticking) {
        // requestAnimationFrameを使って、scrollUpDown関数を実行する
        window.requestAnimationFrame(function () {
            scrollUpDown(currentScrollPosition, lastScrollPosition);
            lastScrollPosition = currentScrollPosition;
            ticking = false;
        });

        ticking = true;
    }
});


$(window).on('load',function(){
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
  
  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  
  $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  
  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  
  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function() { 
  //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
  
  });

  $(function(){
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 500) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });