/**
 * ShowOnScroll
 * https://github.com/lesz3k/showOnScroll
 *
 * Copyright (c) 2015 Leszek Kasperczyk
 * Licensed under the MIT license.
 */


/**
 * A client side module using jQuery to initially hide selected elements and then reveal them when scrolled over. 
Multiple different elements can be passed.
Using CSS transitions that can be modified from the module's settings.
Use with Browserify for client side.
 *
 */
function showOnScroll() {
    var obj = {
        transition: {
            delay: '0',
            duration: '0.5s',
            timing: 'linear'
        },
        run: function (elem) {
            var elArr = arguments;

            function elemShow(elems) {
                var win = $(window).height(),
                    winScroll = $(window).scrollTop();
                elems.each(function () {
                    var el = $(this),
                        elTop = el.offset().top;
                    el.css({
                        'visibility': 'hidden',
                        'transition-delay': obj.transition.delay,
                        'transition-duration': obj.transition.duration,
                        'transition-timing-function': obj.transition.timing
                    });
                    if (win + winScroll > (elTop + 100)) {
                        el.css({
                            'opacity': 1,
                            'visibility': 'visible'
                        });
                    }
                });
            }

            function apply() {
                if (elArr.length > 1) {
                    for (var i = 0; i < elArr.length; i++) {
                        var thisElem = elArr[i];
                        thisElem.css('opacity', '0');
                        elemShow(thisElem);
                    }
                } else {
                    elem.css('opacity', '0');
                    elemShow(elem);
                }
            }
            apply();
            $(window).scroll(function () {
                apply();
            });
        }
    }
    return obj;
};

if (typeof module !== 'undefined') {
    module.exports = showOnScroll;
}