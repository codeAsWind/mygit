/*!appTouchHight - https://github.com/codeAsWind/mygit/blob/master/appTouchHeight.js/*/
!(function () {
    var bindEvent = function (_that) {
        var eventData = {}, container = _that._container, vague = 5,
            bindProp = _that._bindProp, feedbackClass = _that._feedbackClass;

        var classUtil = {
            hasClass: function (elem, cls){
                cls = cls || '';
                if(cls.replace(/\s/g, '').length == 0) return false;
                return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
            },
            addClass: function (elem, cls){
                if(!this.hasClass(elem, cls)){
                    elem.className += ' ' + cls;
                }
            },
            removeClass: function (elem, cls){
                if(this.hasClass(elem, cls)){
                    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
                    while(newClass.indexOf(' ' + cls + ' ') >= 0){
                        newClass = newClass.replace(' ' + cls + ' ', ' ');
                    }
                    elem.className = newClass.replace(/^\s+|\s+$/g, '');
                }
            },
            closest: function (elem, attribute) {
                var cur, match;
                for (cur = elem; cur; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && cur.nodeType === 1 && cur.getAttribute(attribute) === 'true') {
                        break;
                    }
                }
                return cur;
            }
        };

        _that.startFunc = function (e) {
            var event = e.changedTouches ? e.changedTouches[0] : e,
                identifier = eventData[event.identifier] = {};
            identifier.startY = event.pageY;
            identifier.startX = event.pageX;
            identifier.target = classUtil.closest(event.target, bindProp);
            if (identifier.target) {
                classUtil.addClass(identifier.target, feedbackClass);
            }
        };

        container.addEventListener('touchstart', _that.startFunc);

        _that.moveFunc = function (e) {
            var event = e.changedTouches ? e.changedTouches[0] : e,
                identifier = eventData[event.identifier];
            if (event.target && Math.abs(identifier.startY - event.pageY) > vague) {
                classUtil.removeClass(identifier.target, feedbackClass);
            }
        };

        container.addEventListener('touchmove', _that.moveFunc);

        _that.cancelFunc = function (e) {
            var event = e.changedTouches ? e.changedTouches[0] : e,
                identifier = eventData[event.identifier];
            if (identifier.target) {
                classUtil.removeClass(identifier.target, feedbackClass);
            }
            delete eventData[event.identifier];
        };

        container.addEventListener('touchcancel', _that.cancelFunc);

        container.addEventListener('touchend', _that.cancelFunc);
    };

    var appTouchHight = function (selector, option) {
        this._container = document.querySelector(selector);
        option = option || {};
        this._bindProp = option.bindProp || 'data-appTouchHight';
        this._feedbackClass = option.feedbackClass || 'feedback';
        bindEvent(this);
    };

    appTouchHight.prototype.destory = function () {
        var _that = this;
        _that._container.removeEventListener('touchstart', _that.startFunc);
        _that._container.removeEventListener('touchmove', _that.moveFunc);
        _that._container.removeEventListener('touchcancel', _that.cancelFunc);
        _that._container.removeEventListener('touchend', _that.cancelFunc);
    };

    if (typeof define === 'function') {
        define(function() {
            return appTouchHight;
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = appTouchHight;
    } else {
        this.appTouchHight = appTouchHight;
    }
}());
