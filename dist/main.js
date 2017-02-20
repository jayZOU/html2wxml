/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _rocker = __webpack_require__(2);

	var _html2json = __webpack_require__(3);

	var _fs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _fs2 = _interopRequireDefault(_fs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log((0, _html2json.html2json)(_rocker.html).child);

	var htmlToJson = (0, _html2json.html2json)(_rocker.html).child;

	var template = '\n\t<block wx:if="{{item.node == \'text\'}}">\n\t    <text class="{{item.class}}" >{{item.text}}</text>\n\t</block>\n\t<block wx:if="{{item.node == \'element\'}}">\n\t\t<view class="{{item.attr.class}}">\n\t\t\t<block wx:for="{{item.child}}" wx:key="">    \t\t\n\t\t\t</block>\n\t\t</view>\n\t</block>\n';

	var parse = '';
	var part = '';

	for (var i = 0, len = htmlToJson.length; i < len; i++) {
		parse = parseChild2(htmlToJson[i]);
	}

	// let count = 0;

	function parseChild2(node) {
		// let part = ``;
		console.log(node);

		if (node.child) {

			// if(node.attr.class == 'yellow') debugger;

			part += '\n<view class="' + node.attr.class + '"> \n';
			for (var _i = 0, _len = node.child.length; _i < _len; _i++) {
				// console.log()
				// if(node.attr.class == 'over-wrap div') debugger
				if (node.node == 'element') {
					parseChild2(node.child[_i]);
				}
			}

			part += '\n</view>\n';
		} else {

			if (node.node == 'element') {
				part += '\n\t\t\t\t<view class="' + node.attr.class + '"></view>\n\t\t\t';
			}

			if (node.node == 'text') {
				part += '\n\t\t\t\t<text>' + node.text + '</text>\n\t\t\t';
			}
		}

		return part;

		//不存在子节点
	}

	_fs2.default.writeFileSync('./index.wxml', parse, 'utf-8');

	console.log(parse);

	console.log(htmlToJson);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var html = exports.html = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta content=\"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no\" name=\"viewport\">\n    <meta content=\"yes\" name=\"apple-mobile-web-app-capable\">\n    <meta content=\"black\" name=\"apple-mobile-web-app-status-bar-style\">\n    <meta content=\"telephone=no\" name=\"format-detection\">\n    <meta content=\"email=no\" name=\"format-detection\">\n    <title>\u98DE\u673A\u5927\u6218</title>\n    <link rel=\"stylesheet\" href=\"/css/rocker.css\"/>\n</head>\n<body>\n<div class=\"wrap\" id=\"wrap\">\n    <div class=\"mask\">\n        <div class=\"over-wrap\">\n            <div class=\"over-text\">\u6E38\u620F\u7ED3\u675F</div>\n            <table>\n                <tr>\n                    <td>\u6700\u540E\u5F97\u5206\uFF1A</td>\n                    <td class=\"yellow\"></td>\n                </tr>\n                <tr>\n                    <td>\u5F97\u5230\u7EA2\u5305\uFF1A</td>\n                    <td class=\"orange\"></td>\n                </tr>\n            </table>\n            <p class=\"hb-tips\">\u8BF7\u7559\u610F\u7EA2\u5305\u6D88\u606F\uFF0C\u5B9E\u9645\u91D1\u989D\u4EE5\u6536\u5230\u7684\u4E3A\u51C6\u3002</p>\n            <a class=\"btn btn-index\">\u8FD4\u56DE\u9996\u9875</a>\n            <a class=\"btn btn-hb\">\u518D\u6765<span></span></a>\n        </div>\n    </div>\n    <div class=\"mask\">\n        <div class=\"guide-text\">\u79FB\u52A8\u539F\u70B9\u63A7\u5236\u98DE\u673A\u65B9\u5411</div>\n        <div class=\"guide-text guide-text2\">\u70B9\u51FB\u6309\u94AE\u8FDB\u5165\u65E0\u654C\u72B6\u6001</div>\n    </div>\n    <div class=\"mask error\">\n        <div class=\"error-wrap\">\n            <div class=\"error-text\"></div>\n        </div>\n    </div>\n    <div class=\"mask\">\n        <p class=\"loading\">\u9875\u9762\u52A0\u8F7D\u4E2D\u2026</p>\n    </div>\n    <header class=\"header\">\n        <div class=\"item item-life\">\n            <p class=\"item-name\">\u751F\u547D\u503C</p>\n            <div class=\"value\">\n                <div class=\"prog-wrap\">\n                    <div class=\"prog\" :style=\"lifePercent\"></div>\n                </div>\n                <span></span>\n            </div>\n        </div>\n        <div class=\"item item-score\">\n            <p class=\"item-name\">\u5F53\u524D\u5F97\u5206</p>\n            <div class=\"value\">\n                <span></span>\n            </div>\n        </div>\n        <div class=\"item item-hb\">\n            <p class=\"item-name\">\u5F97\u5230\u7EA2\u5305</p>\n            <div class=\"value\">\n                <span></span>\n            </div>\n        </div>\n    </header>\n    <div class=\"area\" :style=\"controllerStyle\"></div>\n    <div class=\"area area-visual\" :style=\"visualStyle\">\n        <div class=\"dot-wrap\" :style=\"dotStyle\">\n            <div class=\"dot\"></div>\n        </div>\n    </div>\n    <div class=\"function\">\n        <div class=\"yellow\">\u8FD8\u9700\u51B7\u5374\uFF1A<span></span></div>\n        <div class=\"yellow\">buff\u65F6\u95F4\uFF1A<span></span></div>\n        <div class=\"yellow buff-text\">\u5F53\u524D\u65E0\u654Cbuff\u6570\uFF1A<span></span></div>\n        <a class=\"btn\"></a>\n        <!--\u6FC0\u6D3Bbuff\u65F6\u6DFB\u52A0\u6837\u5F0F\u201Cactive\"-->\n    </div>\n    <footer class=\"footer\"></footer>\n</div>\n<div class=\"test\"></div>\n<script type=\"text/javascript\" src=\"/js/common/common.js\"></script>\n<script type=\"text/javascript\" src=\"/js/rocker.js\"></script>\n</body>\n</html>\n";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.json2html = exports.html2json = undefined;

	var _htmlparser = __webpack_require__(4);

	var DEBUG = false;
	var debug = DEBUG ? console.log.bind(console) : function () {};

	function q(v) {
	  return '"' + v + '"';
	}

	function removeDOCTYPE(html) {
	  return html
	  // .replace(/<\?xml.*\?>\n/, '')
	  // .replace(/<!doctype.*\>\n/i, '')
	  // .replace(/<!DOCTYPE.*\>\n/i, '')
	  .replace(/<!DOCTYPE html>(.+?)<body>/i, '').replace(/<script (.+?)<\/script>.*/i, '').replace(/<\/body>/i, '').replace(/<\/html>/i, '');
	}

	var html2json = exports.html2json = function html2json(html) {

	  html = (html || '').replace(/\s+/g, ' ');
	  html = removeDOCTYPE(html);

	  var bufArray = [];
	  var results = {
	    node: 'root',
	    child: []
	  };

	  (0, _htmlparser.HTMLParser)(html, {
	    start: function start(tag, attrs, unary) {
	      debug(tag, attrs, unary);
	      // node for this element
	      var node = {
	        node: 'element',
	        tag: tag
	      };

	      if (attrs.length !== 0) {
	        node.attr = attrs.reduce(function (pre, attr) {
	          var name = attr.name;
	          var value = attr.value;
	          // 去掉空格
	          // value = value.replace(/\s/g, '');
	          value = value.replace(/(&nbsp;)/g, ' ');
	          value = value.replace(/(&gt;)/g, '>');
	          value = value.replace(/(&lt;)/g, '<');
	          value = value.replace(/(&amp;)/g, '&');
	          value = value.replace(/(&quot;)/g, '"');
	          // console.log(value);
	          // 多个值划分,单位转换
	          var values = value.split(';');
	          value = (values || []).map(function (value) {
	            if (value.indexOf('px') != -1) {
	              var v = value.split(':')[1];
	              var key = value.split(':')[0];
	              if (v.split(/\s/g).length > 1) {
	                return v.map(function (vi) {
	                  var va = Number.parseInt(vi);
	                  if (!isNaN(va)) {
	                    va = va * 2;
	                    return key + ': ' + va + 'rpx;';
	                  }
	                  return value;
	                });
	              } else {
	                var va = Number.parseInt(v);
	                if (!isNaN(va)) {
	                  va = va * 2;
	                  return key + ': ' + va + 'rpx;';
	                }
	                return value;
	              }
	            } else {
	              return value;
	            }
	          }).join(' ');

	          // if attr already exists
	          // merge it
	          if (pre[name]) {
	            if (Array.isArray(pre[name])) {
	              // already array, push to last
	              pre[name].push(value);
	            } else {
	              // single value, make it array
	              pre[name] = [pre[name], value];
	            }
	          } else {
	            // not exist, put it
	            pre[name] = value;
	          }

	          return pre;
	        }, {});
	      }

	      // 标题样式等
	      var tagClass = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'abbr', 'address', 'applet', 'acronym', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'keygen', 'kbd', 'label', 'legend', 'li', 'link', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'ruby', 's', 'samp', 'script', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'rt', 'section'];
	      if (tagClass.includes(tag)) {
	        if (node.attr && node.attr.class) {
	          node.attr.class = node.attr.class + ' ' + tag;
	        } else {
	          node.attr = node.attr || {};
	          node.attr.class = tag;
	        }
	      }

	      if (unary) {
	        // if this tag dosen't have end tag
	        // like <img src="hoge.png"/>
	        // add to parents
	        var parent = bufArray[0] || results;
	        if (parent.child === undefined) {
	          parent.child = [];
	        }
	        parent.child.push(node);
	      } else {
	        bufArray.unshift(node);
	      }
	    },
	    end: function end(tag) {
	      debug(tag);
	      // merge into parent tag
	      var node = bufArray.shift();
	      if (node.tag !== tag) console.error('invalid state: mismatch end tag');

	      if (bufArray.length === 0) {
	        results.child.push(node);
	      } else {
	        var parent = bufArray[0];
	        if (parent.child === undefined) {
	          parent.child = [];
	        }
	        parent.child.push(node);
	      }
	    },
	    chars: function chars(text) {
	      debug(text);
	      if (text == ' ') {
	        return;
	      }
	      var node = {
	        node: 'text',
	        text: text
	      };
	      if (bufArray.length === 0) {
	        results.child.push(node);
	      } else {
	        var parent = bufArray[0];
	        if (parent.child === undefined) {
	          parent.child = [];
	        }
	        parent.child.push(node);
	      }
	    },
	    comment: function comment(text) {
	      debug(text);
	      var node = {
	        node: 'comment',
	        text: text
	      };
	      var parent = bufArray[0];
	      if (parent.child === undefined) {
	        parent.child = [];
	      }
	      parent.child.push(node);
	    }
	  });
	  return results;
	};

	var json2html = exports.json2html = function json2html(json) {
	  // Empty Elements - HTML 4.01
	  var empty = ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param', 'embed'];

	  var child = '';
	  if (json.child) {
	    child = json.child.map(function (c) {
	      return json2html(c);
	    }).join('');
	  }

	  var attr = '';
	  if (json.attr) {
	    attr = Object.keys(json.attr).map(function (key) {
	      var value = json.attr[key];
	      if (Array.isArray(value)) value = value.join(' ');
	      return key + '=' + q(value);
	    }).join(' ');
	    if (attr !== '') attr = ' ' + attr;
	  }

	  if (json.node === 'element') {
	    var tag = json.tag;
	    if (empty.indexOf(tag) > -1) {
	      // empty element
	      return '<' + json.tag + attr + '/>';
	    }

	    // non empty element
	    var open = '<' + json.tag + attr + '>';
	    var close = '</' + json.tag + '>';
	    return open + child + close;
	  }

	  if (json.node === 'text') {
	    return json.text;
	  }

	  if (json.node === 'comment') {
	    return '<!--' + json.text + '-->';
	  }

	  if (json.node === 'root') {
	    return child;
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	// Regular Expressions for parsing tags and attributes

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
	    endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
	    attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

	// Empty Elements - HTML 5
	var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");

	// Block Elements - HTML 5
	var block = makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

	// Inline Elements - HTML 5
	var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

	// Attributes that have their values filled in disabled="disabled"
	var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

	// Special Elements (can contain anything)
	var special = makeMap("script,style");

	var HTMLParser = exports.HTMLParser = function HTMLParser(html, handler) {
	  var index,
	      chars,
	      match,
	      stack = [],
	      last = html;

	  stack.last = function () {
	    return this[this.length - 1];
	  };

	  while (html) {
	    chars = true;

	    // Make sure we're not in a script or style element
	    if (!stack.last() || !special[stack.last()]) {

	      // Comment
	      if (html.indexOf("<!--") == 0) {
	        index = html.indexOf("-->");

	        if (index >= 0) {
	          if (handler.comment) handler.comment(html.substring(4, index));
	          html = html.substring(index + 3);
	          chars = false;
	        }

	        // end tag
	      } else if (html.indexOf("</") == 0) {
	        match = html.match(endTag);

	        if (match) {
	          html = html.substring(match[0].length);
	          match[0].replace(endTag, parseEndTag);
	          chars = false;
	        }

	        // start tag
	      } else if (html.indexOf("<") == 0) {
	        match = html.match(startTag);

	        if (match) {
	          html = html.substring(match[0].length);
	          match[0].replace(startTag, parseStartTag);
	          chars = false;
	        }
	      }

	      if (chars) {
	        index = html.indexOf("<");

	        var text = index < 0 ? html : html.substring(0, index);
	        html = index < 0 ? "" : html.substring(index);

	        if (handler.chars) handler.chars(text);
	      }
	    } else {
	      html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
	        text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
	        if (handler.chars) handler.chars(text);

	        return "";
	      });

	      parseEndTag("", stack.last());
	    }

	    if (html == last) throw "Parse Error: " + html;
	    last = html;
	  }

	  // Clean up any remaining tags
	  parseEndTag();

	  function parseStartTag(tag, tagName, rest, unary) {
	    tagName = tagName.toLowerCase();

	    if (block[tagName]) {
	      while (stack.last() && inline[stack.last()]) {
	        parseEndTag("", stack.last());
	      }
	    }

	    if (closeSelf[tagName] && stack.last() == tagName) {
	      parseEndTag("", tagName);
	    }

	    unary = empty[tagName] || !!unary;

	    if (!unary) stack.push(tagName);

	    if (handler.start) {
	      var attrs = [];

	      rest.replace(attr, function (match, name) {
	        var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : "";

	        attrs.push({
	          name: name,
	          value: value,
	          escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
	        });
	      });

	      if (handler.start) handler.start(tagName, attrs, unary);
	    }
	  }

	  function parseEndTag(tag, tagName) {
	    // If no tag name is provided, clean shop
	    if (!tagName) var pos = 0;

	    // Find the closest opened tag of the same type
	    else for (var pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos] == tagName) break;
	      }if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if (handler.end) handler.end(stack[i]);
	      } // Remove the open elements from the stack
	      stack.length = pos;
	    }
	  }
	};

	var HTMLtoXML = exports.HTMLtoXML = function HTMLtoXML(html) {
	  var results = "";

	  HTMLParser(html, {
	    start: function start(tag, attrs, unary) {
	      results += "<" + tag;

	      for (var i = 0; i < attrs.length; i++) {
	        results += " " + attrs[i].name + '="' + attrs[i].escaped + '"';
	      }results += ">";
	    },
	    end: function end(tag) {
	      results += "</" + tag + ">";
	    },
	    chars: function chars(text) {
	      results += text;
	    },
	    comment: function comment(text) {
	      results += "<!--" + text + "-->";
	    }
	  });

	  return results;
	};

	var HTMLtoDOM = exports.HTMLtoDOM = function HTMLtoDOM(html, doc) {
	  // There can be only one of these elements
	  var one = makeMap("html,head,body,title");

	  // Enforce a structure for the document
	  var structure = {
	    link: "head",
	    base: "head"
	  };

	  if (!doc) {
	    if (typeof DOMDocument != "undefined") doc = new DOMDocument();else if (typeof document != "undefined" && document.implementation && document.implementation.createDocument) doc = document.implementation.createDocument("", "", null);else if (typeof ActiveX != "undefined") doc = new ActiveXObject("Msxml.DOMDocument");
	  } else doc = doc.ownerDocument || doc.getOwnerDocument && doc.getOwnerDocument() || doc;

	  var elems = [],
	      documentElement = doc.documentElement || doc.getDocumentElement && doc.getDocumentElement();

	  // If we're dealing with an empty document then we
	  // need to pre-populate it with the HTML document structure
	  if (!documentElement && doc.createElement) (function () {
	    var html = doc.createElement("html");
	    var head = doc.createElement("head");
	    head.appendChild(doc.createElement("title"));
	    html.appendChild(head);
	    html.appendChild(doc.createElement("body"));
	    doc.appendChild(html);
	  })();

	  // Find all the unique elements
	  if (doc.getElementsByTagName) for (var i in one) {
	    one[i] = doc.getElementsByTagName(i)[0];
	  } // If we're working with a document, inject contents into
	  // the body element
	  var curParentNode = one.body;

	  HTMLParser(html, {
	    start: function start(tagName, attrs, unary) {
	      // If it's a pre-built element, then we can ignore
	      // its construction
	      if (one[tagName]) {
	        curParentNode = one[tagName];
	        if (!unary) {
	          elems.push(curParentNode);
	        }
	        return;
	      }

	      var elem = doc.createElement(tagName);

	      for (var attr in attrs) {
	        elem.setAttribute(attrs[attr].name, attrs[attr].value);
	      }if (structure[tagName] && typeof one[structure[tagName]] != "boolean") one[structure[tagName]].appendChild(elem);else if (curParentNode && curParentNode.appendChild) curParentNode.appendChild(elem);

	      if (!unary) {
	        elems.push(elem);
	        curParentNode = elem;
	      }
	    },
	    end: function end(tag) {
	      elems.length -= 1;

	      // Init the new parentNode
	      curParentNode = elems[elems.length - 1];
	    },
	    chars: function chars(text) {
	      curParentNode.appendChild(doc.createTextNode(text));
	    },
	    comment: function comment(text) {
	      // create comment node
	    }
	  });

	  return doc;
	};

	function makeMap(str) {
	  var obj = {},
	      items = str.split(",");
	  for (var i = 0; i < items.length; i++) {
	    obj[items[i]] = true;
	  }return obj;
	}

/***/ }
/******/ ]);