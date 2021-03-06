"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function value(b) {
    if (void 0 === b || null === b) throw new TypeError("Cannot convert first argument to object");for (var c = Object(b), d = 1; d < arguments.length; d++) {
      var f = arguments[d];if (void 0 !== f && null !== f) for (var f = Object(f), a = Object.keys(Object(f)), g = 0, l = a.length; g < l; g++) {
        var n = a[g],
            h = Object.getOwnPropertyDescriptor(f, n);void 0 !== h && h.enumerable && (c[n] = f[n]);
      }
    }return c;
  } });
Array.prototype.find || (Array.prototype.find = function (b, c) {
  if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");if ("function" !== typeof b) throw new TypeError("predicate must be a function");for (var d = Object(this), f = d.length >>> 0, a, g = 0; g < f; g++) {
    if (a = d[g], b.call(c, a, g, d)) return a;
  }
});
Array.prototype.findIndex || (Array.prototype.findIndex = function (b, c) {
  if (null === this) throw new TypeError("Array.prototype.findIndex called on null or undefined");if ("function" !== typeof b) throw new TypeError("predicate must be a function");for (var d = Object(this), f = d.length >>> 0, a, g = 0; g < f; g++) {
    if (a = d[g], b.call(c, a, g, d)) return g;
  }return -1;
});
Array.prototype.includes || (Array.prototype.includes = function (b, c) {
  var d = Object(this),
      f = parseInt(d.length) || 0;if (0 === f) return !1;var a = parseInt(c) || 0;0 <= a || (a = f + a, 0 > a && (a = 0));for (var g; a < f;) {
    g = d[a];if (b === g || b !== b && g !== g) return !0;a++;
  }return !1;
});String.prototype.includes || (String.prototype.includes = function () {
  return -1 !== String.prototype.indexOf.apply(this, arguments);
});
String.prototype.endsWith || (String.prototype.endsWith = function (b, c) {
  var d = this.toString();if ("number" !== typeof c || !isFinite(c) || Math.floor(c) !== c || c > d.length) c = d.length;c -= b.length;d = d.indexOf(b, c);return -1 !== d && d === c;
});
var jsPanel = { version: "3.0.0 RC1.25", date: "2016-05-31 15:19", id: 0, ziBase: 100, zi: 100, modalcount: 0, autopositionSpacing: 5, pbTreshold: .556, lastbeforeclose: !1, template: '<div class="jsPanel">\n                <div class="jsPanel-hdr">\n                    <div class="jsPanel-headerbar">\n                        <div class="jsPanel-titlebar">\n                            <h3 class="jsPanel-title"></h3>\n                        </div>\n                        <div class="jsPanel-controlbar">\n                            <div class="jsPanel-btn jsPanel-btn-smallify"><span class="jsglyph jsglyph-chevron-up"></span></div>\n                            <div class="jsPanel-btn jsPanel-btn-smallifyrev"><span class="jsglyph jsglyph-chevron-down"></span></div>\n                            <div class="jsPanel-btn jsPanel-btn-minimize"><span class="jsglyph jsglyph-minimize"></span></div>\n                            <div class="jsPanel-btn jsPanel-btn-normalize"><span class="jsglyph jsglyph-normalize"></span></div>\n                            <div class="jsPanel-btn jsPanel-btn-maximize"><span class="jsglyph jsglyph-maximize"></span></div>\n                            <div class="jsPanel-btn jsPanel-btn-close"><span class="jsglyph jsglyph-close"></span></div>\n                        </div>\n                    </div>\n                    <div class="jsPanel-hdr-toolbar"></div>\n                </div>\n                <div class="jsPanel-content"></div>\n                <div class="jsPanel-ftr"></div>\n               </div>', replacementTemplate: '<div class="jsPanel-replacement">\n                            <div class="jsPanel-hdr">\n                                <div class="jsPanel-headerbar">\n                                    <div class="jsPanel-titlebar">\n                                        <h3 class="jsPanel-title"></h3>\n                                    </div>\n                                    <div class="jsPanel-controlbar">\n                                        <div class="jsPanel-btn jsPanel-btn-normalize"><span class="jsglyph jsglyph-normalize"></span></div>\n                                        <div class="jsPanel-btn jsPanel-btn-maximize"><span class="jsglyph jsglyph-maximize"></span></div>\n                                        <div class="jsPanel-btn jsPanel-btn-close"><span class="jsglyph jsglyph-close"></span></div>\n                                    </div>\n                                </div>\n                            </div>\n                          </div>',
  themes: "default primary info success warning danger".split(" "), tplHeaderOnly: '<div class="jsPanel">\n                        <div class="jsPanel-hdr">\n                            <div class="jsPanel-headerbar">\n                                <div class="jsPanel-titlebar">\n                                    <h3 class="jsPanel-title"></h3>\n                                </div>\n                                <div class="jsPanel-controlbar">\n                                    <div class="jsPanel-btn jsPanel-btn-close"><span class="jsglyph jsglyph-close"></span></div>\n                                </div>\n                            </div>\n                            <div class="jsPanel-hdr-toolbar"></div>\n                        </div>\n                    </div>',
  tplContentOnly: '<div class="jsPanel">\n                        <div class="jsPanel-content jsPanel-content-noheader jsPanel-content-nofooter"></div>\n                     </div>', activePanels: { list: [], getPanel: function getPanel(b) {
      return "string" === typeof b ? document.getElementById(b).jspanel.noop() : document.getElementById(this.list[b]).jspanel.noop();
    } }, closeOnEscape: !1, position: function position(b, c) {
    function d(a, b) {
      var c;if ((c = a.ownerDocument.defaultView) && c.getComputedStyle) return b = b.replace(/([A-Z])/g, "-$1").toLowerCase(), c.getComputedStyle(a, null).getPropertyValue(b);if (a.currentStyle) return b = b.replace(/\-(\w)/g, function (a, b) {
        return b.toUpperCase();
      }), c = a.currentStyle[b], /^\d+(em|pt|%|ex)?$/i.test(c) ? function (b) {
        var c = a.style.left,
            d = a.runtimeStyle.left;a.runtimeStyle.left = a.currentStyle.left;a.style.left = b || 0;b = a.style.pixelLeft + "px";a.style.left = c;a.runtimeStyle.left = d;return b;
      }(c) : c;
    }function f(a) {
      var b = {};u.includes(a) ? b.left = window.pageXOffset : v.includes(a) ? b.left = window.pageXOffset + document.documentElement.clientWidth / 2 : w.includes(a) ? b.left = window.pageXOffset + document.documentElement.clientWidth : b.left = window.pageXOffset;x.includes(a) ? b.top = window.pageYOffset : y.includes(a) ? b.top = window.pageYOffset + window.innerHeight / 2 : z.includes(a) ? b.top = window.pageYOffset + window.innerHeight : b.top = window.pageYOffset;return b;
    }function a(a) {
      var b = {},
          c = n(e.of);u.includes(a) ? b.left = c.left : v.includes(a) ? b.left = c.left + c.width / 2 : w.includes(a) ? b.left = c.left + c.width : b.left = c.left;x.includes(a) ? b.top = c.top : y.includes(a) ? b.top = c.top + c.height / 2 : z.includes(a) ? b.top = c.top + c.height : b.top = c.top;return b;
    }function g(a) {
      var b = {},
          c = p.getBoundingClientRect();u.includes(a) ? b.left = 0 : v.includes(a) ? b.left = c.width / 2 : w.includes(a) ? b.left = c.width : b.left = 0;x.includes(a) ? b.top = 0 : y.includes(a) ? b.top = c.height / 2 : z.includes(a) ? b.top = c.height : b.top = 0;return b;
    }function l(a) {
      var b = {},
          c = p.getBoundingClientRect(),
          d = document.querySelector(e.of).getBoundingClientRect(),
          h = d.left - c.left,
          c = d.top - c.top;u.includes(a) ? b.left = h : v.includes(a) ? b.left = h + d.width / 2 : w.includes(a) ? b.left = h + d.width : b.left = h;x.includes(a) ? b.top = c : y.includes(a) ? b.top = c + d.height / 2 : z.includes(a) ? b.top = c + d.height : b.top = c;return b;
    }function n(a) {
      a = a.jquery ? a[0].getBoundingClientRect() : "string" === typeof a ? document.querySelector(a).getBoundingClientRect() : a.getBoundingClientRect();return { width: Math.round(a.width), height: Math.round(a.height), left: Math.round(a.left + window.pageXOffset), top: Math.round(a.top + window.pageYOffset) };
    }var h,
        k,
        e,
        p,
        r = 0,
        t = 0,
        m,
        u = ["left-top", "left-center", "left-bottom"],
        v = ["center-top", "center", "center-bottom"],
        w = ["right-top", "right-center", "right-bottom"],
        x = ["left-top", "center-top", "right-top"],
        y = ["left-center", "center", "right-center"],
        z = ["left-bottom", "center-bottom", "right-bottom"];if ("string" === typeof c) {
      h = c.match(/\b[a-z]{4,6}-{1}[a-z]{3,6}\b/);k = c.match(/DOWN|UP|RIGHT|LEFT/);var q = c.match(/[+-]?\d+\.?\d*%?/g);c = $.isArray(h) ? { my: h[0], at: h[0] } : { my: "center", at: "center" };$.isArray(k) && (c.autoposition = k[0]);$.isArray(q) && (c.offsetX = q[0], 2 === q.length && (c.offsetY = q[1]));
    }e = Object.assign({ my: "center",
      at: "center", offsetX: 0, offsetY: 0, modify: !1, fixed: "true" }, c);h = "string" === typeof b ? document.querySelector(b) : b.jquery ? b[0] : b;p = h.parentElement;e.of || (p === document.body ? e.of = "window" : e.of = p);k = n(h);"string" === typeof e.offsetX && "%" === e.offsetX.slice(-1) ? e.offsetX = "window" === e.of ? window.innerWidth * (parseInt(e.offsetX, 10) / 100) : p.clientWidth * (parseInt(e.offsetX, 10) / 100) : "string" === typeof e.offsetX ? e.offsetX = parseFloat(e.offsetX) : $.isFunction(e.offsetX) && (e.offsetX = parseInt(e.offsetX.call(b, b)));"string" === typeof e.offsetY && "%" === e.offsetY.slice(-1) ? e.offsetY = "window" === e.of ? window.innerHeight * (parseInt(e.offsetY, 10) / 100) : p.clientHeight * (parseInt(e.offsetY, 10) / 100) : "string" === typeof e.offsetY ? e.offsetY = parseFloat(e.offsetY) : $.isFunction(e.offsetY) && (e.offsetY = parseInt(e.offsetY.call(b, b)));q = parseInt(d(p, "border-left-width"));u.includes(e.my) ? r = q : v.includes(e.my) ? r = k.width / 2 + q : w.includes(e.my) && (r = k.width + q);q = parseInt(d(p, "border-top-width"));x.includes(e.my) ? t = q : y.includes(e.my) ? t = k.height / 2 + q : z.includes(e.my) && (t = k.height + q);h.parentElement === document.body ? "window" === e.of ? (k = f(e.at), e.fixed ? (r = k.left - r + e.offsetX - window.pageXOffset, t = k.top - t + e.offsetY - window.pageYOffset) : (r = k.left - r + e.offsetX, t = k.top - t + e.offsetY)) : (k = a(e.at), r = k.left - r + e.offsetX, t = k.top - t + e.offsetY) : (k = "string" === typeof e.of ? document.querySelector(e.of) : e.of.jquery ? e.of[0] : e.of, k = p === k ? g(e.at) : l(e.at), r = k.left - r + e.offsetX, t = k.top - t + e.offsetY);if (e.autoposition) {
      k = [];q = this.autopositionSpacing;e.my === e.at && (m = e.my);h.setAttribute("data-autoposition", e.autoposition);$.isFunction(e.offsetX) || h.setAttribute("data-offsetx", e.offsetX);$.isFunction(e.offsetY) || h.setAttribute("data-offsety", e.offsetY);h.classList.add(m);m = document.getElementsByClassName(m);for (var A = 0; A < m.length; A++) {
        m[A].parentElement === p && k.push(m[A]);
      }if ("DOWN" === e.autoposition) for (m = 0; m < k.length - 1; m++) {
        t += k[m].getBoundingClientRect().height + q;
      } else if ("UP" === e.autoposition) for (m = 0; m < k.length - 1; m++) {
        t -= k[m].getBoundingClientRect().height + q;
      } else if ("RIGHT" === e.autoposition) for (m = 0; m < k.length - 1; m++) {
        r += k[m].getBoundingClientRect().width + q;
      } else if ("LEFT" === e.autoposition) for (m = 0; m < k.length - 1; m++) {
        r -= k[m].getBoundingClientRect().width + q;
      }
    }m = { left: r, top: t };"function" === typeof e.modify && (m = e.modify.call(m, m));h.style.position = "absolute";h.style.left = m.left + "px";h.style.top = m.top + "px";h.style.opacity = 1;"window" === e.of && e.fixed && p === document.body && (h.style.position = "fixed");return h;
  }, reposition: function reposition(b, c) {
    c = void 0 === c ? b.option.position : c;"minimized" !== b.data("status") && (0 < $(".jsPanel-connector", b).length && $(".jsPanel-connector", b).remove(), this.position(b, c), b.option.position = c);return b;
  }, addCustomTheme: function addCustomTheme(b) {
    this.themes.includes(b) || this.themes.push(b);
  }, hslToRgb: function hslToRgb(b, c, d) {
    if (0 === c) d = c = b = d;else {
      var f = function f(a, b, c) {
        0 > c && (c += 1);1 < c && --c;return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a;
      },
          a = .5 > d ? d * (1 + c) : d + c - d * c,
          g = 2 * d - a;d = f(g, a, b + 1 / 3);c = f(g, a, b);b = f(g, a, b - 1 / 3);
    }return [Math.round(255 * d), Math.round(255 * c), Math.round(255 * b)];
  }, rgbToHsl: function rgbToHsl(b, c, d) {
    b /= 255;c /= 255;d /= 255;var f = Math.max(b, c, d),
        a = Math.min(b, c, d),
        g,
        l = (f + a) / 2;if (f === a) g = a = 0;else {
      var n = f - a,
          a = .5 < l ? n / (2 - f - a) : n / (f + a);switch (f) {case b:
          g = (c - d) / n + (c < d ? 6 : 0);break;case c:
          g = (d - b) / n + 2;break;case d:
          g = (b - c) / n + 4;}g /= 6;
    }g *= 360;a = 100 * a + "%";l = 100 * l + "%";return { css: "hsl(" + g + "," + a + "," + l + ")", h: g, s: a, l: l };
  }, rgbToHex: function rgbToHex(b, c, d) {
    b = Number(b).toString(16);1 === b.length && (b = "0" + b);c = Number(c).toString(16);1 === c.length && (c = "0" + c);d = Number(d).toString(16);1 === d.length && (d = "0" + d);return "#" + b + c + d;
  }, perceivedBrightness: function perceivedBrightness(b) {
    b = this.color(b).rgb;
    return b.r / 255 * .2627 + b.g / 255 * .678 + b.b / 255 * .0593;
  }, lighten: function lighten(b, c) {
    var d = this.color(b).hsl,
        f = parseFloat(d.l);return "hsl(" + d.h + "," + d.s + "," + (f + (100 - f) * c + "%") + ")";
  }, darken: function darken(b, c) {
    var d = this.color(b).hsl,
        f = parseFloat(d.l);return "hsl(" + d.h + "," + d.s + "," + (f - f * c + "%") + ")";
  }, color: function color(b) {
    var c = b.toLowerCase(),
        d,
        f,
        a;b = {};d = /^rgba?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3}),?(0|1|0\.[0-9]{1,2}|\.[0-9]{1,2})?\)$/gi;f = /^hsla?\(([0-9]{1,3}),([0-9]{1,3}\%),([0-9]{1,3}\%),?(0|1|0\.[0-9]{1,2}|\.[0-9]{1,2})?\)$/gi;
    a = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgrey: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b",
      darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", grey: "808080",
      green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de",
      lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500",
      orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa",
      springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };a[c] && (c = a[c]);null !== c.match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/gi) ? (c = c.replace("#", ""), 1 === c.length % 2 ? (d = c.substr(0, 1).repeat(2), f = c.substr(1, 1).repeat(2), c = c.substr(2, 1).repeat(2), b.rgb = { r: parseInt(d, 16), g: parseInt(f, 16), b: parseInt(c, 16) }, b.hex = "#" + d + f + c) : (b.rgb = { r: parseInt(c.substr(0, 2), 16), g: parseInt(c.substr(2, 2), 16), b: parseInt(c.substr(4, 2), 16) }, b.hex = "#" + c), c = this.rgbToHsl(b.rgb.r, b.rgb.g, b.rgb.b), b.hsl = c, b.rgb.css = "rgb(" + b.rgb.r + "," + b.rgb.g + "," + b.rgb.b + ")") : c.match(d) ? (d = d.exec(c), b.rgb = { css: c, r: d[1], g: d[2], b: d[3] }, b.hex = this.rgbToHex(d[1], d[2], d[3]), c = this.rgbToHsl(d[1], d[2], d[3]), b.hsl = c) : c.match(f) ? (d = f.exec(c), c = d[1] / 360, f = d[2].substr(0, d[2].length - 1) / 100, a = d[3].substr(0, d[3].length - 1) / 100, c = this.hslToRgb(c, f, a), b.rgb = { css: "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")", r: c[0], g: c[1],
      b: c[2] }, b.hex = this.rgbToHex(b.rgb.r, b.rgb.g, b.rgb.b), b.hsl = { css: "hsl(" + d[1] + "," + d[2] + "," + d[3] + ")", h: d[1], s: d[2], l: d[3] }) : (b.hex = "#f5f5f5", b.rgb = { css: "rgb(245,245,245)", r: 245, g: 245, b: 245 }, b.hsl = { css: "hsl(0,0%,96.08%)", h: 0, s: "0%", l: "96.08%" });return b;
  }, calcColors: function calcColors(b) {
    var c = this.color(b),
        d = this.lighten(b, .81),
        f = this.darken(b, .5),
        a,
        g,
        l;this.perceivedBrightness(b) <= this.pbTreshold ? a = "#ffffff" : a = "#000000";this.perceivedBrightness(d) <= this.pbTreshold ? g = "#ffffff" : g = "#000000";this.perceivedBrightness(f) <= this.pbTreshold ? l = "#000000" : l = "#ffffff";return [c.hsl.css, d, f, a, g, l];
  }, insertModalBackdrop: function insertModalBackdrop(b) {
    var c;0 === $(".jsPanel-modal-backdrop").length ? c = "rgba(0,0,0,0.65)" : c = "rgba(0,0,0,0.15)";b = b ? '<div id="jsPanel-modal-backdrop-' + b.attr("id") + '" class="jsPanel-modal-backdrop" style="background:' + c + ";z-index:" + (this.modalcount + 9999) + '"></div>' : '<div id="jsPanel-modal-backdrop" class="jsPanel-modal-backdrop" style="background:' + c + ";z-index:" + (this.modalcount + 9999) + '"></div>';$("body").append(b);this.modalcount += 1;
  }, addConnector: function addConnector(b) {
    function c(a) {
      if (a.match(/top|topleft|topright|lefttopcorner|righttopcorner|leftbottom|rightbottom/)) return "none" !== b.footer.css("display") ? n : 0 < parseFloat(b.option.contentSize.height) ? l : h;
    }function d(a) {
      if (a.match(/bottom|bottomleft|bottomright|leftbottomcorner|rightbottomcorner/)) {
        if (!b.option.headerRemove) return h;if (0 < parseFloat(b.option.contentSize.height)) return l;if ("none" !== b.footer.css("display")) return n;
      }
    }function f(a) {
      if (a.match(/lefttop|righttop/)) return b.option.headerRemove ? l : h;
    }function a(a) {
      if (a.match(/left|right/)) {
        if (0 < parseFloat(b.option.contentSize.height)) return l;if (!b.option.headerRemove) return h;if ("none" !== b.footer.css("display")) return n;
      }
    }var g = b.option.paneltype.connectorBG || null,
        l = b.content.css("background-color"),
        n = b.footer.css("background-color"),
        h = b.css("background-color");b.hasClass("jsPanel-tooltip-top") ? (b.append("<div class='jsPanel-connector jsPanel-connector-top'>"), $(".jsPanel-connector-top", b).css("border-top-color", g || c("top")), b.option.position.offsetY = b.option.position.offsetY - 10 || -10) : b.hasClass("jsPanel-tooltip-bottom") ? (b.append("<div class='jsPanel-connector jsPanel-connector-bottom'>"), $(".jsPanel-connector-bottom", b).css("border-bottom-color", g || d("bottom")), b.option.position.offsetY = b.option.position.offsetY + 10 || 10) : b.hasClass("jsPanel-tooltip-left") ? (b.append("<div class='jsPanel-connector jsPanel-connector-left'>"), $(".jsPanel-connector-left", b).css("border-left-color", g || a("left")), b.option.position.offsetX = b.option.position.offsetX - 12 || -12) : b.hasClass("jsPanel-tooltip-right") ? (b.append("<div class='jsPanel-connector jsPanel-connector-right'>"), $(".jsPanel-connector-right", b).css("border-right-color", g || a("right")), b.option.position.offsetX = b.option.position.offsetX + 12 || 12) : b.hasClass("jsPanel-tooltip-lefttopcorner") ? (b.append("<div class='jsPanel-connector jsPanel-connector-lefttopcorner'>"), $(".jsPanel-connector-lefttopcorner", b).css("background-color", g || c("lefttopcorner"))) : b.hasClass("jsPanel-tooltip-righttopcorner") ? (b.append("<div class='jsPanel-connector jsPanel-connector-righttopcorner'>"), $(".jsPanel-connector-righttopcorner", b).css("background-color", g || c("righttopcorner"))) : b.hasClass("jsPanel-tooltip-rightbottomcorner") ? (b.append("<div class='jsPanel-connector jsPanel-connector-rightbottomcorner'>"), $(".jsPanel-connector-rightbottomcorner", b).css("background-color", g || d("rightbottomcorner"))) : b.hasClass("jsPanel-tooltip-leftbottomcorner") ? (b.append("<div class='jsPanel-connector jsPanel-connector-leftbottomcorner'>"), $(".jsPanel-connector-leftbottomcorner", b).css("background-color", g || d("leftbottomcorner"))) : b.hasClass("jsPanel-tooltip-lefttop") ? (b.append("<div class='jsPanel-connector jsPanel-connector-lefttop'>"), $(".jsPanel-connector-lefttop", b).css("border-left-color", g || f("lefttop")), b.option.position.offsetX = b.option.position.offsetX - 12 || -12) : b.hasClass("jsPanel-tooltip-leftbottom") ? (b.append("<div class='jsPanel-connector jsPanel-connector-leftbottom'>"), $(".jsPanel-connector-leftbottom", b).css("border-left-color", g || c("leftbottom")), b.option.position.offsetX = b.option.position.offsetX - 12 || -12) : b.hasClass("jsPanel-tooltip-topleft") ? (b.append("<div class='jsPanel-connector jsPanel-connector-topleft'>"), $(".jsPanel-connector-topleft", b).css("border-top-color", g || c("topleft")), b.option.position.offsetY = b.option.position.offsetY - 10 || -10) : b.hasClass("jsPanel-tooltip-topright") ? (b.append("<div class='jsPanel-connector jsPanel-connector-topright'>"), $(".jsPanel-connector-topright", b).css("border-top-color", g || c("topright")), b.option.position.offsetY = b.option.position.offsetY - 10 || -10) : b.hasClass("jsPanel-tooltip-righttop") ? (b.append("<div class='jsPanel-connector jsPanel-connector-righttop'>"), $(".jsPanel-connector-righttop", b).css("border-right-color", g || f("righttop")), b.option.position.offsetX = b.option.position.offsetX + 12 || 12) : b.hasClass("jsPanel-tooltip-rightbottom") ? (b.append("<div class='jsPanel-connector jsPanel-connector-rightbottom'>"), $(".jsPanel-connector-rightbottom", b).css("border-right-color", g || c("rightbottom")), b.option.position.offsetX = b.option.position.offsetX + 12 || 12) : b.hasClass("jsPanel-tooltip-bottomleft") ? (b.append("<div class='jsPanel-connector jsPanel-connector-bottomleft'>"), $(".jsPanel-connector-bottomleft", b).css("border-bottom-color", g || d("bottomleft")), b.option.position.offsetY = b.option.position.offsetY + 10 || 10) : b.hasClass("jsPanel-tooltip-bottomright") && (b.append("<div class='jsPanel-connector jsPanel-connector-bottomright'>"), $(".jsPanel-connector-bottomright", b).css("border-bottom-color", g || d("bottomright")), b.option.position.offsetY = b.option.position.offsetY + 10 || 10);
  }, setTrigger: function setTrigger(b) {
    return "string" === typeof b.of ? document.querySelector(b.of) : b.of.jquery ? b.of[0] : b.of;
  }, closeTooltips: function closeTooltips() {
    $(".jsPanel-tooltip").each(function (b, c) {
      c.jspanel && c.jspanel.close();
    });
  }, setTooltipClass: function setTooltipClass(b) {
    var c = b.option.position;"center-bottom" === c.my && "center-top" === c.at ? b.addClass("jsPanel-tooltip-top") : "left-bottom" === c.my && "right-top" === c.at ? b.addClass("jsPanel-tooltip-righttopcorner") : "left-center" === c.my && "right-center" === c.at ? b.addClass("jsPanel-tooltip-right") : "left-top" === c.my && "right-bottom" === c.at ? b.addClass("jsPanel-tooltip-rightbottomcorner") : "center-top" === c.my && "center-bottom" === c.at ? b.addClass("jsPanel-tooltip-bottom") : "right-top" === c.my && "left-bottom" === c.at ? b.addClass("jsPanel-tooltip-leftbottomcorner") : "right-center" === c.my && "left-center" === c.at ? b.addClass("jsPanel-tooltip-left") : "right-bottom" === c.my && "left-top" === c.at ? b.addClass("jsPanel-tooltip-lefttopcorner") : "center" === c.my && "center" === c.at ? b.addClass("jsPanel-tooltip-center") : "right-top" === c.my && "left-top" === c.at ? b.addClass("jsPanel-tooltip-lefttop") : "right-bottom" === c.my && "left-bottom" === c.at ? b.addClass("jsPanel-tooltip-leftbottom") : "left-bottom" === c.my && "left-top" === c.at ? b.addClass("jsPanel-tooltip-topleft") : "right-bottom" === c.my && "right-top" === c.at ? b.addClass("jsPanel-tooltip-topright") : "left-top" === c.my && "right-top" === c.at ? b.addClass("jsPanel-tooltip-righttop") : "left-bottom" === c.my && "right-bottom" === c.at ? b.addClass("jsPanel-tooltip-rightbottom") : "left-top" === c.my && "left-bottom" === c.at ? b.addClass("jsPanel-tooltip-bottomleft") : "right-top" === c.my && "right-bottom" === c.at && b.addClass("jsPanel-tooltip-bottomright");
  }, setTooltipMode: function setTooltipMode(b, c) {
    "semisticky" === b.option.paneltype.mode ? b.hover(function () {
      return $.noop();
    }, function () {
      b.close();$(c).removeClass("hasTooltip");
    }) : "sticky" === b.option.paneltype.mode ? $.noop() : $(c).mouseout(function () {
      b.close();$(c).removeClass("hasTooltip");
    });
  }, ajax: function ajax(b) {
    var c = b.option.contentAjax;$.ajax(c).done(function (d, f, a) {
      c.autoload && b.content.append(d);
      $.isFunction(c.done) && c.done.call(b, d, f, a, b);
    }).fail(function (d, f, a) {
      $.isFunction(c.fail) && c.fail.call(b, d, f, a, b);
    }).always(function (d, f, a) {
      $.isFunction(c.always) && c.always.call(b, d, f, a, b);
    }).then(function (d, f, a) {
      c.then && $.isArray(c.then) && $.isFunction(c.then[0]) && c.then[0].call(b, d, f, a, b);
    }, function (d, f, a) {
      $.isArray(c.then) && $.isFunction(c.then[1]) && c.then[1].call(b, d, f, a, b);
    });b.data("ajaxURL", c.url);
  }, iframe: function iframe(b) {
    var c = $("<iframe></iframe>"),
        d = b.option.contentIframe;d.srcdoc && (c.prop("srcdoc", d.srcdoc), b.data("iframeDOC", d.srcdoc));d.src && (c.prop("src", d.src), b.data("iframeSRC", d.src));"auto" === b.option.contentSize.width || d.width ? c.prop("width", d.width) : c.css("width", "100%");"auto" === b.option.contentSize.height || d.height ? c.prop("height", d.height) : c.css("height", "100%");d.name && c.prop("name", d.name);d.sandbox && c.prop("sandox", d.sandbox);d.id && c.prop("id", d.id);$.isPlainObject(d.style) && c.css(d.style);"string" === typeof d.classname ? c.addClass(d.classname) : $.isFunction(d.classname) && c.addClass(d.classname());
    b.content.append(c);
  }, contentReload: function contentReload(b) {
    b.option.content ? b.content.empty().append(b.option.content) : b.option.contentAjax ? (b.content.empty(), this.ajax(b)) : b.option.contentIframe && (b.content.empty(), this.iframe(b));return b;
  }, contentResize: function contentResize(b) {
    var c,
        d = parseInt(b.css("border-top-width"), 10) + parseInt(b.css("border-bottom-width"), 10);b.footer.hasClass("active") ? c = b.header.outerHeight() + b.footer.outerHeight() : c = b.header.outerHeight();b.content.css({ height: b.outerHeight() - c - d });return b;
  }, configIconfont: function configIconfont(b) {
    var c = "close maximize normalize minimize smallify smallifyrev".split(" "),
        d = "remove fullscreen resize-full minus chevron-up chevron-down".split(" "),
        f = "times arrows-alt expand minus chevron-up chevron-down".split(" "),
        a = b.option.headerControls.iconfont,
        g = b.header.headerbar;"bootstrap" === a || "glyphicon" === a ? (c.forEach(function (a, b) {
      $(".jsPanel-btn-" + a + " span", g).removeClass().addClass("glyphicon glyphicon-" + d[b]);
    }), $(".jsPanel-headerbar .jsPanel-btn", b).css("padding-top", "4px")) : "font-awesome" === a && c.forEach(function (a, b) {
      $(".jsPanel-btn-" + a + " span", g).removeClass().addClass("fa fa-" + f[b]);
    });
  }, headerControl: function headerControl(b, c, d) {
    var f = b.header.headerbar,
        a = b[0];"disable" === d ? "removed" !== a.getAttribute("data-btn" + c) && (a.setAttribute("data-btn" + c, "disabled"), $(".jsPanel-btn-" + c, f).css({ pointerEvents: "none", opacity: .4, cursor: "default" })) : "enable" === d ? "removed" !== a.getAttribute("data-btn" + c) && (a.setAttribute("data-btn" + c, "enabled"), $(".jsPanel-btn-" + c, f).css({ pointerEvents: "auto", opacity: 1, cursor: "pointer" })) : "remove" === d && "close" !== c && (a.setAttribute("data-btn" + c, "removed"), $(".jsPanel-btn-" + c, f).remove());return b;
  }, hideControls: function hideControls(b, c) {
    var d = c.header.headerbar;$("div", d).css("display", "flex");$(b, d).css("display", "none");
  }, headerTitle: function headerTitle(b, c) {
    return c ? (b.header.title.empty().append(c), b) : b.header.title.html();
  }, configToolbar: function configToolbar(b, c, d) {
    var f, a;b.forEach(function (b) {
      "object" === (typeof b === "undefined" ? "undefined" : _typeof(b)) && (f = $(b.item), "string" === typeof b.btntext && f.append(b.btntext), "string" === typeof b.btnclass && f.addClass(b.btnclass), c.append(f), $.isFunction(b.callback) && (a = b.event || "click", f.on(a, d, b.callback)));
    });
  }, toolbar: function toolbar(b, c, d) {
    "header" === c ? (b.header.toolbar.addClass("active"), $.isArray(d) ? this.configToolbar(d, b.header.toolbar, b) : $.isFunction(d) ? b.header.toolbar.append(d(b.header)) : b.header.toolbar.append(d)) : "footer" === c && (b.content.removeClass("jsPanel-content-nofooter"), b.footer.addClass("active"), $.isArray(d) ? this.configToolbar(d, b.footer, b) : $.isFunction(d) ? b.footer.append(d(b.footer)) : b.footer.append(d));this.contentResize(b);
    return b;
  }, closeChildpanels: function closeChildpanels(b) {
    $(".jsPanel", b).each(function (b, d) {
      d.jspanel.close();
    });return b;
  }, dblclickhelper: function dblclickhelper(b, c) {
    if ("string" === typeof b) if ("maximize" === b || "normalize" === b) "normalized" === c.data("status") ? c.maximize() : c.normalize();else if ("minimize" === b || "smallify" === b || "close" === b) c[b]();
  }, exportPanels: function exportPanels(b, c) {
    b = void 0 === b ? ".jsPanel" : b;c = void 0 === c ? "jspanels" : c;var d,
        f,
        a,
        g,
        l,
        n,
        h,
        k = [],
        e,
        p = $(".jsPanel").not(".jsPanel-tooltip, .jsPanel-hint, .jsPanel-modal").filter(b);p.each(function (a, b) {
      "normalized" !== $(b).data("status") && $(".jsPanel-btn-normalize", b).trigger("click");
    });p.each(function (b, c) {
      h = $(c).data("container");d = $(c).offset();f = $(c).position();"body" === h.toLowerCase() ? (a = Math.floor(d.top - $(window).scrollTop()), g = Math.floor(d.left - $(window).scrollLeft())) : (a = Math.floor(f.top), g = Math.floor(f.left));l = $(c).css("width");n = $(".jsPanel-content", c).css("height");e = { status: $(c).data("status"), id: $(c).prop("id"), headerTitle: $(".jsPanel-title", c).html(), custom: $(c).data("custom"),
        content: $(c).data("content"), contentSize: { width: l, height: n }, position: { my: "left-top", at: "left-top", offsetX: g, offsetY: a } };$(c).data("ajaxURL") && (e.contentAjax = { url: $(c).data("ajaxURL"), autoload: !0 });if ($(c).data("iframeDOC") || $(c).data("iframeSRC")) e.contentIframe = { src: $(c).data("iframeSRC") || "", srcdoc: $(c).data("iframeDOC") || "" };k.push(e);switch (e.status) {case "minimized":
          $(".jsPanel-btn-minimize", c).trigger("click");break;case "maximized":
          $(".jsPanel-btn-maximize", c).trigger("click");break;case "smallified":
          $(".jsPanel-btn-smallify", c).trigger("click");break;case "smallifiedMax":
          $(".jsPanel-btn-smallify", c).trigger("click");}
    });window.localStorage.setItem(c, JSON.stringify(k));return k;
  }, importPanels: function importPanels(b, c) {
    var d = JSON.parse(localStorage[void 0 === c ? "jspanels" : c]),
        f = b["default"] || {},
        a;d.forEach(function (c) {
      a = "string" === typeof c.custom.config ? $.extend(!0, {}, f, b[c.custom.config], c) : $.extend(!0, {}, f, c);$.jsPanel(a);
    });
  }, resize: function resize(b, c, d) {
    if ("minimized" !== b.data("status")) {
      if ($.isFunction(b.option.onbeforeresize) && !1 === b.option.onbeforeresize.call(b, b)) return b;c && null !== c || (c = b.content.css("width") + b.content.css("border-left-width"));b.css("width", c);d && null !== d && b.css("height", d);b.contentResize();$.isFunction(b.option.onresized) && b.option.onresized.call(b, b);
    }return b;
  }, setZi: function setZi(b) {
    b.hasClass("jsPanel-modal") || (this.zi += 1) > b.css("z-index") && b.css("z-index", this.zi);
  }, resetZis: function resetZis() {
    var b = [];$(".jsPanel:not(.jsPanel-modal):not(.jsPanel-hint)").each(function (c, d) {
      b.push(d);
    });b.sort(function (b, d) {
      return $(b).css("z-index") - $(d).css("z-index");
    }).forEach(function (b, d) {
      (jsPanel.zi += 1) > $(b).css("z-index") && $(b).css("z-index", jsPanel.ziBase + d);
    });this.zi = this.ziBase - 1 + b.length;
  }, updateCachedData: function updateCachedData(b) {
    var c = window.getComputedStyle(b[0], null);b.cachedData.top = c.getPropertyValue("top");b.cachedData.left = c.getPropertyValue("left");b.cachedData.width = c.getPropertyValue("width");b.cachedData.height = c.getPropertyValue("height");
  }, getTopmostPanel: function getTopmostPanel() {
    var b = [];$(".jsPanel:not(.jsPanel-tooltip):not(.jsPanel-hint)").each(function (c, d) {
      b.push(d);
    });b.sort(function (b, d) {
      return $(d).css("z-index") - $(b).css("z-index");
    });return b[0].getAttribute("id");
  } };
