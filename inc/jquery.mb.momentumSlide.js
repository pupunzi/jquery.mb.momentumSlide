/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.momentumSlide.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 27/01/14 20.07
 *  *****************************************************************************
 */

/*Browser detection patch*/
if (!jQuery.browser) {
	jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1;
	var nAgt = navigator.userAgent;
	jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
	var nameOffset, verOffset, ix;
	if (-1 != (verOffset = nAgt.indexOf("Opera")))jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("MSIE")))jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
		jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
		var start = nAgt.indexOf("rv:") + 3, end = start + 4;
		jQuery.browser.fullVersion = nAgt.substring(start, end)
	} else-1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
	-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
}


/*******************************************************************************
 * jQuery.mb.components: jquery.mb.CSSAnimate
 ******************************************************************************/

jQuery.fn.CSSAnimate=function(a,b,k,l,f){return this.each(function(){var c=jQuery(this);if(0!==c.length&&a){"function"==typeof b&&(f=b,b=jQuery.fx.speeds._default);"function"==typeof k&&(f=k,k=0);"function"==typeof l&&(f=l,l="cubic-bezier(0.65,0.03,0.36,0.72)");if("string"==typeof b)for(var j in jQuery.fx.speeds)if(b==j){b=jQuery.fx.speeds[j];break}else b=null;if(jQuery.support.transition){var e="",h="transitionEnd";jQuery.browser.webkit?(e="-webkit-",h="webkitTransitionEnd"):jQuery.browser.mozilla? (e="-moz-",h="transitionend"):jQuery.browser.opera?(e="-o-",h="otransitionend"):jQuery.browser.msie&&(e="-ms-",h="msTransitionEnd");j=[];for(d in a){var g=d;"transform"===g&&(g=e+"transform",a[g]=a[d],delete a[d]);"transform-origin"===g&&(g=e+"transform-origin",a[g]=a[d],delete a[d]);j.push(g);c.css(g)||c.css(g,0)}d=j.join(",");c.css(e+"transition-property",d);c.css(e+"transition-duration",b+"ms");c.css(e+"transition-delay",k+"ms");c.css(e+"transition-timing-function",l);c.css(e+"backface-visibility", "hidden");setTimeout(function(){c.css(a)},0);setTimeout(function(){c.called||!f?c.called=!1:f()},b+20);c.on(h,function(a){c.off(h);c.css(e+"transition","");a.stopPropagation();"function"==typeof f&&(c.called=!0,f());return!1})}else{for(var d in a)"transform"===d&&delete a[d],"transform-origin"===d&&delete a[d],"auto"===a[d]&&delete a[d];if(!f||"string"===typeof f)f="linear";c.animate(a,b,f)}}})}; jQuery.fn.CSSAnimateStop=function(){var a="",b="transitionEnd";jQuery.browser.webkit?(a="-webkit-",b="webkitTransitionEnd"):jQuery.browser.mozilla?(a="-moz-",b="transitionend"):jQuery.browser.opera?(a="-o-",b="otransitionend"):jQuery.browser.msie&&(a="-ms-",b="msTransitionEnd");jQuery(this).css(a+"transition","");jQuery(this).off(b)}; jQuery.support.transition=function(){var a=(document.body||document.documentElement).style;return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition}();



var ua = navigator.userAgent.toLowerCase();
var isiOs = ua.match(/(iphone|ipod|ipad)/);
var isAndroid = ua.match(/android/);

var hasTouch = 'ontouchstart' in window;
var events = {};
events.start = hasTouch ? "touchstart" : "mousedown";
events.move = hasTouch ? "touchmove" : "mousemove";
events.end = hasTouch ? "touchend" : "mouseup";
events.windowResize = hasTouch && isiOs ? "orientationchange" : "resize";

