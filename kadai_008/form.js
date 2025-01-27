$(function() {

  // btn要素をクリックしたら文字列を入力
  $('.btn').on('click', function() {
    $('.text-box').val('クリックしました！');
  });
});