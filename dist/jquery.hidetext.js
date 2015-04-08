/*
 *  Project: jQuery plugin hideText
 *  Description: Hide words in the content and disable text selection
 *  Author: Zzbaivong (devs.forumvi.com)
 *  Version: 0.1
 *  License: MIT
 */

(function ($, window, document, undefined) {

    "use strict";

    var pluginName = "hideText",
        defaults = {
            percent: 5,
            antiSelection: false
        },
        selector;

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.support.selectstart = "onselectstart" in document.createElement("div");
    $.fn.disableSelection = function () {
        return this.on(($.support.selectstart ? "selectstart" : "mousedown"), function (event) {
            event.preventDefault();
        });
    };

    $.extend(Plugin.prototype, {
        init: function () {

            var ele = this.element,
                opt = this.settings;

            if (!$("#hideTextDisplay").length) {
                $("<style />", {
                    id: "hideTextDisplay",
                    type: "text/css",
                    html: ".hiddenText:after{content:attr(data-text)}"
                }).appendTo("head");
            }

            $(ele).each(function (index, el) {
                var $this = $(el),
                    arr = $this.text().match(/\s[a-záàạảãăắằặẳẵâấầậẩẫéèẹẻẽêếềệểễíìịỉĩòóọỏõôồốổỗộơờớởỡợùúụủũưừứửữựđýỳỷỹỵ]+(?=\s)/gim),
                    leg = arr.length,
                    five = leg / 100 * opt.percent,
                    com = Math.floor(leg / five),
                    re = {},
                    curr, i, j = arr.length;
                for (i = 0; i < j; i++) {
                    curr = arr[i];
                    if (i % com === 0) {
                        re[curr] = "<span class=\"hiddenText\" data-text=\"" + curr + "\"></span>";
                    }
                }
                $this.html(function () {
                    var reHTML = $this.html();
                    $.each(re, function (key, val) {
                        reHTML = reHTML.replace(new RegExp(key + "(?=\\s)", "gm"), val);
                    });
                    return reHTML;
                });
            });

            if (opt.antiSelection) {
                $("<style />", {
                    type: "text/css",
                    html: selector + "{webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}"
                }).appendTo("head");
                $(ele).disableSelection();
            }

        }
    });

    $.fn[pluginName] = function (options) {
        selector = this.selector;

        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

}(jQuery, window, document));