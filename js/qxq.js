$(function () {
    var timeLineWidth = $(".time-horizontal").width() / $(".time-horizontal").children("li").length;
    $(".time-horizontal").children("li").each(function (i, v) {
        $(v).width(Math.floor(timeLineWidth));
    })
})