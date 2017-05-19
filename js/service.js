$(function () {
    $("div.dialog").on("click","div.close",function () {
        $(this).parent().hide();
    });
})