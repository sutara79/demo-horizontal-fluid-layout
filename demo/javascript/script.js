$(function() {
  // 画面サイズ変更時にも実行
  $(window).on('resize', function () {
    // リサイズ後の高さを正確に取得するため、タイマーを使って遅延実行する。
    if(timer !== false) {
      clearTimeout(timer);
    }
    var timer = setTimeout(function() {
      // 高さを初期化する。
      $('.container2 .item').height('auto');

      var arr_height = [];
      $('.container2 .item').each(function() {
        arr_height.push($(this).height());
      });
      $('.container2 .item').height(Math.max.apply(null, arr_height));
    }, 200);
  }).trigger('resize');
});