(function($) {
    "use strict";

    $.fn.counterUp = function(options) {
        // Default settings
        var settings = $.extend({
            time: 400,
            delay: 10
        }, options);

        return this.each(function() {
            var $this = $(this);
            var config = settings;

            var counter = function() {
                var numbers = [];
                var steps = config.time / config.delay;
                var value = $this.text();
                var hasCommas = /[0-9]+,[0-9]+/.test(value);

                // Remove commas from the value
                value = value.replace(/,/g, "");

                var isInteger = /^[0-9]+$/.test(value);
                var isFloat = /^[0-9]+\.[0-9]+$/.test(value);
                var decimalPlaces = isFloat ? (value.split(".")[1] || []).length : 0;

                // Generate step values
                for (var i = steps; i >= 1; i--) {
                    var stepValue = parseInt(value / steps * i);
                    if (isFloat) {
                        stepValue = parseFloat(value / steps * i).toFixed(decimalPlaces);
                    }
                    if (hasCommas) {
                        while (/\d{4,}/.test(stepValue.toString())) {
                            stepValue = stepValue.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        }
                    }
                    numbers.unshift(stepValue);
                }

                // Store the numbers for animation
                $this.data("counterup-nums", numbers);
                $this.text("0");

                // Animate the counter
                var animate = function() {
                    $this.text($this.data("counterup-nums").shift());
                    if ($this.data("counterup-nums").length) {
                        setTimeout($this.data("counterup-func"), config.delay);
                    } else {
                        $this.removeData("counterup-nums").removeData("counterup-func");
                    }
                };

                $this.data("counterup-func", animate);
                setTimeout($this.data("counterup-func"), config.delay);
            };

            $this.waypoint(counter, {
                offset: "100%",
                triggerOnce: true
            });
        });
    };
})(jQuery);