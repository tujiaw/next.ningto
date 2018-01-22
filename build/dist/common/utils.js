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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vblxcdXRpbHMuanMiXSwibmFtZXMiOlsid2luZG93IiwicmVxdWVzdEFuaW1GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImlzTW9iaWxlIiwiQW5kcm9pZCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJCbGFja0JlcnJ5IiwiSU9TIiwiV2luZG93cyIsImFueSIsInNjcm9sbFRvWSIsInNjcm9sbFRhcmdldFkiLCJzcGVlZCIsImVhc2luZyIsInNjcm9sbFkiLCJjdXJyZW50VGltZSIsInRpbWUiLCJNYXRoIiwibWF4IiwibWluIiwiYWJzIiwiUElfRDIiLCJQSSIsImVhc2luZ0VxdWF0aW9ucyIsImVhc2VPdXRTaW5lIiwicG9zIiwic2luIiwiZWFzZUluT3V0U2luZSIsImNvcyIsImVhc2VJbk91dFF1aW50IiwicG93IiwidGljayIsInAiLCJ0Iiwic2Nyb2xsVG8iLCJjb25zb2xlIiwibG9nIiwidXRpbHMiLCJzY3JvbGwydG9wIiwiaXNFbXB0eU9iamVjdCIsImUiLCJjcmVhdGVTY3JpcHQiLCJzY3JpcHRTdHIiLCJzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImFzeW5jIiwiaW5uZXJIVE1MIiwicHJldmVudFJlcGVhdEV4ZWN1dGUiLCJmbiIsInRpbWVvdXQiLCJtcyIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLE9BQUEsQUFBTyxXQUFYLEFBQXNCLGFBQWEsQUFDakM7V0FBQSxBQUFPLCtCQUE4QixBQUNuQztlQUFRLE9BQUEsQUFBTyx5QkFDWCxPQURJLEFBQ0csK0JBQ1AsT0FGSSxBQUVHLDRCQUNQLFVBQUEsQUFBVSxVQUFVLEFBQ2xCO21CQUFBLEFBQU8sV0FBUCxBQUFrQixVQUFVLE9BQTVCLEFBQW1DLEFB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QUFLLEtBQUwsQUFBVSxHQUFHLEFBQ1Q7bUJBQU8sQ0FBUCxBQUFRLEFBQ1g7QUFDRDtlQUFPLENBQVAsQUFBUSxBQUNUO0FBVlcsQUFXWjtrQkFBYyxzQkFBQSxBQUFDLFdBQWMsQUFDM0I7WUFBTSxJQUFJLFNBQUEsQUFBUyxjQUFuQixBQUFVLEFBQXVCLEFBQ2pDO1VBQUEsQUFBRSxPQUFGLEFBQVMsQUFDVDtVQUFBLEFBQUUsUUFBRixBQUFVLEFBQ1Y7VUFBQSxBQUFFLFlBQUYsQUFBYyxBQUNkO2VBQUEsQUFBTyxBQUNSO0FBakJXLEFBa0JaOzBCQUFzQiw4QkFBQSxBQUFDLElBQUQsQUFBSyxTQUFZLEFBQ3JDO1lBQU0sS0FBSyxXQUFYLEFBQXNCLEFBQ3RCO1lBQUksU0FBSixBQUNBO2VBQU8sWUFBVyxBQUNoQjtnQkFBQSxBQUFJLEdBQUcsQUFDSDs2QkFBQSxBQUFhLEFBQ2hCO0FBQ0Q7Z0JBQUksV0FBQSxBQUFXLElBQWYsQUFBSSxBQUFlLEFBQ3BCO0FBTEQsQUFNRDtBQTNCSCxBQUFjLEFBOEJkO0FBOUJjLEFBQ1o7O2tCQTZCRixBQUFlIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6ImM6L2dpdGh1Yi9uaW5ndG8ifQ==