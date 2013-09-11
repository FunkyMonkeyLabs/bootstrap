define(["fml/modal/modal", "hbs!fml/confirm/tpl/confirm", "jquery"], function(modal, tpl) {
        var bindConfirm = function(callback) {
            $(".confirm .confirm-button").on("click", callback);
        }

        return {
            show: function(question, callback, settings) {
                var defaults = {
                    lang: {
                        ok: "OK",
                        cancel: "Cancel"
                    }
                };
                settings = $.extend(defaults, settings);

                var content = tpl({
                    question: question,
                    settings: settings
                });
                modal.show({
                    content: content,
                    button: {
                        close: false
                    },
                    fade: true
                });
                bindConfirm(callback);
            }
        }
    }
);