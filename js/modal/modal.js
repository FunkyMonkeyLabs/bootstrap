define(["hbs!fml/modal/tpl/modal", "jquery"], function(tpl) {
        var getModal = function(data) {
            var modal = $(tpl(data));

            return modal;
        };

        var showModal = function(modal, destination, fade) {
            if (fade) {
                modal.css("display", "none");
                modal.appendTo(destination);
                modal.fadeIn(100);
            } else {
                modal.appendTo(destination);
            }
        };

        return {
            show: function(data) {
                var defaults = {
                    "class": "",
                    id: "",
                    content: "",
                    title: "",
                    fade: false,
                    destination: $("body"),
                    lang: {
                        close: "zamknij"
                    },
                    button: {
                        close: true
                    }
                }
                data = $.extend(defaults, data);

                var modal = getModal(data);
                showModal(modal, data.destination, data.fade);
                this.bindCloseButton(".modal .close");
            },

            bindCloseButton: function(button) {
                $("body").on("click", button, function(){
                    $(".modal").fadeOut(100);
                    setTimeout(function(){
                        $(".modal").remove();
                    },100);
                    $(document).trigger("modal.close");
                });
            }
        }
    }
);