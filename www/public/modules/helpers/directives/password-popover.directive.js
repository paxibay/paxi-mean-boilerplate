module.exports = [passwordPopover];

// Show a Bootstrap popover with custom html content
function passwordPopover() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            // get it done!
            var config = {
                animation: true, // boolean - apply a CSS fade transition to the popover
                html: false, // boolean - Insert HTML into the popover. If false, jQuery's text method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.
                placement: 'top', // string | function - how to position the popover - top | bottom | left | right | auto. When "auto" is specified, it will dynamically reorient the popover. For example, if placement is "auto left", the popover will display to the left when possible, otherwise it will display right.
                selector: false, // string - If a selector is provided, popover objects will be delegated to the specified targets.
                trigger: 'hover', // string - how popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space.
                title: '', // string | function - default title value if title attribute isn't present
                content: '', // string | function - default content value if data-content attribute isn't present
                delay: 0, // number | object - delay showing and hiding the popover (ms) - does not apply to manual trigger type If a number is supplied, delay is applied to both hide/show Object structure is: delay: { show: 500, hide: 100 }
                container: false // string | false - Appends the popover to a specific element. Example: container: 'body'
            };

            // local validation messages
            var local = {
                title: "Your password must:",
                minlength: "Be at least 8 characters long.",
                one_number: "Include one number.",
                one_lowercase_letter: "Include one lowercase letter.",
                one_uppercase_letter: "Include one uppercase letter.",
                one_special_character: "Include one special character from: <strong>! @ # $ % ^ &amp; * -</strong>"
            }

            // config by data-type
            var type = element.data("type");
            switch (type) {
                case "password":
                    var validate_item = function (valid) {
                        if (valid) {
                            return '<i class="icon-li icon icon-check-shield text-success"></i>';
                        } else {
                            return '<i class="icon-li icon icon-cross-shield text-danger"></i>';
                        }
                    };

                    var validate_password = function (wrapper) {
                        var ret = "";
                        var value = element.val() || "";

                        if (wrapper) {
                            ret += '<div id="password-error-list">';
                        }

                        ret += '<p>' + local.title + '</p>';
                        ret += '<ul class="icon-ul">';

                        ret += '<li>' + validate_item(value.length >= 8) + local.minlength + '</li>';

                        ret += '<li>' + validate_item(/(\d)+/.test(value)) + local.one_number + '</li>';

                        ret += '<li>' + validate_item(/([a-z])+/.test(value)) + local.one_lowercase_letter + '</li>';

                        ret += '<li>' + validate_item(/([A-Z])+/.test(value)) + local.one_uppercase_letter + '</li>';

                        ret += '<li>' + validate_item(/([!@#$%^&*-])+/.test(value)) + local.one_special_character + '</li>';

                        ret += '</ul>';

                        if (wrapper) {
                            ret += '</div>';
                        }
                        return ret;
                    };

                    config = $.extend({}, config, {
                        placement: "right",
                        trigger: "focus",
                        html: true,
                        container: "body",
                        content: function (element) {
                            return validate_password(true);
                        }
                    });

                    element.on("keyup", function () {
                        $("#password-error-list").html(validate_password(false));
                    });
                    break;
            }

            // data-attributes override data-type
            // config = $.extend({}, config, {
            //     placement: element.attr("data-popover-placement"),
            //     trigger: element.attr("data-popover-trigger"),
            //     content: element.attr("data-popover-content"),
            //     html: element.attr("data-popover-html"),
            //     container: element.attr("data-popover-container")
            // });

            // booleans
            // config.html = popover_parse_bool(config.html);

            // console.log(config);

            // init
            element.popover(config);
        }
    }
}