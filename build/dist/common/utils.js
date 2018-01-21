'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
if (typeof window !== 'undefined') {
    window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    }();

    window.isMobile = {
        Android: function Android() {
            return (/Android/i.test(navigator.userAgent)
            );
        },
        BlackBerry: function BlackBerry() {
            return (/BlackBerry/i.test(navigator.userAgent)
            );
        },
        IOS: function IOS() {
            return (/iPhone|iPad|iPod/i.test(navigator.userAgent)
            );
        },
        Windows: function Windows() {
            return (/IEMobile/i.test(navigator.userAgent)
            );
        },
        any: function any() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Windows();
        }
    };
}

// main function
function scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use
    if (typeof window === 'undefined') {
        return;
    }

    var scrollY = window.scrollY,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
        easingEquations = {
        easeOutSine: function easeOutSine(pos) {
            return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(pos) {
            return -0.5 * (Math.cos(Math.PI * pos) - 1);
        },
        easeInOutQuint: function easeInOutQuint(pos) {
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
            }
            return 0.5 * (Math.pow(pos - 2, 5) + 2);
        }
    };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            window.requestAnimFrame(tick);

            window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        } else {
            console.log('scroll done');
            window.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
}

var utils = {
    scroll2top: function scroll2top() {
        scrollToY(0, 1500);
    },
    isEmptyObject: function isEmptyObject(e) {
        var t;
        for (t in e) {
            return !1;
        }
        return !0;
    },
    createScript: function createScript(scriptStr) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = scriptStr;
        return s;
    },
    preventRepeatExecute: function preventRepeatExecute(fn, timeout) {
        var ms = timeout || 200;
        var t = void 0;
        return function () {
            if (t) {
                clearTimeout(t);
            }
            t = setTimeout(fn, ms);
        };
    }
};

exports.default = utils;