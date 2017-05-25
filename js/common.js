function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

$.fn.extend({
    pcMenuInit: function () {
        var $this = $(this);
        $this.hover(function () {
            $("div.header_sub_menu_list").stop().slideDown(100);
        },function () {
            $("div.header_sub_menu_list").stop().slideUp(100);
        });

        // var $this = $(this),
        //     menuList = $this.find("ul");
        // if (menuList) {
        //     menuList.each(function (i, v) {
        //         $(v).find("li").each(function (index, value) {
        //             var $v = $(value);
        //             $v.hover(function () {
        //                 $(this).children("a").addClass("p_active");
        //                 if ($v.data("flag") == "parent") {
        //                     $(this).find("ul").stop().slideDown(100);
        //                 } else {
        //                     $(this).children("a").addClass("c_active");
        //                 }
        //             }, function () {
        //                 $(this).children("a").removeClass("p_active");
        //                 if ($v.data("flag") == "parent") {
        //                     $(this).find("ul").stop().slideUp(100);
        //                 } else {
        //                     $(this).children("a").removeClass("c_active");
        //                 }
        //             });
        //         });
        //     });
        // }
    },
    mobileMenuInit: function () {
        var $this = $(this),
            menuList = $this.find("ul");
        if (menuList) {
            menuList.each(function (i, v) {
                $(v).find("li").each(function (index, value) {
                    var $v = $(value);
                    $v.click(function (event) {
                        $(this).children("a").addClass("p_active").parent("li").siblings().each(
                            function (si, sv) {
                                $(sv).find("a").removeClass("p_active");
                            }
                        );
                        if ($(event.target).parent("li").data("flag") == "parent") {
                            var cMenu = $(this).find("ul");
                            if (cMenu.is(":hidden")) {
                                cMenu.stop().slideDown(100);
                            } else {
                                cMenu.stop().slideUp(100);
                            }
                        }
                        event.stopPropagation();
                    });
                });
            });
        }
    }
});

$(function () {
    $(".header_menu").pcMenuInit();
    $(".app_menu").mobileMenuInit();
    $("span.app_menu_btn").on("click", function (e) {
        if ($(".app_menu").is(":hidden")) {
            $(".app_menu").stop().slideDown(100);
            $("span.app_menu_btn").html("&#xe602;")
        } else {
            $(".app_menu").stop().slideUp(100);
            $("span.app_menu_btn").html("&#xe64c;")
        }
        e.stopPropagation();
    });
    $(document).click(function () {
        if (!$(".app_menu").is(":hidden")) {
            $(".app_menu").stop().slideUp(100);
            $("span.app_menu_btn").html("&#xe64c;");
        }
    });
    $("div.header_log").on({
        "mouseover": function () {
            $(this).css("cursor", "pointer");
        },
        "click": function () {
            window.location.href = "../首页（轮播图）.html";
        }
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

    $("div.dialog").on("click", "div.close", function () {
        $(this).parent().hide();
    });
});