$(function () {
    $('.banner_carousel').flexslider({
        directionNav: true,
        pauseOnAction: false,
        animation: "slide"
    });
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