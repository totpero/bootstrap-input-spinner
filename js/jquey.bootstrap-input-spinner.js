/**************************************************************************/
/*******************************Input Text Spinar**************************/
/**************************************************************************/

//Use Exemple:

//$(".form-control").inputSpinner({ //options
//    'opacity': 0.5,
//    'glyphicon': 'glyphicon-refresh'
//});

//OR:

//$(".form-control").inputSpinner();
(function($) {
    var inputSpinnerFunc = function(element, options) {
        this.$element = $(element);

        if (!(this.$element.is("input[type=text]") || this.$element.is("input[type=password]"))) {
            console.log("Element must bee input type text or password");
            return false;
        }

        this.options = $.extend(true, {}, $.fn.inputSpinner.defaults, options);

        if (this.$element.parents().hasClass("has-feedback")) {

            this.$element
                .next("span")
                .remove();

            this.$element
                .parents()
                .removeClass("has-feedback");
        } else {
            this.$element
                .after($("<span></span>")
                    .addClass("glyphicon input-spinner form-control-feedback text-muted")
                    .addClass(this.options.glyphicon)
                    .css({
                        'opacity': this.options.opacity
                    })
                );

            this.$element
                .parents()
                .addClass("has-feedback");
        }

        return this;
    };
    $.fn.inputSpinner = function(options) {
        return new inputSpinnerFunc(this, options);
    };

    $.fn.inputSpinner.defaults = {
        opacity: 0.7,
        glyphicon: 'glyphicon-refresh',
    };

})(window.jQuery);
