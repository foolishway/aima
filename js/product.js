$(document).ready(function(){
    $('.banner_carousel').flexslider({
        directionNav: true,
        pauseOnAction: false,
        animation: "slide"
    });
    $(".product_ps_list").hover(function () {
        $(".product_division").addClass("dhover")
    }, function () {
        $(".product_division").removeClass("dhover")
    })
});