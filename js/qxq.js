$(function () {
    var timeLineWidth = $(".time-horizontal").width() / $(".time-horizontal").children("li").length;
    $(".time-horizontal").children("li").each(function (i, v) {
        $(v).width(Math.floor(timeLineWidth));
    })

    if (screen.width > 1080) {
        $("div.banner_shadow_text").each(function (index, value) {
            var banner_text_left = $(this).width() / 2,
                banner_text_top = $(this).height() / 2;
            $(value).css({"marginLeft": -banner_text_left + "px", "marginTop": -banner_text_top + "px"});
        })
    } else {
        $("div.banner_shadow_text").each(function (index, value) {
            var banner_text_top = $(this).height() / 2;
            $(value).css({"marginTop": -banner_text_top + "px"});
        })
    }
})