(function ($) {

	$.mbMomentumSlide = {
		name    : "mb.momentumSlide",
		author  : "Matteo Bicocchi",
		version : "1.5",
		defaults: {
			duration        : 600,
			direction       : "h",
			waitBefore      : 100,
			tollerance      : "auto",
			changePoint     : 3,
			propagate       : true,
			anchor          : 0,
			pagination      : 5,
			activateKeyboard: true,
			indexPlaceHolder: null,
			onInit          : function (el) {},
			onStart         : function (el) {},
			onDrag          : function (el) {},
			onBeforeEnd     : function (el) {},
			onEnd           : function (el) {},
			onBounceStart   : function (el) {},
			onBounceEnd     : function (el) {},
			onGoTo          : function (el) {}
		},

		init: function (opt) {
			var arg = arguments;

			this.each(function () {

				var el = this;
				var $el = $(this);

				$el.addClass("mbMomentumSlider");

				if (typeof arg[0] == "string") {
					switch (arg[0]) {
						case "goto":

							if (arg[2] == undefined)
								arg[2] = true;

							$.mbMomentumSlide.goTo(el, arg[1], arg[2]);
							break;
						case "next":
							$.mbMomentumSlide.next(el);
							break;
						case "prev":
							$.mbMomentumSlide.prev(el);
							break;
						case "refresh":
							$.mbMomentumSlide.refresh(el);
							break;
						case "end":
							$.mbMomentumSlide.end(el);
							break;
					}
					return;
				}

				$el.addClass("cursorGrab");

				el.opt = {};
				el.margin = {};
				el.isDevice = hasTouch;
				el.cancelScroll = false;
				el.scrolled = false;
				el.hasTouch = hasTouch;
				el.page = 0;

				el.bounceStartCalled = false;
				el.bounceEndCalled = false;

				el.opt.id = el.id ? el.id : "moms_" + new Date().getTime();
				$.extend(el.opt, $.mbMomentumSlide.defaults, opt);

				if (!el.isDevice)
					$($el).on('dragstart.mbMomentum_' + el.opt.id,'img', function (event) {event.preventDefault();});

				var wrapper = $("<div/>").addClass("mbScrollWrapper_" + el.opt.id).css({position: "relative", lineHeight: 0, margin: 0});
				$el.wrapInner(wrapper);
				$el.css({overflow: "hidden"});

				el.container = $(".mbScrollWrapper_" + el.opt.id, $el);
				var containeCss = el.opt.direction == "h" ? {height: "100%", display: "inline"} : {width: "100%"};
				el.container.css(containeCss);

				el.pages = $(el.container).children(":visible");

				el.pages.each(function (i) {
					var wrapper = $("<div/>").addClass("pageContent");
					$(this).wrapInner(wrapper);

					var css = el.opt.direction == "h" ? {display: "inline-block", width: $el.outerWidth()} : {display: "block", height: $el.outerHeight()};
					$(this).css(css).attr("data-idx", i + 1);
					el.container.append($(this));
					this.content = $(".pageContent", $(this)).get(0);
				});

				el.w = el.container.outerWidth(true) - el.pages.outerWidth();
				el.h = el.container.outerHeight(true) - el.pages.outerHeight();

				$el.off(events.start + ".mbMomentum_" + el.opt.id).on(events.start + ".mbMomentum_" + el.opt.id, function (e) {$.mbMomentumSlide.start(e, el);});
				$(document).off(events.end + ".mbMomentum_" + el.opt.id).on(events.end + ".mbMomentum_" + el.opt.id, function () {$.mbMomentumSlide.end(el);});
				$(window).off(events.windowResize + ".mbMomentum_" + el.opt.id).on(events.windowResize + ".mbMomentum_" + el.opt.id, function () {
					$.mbMomentumSlide.refresh(el);
				});

				if (el.opt.activateKeyboard)
					$(document).on("keydown." + el.opt.id, function (e) {
						var key = e.which;

						if (key == 37) {
							$.mbMomentumSlide.prev(el);
						}
						if (key == 39) {
							$.mbMomentumSlide.next(el);
						}
					});

				if ($(el.opt.indexPlaceHolder).length > 0) {
					$.mbMomentumSlide.buildIndex(el);
				}

				if (typeof el.opt.onGoTo === "function")
					$el.on("goto." + ".mbMomentum_" + el.opt.id, function (e) {
						el.opt.onGoTo(el);
					});

				$.mbMomentumSlide.refresh(el);
				$.mbMomentumSlide.goTo(el, 1, true);

				if (typeof el.opt.onInit === "function")
					el.opt.onInit(el);
			});
		},

		start: function (e, el) {

			var $el = $(el);
			$el.off(events.move + ".mbMomentum_" + el.opt.id).on(events.move + ".mbMomentum_" + el.opt.id, function (e) {$.mbMomentumSlide.move(e, el);});

			el.container.CSSAnimateStop();

			el.bounceStartCalled = false;
			el.bounceEndCalled = false;
			el.anchored = true;

			var event = e;
			if (el.hasTouch) {
				e = e.originalEvent;
				e = e.touches[0];
			}

			$("body").unselectable();

			el.timer = setTimeout(function () {
				el.canScroll = true;
				$(el).addClass("cursorGrabbing");
			}, el.opt.waitBefore);

			el.startX = e.clientX;
			el.startY = e.clientY;

			el.startPosX = parseFloat(el.container.css("margin-left"));
			el.startPosY = parseFloat(el.container.css("margin-top"));

			el.w = el.container.outerWidth() - $el.outerWidth();
			el.h = el.container.outerHeight() - $el.outerHeight();
			$(el).unselectable();

			$.mbMomentumSlide.refresh(el);

			if (typeof el.opt.onStart == "function")
				el.opt.onStart(el);

			if (!el.opt.propagate)
				event.stopPropagation();
		},

		move: function (e, el) {

			var margin = el.opt.direction == "h" ? parseFloat(el.container.css("margin-left")) : parseFloat(el.container.css("margin-top"));
			var event = e;
			if (el.hasTouch) {
				e = e.originalEvent;
				e = e.touches[0];
			}
			event.preventDefault();

			el.x = el.endX = e.clientX;
			el.y = el.endY = e.clientY;

			/*Check if the scrolling direction is the same of the component, otherwise user is doing something else*/
			el.locked = false;
			var tollerance = typeof el.opt.tollerance == "string" ? el.opt.waitBefore / 2 : el.opt.tollerance;
			if (el.opt.direction == "h") {
				el.locked = Math.abs(el.startY - el.endY) > (Math.abs(el.startX - el.endX)) * 1.2 + tollerance;
			} else if (el.opt.direction == "v") {
				el.locked = (Math.abs(el.startX - el.endX)) * 1.2 > Math.abs(el.startY - el.endY) + tollerance;
			}

			if (el.canScroll && !el.locked) {
				el.scrolling = true;

				var condition = el.opt.direction == "h" ? Math.abs(el.startY - el.endY) : Math.abs(el.startX - el.endX);

				var dim = el.opt.direction == "h" ? el.w : el.h;

				var friction = margin >= 0 || margin <= -dim ? 6 : 1;
				var x = Math.floor(el.startX - e.clientX) / friction;
				var y = Math.floor(el.startY - e.clientY) / friction;

				if (margin > 10 && !el.bounceStartCalled) {
					if (typeof el.opt.onBounceStart == "function") {
						el.opt.onBounceStart(el);
						el.bounceStartCalled = true;
					}
				} else if (margin < -(dim + 10) && !el.bounceEndCalled) {
					if (typeof el.opt.onBounceEnd === "function") {
						el.opt.onBounceEnd(el);
						el.bounceEndCalled = true;
					}
				} else if (condition < el.opt.anchor && el.anchored) {
					event.stopPropagation();
				} else {
					el.anchored = false;
				}

				var dir = el.opt.direction == "h" ? (x < 0 ? "left" : "right") : (y < 0 ? "top" : "bottom");

				var css = el.opt.direction == "h" ? {"marginLeft": el.startPosX - x} : {"marginTop": el.startPosY - y};

				el.container.css(css);
				if (typeof el.opt.onDrag == "function")
					el.opt.onDrag(el, dir);

			} else if (el.locked) {
				$(el).momentumSlide("end");
			}

		},

		end: function (el) {


			var $el = $(el);
			$el.off(events.move + ".mbMomentum_" + el.opt.id);

			clearTimeout(el.timer);
			el.canScroll = false;
			$el.removeClass("cursorGrabbing");

			if (!el.scrolling)
				return;

			el.scrolling = false;

			el.pageW = $el.outerWidth();
			el.pageH = $el.outerHeight();
			el.changePoint = el.opt.direction == "h" ? el.pageW / el.opt.changePoint : el.pageH / el.opt.changePoint;

			var checkPageX = Math.abs(el.startX - el.endX) > el.changePoint && parseFloat(el.container.css("margin-left")) < 0 && el.pages.eq(el.page).length > 0;
			var checkPageY = Math.abs(el.startY - el.endY) > el.changePoint && parseFloat(el.container.css("margin-top")) < 0 && el.pages.eq(el.page).length > 0;

			var changePage = el.opt.direction == "h" ? checkPageX : checkPageY;

			var oldPage = el.page;

			el.isChanging = false;

			if (changePage) {
				var canMove = el.opt.direction == "h" ? el.endX < el.startX : el.endY < el.startY;

				if (canMove) {
					if (el.pages.eq(el.page + 1).length > 0)
						el.page++;
				} else {
					if (el.pages.eq(el.page - 1).length > 0)
						el.page--;
				}

				el.isChanging = true;

			}

			if (el.page != oldPage)
				el.oldPage = oldPage;

			$.mbMomentumSlide.goTo(el, el.page + 1);
			el.anchored = false;
		},

		refresh: function (el) {

			if (!el.opt)
				return;

			var $el = $(el);
			el.pages = $(el.container).children();
			el.pages.each(function () {
				var css = el.opt.direction == "h" ? {width: $el.outerWidth()} : {height: $el.outerHeight()};
				$(this).css(css);
			});
			var css = el.opt.direction == "h" ? {marginLeft: -($el.outerWidth() * el.page), width: $el.outerWidth() * el.pages.length} : {marginTop: -($el.outerHeight() * el.page), height: $el.outerHeight() * el.pages.length};
			el.container.css(css);
		},

		next: function (el) {

			el.oldPage = el.page;

			if (typeof el.opt.onDrag == "function")
				el.opt.onDrag(el, "right");

			if (el.page < el.pages.length - 1)
				el.page++;

			el.isChanging = true;
			$.mbMomentumSlide.goTo(el, el.page + 1);
		},

		prev: function (el) {

			el.oldPage = el.page;

			if (typeof el.opt.onDrag == "function")
				el.opt.onDrag(el, "left");

			if (el.page > 0)
				el.page--;

			el.isChanging = true;
			$.mbMomentumSlide.goTo(el, el.page + 1);
		},

		goTo: function (el, idx, animate) {

			if (animate === undefined)
				animate = true;

			var $el = $(el);
			idx = idx - 1;

			if (idx >= 0 && idx < el.pages.length)
				el.page = idx;
			else
				el.page = 0;

			el.actualPage = el.pages[el.page];

			if (el.isChanging || el.isChanging === undefined) {
				var event = $.Event("goto");
				event.el = el;
				$(el).trigger(event);

			}

			var pos = el.opt.direction == "h" ? -($el.outerWidth() * el.page) : -($el.outerHeight() * el.page);
			var css = el.opt.direction == "h" ? {"margin-left": pos} : {"marginTop": pos};

			var ease = "cubic-bezier(0,.98,.26,.97)";

			if (typeof el.opt.onBeforeEnd == "function")
				el.opt.onBeforeEnd(el);

			el.isChanging = undefined;

			var duration = animate ? el.opt.duration : 1;

			if (isAndroid) {
				el.container.css(css);

				if (typeof el.opt.onEnd == "function")
					el.opt.onEnd(el);

				el.locked = false;
			} else {

				el.container.CSSAnimate(css, duration, 0, ease, function () {

					if (typeof el.opt.onEnd == "function")
						el.opt.onEnd(el);

					el.locked = false;
				});

			}

			if ($(el.opt.indexPlaceHolder).length > 0) {
				$.mbMomentumSlide.buildIndex(el);
			}
		},

		buildIndex: function (el) {

			var indexBox = $(el.opt.indexPlaceHolder);
			indexBox.empty();
			if (el.pages.length == 1)
				return;
			var idxContainer = $("<div/>").addClass("idxContainer");
			indexBox.append(idxContainer);
			for (var i = 0; i < el.pages.length; i++) {
				var indexEl = $("<div/>").addClass("idxPage").attr("id", "pageIdx_" + i).data("idx", i);
				indexEl.click(function () {
					$.mbMomentumSlide.goTo(el, $(this).data("idx") + 1);
				});
				idxContainer.append(indexEl);
			}
			$(".idxPage", indexBox).eq(el.page).addClass("sel");
		},

		getNextPage: function (el) {
			var page = el.pages.eq(el.page + 1);
			return page;
		},

		getPrevPage: function (el) {
			var page = el.pages.eq(el.page - 1);
			return page;
		}

	};

	$.fn.momentumSlide = $.mbMomentumSlide.init;

	/*UTILITIES*/

	$.fn.unselectable = function () {

		if ('ontouchstart' in window)
			return;

		this.each(function () {
			$(this).css({
				"-moz-user-select"  : "none",
				"-khtml-user-select": "none",
				"user-select"       : "none"
			}).attr("unselectable", "on");
		});
		return $(this);
	};

	$.fn.clearUnselectable = function () {

		if ('ontouchstart' in window)
			return;

		this.each(function () {
			$(this).css({
				"-moz-user-select"  : "auto",
				"-khtml-user-select": "auto",
				"user-select"       : "auto"
			});
			$(this).removeAttr("unselectable");
		});
		return $(this);
	};

})(jQuery);