(function (b) {
  b.jsPanel = function (c) {
    var d;c = c || {};var f = b.extend(!0, {}, c.config || {}, c),
        a = b(c.template || jsPanel.template),
        g,
        l;"tooltip" === f.paneltype && (f.paneltype = { tooltip: !0 });f.paneltype ? "modal" === f.paneltype ? a.option = b.extend(!0, {}, b.jsPanel.defaults, b.jsPanel.modaldefaults, f) : f.paneltype.tooltip ? a.option = b.extend(!0, {}, b.jsPanel.defaults, b.jsPanel.tooltipdefaults, f) : "hint" === f.paneltype && (a.option = b.extend(!0, {}, b.jsPanel.defaults, b.jsPanel.hintdefaults, f)) : a.option = b.extend(!0, {}, b.jsPanel.defaults, f);if (a.option.paneltype.tooltip && (g = jsPanel.setTrigger(a.option.position), b(g).hasClass("hasTooltip"))) return !1;var n = "container contentAjax contentIframe contentOverflow contentSize footerToolbar headerControls headerRemove headerTitle headerToolbar".split(" ");"selector ajax iframe overflow size toolbarFooter controls removeHeader title toolbarHeader".split(" ").forEach(function (b, c) {
      a.option[b] && (a.option[n[c]] = a.option[b]);
    });switch (a.option.theme) {case "light":
        a.option.theme = "gainsboro";break;
      case "medium":
        a.option.theme = "silver";break;case "dark":
        a.option.theme = "gray";break;case "autumngreen":
        a.option.theme = "#5A521B";break;case "autumnbrown":
        a.option.theme = "#823E1D";break;case "autumnred":
        a.option.theme = "#852228";}if (a.option.bootstrap) switch (a.option.bootstrap) {case "default":
        a.option.theme = "bootstrap-default";break;case "primary":
        a.option.theme = "bootstrap-primary";break;case "info":
        a.option.theme = "bootstrap-info";break;case "success":
        a.option.theme = "bootstrap-success";break;case "warning":
        a.option.theme = "bootstrap-warning";break;case "danger":
        a.option.theme = "bootstrap-danger";}a.option.load.url && (a.option.contentAjax = { url: a.option.load.url, autoload: !0, data: a.option.load.data || void 0, done: a.option.load.complete || void 0 });a.option.panelstatus && ("smallifiedMax" === a.option.panelstatus ? a.option.setstatus = "maximize smallify" : a.option.setstatus = a.option.panelstatus);a.option.headerControls.buttons && (a.option.headerControls.controls = a.option.headerControls.buttons);"string" === typeof a.option.id ? d = a.option.id : b.isFunction(a.option.id) && (a.option.id = d = a.option.id());if (0 < b("#" + d).length) return console.warn("jsPanel Error: No jsPanel created - id attribute passed with option.id already exists in document"), !1;a.attr("id", d);a.data("custom", a.option.custom);a.header = b(".jsPanel-hdr", a);a.header.headerbar = b(".jsPanel-headerbar", a.header);a.header.title = b(".jsPanel-title", a.header.headerbar);a.header.controls = b(".jsPanel-controlbar", a.header.headerbar);a.header.toolbar = b(".jsPanel-hdr-toolbar", a.header);a.content = b(".jsPanel-content", a);a.footer = b(".jsPanel-ftr", a);a.data("status", "initialized");a.cachedData = {};a.toolbarAdd = function (b, c) {
      c = void 0 === c ? [] : c;return jsPanel.toolbar(a, void 0 === b ? "header" : b, c);
    };a.close = function () {
      b(document).trigger("jspanelbeforeclose", d);if (b.isFunction(a.option.onbeforeclose) && !1 === a.option.onbeforeclose.call(a, a)) return a;var c = a.option.position;if (c.autoposition || "string" === typeof c && c.match(/DOWN|RIGHT|UP|LEFT/)) {
        var c = b("#" + d).parent(),
            f = document.getElementById(d).className.match(/left-top|center-top|right-top|left-center|center|right-center|left-bottom|center-bottom|right-bottom/);
        f && (jsPanel.lastbeforeclose = { parent: c, "class": f[0] });
      }a.closeChildpanels().remove();c = jsPanel.activePanels.list.findIndex(function (a) {
        return a === d;
      });-1 < c && jsPanel.activePanels.list.splice(c, 1);b("#" + d + "-min").remove();"modal" === a.option.paneltype && b("#jsPanel-modal-backdrop-" + a.attr("id")).remove();a.option.paneltype.tooltip && b(g).removeClass("hasTooltip");b(document).trigger("jspanelclosed", d);b(document).trigger("jspanelstatuschange", d);var e, p;jsPanel.lastbeforeclose && (e = jsPanel.lastbeforeclose.parent, e = b("." + jsPanel.lastbeforeclose["class"], e), p = jsPanel.lastbeforeclose["class"]);e && (e.each(function (a, c) {
        b(c).removeClass(p);
      }), e.each(function (a, b) {
        var c = b.getAttribute("data-autoposition"),
            d = b.getAttribute("data-offsetx"),
            h = b.getAttribute("data-offsety");jsPanel.position(b, { my: p, at: p, autoposition: c, offsetX: d, offsetY: h });
      }));jsPanel.lastbeforeclose = !1;b.isFunction(a.option.onclosed) && a.option.onclosed.call(a, a);jsPanel.resetZis();
    };a.closeChildpanels = function () {
      return jsPanel.closeChildpanels(a);
    };a.contentReload = function () {
      return jsPanel.contentReload(a);
    };a.contentResize = function () {
      return jsPanel.contentResize(a);
    };a.headerControl = function (b, c) {
      c = void 0 === c ? "enable" : c;b ? jsPanel.headerControl(a, b, c) : ["close", "maximize", "minimize", "normalize", "smallify"].forEach(function (b) {
        jsPanel.headerControl(a, b, c);
      });return a;
    };a.headerTitle = function (b) {
      return jsPanel.headerTitle(a, b);
    };a.front = function (c) {
      if (!b(c).hasClass("jsglyph-close") && !b(c).hasClass("jsglyph-minimize")) return a.css("z-index", jsPanel.setZi(a)), jsPanel.resetZis(), b(document).trigger("jspanelfronted", d), b.isFunction(a.option.onfronted) && !1 !== a.option.onfronted.call(a, a) && a.option.onfronted.call(a, a), a;
    };a.normalize = function () {
      if ("normalized" === a.data("status")) return a;b(document).trigger("jspanelbeforenormalize", d);if (b.isFunction(a.option.onbeforenormalize) && !1 === a.option.onbeforenormalize.call(a, a)) return a;a.css({ left: a.cachedData.left, top: a.cachedData.top, width: a.cachedData.width, height: a.cachedData.height, zIndex: function zIndex() {
          jsPanel.setZi(a);
        }, overflow: "visible" }).data("status", "normalized").contentResize();jsPanel.hideControls(".jsPanel-btn-normalize, .jsPanel-btn-smallifyrev", a);b("#" + a.prop("id") + "-min").remove();b(document).trigger("jspanelnormalized", d);b(document).trigger("jspanelstatuschange", d);b.isFunction(a.option.onnormalized) && a.option.onnormalized.call(a, a);return a;
    };a.maximize = function () {
      var c = a.option.maximizedMargin,
          f = a[0].parentNode;if ("maximized" === a.data("status")) return a;"normalized" === a.data("status") && jsPanel.updateCachedData(a);b(document).trigger("jspanelbeforemaximize", d);if (b.isFunction(a.option.onbeforemaximize) && !1 === a.option.onbeforemaximize.call(a, a)) return a;a.css("overflow", "visible");f === document.body ? (a.css({ width: document.documentElement.clientWidth - c.left - c.right + "px", height: document.documentElement.clientHeight - c.top - c.bottom + "px", left: c.left + "px", top: c.top + "px" }), !1 === a.option.position.fixed && a.css({ left: window.pageXOffset + c.left + "px", top: window.pageYOffset + c.top + "px" })) : a.css({ width: f.clientWidth - c.left - c.right + "px", height: f.clientHeight - c.top - c.bottom + "px", left: c.left + "px", top: c.top + "px" });a.contentResize().data("status", "maximized").css("z-index", jsPanel.setZi(a));jsPanel.hideControls(".jsPanel-btn-maximize, .jsPanel-btn-smallifyrev", a);b("#" + a.prop("id") + "-min").remove();b(document).trigger("jspanelmaximized", d);b(document).trigger("jspanelstatuschange", d);b.isFunction(a.option.onmaximized) && a.option.onmaximized.call(a, a);return a;
    };a.minimize = function () {
      if ("minimized" === a.data("status")) return a;b(document).trigger("jspanelbeforeminimize", d);
      if (b.isFunction(a.option.onbeforeminimize) && !1 === a.option.onbeforeminimize.call(a, a)) return a;var c = a.header.headerbar.css("color"),
          f;f = a.hasClass("panel") ? "transparent" === a.header.css("background-color") ? a.css("background-color") : a.header.css("background-color") : a.css("background-color");"normalized" === a.data("status") && jsPanel.updateCachedData(a);var e = b(jsPanel.replacementTemplate);e.left = a.css("left");a.css("left", "-9999px").data("status", "minimized");e.css({ backgroundColor: f }).prop("id", a.prop("id") + "-min").find("h3").css({ color: c }).html(a.headerTitle());b(".jsPanel-btn span", e).css({ color: c });c = b(a.option.container).closest(".jsPanel-content");c.length ? (b(".jsPanel-minimized-box").length || b(c[0]).append("<div class='jsPanel-minimized-box'>"), b(".jsPanel-minimized-box").append(e)) : b("#jsPanel-replacement-container").append(e);b(document).trigger("jspanelminimized", d);b(document).trigger("jspanelstatuschange", d);b.isFunction(a.option.onminimized) && a.option.onminimized.call(a, a);b(".jsPanel-btn-normalize", e).css("display", "block").click(function () {
        a.css("left", e.left);e.remove();b(".jsPanel-btn-normalize", a).trigger("click");
      });"disabled" === a[0].dataset.btnnormalize ? b(".jsPanel-btn-normalize", e).css({ pointerEvents: "none", opacity: .5, cursor: "default" }) : "removed" === a[0].dataset.btnnormalize && b(".jsPanel-btn-normalize", e).remove();b(".jsPanel-btn-maximize", e).click(function () {
        a.css("left", e.left);e.remove();b(".jsPanel-btn-maximize", a).trigger("click");
      });"disabled" === a[0].dataset.btnmaximize ? b(".jsPanel-btn-maximize", e).css({ pointerEvents: "none", opacity: .5, cursor: "default" }) : "removed" === a[0].dataset.btnmaximize && b(".jsPanel-btn-maximize", e).remove();b(".jsPanel-btn-close", e).click(function () {
        e.remove();a.close();
      });"disabled" === a[0].dataset.btnclose && b(".jsPanel-btn-close", e).css({ pointerEvents: "none", opacity: .5, cursor: "default" });return a;
    };a.reposition = function (b) {
      return jsPanel.reposition(a, b);
    };a.resize = function (b, c) {
      return jsPanel.resize(a, b, c);
    };a.smallify = function () {
      "normalized" === a.data("status") || "maximized" === a.data("status") ? "smallified" !== a.data("status") && "smallifiedMax" !== a.data("status") && (a.smallify.height = a.outerHeight(), a.css("overflow", "hidden"), a.animate({ height: a.header.headerbar.outerHeight() + "px" }), "maximized" === a.data("status") ? (jsPanel.hideControls(".jsPanel-btn-maximize, .jsPanel-btn-smallify", a), a.data("status", "smallifiedMax"), b(document).trigger("jspanelsmallifiedmax", d), b.isFunction(a.option.onsmallified) && a.option.onsmallified.call(a, a)) : (jsPanel.hideControls(".jsPanel-btn-normalize, .jsPanel-btn-smallify", a), a.data("status", "smallified"), b(document).trigger("jspanelsmallified", d)), b(document).trigger("jspanelstatuschange", d), b.isFunction(a.option.onsmallified) && a.option.onsmallified.call(a, a)) : "minimized" !== a.data("status") && (a.css("overflow", "visible"), a.animate({ height: a.smallify.height }), "smallified" === a.data("status") ? (jsPanel.hideControls(".jsPanel-btn-normalize, .jsPanel-btn-smallifyrev", a), a.data("status", "normalized"), b(document).trigger("jspanelnormalized", d), b(document).trigger("jspanelstatuschange", d), b.isFunction(a.option.onnormalized) && a.option.onnormalized.call(a, a)) : (jsPanel.hideControls(".jsPanel-btn-maximize, .jsPanel-btn-smallifyrev", a), a.data("status", "maximized"), b(document).trigger("jspanelmaximized", d), b(document).trigger("jspanelstatuschange", d), b.isFunction(a.option.onmaximized) && a.option.onmaximized.call(a, a)), b.isFunction(a.option.onunsmallified) && a.option.onunsmallified.call(a, a));a.css("z-index", jsPanel.setZi(a));return a;
    };a.setTheme = function (c, d) {
      c = void 0 === c ? a.option.theme.toLowerCase().replace(/ /g, "") : c;c = c.toLowerCase().replace(/ /g, "");var e = [],
          f,
          g,
          l,
          m;jsPanel.themes.forEach(function (b, c, d) {
        a.removeClass("panel card card-inverse jsPanel-theme-" + b + "  panel-" + b + " card-" + b);
      });a.header.removeClass("panel-heading").title.removeClass("panel-title");a.content.removeClass("panel-body").css("border-top-color", "");a.footer.removeClass("panel-footer card-footer");a.css("background", "").content.css({ borderTop: "", backgroundColor: "", color: "" });a.css({ borderWidth: "", borderStyle: "", borderColor: "" });b(".jsPanel-hdr *", a).css({ color: "" });a.header.toolbar.css({ boxShadow: "", width: "", marginLeft: "" });c.endsWith("filled") ? (e[1] = "filled", e[0] = c.substr(0, c.length - 6)) : c.endsWith("filledlight") ? (e[1] = "filledlight", e[0] = c.substr(0, c.length - 11)) : (e[1] = "", e[0] = c);e[0].match("-") && (f = e[0].split("-"), g = !0);g ? (a.addClass("panel panel-" + f[1]).addClass("card card-inverse card-" + f[1]).header.addClass("panel-heading").title.addClass("panel-title"), a.content.addClass("panel-body").css("border-top-color", function () {
        return a.header.css("border-top-color");
      }), a.footer.addClass("panel-footer card-footer"), m = "transparent" === b(".panel-heading", a).css("background-color") ? a.css("background-color").replace(/\s+/g, "") : b(".panel-heading", a).css("background-color").replace(/\s+/g, ""), f = jsPanel.calcColors(m), b("*", a.header).css("color", f[3]), a.option.headerToolbar ? a.header.toolbar.css({ boxShadow: "0 0 1px " + f[3] + " inset", width: "calc(100% + 4px)", marginLeft: "-2px" }) : a.content.css({ borderTop: "1px solid " + f[3] }), "filled" === e[1] ? a.content.css({ backgroundColor: m, color: f[3] }) : "filledlight" === e[1] && a.content.css({ backgroundColor: f[1], color: "#000000" })) : jsPanel.themes.includes(e[0]) ? (a.addClass("jsPanel-theme-" + e[0]), "filled" === e[1] ? a.content.css("background", "").addClass("jsPanel-content-filled") : "filledlight" === e[1] && a.content.css("background", "").addClass("jsPanel-content-filledlight"), a.option.headerToolbar || a.content.css({ borderTop: "1px solid " + a.header.title.css("color") })) : (l = jsPanel.calcColors(e[0]), a.css("background-color", l[0]), b(".jsPanel-hdr *", a).css({ color: l[3] }), a.option.headerToolbar ? a.header.toolbar.css({ boxShadow: "0 0 1px " + l[3] + " inset", width: "calc(100% + 4px)", marginLeft: "-2px" }) : a.content.css({ borderTop: "1px solid " + l[3] }), "filled" === e[1] ? a.content.css({ "background-color": l[0], color: l[3] }) : "filledlight" === e[1] && a.content.css({ "background-color": l[1] }));a.option.border ? (f = a.option.border.split(" "), a.css({ "border-width": f[0], "border-style": f[1] }), g ? a.css("border-color", m) : jsPanel.themes.includes(e[0]) || a.css("border-color", l[0])) : a.css({ borderWidth: "",
        borderStyle: "", borderColor: "" });d && b.isFunction(d) && d.call(a, a);return a;
    };a.addToolbar = a.toolbarAdd;a.reloadContent = a.contentReload;a.resizeContent = a.contentResize;a.control = a.headerControl;a.title = a.headerTitle;b(".jsPanel-btn-close", a).on("click", function (b) {
      b.preventDefault();a.close();
    });b(".jsPanel-btn-minimize", a).on("click", function (b) {
      b.preventDefault();a.minimize();
    });b(".jsPanel-btn-maximize", a).on("click", function (b) {
      b.preventDefault();a.maximize();
    });b(".jsPanel-btn-normalize", a).on("click", function (b) {
      b.preventDefault();a.normalize();
    });b(".jsPanel-btn-smallify, .jsPanel-btn-smallifyrev", a).on("click", function (b) {
      b.preventDefault();a.smallify();
    });a.appendTo(a.option.container);jsPanel.activePanels.list.push(d);b(document).trigger("jspanelloaded", d);a.data("container", a.option.container);a.setTheme();a.option.headerRemove ? (a.header.remove(), a.content.addClass("jsPanel-content-noheader"), ["close", "maximize", "minimize", "normalize", "smallify"].forEach(function (b) {
      a[0].setAttribute("data-btn" + b, "removed");
    })) : "closeonly" === a.option.headerControls.controls ? (b(".jsPanel-btn:not(.jsPanel-btn-close)", a.header.headerbar).remove(), ["maximize", "minimize", "normalize", "smallify"].forEach(function (b) {
      a[0].setAttribute("data-btn" + b, "removed");
    }), a[0].setAttribute("data-btn-close", "enabled")) : "none" === a.option.headerControls.controls ? (b(a.header.controls).remove(), ["close", "maximize", "minimize", "normalize", "smallify"].forEach(function (b) {
      a[0].setAttribute("data-btn" + b, "removed");
    })) : ["close", "maximize", "minimize", "normalize", "smallify"].forEach(function (b) {
      "disable" === a.option.headerControls[b] ? a.headerControl(b, "disable") : "remove" === a.option.headerControls[b] ? a.headerControl(b, "remove") : a[0].setAttribute("data-btn" + b, "enabled");
    });(a.option.headerRemove || 1 > b(".jsPanel-hdr").length) && a.content.css("border", "none");jsPanel.configIconfont(a);"modal" === a.option.paneltype ? (jsPanel.insertModalBackdrop(a), a.addClass("jsPanel-modal").css("z-index", jsPanel.modalcount + 9999)) : "hint" === a.option.paneltype ? a.addClass("jsPanel-hint").css("z-index", 1E4) : a.option.paneltype.tooltip && (g = jsPanel.setTrigger(a.option.position), a.addClass("jsPanel-tooltip"), jsPanel.setTooltipClass(a), a.option.paneltype.solo && jsPanel.closeTooltips(), jsPanel.setTooltipMode(a, g));a.option.paneltype.tooltip && b(g).addClass("hasTooltip");a.option.headerToolbar && !a.option.headerRemove && jsPanel.toolbar(a, "header", a.option.headerToolbar);a.option.footerToolbar && jsPanel.toolbar(a, "footer", a.option.footerToolbar);a.option.content && (a.content.append(a.option.content), a.data("content", a.option.content));"string" === typeof a.option.contentAjax ? (a.option.contentAjax = { url: a.option.contentAjax, autoload: !0 }, jsPanel.ajax(a)) : b.isPlainObject(a.option.contentAjax) && jsPanel.ajax(a);b.isPlainObject(a.option.contentIframe) && (a.option.contentIframe.src || a.option.contentIframe.srcdoc) && jsPanel.iframe(a);a.option.paneltype.connector && jsPanel.addConnector(a);"string" === typeof a.option.contentSize && (c = a.option.contentSize.trim().split(" "), f = c.length, a.option.contentSize = { width: c[0], height: c[--f] });
    0 === a.option.contentSize.height && (a.option.contentSize.height = "0");a.content.css({ width: a.option.contentSize.width || b.jsPanel.defaults.contentSize.width, height: a.option.contentSize.height || b.jsPanel.defaults.contentSize.height });a.css({ width: function width() {
        return 0 < b(".jsPanel-content", a).length ? a.content.outerWidth() + "px" : a.option.contentSize.width || b.jsPanel.defaults.contentSize.width;
      }, zIndex: function zIndex() {
        jsPanel.setZi(a);
      } });a.content.css("width", "100%");jsPanel.position(a, a.option.position);a.data("status", "normalized");b(document).trigger("jspanelstatuschange", d);if (!a.option.paneltype && a.option.dblclicks) {
      if (a.option.dblclicks.title) a.header.headerbar.on("dblclick", function (b) {
        b.preventDefault();jsPanel.dblclickhelper(a.option.dblclicks.title, a);
      });if (a.option.dblclicks.content) a.content.on("dblclick", function (b) {
        b.preventDefault();jsPanel.dblclickhelper(a.option.dblclicks.content, a);
      });if (a.option.dblclicks.footer) a.footer.on("dblclick", function (b) {
        b.preventDefault();jsPanel.dblclickhelper(a.option.dblclicks.footer, a);
      });
    }"string" === typeof a.option.contentOverflow ? a.content.css("overflow", a.option.contentOverflow) : b.isPlainObject(a.option.contentOverflow) && a.content.css({ "overflow-y": a.option.contentOverflow.vertical || a.option.contentOverflow["overflow-y"], "overflow-x": a.option.contentOverflow.horizontal || a.option.contentOverflow["overflow-x"] });b.isPlainObject(a.option.draggable) ? a.draggable(a.option.draggable) : "disabled" === a.option.draggable ? (b(".jsPanel-hdr, .jsPanel-ftr", a).css("cursor", "default"), a.draggable({ disabled: !0 })) : b(".jsPanel-hdr, .jsPanel-ftr", a).css("cursor", "default");b.isPlainObject(a.option.resizable) ? a.resizable(a.option.resizable) : "disabled" === a.option.resizable && (a.resizable({ disabled: !0 }), b(".ui-icon-gripsmall-diagonal-se, .ui-resizable-handle.ui-resizable-sw", a).css({ "background-image": "none", "text-indent": -9999 }), b(".ui-resizable-handle", a).css({ cursor: "inherit" }));a.on("resize", function () {
      return a.contentResize();
    });!0 === a.option.rtl.rtl && (b(".jsPanel-hdr, .jsPanel-headerbar, .jsPanel-titlebar, .jsPanel-controlbar, .jsPanel-hdr-toolbar, .jsPanel-ftr", a).addClass("jsPanel-rtl"), [a.header.title, a.content, b("*", a.header.toolbar), b("*", a.footer)].forEach(function (b) {
      b.prop("dir", "rtl");a.option.rtl.lang && b.prop("lang", a.option.rtl.lang);
    }), b(".ui-icon-gripsmall-diagonal-se", a).css({ backgroundImage: "none", textIndent: -9999 }));"string" === typeof a.option.show && a.addClass(a.option.show).css("opacity", 1);a.header.title.empty().prepend(a.option.headerTitle);a[0].addEventListener("mousedown", function (c) {
      var d = b(c.target).closest(".jsPanel").css("z-index");
      !a.hasClass("jsPanel-modal") && d <= jsPanel.zi && a.front(c.target);
    }, !1);jsPanel.updateCachedData(a);"string" === typeof a.option.setstatus && ("maximize smallify" === a.option.setstatus ? a.maximize().smallify() : a[a.option.setstatus]());"number" === typeof a.option.autoclose && 0 < a.option.autoclose && window.setTimeout(function () {
      a && a.close();
    }, a.option.autoclose);a.on("resizestart", function () {
      l = a.outerHeight();
    });a.on("resizestop", function () {
      a.outerHeight() !== l && (jsPanel.hideControls(".jsPanel-btn-normalize, .jsPanel-btn-smallifyrev", a), a.data("status", "normalized"), b(document).trigger("jspanelnormalized", d), b(document).trigger("jspanelstatuschange", d), b.isFunction(a.option.onnormalized) && a.option.onnormalized.call(a, a));
    });a[0].jspanel = { options: a.option, close: function close() {
        a.close();
      }, normalize: function normalize() {
        a.normalize();return a;
      }, maximize: function maximize() {
        a.maximize();return a;
      }, minimize: function minimize() {
        a.minimize();return a;
      }, smallify: function smallify() {
        a.smallify();return a;
      }, front: function front(b) {
        a.front(b);return a;
      }, closeChildpanels: function closeChildpanels() {
        a.closeChildpanels();
        return a;
      }, reposition: function reposition(b) {
        a.reposition(b);return a;
      }, resize: function resize(b, c) {
        a.resize(b, c);return a;
      }, contentResize: function contentResize() {
        a.contentResize();return a;
      }, contentReload: function contentReload() {
        a.contentReload();return a;
      }, headerTitle: function headerTitle(b) {
        a.headerTitle(b);return a;
      }, headerControl: function headerControl(b, c) {
        a.headerControl(b, c);return a;
      }, toolbarAdd: function toolbarAdd(b, c) {
        a.toolbarAdd(b, c);return a;
      }, setTheme: function setTheme(b) {
        a.setTheme(b);return a;
      }, noop: function noop() {
        return a;
      } };a.option.callback && b.isFunction(a.option.callback) ? a.option.callback.call(a, a) : b.isArray(a.option.callback) && a.option.callback.forEach(function (c) {
      b.isFunction(c) && c.call(a, a);
    });return a;
  };b.jsPanel.defaults = { autoclose: !1, border: !1, callback: !1, container: "body", content: !1, contentAjax: !1, contentIframe: !1, contentOverflow: "hidden", contentSize: { width: 400, height: 200 }, custom: !1, dblclicks: !1, draggable: { handle: "div.jsPanel-hdr, div.jsPanel-ftr", opacity: .8 }, footerToolbar: !1, headerControls: { close: !1, maximize: !1, minimize: !1, normalize: !1, smallify: !1, controls: "all", iconfont: "jsglyph" },
    headerRemove: !1, headerTitle: "jsPanel", headerToolbar: !1, id: function id() {
      return "jsPanel-" + (jsPanel.id += 1);
    }, load: !1, maximizedMargin: { top: 5, right: 5, bottom: 5, left: 5 }, onbeforeclose: !1, onbeforemaximize: !1, onbeforeminimize: !1, onbeforenormalize: !1, onclosed: !1, onmaximized: !1, onminimized: !1, onnormalized: !1, onbeforeresize: !1, onresized: !1, onsmallified: !1, onunsmallified: !1, onfronted: !1, paneltype: !1, position: { my: "center", at: "center" }, resizable: { handles: "n, e, s, w, ne, se, sw, nw", autoHide: !1, minWidth: 40, minHeight: 40 },
    rtl: !1, setstatus: !1, show: !1, template: !1, theme: "default" };b.jsPanel.modaldefaults = { draggable: "disabled", headerControls: { controls: "closeonly" }, position: { my: "center", at: "center" }, resizable: "disabled" };b.jsPanel.tooltipdefaults = { draggable: !1, headerControls: { controls: "closeonly" }, position: { fixed: !1 }, resizable: !1 };b.jsPanel.hintdefaults = { autoclose: 8E3, draggable: !1, headerControls: { controls: "closeonly" }, resizable: !1 };b(document).ready(function () {
    document.body.addEventListener("click", function (c) {
      1 > b(c.target).closest(".jsPanel").length && !b(c.target).hasClass("hasTooltip") && (jsPanel.closeTooltips(), b(".hasTooltip").removeClass("hasTooltip"));
    }, !1);b(document.body).append("<div id='jsPanel-replacement-container'>");window.addEventListener("keydown", function (b) {
      b = b.key || b.code;("Escape" === b || "Esc" === b) && jsPanel.closeOnEscape && jsPanel.activePanels.getPanel(jsPanel.getTopmostPanel()).close();
    }, !1);
  });
})(jQuery);

//# sourceMappingURL=jquery.jspanel.min-compiled.js.map