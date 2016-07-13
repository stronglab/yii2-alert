var timerId;

$(document).on("contextmenu", ".flash-modal", function (e) {
    e.preventDefault();
    $(this).fadeOut(420);
});

function showMessage(message, type, fade) {
    fade = typeof fade !== "undefined" ? fade : 1;
    type = typeof type !== "undefined" ? type : "flash-alert-info";
    var top = 20 + $(".flash-modal:visible").length * 100;
    var style = "top: " + top + "px";
    var obj = $('<div>', {
        'class': 'flash-modal',
        'style': style
    });
    obj.appendTo('body');
    obj.text(message);
    obj.addClass(type);
    obj.stop().animate({opacity: "100"});
    obj.show();
    if (fade) {
        messageBoxFadeOut(obj);
        obj.mouseover(
            function () {
                clearTimeout(timerId);
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
    timerId = setTimeout(function () {
        obj.fadeOut(300, function () {
            obj.remove();
        });
    }, 2000);
}