// 1	「文字色変化」ボタンを押した際に、文字色が任意の色に更新される
// 2	「文字内容変化」ボタンを押した際に、任意の文字内容に更新される
// 3	「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える
// 4	「フェードイン」ボタンを押した際に、フェードインで文字が現れる

$(function() {

  // 毎回処理内容を変更するid要素を変数に
  let myTarget = $('#target') 

  // 表示内容を変更するテキストを配列に
  const myTexts =['おはよう！', 'こんにちは！', 'おやすみなさい。', 'さようなら。', 'また会いましょう'];
  
  // change-colorがクリックされたら
  $('#change-color').on('click', function() {
    // 文字列の色を変化させる
    $(myTarget).css('color', 'blue');
  });

  // change-textがクリックされたら
  $('#change-text').on('click',function() {
    // textNumに配列に格納されている文字列の番号をランダムで代入する
    let textNum = Math.floor(Math.random() * myTexts.length);
    myTarget.text(myTexts[textNum]);
    // console.log(myTexts[textNum]);
    
  });

  // fade-outがクリックされたら
  $('#fade-out').on('click', function() {
    // フェードアウトする
    $(myTarget).fadeOut();
  });
  
  // fade-inがくりっくされた
  $('#fade-in').on('click', function() {
    // フェードインする
    $(myTarget).fadeIn();
  });
});