$(function () {
    $('.banner_carousel').flexslider({
        directionNav: true,
        pauseOnAction: false,
        animation: "slide"
    });
    $("div.dialog").on("click", "div.close", function () {
        $(this).parent().hide();
    });
})