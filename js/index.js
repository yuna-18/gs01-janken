let gameInfo = {
  hardExtra: {
    level: 5,
    text: 'わざわざ神社に参拝に来ておいてお賽銭が0円とは…。<br>これは<span>ただ</span>で返すわけにはいかんのう…!<br><span>天罰じゃ！覚悟せい!!!</span>',
    delayTime: 2500,
    hp: 100,
  },
  hard: {
    level: 4,
    text: '10円…ちっとばかし懐が寒い感じがするが、<br>まあ近頃はこんなものかのう…。<br>よくきたの。少し遊んでやろう。',
    delayTime: 3000,
    hp: 70,
  },
  normal: {
    level: 3,
    text: '50円!おお嬉しいのう。<br>気持ちが大事とはよくいうが、<br>それでもつい見返りは求めてしまうものじゃの…。<br>よくきたの。少し遊んでやろう。',
    delayTime: 3000,
    hp: 50,
  },
  easy: {
    level: 2,
    text: '100円!おお嬉しいのう。<br>かなり奮発してくれたようじゃの。<br>何か困ってることでもあるのかの？<br>願い事の前に、気分転換に少し遊ばぬか？',
    delayTime: 3500,
    hp: 30,
  },
  easyExtra: {
    level: 1,
    text: 'せ…千円！？！？<br>間違って入れてしまったのかの？<br>それとも風で飛ばされて…<br>え？自分で入れた？なんということじゃ…<br>これはしっかりもてなしをせねば…！',
    delayTime: 4000,
    hp: 15,
  }
}
let mode;

// ゲーム進行管理
$(function () {
  let offeringMoney = "";
  // レベル選択
  $(".pay-btn").on("click", function () {
    offeringMoney = $(this).val();
    $(".dialog__container").addClass("is-active");
  });
  
  // 進行キャンセル・レベル選択リセット
  $(".dialog-btn.close-btn, .dialog-btn.no").on("click", function () {
    offeringMoney = "";
    $(".dialog__container").removeClass("is-active");
  });
  
  // 進行
  $(".dialog-btn.yes").on("click", function () {
    // モード選択非表示・ダイアログ非表示
    $(".pay__container").removeClass("is-active");
    $(".dialog__container").removeClass("is-active");
    // レベル決定
    selectStory(offeringMoney);
    // 戦闘準備　セリフ表示
    $(".npc__outer, .talk__inner").addClass("is-active");
    
    // 戦闘準備画面
    setTimeout(function () {
      $(".talk__inner").removeClass("is-active");
      $(".battle__container .btn__outer").addClass("is-active");
      $(".hp__inner").addClass("is-active");
    }, gameInfo[mode].delayTime);
  });
});

// モード決定
function selectStory (offeringMoney) {
  let text;
  switch (offeringMoney) {
    case "0円":
      mode = "hardExtra";
      text = gameInfo[mode].text;
      $(".talk-text").css("padding", "60px 20px");
      $(".talk-text").html(text);
      hp = gameInfo[mode].hp;
      $(".hp-num").html(hp);
      break;
    case "10円":
      mode = "hard";
      text = gameInfo[mode].text;
      $(".talk-text").css("padding", "70px 20px");
      $(".talk-text").html(text);
      hp = gameInfo[mode].hp;
      $(".hp-num").html(hp);
      break;
    case "50円":
      mode = "normal";
      text = gameInfo[mode].text;
      $(".talk-text").css("padding", "50px 20px");
      $(".talk-text").html(text);
      hp = gameInfo[mode].hp;
      $(".hp-num").html(hp);
      break;
    case "100円":
      mode = "easy";
      text = gameInfo[mode].text;
      $(".talk-text").css("padding", "45px 20px");
      $(".talk-text").html(text);
      hp = gameInfo[mode].hp;
      $(".hp-num").html(hp);
      break;
    case "1000円":
      mode = "easyExtra";
      text = gameInfo[mode].text;
      $(".talk-text").css("padding", "35px 20px");
      $(".talk-text").html(text);
      hp = gameInfo[mode].hp;
      $(".hp-num").html(hp);
      break;
  }
}

// function battleJudge (level) {
//   switch (level) {
//     case: 
//   }
  
// }