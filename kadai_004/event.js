// jQuery 「load」「scroll」のイベント処理を使用して以下の文字列をコンソールに表示してください。

// HTMLドキュメントが読み込み完了したときに「loadイベントが発生しました」とコンソールに出力する
// 画面をスクロールしたときに「scrollイベントが発生しました」とコンソールに出力する
// 作業手順は後述の各Stepを参考にしてください。

// ※参考コード

// $(window).on(イベント, () => {});

// $(function() {

//   // HTMLが読み込まれたとき
//   $(document).ready(function(){
//     console.log('loadイベントが発生しました');
//    });
   
//    $(window).on('scroll',function(){
//     console.log('scrollイベントが発生しました');
//    });
// });


$(function() {
  // HTMLが読み込まれたときに
  $(document).ready(function() {
    console.log('loadイベントが発生しました');
  });

  // ページ全体が読み込まれたときに
  $(window).on('load', function() {
    console.log('loadイベントが発生しました');
  });

  // 画面をスクロールしたときに
  $(window).on('scroll', function() {
    console.log('scrollイベントが発生しました');
  });
});
