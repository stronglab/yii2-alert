$(".flash-modal").bind("contextmenu", function (e) {
    e.preventDefault();
    $(this).fadeOut(420);
});

function showMessage(message, fade, type) {
    fade = typeof fade !== "undefined" ? fade : 1;
    type = typeof type !== "undefined" ? type : "alert-info";
    var obj = $(".flash-modal");
    obj.html("<b>" + message + "</b>");
    obj.addClass(type);
    obj.stop().animate({opacity: "100"});
    obj.show();
    if (fade) {
        messageBoxFadeOut();
        obj.mouseover(
            function () {
                if ($(this).is(":animated")) {
                    $(this).stop().animate({opacity: "100"});
                }
            }
        );
        obj.mouseleave(messageBoxFadeOut);

    }
}

function messageBoxFadeOut() {
    var obj = $(".flash-modal");
    obj.fadeOut(7000, function () {
        obj.removeClass("alert-danger alert-success alert-info");
    });
}