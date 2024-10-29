$(function () {
  $(".pay-btn").on("click", function () {
    $(".dialog__container").addClass("is-active");
  });
  $(".dialog-btn.close-btn, .dialog-btn.no").on("click", function () {
    $(".dialog__container").removeClass("is-active");
  });
  
  $(".dialog-btn.yes").on("click", function () {
    // モード選択非表示・ダイアログ非表示
    $(".pay__container").removeClass("is-active");
    $(".dialog__container").removeClass("is-active");
    $(".npc__outer").addClass("is-active");
  });
})