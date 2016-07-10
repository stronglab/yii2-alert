$(document).on("contextmenu", ".flash-modal", function (e) {
    e.preventDefault();
    $(this).fadeOut(420);
});

function showMessage(message, type, fade) {
    fade = typeof fade !== "undefined" ? fade : 1;
    type = typeof type !== "undefined" ? type : "flash-alert-info";
    var style;
    var top = 20 + $(".flash-modal").length * 100;
    style = "top: " + top + "px";
    var obj = $('<div>', {
        'class': 'flash-modal',
        'style': style
    });
    obj.appendTo('body');
    obj.html("<b>" + message + "</b>");
    obj.addClass(type);
    obj.stop().animate({opacity: "100"});
    obj.show();
    if (fade) {
        messageBoxFadeOut(obj);
        obj.mouseover(
            function () {
                if ($(this).is(":animated")) {
                    $(this).stop().animate({opacity: "100"});
                }
            }
        );
        obj.mouseleave(function () {
            messageBoxFadeOut(obj);
        });

    }
}

function messageBoxFadeOut(obj) {
    obj.fadeOut(7000, function () {
        obj.removeClass("alert-danger alert-success alert-info");
    });
}