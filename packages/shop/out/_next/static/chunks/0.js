(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../node_modules/add-px-to-style/index.js":
/*!**********************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/add-px-to-style/index.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* The following list is defined in React's core */
var IS_UNITLESS = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

module.exports = function(name, value) {
  if(typeof value === 'number' && !IS_UNITLESS[ name ]) {
    return value + 'px';
  } else {
    return value;
  }
};

/***/ }),

/***/ "../../node_modules/dom-css/index.js":
/*!**************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/dom-css/index.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(/*! prefix-style */ "../../node_modules/prefix-style/index.js")
var toCamelCase = __webpack_require__(/*! to-camel-case */ "../../node_modules/to-camel-case/index.js")
var cache = { 'float': 'cssFloat' }
var addPxToStyle = __webpack_require__(/*! add-px-to-style */ "../../node_modules/add-px-to-style/index.js")

function style (element, property, value) {
  var camel = cache[property]
  if (typeof camel === 'undefined') {
    camel = detect(property)
  }

  // may be false if CSS prop is unsupported
  if (camel) {
    if (value === undefined) {
      return element.style[camel]
    }

    element.style[camel] = addPxToStyle(camel, value)
  }
}

function each (element, properties) {
  for (var k in properties) {
    if (properties.hasOwnProperty(k)) {
      style(element, k, properties[k])
    }
  }
}

function detect (cssProp) {
  var camel = toCamelCase(cssProp)
  var result = prefix(camel)
  cache[camel] = cache[cssProp] = cache[result] = result
  return result
}

function set () {
  if (arguments.length === 2) {
    if (typeof arguments[1] === 'string') {
      arguments[0].style.cssText = arguments[1]
    } else {
      each(arguments[0], arguments[1])
    }
  } else {
    style(arguments[0], arguments[1], arguments[2])
  }
}

module.exports = set
module.exports.set = set

module.exports.get = function (element, properties) {
  if (Array.isArray(properties)) {
    return properties.reduce(function (obj, prop) {
      obj[prop] = style(element, prop || '')
      return obj
    }, {})
  } else {
    return style(element, properties || '')
  }
}


/***/ }),

/***/ "../../node_modules/prefix-style/index.js":
/*!*******************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/prefix-style/index.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var div = null
var prefixes = [ 'Webkit', 'Moz', 'O', 'ms' ]

module.exports = function prefixStyle (prop) {
  // re-use a dummy div
  if (!div) {
    div = document.createElement('div')
  }

  var style = div.style

  // prop exists without prefix
  if (prop in style) {
    return prop
  }

  // borderRadius -> BorderRadius
  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1)

  // find the vendor-prefixed prop
  for (var i = prefixes.length; i >= 0; i--) {
    var name = prefixes[i] + titleCase
    // e.g. WebkitBorderRadius or webkitBorderRadius
    if (name in style) {
      return name
    }
  }

  return false
}


/***/ }),

/***/ "../../node_modules/rc-drawer/es/DrawerChild.js":
/*!*************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-drawer/es/DrawerChild.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/getScrollBarSize */ "../../node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/KeyCode */ "../../node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../../node_modules/rc-drawer/es/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var currentDrawer = {};

var DrawerChild = /*#__PURE__*/function (_React$Component) {
  _inherits(DrawerChild, _React$Component);

  var _super = _createSuper(DrawerChild);

  function DrawerChild(props) {
    var _this;

    _classCallCheck(this, DrawerChild);

    _this = _super.call(this, props);

    _this.domFocus = function () {
      if (_this.dom) {
        _this.dom.focus();
      }
    };

    _this.removeStartHandler = function (e) {
      if (e.touches.length > 1) {
        return;
      }

      _this.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    _this.removeMoveHandler = function (e) {
      if (e.changedTouches.length > 1) {
        return;
      }

      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - _this.startPos.x;
      var differY = e.changedTouches[0].clientY - _this.startPos.y;

      if (currentTarget === _this.maskDom || currentTarget === _this.handlerDom || currentTarget === _this.contentDom && Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getTouchParentScroll"])(currentTarget, e.target, differX, differY)) {
        e.preventDefault();
      }
    };

    _this.transitionEnd = function (e) {
      var dom = e.target;
      Object(_utils__WEBPACK_IMPORTED_MODULE_4__["removeEventListener"])(dom, _utils__WEBPACK_IMPORTED_MODULE_4__["transitionEnd"], _this.transitionEnd);
      dom.style.transition = '';
    };

    _this.onKeyDown = function (e) {
      if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].ESC) {
        var onClose = _this.props.onClose;
        e.stopPropagation();

        if (onClose) {
          onClose(e);
        }
      }
    };

    _this.onWrapperTransitionEnd = function (e) {
      var _this$props = _this.props,
          open = _this$props.open,
          afterVisibleChange = _this$props.afterVisibleChange;

      if (e.target === _this.contentWrapper && e.propertyName.match(/transform$/)) {
        _this.dom.style.transition = '';

        if (!open && _this.getCurrentDrawerSome()) {
          document.body.style.overflowX = '';

          if (_this.maskDom) {
            _this.maskDom.style.left = '';
            _this.maskDom.style.width = '';
          }
        }

        if (afterVisibleChange) {
          afterVisibleChange(!!open);
        }
      }
    };

    _this.openLevelTransition = function () {
      var _this$props2 = _this.props,
          open = _this$props2.open,
          width = _this$props2.width,
          height = _this$props2.height;

      var _this$getHorizontalBo = _this.getHorizontalBoolAndPlacementName(),
          isHorizontal = _this$getHorizontalBo.isHorizontal,
          placementName = _this$getHorizontalBo.placementName;

      var contentValue = _this.contentDom ? _this.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
      var value = (isHorizontal ? width : height) || contentValue;

      _this.setLevelAndScrolling(open, placementName, value);
    };

    _this.setLevelTransform = function (open, placementName, value, right) {
      var _this$props3 = _this.props,
          placement = _this$props3.placement,
          levelMove = _this$props3.levelMove,
          duration = _this$props3.duration,
          ease = _this$props3.ease,
          showMask = _this$props3.showMask; // router 切换时可能会导至页面失去滚动条，所以需要时时获取。

      _this.levelDom.forEach(function (dom) {
        dom.style.transition = "transform ".concat(duration, " ").concat(ease);
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["addEventListener"])(dom, _utils__WEBPACK_IMPORTED_MODULE_4__["transitionEnd"], _this.transitionEnd);
        var levelValue = open ? value : 0;

        if (levelMove) {
          var $levelMove = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["transformArguments"])(levelMove, {
            target: dom,
            open: open
          });
          levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
        }

        var $value = typeof levelValue === 'number' ? "".concat(levelValue, "px") : levelValue;
        var placementPos = placement === 'left' || placement === 'top' ? $value : "-".concat($value);
        placementPos = showMask && placement === 'right' && right ? "calc(".concat(placementPos, " + ").concat(right, "px)") : placementPos;
        dom.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
      });
    };

    _this.setLevelAndScrolling = function (open, placementName, value) {
      var onChange = _this.props.onChange;

      if (!_utils__WEBPACK_IMPORTED_MODULE_4__["windowIsUndefined"]) {
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? Object(rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_1__["default"])(true) : 0;

        _this.setLevelTransform(open, placementName, value, right);

        _this.toggleScrollingToDrawerAndBody(right);
      }

      if (onChange) {
        onChange(open);
      }
    };

    _this.toggleScrollingToDrawerAndBody = function (right) {
      var _this$props4 = _this.props,
          getOpenCount = _this$props4.getOpenCount,
          getContainer = _this$props4.getContainer,
          showMask = _this$props4.showMask,
          open = _this$props4.open;
      var container = getContainer && getContainer();
      var openCount = getOpenCount && getOpenCount(); // 处理 body 滚动

      if (container && container.parentNode === document.body && showMask) {
        var eventArray = ['touchstart'];
        var domArray = [document.body, _this.maskDom, _this.handlerDom, _this.contentDom];

        if (open && document.body.style.overflow !== 'hidden') {
          if (right) {
            _this.addScrollingEffect(right);
          }

          if (openCount === 1) {
            document.body.style.overflow = 'hidden';
          }

          document.body.style.touchAction = 'none'; // 手机禁滚

          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            Object(_utils__WEBPACK_IMPORTED_MODULE_4__["addEventListener"])(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        } else if (_this.getCurrentDrawerSome()) {
          // 没有弹框的状态下清除 overflow;
          if (!openCount) {
            document.body.style.overflow = '';
          }

          document.body.style.touchAction = '';

          if (right) {
            _this.remScrollingEffect(right);
          } // 恢复事件


          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            Object(_utils__WEBPACK_IMPORTED_MODULE_4__["removeEventListener"])(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        }
      }
    };

    _this.addScrollingEffect = function (right) {
      var _this$props5 = _this.props,
          placement = _this$props5.placement,
          duration = _this$props5.duration,
          ease = _this$props5.ease,
          getOpenCount = _this$props5.getOpenCount,
          switchScrollingEffect = _this$props5.switchScrollingEffect;
      var openCount = getOpenCount && getOpenCount();

      if (openCount === 1) {
        switchScrollingEffect();
      }

      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);
      _this.dom.style.transition = 'none';

      switch (placement) {
        case 'right':
          _this.dom.style.transform = "translateX(-".concat(right, "px)");
          break;

        case 'top':
        case 'bottom':
          _this.dom.style.width = "calc(100% - ".concat(right, "px)");
          _this.dom.style.transform = 'translateZ(0)';
          break;

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(widthTransition);
          _this.dom.style.width = '';
          _this.dom.style.transform = '';
        }
      });
    };

    _this.remScrollingEffect = function (right) {
      var _this$props6 = _this.props,
          placement = _this$props6.placement,
          duration = _this$props6.duration,
          ease = _this$props6.ease,
          getOpenCount = _this$props6.getOpenCount,
          switchScrollingEffect = _this$props6.switchScrollingEffect;
      var openCount = getOpenCount && getOpenCount();

      if (!openCount) {
        switchScrollingEffect(true);
      }

      if (_utils__WEBPACK_IMPORTED_MODULE_4__["transitionStr"]) {
        document.body.style.overflowX = 'hidden';
      }

      _this.dom.style.transition = 'none';
      var heightTransition;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);

      switch (placement) {
        case 'left':
          {
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);
            break;
          }

        case 'right':
          {
            _this.dom.style.transform = "translateX(".concat(right, "px)");
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);

            if (_this.maskDom) {
              _this.maskDom.style.left = "-".concat(right, "px");
              _this.maskDom.style.width = "calc(100% + ".concat(right, "px)");
            }

            break;
          }

        case 'top':
        case 'bottom':
          {
            _this.dom.style.width = "calc(100% + ".concat(right, "px)");
            _this.dom.style.height = '100%';
            _this.dom.style.transform = 'translateZ(0)';
            heightTransition = "height 0s ".concat(ease, " ").concat(duration);
            break;
          }

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : '').concat(widthTransition);
          _this.dom.style.transform = '';
          _this.dom.style.width = '';
          _this.dom.style.height = '';
        }
      });
    };

    _this.getCurrentDrawerSome = function () {
      return !Object.keys(currentDrawer).some(function (key) {
        return currentDrawer[key];
      });
    };

    _this.getLevelDom = function (_ref) {
      var level = _ref.level,
          getContainer = _ref.getContainer;

      if (_utils__WEBPACK_IMPORTED_MODULE_4__["windowIsUndefined"]) {
        return;
      }

      var container = getContainer && getContainer();
      var parent = container ? container.parentNode : null;
      _this.levelDom = [];

      if (level === 'all') {
        var children = parent ? Array.prototype.slice.call(parent.children) : [];
        children.forEach(function (child) {
          if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== container) {
            _this.levelDom.push(child);
          }
        });
      } else if (level) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["dataToArray"])(level).forEach(function (key) {
          document.querySelectorAll(key).forEach(function (item) {
            _this.levelDom.push(item);
          });
        });
      }
    };

    _this.getHorizontalBoolAndPlacementName = function () {
      var placement = _this.props.placement;
      var isHorizontal = placement === 'left' || placement === 'right';
      var placementName = "translate".concat(isHorizontal ? 'X' : 'Y');
      return {
        isHorizontal: isHorizontal,
        placementName: placementName
      };
    };

    _this.state = {
      _self: _assertThisInitialized(_this)
    };
    return _this;
  }

  _createClass(DrawerChild, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!_utils__WEBPACK_IMPORTED_MODULE_4__["windowIsUndefined"]) {
        var passiveSupported = false;

        try {
          window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
              return null;
            }
          }));
        } catch (err) {}

        this.passive = passiveSupported ? {
          passive: false
        } : false;
      }

      var open = this.props.open;
      this.drawerId = "drawer_id_".concat(Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9).toString())).toString(16));
      this.getLevelDom(this.props);

      if (open) {
        currentDrawer[this.drawerId] = open; // 默认打开状态时推出 level;

        this.openLevelTransition();
        this.forceUpdate(function () {
          _this2.domFocus();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var open = this.props.open;

      if (open !== prevProps.open) {
        if (open) {
          this.domFocus();
        }

        currentDrawer[this.drawerId] = !!open;
        this.openLevelTransition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props7 = this.props,
          getOpenCount = _this$props7.getOpenCount,
          open = _this$props7.open,
          switchScrollingEffect = _this$props7.switchScrollingEffect;
      var openCount = typeof getOpenCount === 'function' && getOpenCount();
      delete currentDrawer[this.drawerId];

      if (open) {
        this.setLevelTransform(false);
        document.body.style.touchAction = '';
      }

      if (!openCount) {
        document.body.style.overflow = '';
        switchScrollingEffect(true);
      }
    } // tslint:disable-next-line:member-ordering

  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this3 = this;

      var _this$props8 = this.props,
          className = _this$props8.className,
          children = _this$props8.children,
          style = _this$props8.style,
          width = _this$props8.width,
          height = _this$props8.height,
          defaultOpen = _this$props8.defaultOpen,
          $open = _this$props8.open,
          prefixCls = _this$props8.prefixCls,
          placement = _this$props8.placement,
          level = _this$props8.level,
          levelMove = _this$props8.levelMove,
          ease = _this$props8.ease,
          duration = _this$props8.duration,
          getContainer = _this$props8.getContainer,
          handler = _this$props8.handler,
          onChange = _this$props8.onChange,
          afterVisibleChange = _this$props8.afterVisibleChange,
          showMask = _this$props8.showMask,
          maskClosable = _this$props8.maskClosable,
          maskStyle = _this$props8.maskStyle,
          onClose = _this$props8.onClose,
          onHandleClick = _this$props8.onHandleClick,
          keyboard = _this$props8.keyboard,
          getOpenCount = _this$props8.getOpenCount,
          switchScrollingEffect = _this$props8.switchScrollingEffect,
          props = _objectWithoutProperties(_this$props8, ["className", "children", "style", "width", "height", "defaultOpen", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "handler", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "onClose", "onHandleClick", "keyboard", "getOpenCount", "switchScrollingEffect"]); // 首次渲染都将是关闭状态。


      var open = this.dom ? $open : false;
      var wrapperClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-").concat(placement), true), _defineProperty(_classnames, "".concat(prefixCls, "-open"), open), _defineProperty(_classnames, className || '', !!className), _defineProperty(_classnames, 'no-mask', !showMask), _classnames));

      var _this$getHorizontalBo2 = this.getHorizontalBoolAndPlacementName(),
          placementName = _this$getHorizontalBo2.placementName; // 百分比与像素动画不同步，第一次打用后全用像素动画。
      // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;


      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");
      var handlerChildren = handler && react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](handler, {
        onClick: function onClick(e) {
          if (handler.props.onClick) {
            handler.props.onClick();
          }

          if (onHandleClick) {
            onHandleClick(e);
          }
        },
        ref: function ref(c) {
          _this3.handlerDom = c;
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", Object.assign({}, props, {
        tabIndex: -1,
        className: wrapperClassName,
        style: style,
        ref: function ref(c) {
          _this3.dom = c;
        },
        onKeyDown: open && keyboard ? this.onKeyDown : undefined,
        onTransitionEnd: this.onWrapperTransitionEnd
      }), showMask && react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: "".concat(prefixCls, "-mask"),
        onClick: maskClosable ? onClose : undefined,
        style: maskStyle,
        ref: function ref(c) {
          _this3.maskDom = c;
        }
      }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: "".concat(prefixCls, "-content-wrapper"),
        style: {
          transform: transform,
          msTransform: transform,
          width: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isNumeric"])(width) ? "".concat(width, "px") : width,
          height: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isNumeric"])(height) ? "".concat(height, "px") : height
        },
        ref: function ref(c) {
          _this3.contentWrapper = c;
        }
      }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function ref(c) {
          _this3.contentDom = c;
        },
        onTouchStart: open && showMask ? this.removeStartHandler : undefined,
        onTouchMove: open && showMask ? this.removeMoveHandler : undefined
      }, children), handlerChildren));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps,
          _self = _ref2._self;
      var nextState = {
        prevProps: props
      };

      if (prevProps !== undefined) {
        var placement = props.placement,
            level = props.level;

        if (placement !== prevProps.placement) {
          // test 的 bug, 有动画过场，删除 dom
          _self.contentDom = null;
        }

        if (level !== prevProps.level) {
          _self.getLevelDom(props);
        }
      }

      return nextState;
    }
  }]);

  return DrawerChild;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

DrawerChild.defaultProps = {
  switchScrollingEffect: function switchScrollingEffect() {}
};
/* harmony default export */ __webpack_exports__["default"] = (DrawerChild);

/***/ }),

/***/ "../../node_modules/rc-drawer/es/DrawerWrapper.js":
/*!***************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-drawer/es/DrawerWrapper.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util/es/PortalWrapper */ "../../node_modules/rc-util/es/PortalWrapper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DrawerChild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawerChild */ "../../node_modules/rc-drawer/es/DrawerChild.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var DrawerWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(DrawerWrapper, _React$Component);

  var _super = _createSuper(DrawerWrapper);

  function DrawerWrapper(props) {
    var _this;

    _classCallCheck(this, DrawerWrapper);

    _this = _super.call(this, props);

    _this.onHandleClick = function (e) {
      var _this$props = _this.props,
          onHandleClick = _this$props.onHandleClick,
          $open = _this$props.open;

      if (onHandleClick) {
        onHandleClick(e);
      }

      if (typeof $open === 'undefined') {
        var _open = _this.state.open;

        _this.setState({
          open: !_open
        });
      }
    };

    _this.onClose = function (e) {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          open = _this$props2.open;

      if (onClose) {
        onClose(e);
      }

      if (typeof open === 'undefined') {
        _this.setState({
          open: false
        });
      }
    };

    var open = typeof props.open !== 'undefined' ? props.open : !!props.defaultOpen;
    _this.state = {
      open: open
    };

    if ('onMaskClick' in props) {
      console.warn('`onMaskClick` are removed, please use `onClose` instead.');
    }

    return _this;
  }

  _createClass(DrawerWrapper, [{
    key: "render",
    // tslint:disable-next-line:member-ordering
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          defaultOpen = _this$props3.defaultOpen,
          getContainer = _this$props3.getContainer,
          wrapperClassName = _this$props3.wrapperClassName,
          forceRender = _this$props3.forceRender,
          handler = _this$props3.handler,
          props = _objectWithoutProperties(_this$props3, ["defaultOpen", "getContainer", "wrapperClassName", "forceRender", "handler"]);

      var open = this.state.open; // 渲染在当前 dom 里；

      if (!getContainer) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: wrapperClassName,
          ref: function ref(c) {
            _this2.dom = c;
          }
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DrawerChild__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props, {
          open: open,
          handler: handler,
          getContainer: function getContainer() {
            return _this2.dom;
          },
          onClose: this.onClose,
          onHandleClick: this.onHandleClick
        })));
      } // 如果有 handler 为内置强制渲染；


      var $forceRender = !!handler || forceRender;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_0__["default"], {
        visible: open,
        forceRender: $forceRender,
        getContainer: getContainer,
        wrapperClassName: wrapperClassName
      }, function (_ref) {
        var visible = _ref.visible,
            afterClose = _ref.afterClose,
            rest = _objectWithoutProperties(_ref, ["visible", "afterClose"]);

        return (// react 15，componentWillUnmount 时 Portal 返回 afterClose, visible.
          react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DrawerChild__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props, rest, {
            open: visible !== undefined ? visible : open,
            afterVisibleChange: afterClose !== undefined ? afterClose : props.afterVisibleChange,
            handler: handler,
            onClose: _this2.onClose,
            onHandleClick: _this2.onHandleClick
          }))
        );
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps;
      var newState = {
        prevProps: props
      };

      if (typeof prevProps !== 'undefined' && props.open !== prevProps.open) {
        newState.open = props.open;
      }

      return newState;
    }
  }]);

  return DrawerWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

DrawerWrapper.defaultProps = {
  prefixCls: 'drawer',
  placement: 'left',
  getContainer: 'body',
  defaultOpen: false,
  level: 'all',
  duration: '.3s',
  ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  onChange: function onChange() {},
  afterVisibleChange: function afterVisibleChange() {},
  handler: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "drawer-handle"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", {
    className: "drawer-handle-icon"
  })),
  showMask: true,
  maskClosable: true,
  maskStyle: {},
  wrapperClassName: '',
  className: '',
  keyboard: true,
  forceRender: false
};
/* harmony default export */ __webpack_exports__["default"] = (DrawerWrapper);

/***/ }),

/***/ "../../node_modules/rc-drawer/es/index.js":
/*!*******************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-drawer/es/index.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrawerWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawerWrapper */ "../../node_modules/rc-drawer/es/DrawerWrapper.js");
// export this package's api

/* harmony default export */ __webpack_exports__["default"] = (_DrawerWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../node_modules/rc-drawer/es/utils.js":
/*!*******************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-drawer/es/utils.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: dataToArray, transitionStr, transitionEnd, addEventListener, removeEventListener, transformArguments, isNumeric, windowIsUndefined, getTouchParentScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataToArray", function() { return dataToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionStr", function() { return transitionStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformArguments", function() { return transformArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowIsUndefined", function() { return windowIsUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchParentScroll", function() { return getTouchParentScroll; });
function dataToArray(vars) {
  if (Array.isArray(vars)) {
    return vars;
  }

  return [vars];
}
var transitionEndObject = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend'
};
var transitionStr = Object.keys(transitionEndObject).filter(function (key) {
  if (typeof document === 'undefined') {
    return false;
  }

  var html = document.getElementsByTagName('html')[0];
  return key in (html ? html.style : {});
})[0];
var transitionEnd = transitionEndObject[transitionStr];
function addEventListener(target, eventType, callback, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.attachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function removeEventListener(target, eventType, callback, options) {
  if (target.removeEventListener) {
    target.removeEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.detachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function transformArguments(arg, cb) {
  var result = typeof arg === 'function' ? arg(cb) : arg;

  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }

    return [result[0], result[1]];
  }

  return [result];
}
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var getTouchParentScroll = function getTouchParentScroll(root, currentTarget, differX, differY) {
  if (!currentTarget || currentTarget === document || currentTarget instanceof Document) {
    return false;
  } // root 为 drawer-content 设定了 overflow, 判断为 root 的 parent 时结束滚动；


  if (currentTarget === root.parentNode) {
    return true;
  }

  var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
  var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);
  var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
  var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
  var style = document.defaultView.getComputedStyle(currentTarget);
  var overflowY = style.overflowY === 'auto' || style.overflowY === 'scroll';
  var overflowX = style.overflowX === 'auto' || style.overflowX === 'scroll';
  var y = scrollY && overflowY;
  var x = scrollX && overflowX;

  if (isY && (!y || y && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!x || x && (currentTarget.scrollLeft >= scrollX && scrollX < 0 || currentTarget.scrollLeft <= 0 && scrollX > 0))) {
    return getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
  }

  return false;
};

/***/ }),

/***/ "../../node_modules/rc-util/es/ContainerRender.js":
/*!***************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-util/es/ContainerRender.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContainerRender; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ContainerRender = /*#__PURE__*/function (_React$Component) {
  _inherits(ContainerRender, _React$Component);

  var _super = _createSuper(ContainerRender);

  function ContainerRender() {
    var _this;

    _classCallCheck(this, ContainerRender);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.removeContainer = function () {
      if (_this.container) {
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(_this.container);

        _this.container.parentNode.removeChild(_this.container);

        _this.container = null;
      }
    };

    _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }

        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    };

    return _this;
  }

  _createClass(ContainerRender, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ContainerRender.propTypes = {
  autoMount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  autoDestroy: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  parent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  getComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};


/***/ }),

/***/ "../../node_modules/rc-util/es/KeyCode.js":
/*!*******************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-util/es/KeyCode.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (KeyCode);

/***/ }),

/***/ "../../node_modules/rc-util/es/Portal.js":
/*!******************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-util/es/Portal.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Portal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Portal = /*#__PURE__*/function (_React$Component) {
  _inherits(Portal, _React$Component);

  var _super = _createSuper(Portal);

  function Portal() {
    _classCallCheck(this, Portal);

    return _super.apply(this, arguments);
  }

  _createClass(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createContainer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var didUpdate = this.props.didUpdate;

      if (didUpdate) {
        didUpdate(prevProps);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: "createContainer",
    value: function createContainer() {
      this._container = this.props.getContainer();
      this.forceUpdate();
    }
  }, {
    key: "removeContainer",
    value: function removeContainer() {
      if (this._container) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this._container) {
        return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(this.props.children, this._container);
      }

      return null;
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Portal.propTypes = {
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  didUpdate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};


/***/ }),

/***/ "../../node_modules/rc-util/es/PortalWrapper.js":
/*!*************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-util/es/PortalWrapper.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lifecycles-compat */ "../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _ContainerRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContainerRender */ "../../node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Portal */ "../../node_modules/rc-util/es/Portal.js");
/* harmony import */ var _switchScrollingEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switchScrollingEffect */ "../../node_modules/rc-util/es/switchScrollingEffect.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setStyle */ "../../node_modules/rc-util/es/setStyle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable no-underscore-dangle,react/require-default-props */








var openCount = 0;
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var IS_REACT_16 = ('createPortal' in react_dom__WEBPACK_IMPORTED_MODULE_1___default.a); // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var cacheOverflow = {};

var PortalWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(PortalWrapper, _React$Component);

  var _super = _createSuper(PortalWrapper);

  function PortalWrapper(props) {
    var _this;

    _classCallCheck(this, PortalWrapper);

    _this = _super.call(this, props);

    _this.getParent = function () {
      var getContainer = _this.props.getContainer;

      if (getContainer) {
        if (typeof getContainer === 'string') {
          return document.querySelectorAll(getContainer)[0];
        }

        if (typeof getContainer === 'function') {
          return getContainer();
        }

        if (_typeof(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
          return getContainer;
        }
      }

      return document.body;
    };

    _this.getContainer = function () {
      if (windowIsUndefined) {
        return null;
      }

      if (!_this.container) {
        _this.container = document.createElement('div');

        var parent = _this.getParent();

        if (parent) {
          parent.appendChild(_this.container);
        }
      }

      _this.setWrapperClassName();

      return _this.container;
    };

    _this.setWrapperClassName = function () {
      var wrapperClassName = _this.props.wrapperClassName;

      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    };

    _this.savePortal = function (c) {
      // Warning: don't rename _component
      // https://github.com/react-component/util/pull/65#discussion_r352407916
      _this._component = c;
    };

    _this.removeCurrentContainer = function (visible) {
      _this.container = null;
      _this._component = null;

      if (!IS_REACT_16) {
        if (visible) {
          _this.renderComponent({
            afterClose: _this.removeContainer,
            onClose: function onClose() {},
            visible: false
          });
        } else {
          _this.removeContainer();
        }
      }
    };

    _this.switchScrollingEffect = function () {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        Object(_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Must be set after switchScrollingEffect

        cacheOverflow = Object(_setStyle__WEBPACK_IMPORTED_MODULE_7__["default"])({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        Object(_setStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(cacheOverflow);
        cacheOverflow = {};
        Object(_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_6__["default"])(true);
      }
    };

    var _visible = props.visible;
    openCount = _visible ? openCount + 1 : openCount;
    _this.state = {
      _self: _assertThisInitialized(_this)
    };
    return _this;
  }

  _createClass(PortalWrapper, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setWrapperClassName();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var visible = this.props.visible; // 离开时不会 render， 导到离开时数值不变，改用 func 。。

      openCount = visible && openCount ? openCount - 1 : openCount;
      this.removeCurrentContainer(visible);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          forceRender = _this$props.forceRender,
          visible = _this$props.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect
      }; // suppport react15

      if (!IS_REACT_16) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContainerRender__WEBPACK_IMPORTED_MODULE_4__["default"], {
          parent: this,
          visible: visible,
          autoDestroy: false,
          getComponent: function getComponent() {
            var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return children(_objectSpread({}, extra, {}, childProps, {
              ref: _this2.savePortal
            }));
          },
          getContainer: this.getContainer,
          forceRender: forceRender
        }, function (_ref) {
          var renderComponent = _ref.renderComponent,
              removeContainer = _ref.removeContainer;
          _this2.renderComponent = renderComponent;
          _this2.removeContainer = removeContainer;
          return null;
        });
      }

      if (forceRender || visible || this._component) {
        portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
          getContainer: this.getContainer,
          ref: this.savePortal
        }, children(childProps));
      }

      return portal;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps,
          _self = _ref2._self;
      var visible = props.visible,
          getContainer = props.getContainer;

      if (prevProps) {
        var prevVisible = prevProps.visible,
            prevGetContainer = prevProps.getContainer;

        if (visible !== prevVisible) {
          openCount = visible && !prevVisible ? openCount + 1 : openCount - 1;
        }

        var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';

        if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
          _self.removeCurrentContainer(false);
        }
      }

      return {
        prevProps: props
      };
    }
  }]);

  return PortalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PortalWrapper.propTypes = {
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__["polyfill"])(PortalWrapper));

/***/ }),

/***/ "../../node_modules/rc-util/es/getScrollBarSize.js":
/*!****************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-util/es/getScrollBarSize.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollBarSize; });
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

/***/ }),

/***/ "../../node_modules/rc-util/es/setStyle.js":
/*!********************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-util/es/setStyle.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Easy to set element style, return previous style
 * IE browser compatible(IE browser doesn't merge overflow style, need to set it separately)
 * https://github.com/ant-design/ant-design/issues/19393
 *
 */
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$element = options.element,
      element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style); // IE browser compatible

  styleKeys.forEach(function (key) {
    oldStyle[key] = element.style[key];
  });
  styleKeys.forEach(function (key) {
    element.style[key] = style[key];
  });
  return oldStyle;
}

/* harmony default export */ __webpack_exports__["default"] = (setStyle);

/***/ }),

/***/ "../../node_modules/rc-util/es/switchScrollingEffect.js":
/*!*********************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/rc-util/es/switchScrollingEffect.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollBarSize */ "../../node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStyle */ "../../node_modules/rc-util/es/setStyle.js");



function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

var cacheStyle = {};
/* harmony default export */ __webpack_exports__["default"] = (function (close) {
  if (!isBodyOverflowing() && !close) {
    return;
  } // https://github.com/ant-design/ant-design/issues/19729


  var scrollingEffectClassName = 'ant-scrolling-effect';
  var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
  var bodyClassName = document.body.className;

  if (close) {
    if (!scrollingEffectClassNameReg.test(bodyClassName)) return;
    Object(_setStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(cacheStyle);
    cacheStyle = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg, '').trim();
    return;
  }

  var scrollBarSize = Object(_getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__["default"])();

  if (scrollBarSize) {
    cacheStyle = Object(_setStyle__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: 'relative',
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });

    if (!scrollingEffectClassNameReg.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName);
      document.body.className = addClassName.trim();
    }
  }
});

/***/ }),

/***/ "../../node_modules/react-custom-scrollbars/lib/Scrollbars/defaultRenderElements.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-custom-scrollbars/lib/Scrollbars/defaultRenderElements.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.renderViewDefault = renderViewDefault;
exports.renderTrackHorizontalDefault = renderTrackHorizontalDefault;
exports.renderTrackVerticalDefault = renderTrackVerticalDefault;
exports.renderThumbHorizontalDefault = renderThumbHorizontalDefault;
exports.renderThumbVerticalDefault = renderThumbVerticalDefault;

var _react = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable react/prop-types */

function renderViewDefault(props) {
    return _react2["default"].createElement('div', props);
}

function renderTrackHorizontalDefault(_ref) {
    var style = _ref.style,
        props = _objectWithoutProperties(_ref, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        left: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderTrackVerticalDefault(_ref2) {
    var style = _ref2.style,
        props = _objectWithoutProperties(_ref2, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        top: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbHorizontalDefault(_ref3) {
    var style = _ref3.style,
        props = _objectWithoutProperties(_ref3, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbVerticalDefault(_ref4) {
    var style = _ref4.style,
        props = _objectWithoutProperties(_ref4, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

/***/ }),

/***/ "../../node_modules/react-custom-scrollbars/lib/Scrollbars/index.js":
/*!*********************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-custom-scrollbars/lib/Scrollbars/index.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raf2 = __webpack_require__(/*! raf */ "../../node_modules/raf/index.js");

var _raf3 = _interopRequireDefault(_raf2);

var _domCss = __webpack_require__(/*! dom-css */ "../../node_modules/dom-css/index.js");

var _domCss2 = _interopRequireDefault(_domCss);

var _react = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isString = __webpack_require__(/*! ../utils/isString */ "../../node_modules/react-custom-scrollbars/lib/utils/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _getScrollbarWidth = __webpack_require__(/*! ../utils/getScrollbarWidth */ "../../node_modules/react-custom-scrollbars/lib/utils/getScrollbarWidth.js");

var _getScrollbarWidth2 = _interopRequireDefault(_getScrollbarWidth);

var _returnFalse = __webpack_require__(/*! ../utils/returnFalse */ "../../node_modules/react-custom-scrollbars/lib/utils/returnFalse.js");

var _returnFalse2 = _interopRequireDefault(_returnFalse);

var _getInnerWidth = __webpack_require__(/*! ../utils/getInnerWidth */ "../../node_modules/react-custom-scrollbars/lib/utils/getInnerWidth.js");

var _getInnerWidth2 = _interopRequireDefault(_getInnerWidth);

var _getInnerHeight = __webpack_require__(/*! ../utils/getInnerHeight */ "../../node_modules/react-custom-scrollbars/lib/utils/getInnerHeight.js");

var _getInnerHeight2 = _interopRequireDefault(_getInnerHeight);

var _styles = __webpack_require__(/*! ./styles */ "../../node_modules/react-custom-scrollbars/lib/Scrollbars/styles.js");

var _defaultRenderElements = __webpack_require__(/*! ./defaultRenderElements */ "../../node_modules/react-custom-scrollbars/lib/Scrollbars/defaultRenderElements.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scrollbars = function (_Component) {
    _inherits(Scrollbars, _Component);

    function Scrollbars(props) {
        var _ref;

        _classCallCheck(this, Scrollbars);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Scrollbars.__proto__ || Object.getPrototypeOf(Scrollbars)).call.apply(_ref, [this, props].concat(rest)));

        _this.getScrollLeft = _this.getScrollLeft.bind(_this);
        _this.getScrollTop = _this.getScrollTop.bind(_this);
        _this.getScrollWidth = _this.getScrollWidth.bind(_this);
        _this.getScrollHeight = _this.getScrollHeight.bind(_this);
        _this.getClientWidth = _this.getClientWidth.bind(_this);
        _this.getClientHeight = _this.getClientHeight.bind(_this);
        _this.getValues = _this.getValues.bind(_this);
        _this.getThumbHorizontalWidth = _this.getThumbHorizontalWidth.bind(_this);
        _this.getThumbVerticalHeight = _this.getThumbVerticalHeight.bind(_this);
        _this.getScrollLeftForOffset = _this.getScrollLeftForOffset.bind(_this);
        _this.getScrollTopForOffset = _this.getScrollTopForOffset.bind(_this);

        _this.scrollLeft = _this.scrollLeft.bind(_this);
        _this.scrollTop = _this.scrollTop.bind(_this);
        _this.scrollToLeft = _this.scrollToLeft.bind(_this);
        _this.scrollToTop = _this.scrollToTop.bind(_this);
        _this.scrollToRight = _this.scrollToRight.bind(_this);
        _this.scrollToBottom = _this.scrollToBottom.bind(_this);

        _this.handleTrackMouseEnter = _this.handleTrackMouseEnter.bind(_this);
        _this.handleTrackMouseLeave = _this.handleTrackMouseLeave.bind(_this);
        _this.handleHorizontalTrackMouseDown = _this.handleHorizontalTrackMouseDown.bind(_this);
        _this.handleVerticalTrackMouseDown = _this.handleVerticalTrackMouseDown.bind(_this);
        _this.handleHorizontalThumbMouseDown = _this.handleHorizontalThumbMouseDown.bind(_this);
        _this.handleVerticalThumbMouseDown = _this.handleVerticalThumbMouseDown.bind(_this);
        _this.handleWindowResize = _this.handleWindowResize.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.handleDrag = _this.handleDrag.bind(_this);
        _this.handleDragEnd = _this.handleDragEnd.bind(_this);

        _this.state = {
            didMountUniversal: false
        };
        return _this;
    }

    _createClass(Scrollbars, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.addListeners();
            this.update();
            this.componentDidMountUniversal();
        }
    }, {
        key: 'componentDidMountUniversal',
        value: function componentDidMountUniversal() {
            // eslint-disable-line react/sort-comp
            var universal = this.props.universal;

            if (!universal) return;
            this.setState({ didMountUniversal: true });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.update();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.removeListeners();
            (0, _raf2.cancel)(this.requestFrame);
            clearTimeout(this.hideTracksTimeout);
            clearInterval(this.detectScrollingInterval);
        }
    }, {
        key: 'getScrollLeft',
        value: function getScrollLeft() {
            if (!this.view) return 0;
            return this.view.scrollLeft;
        }
    }, {
        key: 'getScrollTop',
        value: function getScrollTop() {
            if (!this.view) return 0;
            return this.view.scrollTop;
        }
    }, {
        key: 'getScrollWidth',
        value: function getScrollWidth() {
            if (!this.view) return 0;
            return this.view.scrollWidth;
        }
    }, {
        key: 'getScrollHeight',
        value: function getScrollHeight() {
            if (!this.view) return 0;
            return this.view.scrollHeight;
        }
    }, {
        key: 'getClientWidth',
        value: function getClientWidth() {
            if (!this.view) return 0;
            return this.view.clientWidth;
        }
    }, {
        key: 'getClientHeight',
        value: function getClientHeight() {
            if (!this.view) return 0;
            return this.view.clientHeight;
        }
    }, {
        key: 'getValues',
        value: function getValues() {
            var _ref2 = this.view || {},
                _ref2$scrollLeft = _ref2.scrollLeft,
                scrollLeft = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
                _ref2$scrollTop = _ref2.scrollTop,
                scrollTop = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop,
                _ref2$scrollWidth = _ref2.scrollWidth,
                scrollWidth = _ref2$scrollWidth === undefined ? 0 : _ref2$scrollWidth,
                _ref2$scrollHeight = _ref2.scrollHeight,
                scrollHeight = _ref2$scrollHeight === undefined ? 0 : _ref2$scrollHeight,
                _ref2$clientWidth = _ref2.clientWidth,
                clientWidth = _ref2$clientWidth === undefined ? 0 : _ref2$clientWidth,
                _ref2$clientHeight = _ref2.clientHeight,
                clientHeight = _ref2$clientHeight === undefined ? 0 : _ref2$clientHeight;

            return {
                left: scrollLeft / (scrollWidth - clientWidth) || 0,
                top: scrollTop / (scrollHeight - clientHeight) || 0,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                scrollWidth: scrollWidth,
                scrollHeight: scrollHeight,
                clientWidth: clientWidth,
                clientHeight: clientHeight
            };
        }
    }, {
        key: 'getThumbHorizontalWidth',
        value: function getThumbHorizontalWidth() {
            var _props = this.props,
                thumbSize = _props.thumbSize,
                thumbMinSize = _props.thumbMinSize;
            var _view = this.view,
                scrollWidth = _view.scrollWidth,
                clientWidth = _view.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var width = Math.ceil(clientWidth / scrollWidth * trackWidth);
            if (trackWidth === width) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(width, thumbMinSize);
        }
    }, {
        key: 'getThumbVerticalHeight',
        value: function getThumbVerticalHeight() {
            var _props2 = this.props,
                thumbSize = _props2.thumbSize,
                thumbMinSize = _props2.thumbMinSize;
            var _view2 = this.view,
                scrollHeight = _view2.scrollHeight,
                clientHeight = _view2.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var height = Math.ceil(clientHeight / scrollHeight * trackHeight);
            if (trackHeight === height) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(height, thumbMinSize);
        }
    }, {
        key: 'getScrollLeftForOffset',
        value: function getScrollLeftForOffset(offset) {
            var _view3 = this.view,
                scrollWidth = _view3.scrollWidth,
                clientWidth = _view3.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var thumbWidth = this.getThumbHorizontalWidth();
            return offset / (trackWidth - thumbWidth) * (scrollWidth - clientWidth);
        }
    }, {
        key: 'getScrollTopForOffset',
        value: function getScrollTopForOffset(offset) {
            var _view4 = this.view,
                scrollHeight = _view4.scrollHeight,
                clientHeight = _view4.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var thumbHeight = this.getThumbVerticalHeight();
            return offset / (trackHeight - thumbHeight) * (scrollHeight - clientHeight);
        }
    }, {
        key: 'scrollLeft',
        value: function scrollLeft() {
            var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (!this.view) return;
            this.view.scrollLeft = left;
        }
    }, {
        key: 'scrollTop',
        value: function scrollTop() {
            var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (!this.view) return;
            this.view.scrollTop = top;
        }
    }, {
        key: 'scrollToLeft',
        value: function scrollToLeft() {
            if (!this.view) return;
            this.view.scrollLeft = 0;
        }
    }, {
        key: 'scrollToTop',
        value: function scrollToTop() {
            if (!this.view) return;
            this.view.scrollTop = 0;
        }
    }, {
        key: 'scrollToRight',
        value: function scrollToRight() {
            if (!this.view) return;
            this.view.scrollLeft = this.view.scrollWidth;
        }
    }, {
        key: 'scrollToBottom',
        value: function scrollToBottom() {
            if (!this.view) return;
            this.view.scrollTop = this.view.scrollHeight;
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.addEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.addEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.addEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.addEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.addEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.addEventListener('resize', this.handleWindowResize);
        }
    }, {
        key: 'removeListeners',
        value: function removeListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.removeEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.removeEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.removeEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.removeEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.removeEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.removeEventListener('resize', this.handleWindowResize);
            // Possibly setup by `handleDragStart`
            this.teardownDragging();
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(event) {
            var _this2 = this;

            var _props3 = this.props,
                onScroll = _props3.onScroll,
                onScrollFrame = _props3.onScrollFrame;

            if (onScroll) onScroll(event);
            this.update(function (values) {
                var scrollLeft = values.scrollLeft,
                    scrollTop = values.scrollTop;

                _this2.viewScrollLeft = scrollLeft;
                _this2.viewScrollTop = scrollTop;
                if (onScrollFrame) onScrollFrame(values);
            });
            this.detectScrolling();
        }
    }, {
        key: 'handleScrollStart',
        value: function handleScrollStart() {
            var onScrollStart = this.props.onScrollStart;

            if (onScrollStart) onScrollStart();
            this.handleScrollStartAutoHide();
        }
    }, {
        key: 'handleScrollStartAutoHide',
        value: function handleScrollStartAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleScrollStop',
        value: function handleScrollStop() {
            var onScrollStop = this.props.onScrollStop;

            if (onScrollStop) onScrollStop();
            this.handleScrollStopAutoHide();
        }
    }, {
        key: 'handleScrollStopAutoHide',
        value: function handleScrollStopAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleWindowResize',
        value: function handleWindowResize() {
            this.update();
        }
    }, {
        key: 'handleHorizontalTrackMouseDown',
        value: function handleHorizontalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientX = event.clientX;

            var _target$getBoundingCl = target.getBoundingClientRect(),
                targetLeft = _target$getBoundingCl.left;

            var thumbWidth = this.getThumbHorizontalWidth();
            var offset = Math.abs(targetLeft - clientX) - thumbWidth / 2;
            this.view.scrollLeft = this.getScrollLeftForOffset(offset);
        }
    }, {
        key: 'handleVerticalTrackMouseDown',
        value: function handleVerticalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientY = event.clientY;

            var _target$getBoundingCl2 = target.getBoundingClientRect(),
                targetTop = _target$getBoundingCl2.top;

            var thumbHeight = this.getThumbVerticalHeight();
            var offset = Math.abs(targetTop - clientY) - thumbHeight / 2;
            this.view.scrollTop = this.getScrollTopForOffset(offset);
        }
    }, {
        key: 'handleHorizontalThumbMouseDown',
        value: function handleHorizontalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientX = event.clientX;
            var offsetWidth = target.offsetWidth;

            var _target$getBoundingCl3 = target.getBoundingClientRect(),
                left = _target$getBoundingCl3.left;

            this.prevPageX = offsetWidth - (clientX - left);
        }
    }, {
        key: 'handleVerticalThumbMouseDown',
        value: function handleVerticalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientY = event.clientY;
            var offsetHeight = target.offsetHeight;

            var _target$getBoundingCl4 = target.getBoundingClientRect(),
                top = _target$getBoundingCl4.top;

            this.prevPageY = offsetHeight - (clientY - top);
        }
    }, {
        key: 'setupDragging',
        value: function setupDragging() {
            (0, _domCss2["default"])(document.body, _styles.disableSelectStyle);
            document.addEventListener('mousemove', this.handleDrag);
            document.addEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = _returnFalse2["default"];
        }
    }, {
        key: 'teardownDragging',
        value: function teardownDragging() {
            (0, _domCss2["default"])(document.body, _styles.disableSelectStyleReset);
            document.removeEventListener('mousemove', this.handleDrag);
            document.removeEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = undefined;
        }
    }, {
        key: 'handleDragStart',
        value: function handleDragStart(event) {
            this.dragging = true;
            event.stopImmediatePropagation();
            this.setupDragging();
        }
    }, {
        key: 'handleDrag',
        value: function handleDrag(event) {
            if (this.prevPageX) {
                var clientX = event.clientX;

                var _trackHorizontal$getB = this.trackHorizontal.getBoundingClientRect(),
                    trackLeft = _trackHorizontal$getB.left;

                var thumbWidth = this.getThumbHorizontalWidth();
                var clickPosition = thumbWidth - this.prevPageX;
                var offset = -trackLeft + clientX - clickPosition;
                this.view.scrollLeft = this.getScrollLeftForOffset(offset);
            }
            if (this.prevPageY) {
                var clientY = event.clientY;

                var _trackVertical$getBou = this.trackVertical.getBoundingClientRect(),
                    trackTop = _trackVertical$getBou.top;

                var thumbHeight = this.getThumbVerticalHeight();
                var _clickPosition = thumbHeight - this.prevPageY;
                var _offset = -trackTop + clientY - _clickPosition;
                this.view.scrollTop = this.getScrollTopForOffset(_offset);
            }
            return false;
        }
    }, {
        key: 'handleDragEnd',
        value: function handleDragEnd() {
            this.dragging = false;
            this.prevPageX = this.prevPageY = 0;
            this.teardownDragging();
            this.handleDragEndAutoHide();
        }
    }, {
        key: 'handleDragEndAutoHide',
        value: function handleDragEndAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleTrackMouseEnter',
        value: function handleTrackMouseEnter() {
            this.trackMouseOver = true;
            this.handleTrackMouseEnterAutoHide();
        }
    }, {
        key: 'handleTrackMouseEnterAutoHide',
        value: function handleTrackMouseEnterAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleTrackMouseLeave',
        value: function handleTrackMouseLeave() {
            this.trackMouseOver = false;
            this.handleTrackMouseLeaveAutoHide();
        }
    }, {
        key: 'handleTrackMouseLeaveAutoHide',
        value: function handleTrackMouseLeaveAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'showTracks',
        value: function showTracks() {
            clearTimeout(this.hideTracksTimeout);
            (0, _domCss2["default"])(this.trackHorizontal, { opacity: 1 });
            (0, _domCss2["default"])(this.trackVertical, { opacity: 1 });
        }
    }, {
        key: 'hideTracks',
        value: function hideTracks() {
            var _this3 = this;

            if (this.dragging) return;
            if (this.scrolling) return;
            if (this.trackMouseOver) return;
            var autoHideTimeout = this.props.autoHideTimeout;

            clearTimeout(this.hideTracksTimeout);
            this.hideTracksTimeout = setTimeout(function () {
                (0, _domCss2["default"])(_this3.trackHorizontal, { opacity: 0 });
                (0, _domCss2["default"])(_this3.trackVertical, { opacity: 0 });
            }, autoHideTimeout);
        }
    }, {
        key: 'detectScrolling',
        value: function detectScrolling() {
            var _this4 = this;

            if (this.scrolling) return;
            this.scrolling = true;
            this.handleScrollStart();
            this.detectScrollingInterval = setInterval(function () {
                if (_this4.lastViewScrollLeft === _this4.viewScrollLeft && _this4.lastViewScrollTop === _this4.viewScrollTop) {
                    clearInterval(_this4.detectScrollingInterval);
                    _this4.scrolling = false;
                    _this4.handleScrollStop();
                }
                _this4.lastViewScrollLeft = _this4.viewScrollLeft;
                _this4.lastViewScrollTop = _this4.viewScrollTop;
            }, 100);
        }
    }, {
        key: 'raf',
        value: function raf(callback) {
            var _this5 = this;

            if (this.requestFrame) _raf3["default"].cancel(this.requestFrame);
            this.requestFrame = (0, _raf3["default"])(function () {
                _this5.requestFrame = undefined;
                callback();
            });
        }
    }, {
        key: 'update',
        value: function update(callback) {
            var _this6 = this;

            this.raf(function () {
                return _this6._update(callback);
            });
        }
    }, {
        key: '_update',
        value: function _update(callback) {
            var _props4 = this.props,
                onUpdate = _props4.onUpdate,
                hideTracksWhenNotNeeded = _props4.hideTracksWhenNotNeeded;

            var values = this.getValues();
            if ((0, _getScrollbarWidth2["default"])()) {
                var scrollLeft = values.scrollLeft,
                    clientWidth = values.clientWidth,
                    scrollWidth = values.scrollWidth;

                var trackHorizontalWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
                var thumbHorizontalWidth = this.getThumbHorizontalWidth();
                var thumbHorizontalX = scrollLeft / (scrollWidth - clientWidth) * (trackHorizontalWidth - thumbHorizontalWidth);
                var thumbHorizontalStyle = {
                    width: thumbHorizontalWidth,
                    transform: 'translateX(' + thumbHorizontalX + 'px)'
                };
                var scrollTop = values.scrollTop,
                    clientHeight = values.clientHeight,
                    scrollHeight = values.scrollHeight;

                var trackVerticalHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
                var thumbVerticalHeight = this.getThumbVerticalHeight();
                var thumbVerticalY = scrollTop / (scrollHeight - clientHeight) * (trackVerticalHeight - thumbVerticalHeight);
                var thumbVerticalStyle = {
                    height: thumbVerticalHeight,
                    transform: 'translateY(' + thumbVerticalY + 'px)'
                };
                if (hideTracksWhenNotNeeded) {
                    var trackHorizontalStyle = {
                        visibility: scrollWidth > clientWidth ? 'visible' : 'hidden'
                    };
                    var trackVerticalStyle = {
                        visibility: scrollHeight > clientHeight ? 'visible' : 'hidden'
                    };
                    (0, _domCss2["default"])(this.trackHorizontal, trackHorizontalStyle);
                    (0, _domCss2["default"])(this.trackVertical, trackVerticalStyle);
                }
                (0, _domCss2["default"])(this.thumbHorizontal, thumbHorizontalStyle);
                (0, _domCss2["default"])(this.thumbVertical, thumbVerticalStyle);
            }
            if (onUpdate) onUpdate(values);
            if (typeof callback !== 'function') return;
            callback(values);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var scrollbarWidth = (0, _getScrollbarWidth2["default"])();
            /* eslint-disable no-unused-vars */

            var _props5 = this.props,
                onScroll = _props5.onScroll,
                onScrollFrame = _props5.onScrollFrame,
                onScrollStart = _props5.onScrollStart,
                onScrollStop = _props5.onScrollStop,
                onUpdate = _props5.onUpdate,
                renderView = _props5.renderView,
                renderTrackHorizontal = _props5.renderTrackHorizontal,
                renderTrackVertical = _props5.renderTrackVertical,
                renderThumbHorizontal = _props5.renderThumbHorizontal,
                renderThumbVertical = _props5.renderThumbVertical,
                tagName = _props5.tagName,
                hideTracksWhenNotNeeded = _props5.hideTracksWhenNotNeeded,
                autoHide = _props5.autoHide,
                autoHideTimeout = _props5.autoHideTimeout,
                autoHideDuration = _props5.autoHideDuration,
                thumbSize = _props5.thumbSize,
                thumbMinSize = _props5.thumbMinSize,
                universal = _props5.universal,
                autoHeight = _props5.autoHeight,
                autoHeightMin = _props5.autoHeightMin,
                autoHeightMax = _props5.autoHeightMax,
                style = _props5.style,
                children = _props5.children,
                props = _objectWithoutProperties(_props5, ['onScroll', 'onScrollFrame', 'onScrollStart', 'onScrollStop', 'onUpdate', 'renderView', 'renderTrackHorizontal', 'renderTrackVertical', 'renderThumbHorizontal', 'renderThumbVertical', 'tagName', 'hideTracksWhenNotNeeded', 'autoHide', 'autoHideTimeout', 'autoHideDuration', 'thumbSize', 'thumbMinSize', 'universal', 'autoHeight', 'autoHeightMin', 'autoHeightMax', 'style', 'children']);
            /* eslint-enable no-unused-vars */

            var didMountUniversal = this.state.didMountUniversal;


            var containerStyle = _extends({}, _styles.containerStyleDefault, autoHeight && _extends({}, _styles.containerStyleAutoHeight, {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }), style);

            var viewStyle = _extends({}, _styles.viewStyleDefault, {
                // Hide scrollbars by setting a negative margin
                marginRight: scrollbarWidth ? -scrollbarWidth : 0,
                marginBottom: scrollbarWidth ? -scrollbarWidth : 0
            }, autoHeight && _extends({}, _styles.viewStyleAutoHeight, {
                // Add scrollbarWidth to autoHeight in order to compensate negative margins
                minHeight: (0, _isString2["default"])(autoHeightMin) ? 'calc(' + autoHeightMin + ' + ' + scrollbarWidth + 'px)' : autoHeightMin + scrollbarWidth,
                maxHeight: (0, _isString2["default"])(autoHeightMax) ? 'calc(' + autoHeightMax + ' + ' + scrollbarWidth + 'px)' : autoHeightMax + scrollbarWidth
            }), autoHeight && universal && !didMountUniversal && {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }, universal && !didMountUniversal && _styles.viewStyleUniversalInitial);

            var trackAutoHeightStyle = {
                transition: 'opacity ' + autoHideDuration + 'ms',
                opacity: 0
            };

            var trackHorizontalStyle = _extends({}, _styles.trackHorizontalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            var trackVerticalStyle = _extends({}, _styles.trackVerticalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            return (0, _react.createElement)(tagName, _extends({}, props, { style: containerStyle, ref: function ref(_ref3) {
                    _this7.container = _ref3;
                } }), [(0, _react.cloneElement)(renderView({ style: viewStyle }), { key: 'view', ref: function ref(_ref4) {
                    _this7.view = _ref4;
                } }, children), (0, _react.cloneElement)(renderTrackHorizontal({ style: trackHorizontalStyle }), { key: 'trackHorizontal', ref: function ref(_ref5) {
                    _this7.trackHorizontal = _ref5;
                } }, (0, _react.cloneElement)(renderThumbHorizontal({ style: _styles.thumbHorizontalStyleDefault }), { ref: function ref(_ref6) {
                    _this7.thumbHorizontal = _ref6;
                } })), (0, _react.cloneElement)(renderTrackVertical({ style: trackVerticalStyle }), { key: 'trackVertical', ref: function ref(_ref7) {
                    _this7.trackVertical = _ref7;
                } }, (0, _react.cloneElement)(renderThumbVertical({ style: _styles.thumbVerticalStyleDefault }), { ref: function ref(_ref8) {
                    _this7.thumbVertical = _ref8;
                } }))]);
        }
    }]);

    return Scrollbars;
}(_react.Component);

exports["default"] = Scrollbars;


Scrollbars.propTypes = {
    onScroll: _propTypes2["default"].func,
    onScrollFrame: _propTypes2["default"].func,
    onScrollStart: _propTypes2["default"].func,
    onScrollStop: _propTypes2["default"].func,
    onUpdate: _propTypes2["default"].func,
    renderView: _propTypes2["default"].func,
    renderTrackHorizontal: _propTypes2["default"].func,
    renderTrackVertical: _propTypes2["default"].func,
    renderThumbHorizontal: _propTypes2["default"].func,
    renderThumbVertical: _propTypes2["default"].func,
    tagName: _propTypes2["default"].string,
    thumbSize: _propTypes2["default"].number,
    thumbMinSize: _propTypes2["default"].number,
    hideTracksWhenNotNeeded: _propTypes2["default"].bool,
    autoHide: _propTypes2["default"].bool,
    autoHideTimeout: _propTypes2["default"].number,
    autoHideDuration: _propTypes2["default"].number,
    autoHeight: _propTypes2["default"].bool,
    autoHeightMin: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    autoHeightMax: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    universal: _propTypes2["default"].bool,
    style: _propTypes2["default"].object,
    children: _propTypes2["default"].node
};

Scrollbars.defaultProps = {
    renderView: _defaultRenderElements.renderViewDefault,
    renderTrackHorizontal: _defaultRenderElements.renderTrackHorizontalDefault,
    renderTrackVertical: _defaultRenderElements.renderTrackVerticalDefault,
    renderThumbHorizontal: _defaultRenderElements.renderThumbHorizontalDefault,
    renderThumbVertical: _defaultRenderElements.renderThumbVerticalDefault,
    tagName: 'div',
    thumbMinSize: 30,
    hideTracksWhenNotNeeded: false,
    autoHide: false,
    autoHideTimeout: 1000,
    autoHideDuration: 200,
    autoHeight: false,
    autoHeightMin: 0,
    autoHeightMax: 200,
    universal: false
};

/***/ }),

/***/ "../../node_modules/react-custom-scrollbars/lib/Scrollbars/styles.js":
/*!**********************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-custom-scrollbars/lib/Scrollbars/styles.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var containerStyleDefault = exports.containerStyleDefault = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
};

// Overrides containerStyleDefault properties
var containerStyleAutoHeight = exports.containerStyleAutoHeight = {
    height: 'auto'
};

var viewStyleDefault = exports.viewStyleDefault = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch'
};

// Overrides viewStyleDefault properties
var viewStyleAutoHeight = exports.viewStyleAutoHeight = {
    position: 'relative',
    top: undefined,
    left: undefined,
    right: undefined,
    bottom: undefined
};

var viewStyleUniversalInitial = exports.viewStyleUniversalInitial = {
    overflow: 'hidden',
    marginRight: 0,
    marginBottom: 0
};

var trackHorizontalStyleDefault = exports.trackHorizontalStyleDefault = {
    position: 'absolute',
    height: 6
};

var trackVerticalStyleDefault = exports.trackVerticalStyleDefault = {
    position: 'absolute',
    width: 6
};

var thumbHorizontalStyleDefault = exports.thumbHorizontalStyleDefault = {
    position: 'relative',
    display: 'block',
    height: '100%'
};

var thumbVerticalStyleDefault = exports.thumbVerticalStyleDefault = {
    position: 'relative',
    display: 'block',
    width: '100%'
};

var disableSelectStyle = exports.disableSelectStyle = {
    userSelect: 'none'
};

var disableSelectStyleReset = exports.disableSelectStyleReset = {
    userSelect: ''
};

/***/ }),

/***/ "../../node_modules/react-custom-scrollbars/lib/index.js":
/*!**********************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-custom-scrollbars/lib/index.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrollbars = undefined;

var _Scrollbars = __webpack_require__(/*! ./Scrollbars */ "../../node_modules/react-custom-scrollbars/lib/Scrollbars/index.js");

var _Scrollbars2 = _interopRequireDefault(_Scrollbars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _Scrollbars2["default"];
exports.Scrollbars = _Scrollbars2["default"];

/***/ }),

/***/ "../../node_modules/react-custom-scrollbars/lib/utils/getInnerHeight.js":
/*!*************************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-custom-scrollbars/lib/utils/getInnerHeight.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerHeight;
function getInnerHeight(el) {
    var clientHeight = el.clientHeight;

    var _getComputedStyle = getComputedStyle(el),
        paddingTop = _getComputedStyle.paddingTop,
        paddingBottom = _getComputedStyle.paddingBottom;

    return clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);
}

/***/ }),

/***/ "../../node_modules/react-custom-scrollbars/lib/utils/getInnerWidth.js":
/*!************************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-custom-scrollbars/lib/utils/getInnerWidth.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerWidth;
function getInnerWidth(el) {
    var clientWidth = el.clientWidth;

    var _getComputedStyle = getComputedStyle(el),
        paddingLeft = _getComputedStyle.paddingLeft,
        paddingRight = _getComputedStyle.paddingRight;

    return clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
}

/***/ }),

/***/ "../../node_modules/react-custom-scrollbars/lib/utils/getScrollbarWidth.js":
/*!****************************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-custom-scrollbars/lib/utils/getScrollbarWidth.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getScrollbarWidth;

var _domCss = __webpack_require__(/*! dom-css */ "../../node_modules/dom-css/index.js");

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var scrollbarWidth = false;

function getScrollbarWidth() {
    if (scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        var div = document.createElement('div');
        (0, _domCss2["default"])(div, {
            width: 100,
            height: 100,
            position: 'absolute',
            top: -9999,
            overflow: 'scroll',
            MsOverflowStyle: 'scrollbar'
        });
        document.body.appendChild(div);
        scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
    } else {
        scrollbarWidth = 0;
    }
    return scrollbarWidth || 0;
}

/***/ }),

/***/ "../../node_modules/react-custom-scrollbars/lib/utils/isString.js":
/*!*******************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-custom-scrollbars/lib/utils/isString.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isString;
function isString(maybe) {
    return typeof maybe === 'string';
}

/***/ }),

/***/ "../../node_modules/react-custom-scrollbars/lib/utils/returnFalse.js":
/*!**********************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-custom-scrollbars/lib/utils/returnFalse.js ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = returnFalse;
function returnFalse() {
    return false;
}

/***/ }),

/***/ "../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!***************************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "../../node_modules/to-camel-case/index.js":
/*!********************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/to-camel-case/index.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var space = __webpack_require__(/*! to-space-case */ "../../node_modules/to-space-case/index.js")

/**
 * Export.
 */

module.exports = toCamelCase

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return space(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}


/***/ }),

/***/ "../../node_modules/to-no-case/index.js":
/*!*****************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/to-no-case/index.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Export.
 */

module.exports = toNoCase

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/
var hasSeparator = /(_|-|\.|:)/
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}


/***/ }),

/***/ "../../node_modules/to-space-case/index.js":
/*!********************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/to-space-case/index.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var clean = __webpack_require__(/*! to-no-case */ "../../node_modules/to-no-case/index.js")

/**
 * Export.
 */

module.exports = toSpaceCase

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}


/***/ }),

/***/ "./components/Drawer/Drawer.tsx":
/*!**************************************!*\
  !*** ./components/Drawer/Drawer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-drawer */ "../../node_modules/rc-drawer/es/index.js");



var _this = undefined,
    _jsxFileName = "E:\\satiwan\\Project_Pick_bazar\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\components\\Drawer\\Drawer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Drawer = function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      width = _ref.width,
      placement = _ref.placement,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onClose: toggleHandler,
    className: "drawer ".concat(className ? className : '').trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: ".4s"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), closeButton && __jsx("div", {
    className: "drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, closeButton), children), __jsx("div", {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, drawerHandler));
};

_c = Drawer;
Drawer.defaultProps = {
  width: '300px',
  placement: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

var _c;

$RefreshReg$(_c, "Drawer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/LayoutContainer/Header/MobileDrawer.tsx":
/*!************************************************************!*\
  !*** ./containers/LayoutContainer/Header/MobileDrawer.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "../../node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Drawer/Drawer */ "./components/Drawer/Drawer.tsx");
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/NavLink/NavLink */ "./components/NavLink/NavLink.tsx");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/drawer/drawer.context */ "./contexts/drawer/drawer.context.tsx");
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! contexts/auth/auth.context */ "./contexts/auth/auth.context.tsx");
/* harmony import */ var _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../SignInOutForm/Form */ "./containers/SignInOutForm/Form.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "../../node_modules/react-intl/lib/index.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header.style */ "./containers/LayoutContainer/Header/Header.style.tsx");
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! image/user.jpg */ "./image/user.jpg");
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(image_user_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var constants_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! constants/navigation */ "./constants/navigation.ts");
var _this = undefined,
    _jsxFileName = "E:\\satiwan\\Project_Pick_bazar\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\containers\\LayoutContainer\\Header\\MobileDrawer.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var DrawerMenuItems = [{
  id: 1,
  intlLabelId: 'navLinkHome',
  label: 'Home',
  href: '/home/type=1'
}, // {
//   id: 3,
//   label: 'Checkout Second',
//   intlLabelId: 'alternativeCheckout',
//   href: ALTERNATIVE_CHECKOUT_PAGE,
// },
// {
//   id: 6,
//   intlLabelId: 'navlinkOrderReceived',
//   label: 'Received',
//   href: ORDER_RECEIVED,
// },
{
  id: 7,
  intlLabelId: 'navlinkHelp',
  label: 'Help',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["HELP_PAGE"]
}, {
  id: 8,
  intlLabelId: 'navlinkOffer',
  label: 'Offer',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["OFFER_PAGE"]
}];
var AuthenticatedItems = [{
  id: 1,
  intlLabelId: 'navLinkHome',
  label: 'Home',
  href: '/home/type=1'
}, {
  id: 2,
  intlLabelId: 'navlinkCheckout',
  label: 'Checkout',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["PROCEED_TO_CHECKOUT_PAGE"]
}, // {
//   id: 3,
//   label: 'Checkout Second',
//   intlLabelId: 'alternativeCheckout',
//   href: ALTERNATIVE_CHECKOUT_PAGE,
// },
{
  id: 4,
  intlLabelId: 'navlinkProfile',
  label: 'Profile',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["PROFILE_PAGE"]
}, {
  id: 5,
  intlLabelId: 'sidebarYourOrder',
  label: 'Order',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["YOUR_ORDER"]
}, // {
//   id: 6,
//   intlLabelId: 'navlinkOrderReceived',
//   label: 'Received',
//   href: ORDER_RECEIVED,
// },
{
  id: 7,
  intlLabelId: 'navlinkHelp',
  label: 'Help',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["HELP_PAGE"]
}, {
  id: 8,
  intlLabelId: 'navlinkOffer',
  label: 'Offer',
  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__["OFFER_PAGE"]
}];

var MobileDrawer = function MobileDrawer() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_8__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__["AuthContext"]),
      isAuthenticated = _useContext2.authState.isAuthenticated,
      authDispatch = _useContext2.authDispatch; // Toggle drawer


  var toggleHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function () {
    dispatch({
      type: 'TOGGLE'
    });
  }, [dispatch]);

  var handleLogout = function handleLogout() {
    if (true) {
      localStorage.removeItem('access_token');
      authDispatch({
        type: 'SIGN_OUT'
      });
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }
  };

  var resetSearch = function resetSearch() {
    dispatch({
      type: 'RESET'
    });
  };

  var signInOutForm = function signInOutForm() {
    dispatch({
      type: 'TOGGLE'
    });
    authDispatch({
      type: 'SIGNIN'
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__["openModal"])({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_10__["default"],
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto'
      }
    });
  };

  return __jsx(components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "316px",
    drawerHandler: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["HamburgerIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 11
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }
    })),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerClose"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }
    }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_7__["CloseIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
    autoHide: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerContentWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerProfile"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 11
    }
  }, isAuthenticated ? __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["LoginView"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 15
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UserAvatar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image_user_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "user_avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 19
    }
  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UserDetails"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }, "David Kinderson"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  }, "+990 374 987"))) : __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["LogoutView"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 15
    }
  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    intlButtonId: "mobileSignInButtonText",
    title: "Join In",
    size: "small",
    className: "sign_in" // variant="primary"
    ,
    onClick: function onClick() {
      return router.push('/signin');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }))), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, isAuthenticated ? AuthenticatedItems.map(function (item) {
    return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 15
      }
    }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: toggleHandler,
      href: item.href,
      label: item.label,
      intlId: item.intlLabelId,
      className: "drawer_menu_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }
    }));
  }) : DrawerMenuItems.map(function (item) {
    return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 15
      }
    }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: toggleHandler,
      href: item.href,
      label: item.label,
      intlId: item.intlLabelId,
      className: "drawer_menu_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }));
  })), isAuthenticated && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UesrOptionMenu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/profile",
    label: "Your Account Settings",
    className: "drawer_menu_item",
    intlId: "navlinkAccountSettings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 15
    }
  }, __jsx("div", {
    onClick: handleLogout,
    className: "drawer_menu_item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "logoutBtn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
    id: "navlinkLogout",
    defaultMessage: "Logout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 21
    }
  }))))))));
};

_s(MobileDrawer, "hDluwVNMv+CIpN8/aIOwCsX6srs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = MobileDrawer;
/* harmony default export */ __webpack_exports__["default"] = (MobileDrawer);

var _c;

$RefreshReg$(_c, "MobileDrawer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/LayoutContainer/Header/MobileHeader.tsx":
/*!************************************************************!*\
  !*** ./containers/LayoutContainer/Header/MobileHeader.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./contexts/drawer/drawer.provider.tsx");
/* harmony import */ var _MobileDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MobileDrawer */ "./containers/LayoutContainer/Header/MobileDrawer.tsx");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header.style */ "./containers/LayoutContainer/Header/Header.style.tsx");
/* harmony import */ var components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/SearchBox/SearchBox */ "./components/SearchBox/SearchBox.tsx");
/* harmony import */ var contexts_search_search_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! contexts/search/search.context */ "./contexts/search/search.context.tsx");
/* harmony import */ var contexts_header_header_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! contexts/header/header.context */ "./contexts/header/header.context.tsx");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var _is_home_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../is-home-page */ "./containers/LayoutContainer/is-home-page.ts");
/* harmony import */ var helper_useComponentSize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! helper/useComponentSize */ "./helper/useComponentSize.js");




var _this = undefined,
    _jsxFileName = "E:\\satiwan\\Project_Pick_bazar\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\containers\\LayoutContainer\\Header\\MobileHeader.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var SearchModal = function SearchModal(_ref) {
  _s();

  var state = _ref.state,
      pathname = _ref.pathname,
      handleSearch = _ref.handleSearch;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(state.text || ''),
      text = _useState[0],
      setText = _useState[1];

  var handleSearchInput = function handleSearchInput(text) {
    setText(text);
  };

  var page = state.page,
      urlState = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(state, ["page"]);

  var handleClickSearchButton = function handleClickSearchButton() {
    handleSearch(text);
    router.push({
      pathname: pathname,
      query: _objectSpread(_objectSpread({}, urlState), {}, {
        text: text
      })
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__["closeModal"])();
  };

  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_8__["SearchModalWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_8__["SearchModalClose"], {
    type: "submit",
    onClick: function onClick() {
      return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__["closeModal"])();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_12__["LongArrowLeft"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), __jsx(components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "header-modal-search",
    bordered: false,
    inputStyle: {
      height: 35
    },
    buttonText: "",
    placeholder: "Search",
    handleSearch: handleSearchInput,
    value: text,
    onClick: handleClickSearchButton,
    pathname: pathname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }));
};

_s(SearchModal, "x0oXDIXIF8clxjZIEh6xzbsc7Yw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = SearchModal;

var MobileHeader = function MobileHeader(_ref2) {
  _s2();

  var className = _ref2.className,
      pathname = _ref2.pathname;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(contexts_search_search_context__WEBPACK_IMPORTED_MODULE_10__["SearchContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var _useDimensions = Object(helper_useComponentSize__WEBPACK_IMPORTED_MODULE_14__["default"])(),
      _useDimensions2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDimensions, 2),
      mobileHeaderRef = _useDimensions2[0],
      dimensions = _useDimensions2[1];

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(contexts_header_header_context__WEBPACK_IMPORTED_MODULE_11__["HeaderContext"]),
      headerDispatch = _useContext2.headerDispatch;

  var headerHeight = dimensions.height;
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    headerDispatch({
      type: 'GET_MOBILE_HEIGHT',
      payload: _objectSpread(_objectSpread({}, state), {}, {
        mobileHeight: headerHeight
      })
    });
  }, [headerHeight]);

  var handleSearch = function handleSearch(text) {
    dispatch({
      type: 'UPDATE',
      payload: _objectSpread(_objectSpread({}, state), {}, {
        text: text
      })
    });
  };

  var handleSearchModal = function handleSearchModal() {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__["openModal"])({
      show: true,
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'search-modal-mobile',
        width: '100%',
        height: '100%'
      },
      closeOnClickOutside: false,
      component: SearchModal,
      componentProps: {
        state: state,
        pathname: pathname,
        handleSearch: handleSearch
      },
      closeComponent: function closeComponent() {
        return __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 29
          }
        });
      }
    });
  };

  var isHomePage = Object(_is_home_page__WEBPACK_IMPORTED_MODULE_13__["isCategoryPage"])(pathname);
  return __jsx(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_6__["DrawerProvider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_8__["MobileHeaderWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_8__["MobileHeaderInnerWrapper"], {
    className: className,
    ref: mobileHeaderRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_8__["DrawerWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx(_MobileDrawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  })), isHomePage ? __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_8__["SearchWrapper"], {
    onClick: handleSearchModal,
    className: "searchIconWrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_12__["SearchIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  })) : null)));
};

_s2(MobileHeader, "p7ypzxPhyByuuDtvsDfqTMhvRt0=", false, function () {
  return [helper_useComponentSize__WEBPACK_IMPORTED_MODULE_14__["default"]];
});

_c2 = MobileHeader;
/* harmony default export */ __webpack_exports__["default"] = (MobileHeader);

var _c, _c2;

$RefreshReg$(_c, "SearchModal");
$RefreshReg$(_c2, "MobileHeader");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./contexts/drawer/drawer.context.tsx":
/*!********************************************!*\
  !*** ./contexts/drawer/drawer.context.tsx ***!
  \********************************************/
/*! exports provided: DrawerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DrawerContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./contexts/drawer/drawer.provider.tsx":
/*!*********************************************!*\
  !*** ./contexts/drawer/drawer.provider.tsx ***!
  \*********************************************/
/*! exports provided: DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _drawer_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer.context */ "./contexts/drawer/drawer.context.tsx");


var _this = undefined,
    _jsxFileName = "E:\\satiwan\\Project_Pick_bazar\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\contexts\\drawer\\drawer.provider.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

var DrawerProvider = function DrawerProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return __jsx(_drawer_context__WEBPACK_IMPORTED_MODULE_2__["DrawerContext"].Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, children);
};

_s(DrawerProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = DrawerProvider;

var _c;

$RefreshReg$(_c, "DrawerProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./helper/debounce.ts":
/*!****************************!*\
  !*** ./helper/debounce.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (debounce);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./helper/useComponentSize.js":
/*!************************************!*\
  !*** ./helper/useComponentSize.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ "./helper/debounce.ts");
var _s = $RefreshSig$();


 // maybe use a hook instead?

function useDimensions() {
  _s();

  var liveMeasure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var initialDimensions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialDimensions),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      node = _useState2[0],
      setNode = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newNode) {
    setNode(newNode);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // need ref to continue
    if (!node) {
      return;
    }

    var measure = function measure() {
      window.requestAnimationFrame(function () {
        var newDimensions = node.getBoundingClientRect();
        setDimensions(newDimensions);
      });
    }; // invoke measure right away


    measure();

    if (liveMeasure) {
      var debounceMeasure = Object(_debounce__WEBPACK_IMPORTED_MODULE_1__["default"])(measure, delay);

      if ('ResizeObserver' in window) {
        var resizeObserver = new ResizeObserver(debounceMeasure);
        resizeObserver.observe(node);
        window.addEventListener('scroll', debounceMeasure);
        return function () {
          resizeObserver.disconnect();
          window.removeEventListener('scroll', debounceMeasure);
        };
      }

      window.addEventListener('resize', debounceMeasure);
      window.addEventListener('scroll', debounceMeasure);
      return function () {
        window.removeEventListener('resize', debounceMeasure);
        window.removeEventListener('scroll', debounceMeasure);
      };
    }
  }, [node, liveMeasure, delay]);
  return [ref, dimensions, node];
}

_s(useDimensions, "mbWjFkT/DNnIEbCGrfVv621KYOQ=");

/* harmony default export */ __webpack_exports__["default"] = (useDimensions); // Usage
// function App() {
//   const [wrapperRef, dimensions] = useDimensions();
//   return (
//     <div ref={wrapperRef}>
//       height: {dimensions.height}
//       width: {dimensions.width}
//     </div>
//   );
// }

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRTovc2F0aXdhbi9Qcm9qZWN0X1BpY2tfYmF6YXIvUGlja2JhemFyIC0gUmVhY3QgR3JhcGhRTCBFY29tbWVyY2UgVGVtcGxhdGUvcGlja2JhemFyL25vZGVfbW9kdWxlcy9hZGQtcHgtdG8tc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0U6L3NhdGl3YW4vUHJvamVjdF9QaWNrX2JhemFyL1BpY2tiYXphciAtIFJlYWN0IEdyYXBoUUwgRWNvbW1lcmNlIFRlbXBsYXRlL3BpY2tiYXphci9ub2RlX21vZHVsZXMvZG9tLWNzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vRTovc2F0aXdhbi9Qcm9qZWN0X1BpY2tfYmF6YXIvUGlja2JhemFyIC0gUmVhY3QgR3JhcGhRTCBFY29tbWVyY2UgVGVtcGxhdGUvcGlja2JhemFyL25vZGVfbW9kdWxlcy9wcmVmaXgtc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0U6L3NhdGl3YW4vUHJvamVjdF9QaWNrX2JhemFyL1BpY2tiYXphciAtIFJlYWN0IEdyYXBoUUwgRWNvbW1lcmNlIFRlbXBsYXRlL3BpY2tiYXphci9ub2RlX21vZHVsZXMvcmMtZHJhd2VyL2VzL0RyYXdlckNoaWxkLmpzIiwid2VicGFjazovLy9FOi9zYXRpd2FuL1Byb2plY3RfUGlja19iYXphci9QaWNrYmF6YXIgLSBSZWFjdCBHcmFwaFFMIEVjb21tZXJjZSBUZW1wbGF0ZS9waWNrYmF6YXIvbm9kZV9tb2R1bGVzL3JjLWRyYXdlci9lcy9EcmF3ZXJXcmFwcGVyLmpzIiwid2VicGFjazovLy9FOi9zYXRpd2FuL1Byb2plY3RfUGlja19iYXphci9QaWNrYmF6YXIgLSBSZWFjdCBHcmFwaFFMIEVjb21tZXJjZSBUZW1wbGF0ZS9waWNrYmF6YXIvbm9kZV9tb2R1bGVzL3JjLWRyYXdlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vRTovc2F0aXdhbi9Qcm9qZWN0X1BpY2tfYmF6YXIvUGlja2JhemFyIC0gUmVhY3QgR3JhcGhRTCBFY29tbWVyY2UgVGVtcGxhdGUvcGlja2JhemFyL25vZGVfbW9kdWxlcy9yYy1kcmF3ZXIvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL0U6L3NhdGl3YW4vUHJvamVjdF9QaWNrX2JhemFyL1BpY2tiYXphciAtIFJlYWN0IEdyYXBoUUwgRWNvbW1lcmNlIFRlbXBsYXRlL3BpY2tiYXphci9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Db250YWluZXJSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vL0U6L3NhdGl3YW4vUHJvamVjdF9QaWNrX2JhemFyL1BpY2tiYXphciAtIFJlYWN0IEdyYXBoUUwgRWNvbW1lcmNlIFRlbXBsYXRlL3BpY2tiYXphci9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9LZXlDb2RlLmpzIiwid2VicGFjazovLy9FOi9zYXRpd2FuL1Byb2plY3RfUGlja19iYXphci9QaWNrYmF6YXIgLSBSZWFjdCBHcmFwaFFMIEVjb21tZXJjZSBUZW1wbGF0ZS9waWNrYmF6YXIvbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvUG9ydGFsLmpzIiwid2VicGFjazovLy9FOi9zYXRpd2FuL1Byb2plY3RfUGlja19iYXphci9QaWNrYmF6YXIgLSBSZWFjdCBHcmFwaFFMIEVjb21tZXJjZSBUZW1wbGF0ZS9waWNrYmF6YXIvbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvUG9ydGFsV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vRTovc2F0aXdhbi9Qcm9qZWN0X1BpY2tfYmF6YXIvUGlja2JhemFyIC0gUmVhY3QgR3JhcGhRTCBFY29tbWVyY2UgVGVtcGxhdGUvcGlja2JhemFyL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL2dldFNjcm9sbEJhclNpemUuanMiLCJ3ZWJwYWNrOi8vL0U6L3NhdGl3YW4vUHJvamVjdF9QaWNrX2JhemFyL1BpY2tiYXphciAtIFJlYWN0IEdyYXBoUUwgRWNvbW1lcmNlIFRlbXBsYXRlL3BpY2tiYXphci9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9zZXRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vRTovc2F0aXdhbi9Qcm9qZWN0X1BpY2tfYmF6YXIvUGlja2JhemFyIC0gUmVhY3QgR3JhcGhRTCBFY29tbWVyY2UgVGVtcGxhdGUvcGlja2JhemFyL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL3N3aXRjaFNjcm9sbGluZ0VmZmVjdC5qcyIsIndlYnBhY2s6Ly8vRTovc2F0aXdhbi9Qcm9qZWN0X1BpY2tfYmF6YXIvUGlja2JhemFyIC0gUmVhY3QgR3JhcGhRTCBFY29tbWVyY2UgVGVtcGxhdGUvcGlja2JhemFyL25vZGVfbW9kdWxlcy9yZWFjdC1jdXN0b20tc2Nyb2xsYmFycy9saWIvU2Nyb2xsYmFycy9kZWZhdWx0UmVuZGVyRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vL0U6L3NhdGl3YW4vUHJvamVjdF9QaWNrX2JhemFyL1BpY2tiYXphciAtIFJlYWN0IEdyYXBoUUwgRWNvbW1lcmNlIFRlbXBsYXRlL3BpY2tiYXphci9ub2RlX21vZHVsZXMvcmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMvbGliL1Njcm9sbGJhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0U6L3NhdGl3YW4vUHJvamVjdF9QaWNrX2JhemFyL1BpY2tiYXphciAtIFJlYWN0IEdyYXBoUUwgRWNvbW1lcmNlIFRlbXBsYXRlL3BpY2tiYXphci9ub2RlX21vZHVsZXMvcmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMvbGliL1Njcm9sbGJhcnMvc3R5bGVzLmpzIiwid2VicGFjazovLy9FOi9zYXRpd2FuL1Byb2plY3RfUGlja19iYXphci9QaWNrYmF6YXIgLSBSZWFjdCBHcmFwaFFMIEVjb21tZXJjZSBUZW1wbGF0ZS9waWNrYmF6YXIvbm9kZV9tb2R1bGVzL3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vRTovc2F0aXdhbi9Qcm9qZWN0X1BpY2tfYmF6YXIvUGlja2JhemFyIC0gUmVhY3QgR3JhcGhRTCBFY29tbWVyY2UgVGVtcGxhdGUvcGlja2JhemFyL25vZGVfbW9kdWxlcy9yZWFjdC1jdXN0b20tc2Nyb2xsYmFycy9saWIvdXRpbHMvZ2V0SW5uZXJIZWlnaHQuanMiLCJ3ZWJwYWNrOi8vL0U6L3NhdGl3YW4vUHJvamVjdF9QaWNrX2JhemFyL1BpY2tiYXphciAtIFJlYWN0IEdyYXBoUUwgRWNvbW1lcmNlIFRlbXBsYXRlL3BpY2tiYXphci9ub2RlX21vZHVsZXMvcmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMvbGliL3V0aWxzL2dldElubmVyV2lkdGguanMiLCJ3ZWJwYWNrOi8vL0U6L3NhdGl3YW4vUHJvamVjdF9QaWNrX2JhemFyL1BpY2tiYXphciAtIFJlYWN0IEdyYXBoUUwgRWNvbW1lcmNlIFRlbXBsYXRlL3BpY2tiYXphci9ub2RlX21vZHVsZXMvcmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMvbGliL3V0aWxzL2dldFNjcm9sbGJhcldpZHRoLmpzIiwid2VicGFjazovLy9FOi9zYXRpd2FuL1Byb2plY3RfUGlja19iYXphci9QaWNrYmF6YXIgLSBSZWFjdCBHcmFwaFFMIEVjb21tZXJjZSBUZW1wbGF0ZS9waWNrYmF6YXIvbm9kZV9tb2R1bGVzL3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzL2xpYi91dGlscy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vRTovc2F0aXdhbi9Qcm9qZWN0X1BpY2tfYmF6YXIvUGlja2JhemFyIC0gUmVhY3QgR3JhcGhRTCBFY29tbWVyY2UgVGVtcGxhdGUvcGlja2JhemFyL25vZGVfbW9kdWxlcy9yZWFjdC1jdXN0b20tc2Nyb2xsYmFycy9saWIvdXRpbHMvcmV0dXJuRmFsc2UuanMiLCJ3ZWJwYWNrOi8vL0U6L3NhdGl3YW4vUHJvamVjdF9QaWNrX2JhemFyL1BpY2tiYXphciAtIFJlYWN0IEdyYXBoUUwgRWNvbW1lcmNlIFRlbXBsYXRlL3BpY2tiYXphci9ub2RlX21vZHVsZXMvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQuZXMuanMiLCJ3ZWJwYWNrOi8vL0U6L3NhdGl3YW4vUHJvamVjdF9QaWNrX2JhemFyL1BpY2tiYXphciAtIFJlYWN0IEdyYXBoUUwgRWNvbW1lcmNlIFRlbXBsYXRlL3BpY2tiYXphci9ub2RlX21vZHVsZXMvdG8tY2FtZWwtY2FzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vRTovc2F0aXdhbi9Qcm9qZWN0X1BpY2tfYmF6YXIvUGlja2JhemFyIC0gUmVhY3QgR3JhcGhRTCBFY29tbWVyY2UgVGVtcGxhdGUvcGlja2JhemFyL25vZGVfbW9kdWxlcy90by1uby1jYXNlL2luZGV4LmpzIiwid2VicGFjazovLy9FOi9zYXRpd2FuL1Byb2plY3RfUGlja19iYXphci9QaWNrYmF6YXIgLSBSZWFjdCBHcmFwaFFMIEVjb21tZXJjZSBUZW1wbGF0ZS9waWNrYmF6YXIvbm9kZV9tb2R1bGVzL3RvLXNwYWNlLWNhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EcmF3ZXIvRHJhd2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dENvbnRhaW5lci9IZWFkZXIvTW9iaWxlRHJhd2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dENvbnRhaW5lci9IZWFkZXIvTW9iaWxlSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLmNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXIudHN4Iiwid2VicGFjazovLy8uL2hlbHBlci9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9oZWxwZXIvdXNlQ29tcG9uZW50U2l6ZS5qcyJdLCJuYW1lcyI6WyJEcmF3ZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImNsb3NlQnV0dG9uIiwiY2xvc2VCdXR0b25TdHlsZSIsImRyYXdlckhhbmRsZXIiLCJ0b2dnbGVIYW5kbGVyIiwib3BlbiIsIndpZHRoIiwicGxhY2VtZW50IiwicHJvcHMiLCJ0cmltIiwiZGlzcGxheSIsImRlZmF1bHRQcm9wcyIsIkRyYXdlck1lbnVJdGVtcyIsImlkIiwiaW50bExhYmVsSWQiLCJsYWJlbCIsImhyZWYiLCJIRUxQX1BBR0UiLCJPRkZFUl9QQUdFIiwiQXV0aGVudGljYXRlZEl0ZW1zIiwiUFJPQ0VFRF9UT19DSEVDS09VVF9QQUdFIiwiUFJPRklMRV9QQUdFIiwiWU9VUl9PUkRFUiIsIk1vYmlsZURyYXdlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsIkF1dGhDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aFN0YXRlIiwiYXV0aERpc3BhdGNoIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiUm91dGVyIiwicHVzaCIsInJlc2V0U2VhcmNoIiwic2lnbkluT3V0Rm9ybSIsIm9wZW5Nb2RhbCIsInNob3ciLCJvdmVybGF5Q2xhc3NOYW1lIiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsImNvbXBvbmVudCIsIkF1dGhlbnRpY2F0aW9uRm9ybSIsImNsb3NlQ29tcG9uZW50IiwiY29uZmlnIiwiZW5hYmxlUmVzaXppbmciLCJkaXNhYmxlRHJhZ2dpbmciLCJoZWlnaHQiLCJpc09wZW4iLCJVc2VySW1hZ2UiLCJtYXAiLCJpdGVtIiwiU2VhcmNoTW9kYWwiLCJwYXRobmFtZSIsImhhbmRsZVNlYXJjaCIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJoYW5kbGVTZWFyY2hJbnB1dCIsInBhZ2UiLCJ1cmxTdGF0ZSIsImhhbmRsZUNsaWNrU2VhcmNoQnV0dG9uIiwicXVlcnkiLCJjbG9zZU1vZGFsIiwiTW9iaWxlSGVhZGVyIiwiU2VhcmNoQ29udGV4dCIsInVzZURpbWVuc2lvbnMiLCJtb2JpbGVIZWFkZXJSZWYiLCJkaW1lbnNpb25zIiwiSGVhZGVyQ29udGV4dCIsImhlYWRlckRpc3BhdGNoIiwiaGVhZGVySGVpZ2h0IiwidXNlRWZmZWN0IiwicGF5bG9hZCIsIm1vYmlsZUhlaWdodCIsImhhbmRsZVNlYXJjaE1vZGFsIiwiY29tcG9uZW50UHJvcHMiLCJpc0hvbWVQYWdlIiwiaXNDYXRlZ29yeVBhZ2UiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlciIsImFjdGlvbiIsIkRyYXdlclByb3ZpZGVyIiwidXNlUmVkdWNlciIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiZXhlY3V0ZWRGdW5jdGlvbiIsImFyZ3MiLCJjb250ZXh0IiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibGl2ZU1lYXN1cmUiLCJkZWxheSIsImluaXRpYWxEaW1lbnNpb25zIiwic2V0RGltZW5zaW9ucyIsIm5vZGUiLCJzZXROb2RlIiwicmVmIiwibmV3Tm9kZSIsIm1lYXN1cmUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJuZXdEaW1lbnNpb25zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGVib3VuY2VNZWFzdXJlIiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIm9ic2VydmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzY29ubmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUN4Q0EsYUFBYSxtQkFBTyxDQUFDLDhEQUFjO0FBQ25DLGtCQUFrQixtQkFBTyxDQUFDLGdFQUFlO0FBQ3pDLGFBQWE7QUFDYixtQkFBbUIsbUJBQU8s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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLHNFQUFPLEU7Ozs7Ozs7Ozs7OztBQzltQnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBdUIs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QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGFBQWE7QUFDekUsMERBQTBELGFBQWE7QUFDdkU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRUFBa0UsYUFBYTtBQUMvRSxnRUFBZ0UsYUFBYTtBQUM3RSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVB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QUFuQixDQUF2QjtBQUNBQyxzQkFBYyxDQUFDRSxPQUFmLENBQXVCWixJQUF2QjtBQUNBSyxjQUFNLENBQUNRLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixlQUFsQztBQUVBLGVBQU8sWUFBTTtBQUNYQyx3QkFBYyxDQUFDSSxVQUFmO0FBQ0FULGdCQUFNLENBQUNVLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTixlQUFyQztBQUNELFNBSEQ7QUFJRDs7QUFDREosWUFBTSxDQUFDUSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0osZUFBbEM7QUFDQUosWUFBTSxDQUFDUSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0osZUFBbEM7QUFFQSxhQUFPLFlBQU07QUFDWEosY0FBTSxDQUFDVSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ04sZUFBckM7QUFDQUosY0FBTSxDQUFDVSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ04sZUFBckM7QUFDRCxPQUhEO0FBSUQ7QUFDRixHQXBDUSxFQW9DTixDQUFDVCxJQUFELEVBQU9KLFdBQVAsRUFBb0JDLEtBQXBCLENBcENNLENBQVQ7QUFzQ0EsU0FBTyxDQUFDSyxHQUFELEVBQU1wQyxVQUFOLEVBQWtCa0MsSUFBbEIsQ0FBUDtBQUNEOztHQW5EUXBDLGE7O0FBcURNQSw0RUFBZixFLENBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy8wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIGZvbGxvd2luZyBsaXN0IGlzIGRlZmluZWQgaW4gUmVhY3QncyBjb3JlICovXG52YXIgSVNfVU5JVExFU1MgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuICBib3hGbGV4OiB0cnVlLFxuICBib3hGbGV4R3JvdXA6IHRydWUsXG4gIGJveE9yZGluYWxHcm91cDogdHJ1ZSxcbiAgY29sdW1uQ291bnQ6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4UG9zaXRpdmU6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcbiAgZmxleE9yZGVyOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcblxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBzdG9wT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogdHJ1ZSxcbiAgc3Ryb2tlT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlV2lkdGg6IHRydWVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgaWYodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhSVNfVU5JVExFU1NbIG5hbWUgXSkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59OyIsInZhciBwcmVmaXggPSByZXF1aXJlKCdwcmVmaXgtc3R5bGUnKVxudmFyIHRvQ2FtZWxDYXNlID0gcmVxdWlyZSgndG8tY2FtZWwtY2FzZScpXG52YXIgY2FjaGUgPSB7ICdmbG9hdCc6ICdjc3NGbG9hdCcgfVxudmFyIGFkZFB4VG9TdHlsZSA9IHJlcXVpcmUoJ2FkZC1weC10by1zdHlsZScpXG5cbmZ1bmN0aW9uIHN0eWxlIChlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgdmFyIGNhbWVsID0gY2FjaGVbcHJvcGVydHldXG4gIGlmICh0eXBlb2YgY2FtZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY2FtZWwgPSBkZXRlY3QocHJvcGVydHkpXG4gIH1cblxuICAvLyBtYXkgYmUgZmFsc2UgaWYgQ1NTIHByb3AgaXMgdW5zdXBwb3J0ZWRcbiAgaWYgKGNhbWVsKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnN0eWxlW2NhbWVsXVxuICAgIH1cblxuICAgIGVsZW1lbnQuc3R5bGVbY2FtZWxdID0gYWRkUHhUb1N0eWxlKGNhbWVsLCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBlYWNoIChlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gIGZvciAodmFyIGsgaW4gcHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBzdHlsZShlbGVtZW50LCBrLCBwcm9wZXJ0aWVzW2tdKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZXRlY3QgKGNzc1Byb3ApIHtcbiAgdmFyIGNhbWVsID0gdG9DYW1lbENhc2UoY3NzUHJvcClcbiAgdmFyIHJlc3VsdCA9IHByZWZpeChjYW1lbClcbiAgY2FjaGVbY2FtZWxdID0gY2FjaGVbY3NzUHJvcF0gPSBjYWNoZVtyZXN1bHRdID0gcmVzdWx0XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gc2V0ICgpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFyZ3VtZW50c1swXS5zdHlsZS5jc3NUZXh0ID0gYXJndW1lbnRzWzFdXG4gICAgfSBlbHNlIHtcbiAgICAgIGVhY2goYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN0eWxlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRcbm1vZHVsZS5leHBvcnRzLnNldCA9IHNldFxuXG5tb2R1bGUuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzKSkge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBwcm9wKSB7XG4gICAgICBvYmpbcHJvcF0gPSBzdHlsZShlbGVtZW50LCBwcm9wIHx8ICcnKVxuICAgICAgcmV0dXJuIG9ialxuICAgIH0sIHt9KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHlsZShlbGVtZW50LCBwcm9wZXJ0aWVzIHx8ICcnKVxuICB9XG59XG4iLCJ2YXIgZGl2ID0gbnVsbFxudmFyIHByZWZpeGVzID0gWyAnV2Via2l0JywgJ01veicsICdPJywgJ21zJyBdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcHJlZml4U3R5bGUgKHByb3ApIHtcbiAgLy8gcmUtdXNlIGEgZHVtbXkgZGl2XG4gIGlmICghZGl2KSB7XG4gICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuXG4gIHZhciBzdHlsZSA9IGRpdi5zdHlsZVxuXG4gIC8vIHByb3AgZXhpc3RzIHdpdGhvdXQgcHJlZml4XG4gIGlmIChwcm9wIGluIHN0eWxlKSB7XG4gICAgcmV0dXJuIHByb3BcbiAgfVxuXG4gIC8vIGJvcmRlclJhZGl1cyAtPiBCb3JkZXJSYWRpdXNcbiAgdmFyIHRpdGxlQ2FzZSA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpXG5cbiAgLy8gZmluZCB0aGUgdmVuZG9yLXByZWZpeGVkIHByb3BcbiAgZm9yICh2YXIgaSA9IHByZWZpeGVzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbmFtZSA9IHByZWZpeGVzW2ldICsgdGl0bGVDYXNlXG4gICAgLy8gZS5nLiBXZWJraXRCb3JkZXJSYWRpdXMgb3Igd2Via2l0Qm9yZGVyUmFkaXVzXG4gICAgaWYgKG5hbWUgaW4gc3R5bGUpIHtcbiAgICAgIHJldHVybiBuYW1lXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBnZXRTY3JvbGxCYXJTaXplIGZyb20gXCJyYy11dGlsL2VzL2dldFNjcm9sbEJhclNpemVcIjtcbmltcG9ydCBLZXlDb2RlIGZyb20gXCJyYy11dGlsL2VzL0tleUNvZGVcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXIsIGRhdGFUb0FycmF5LCBnZXRUb3VjaFBhcmVudFNjcm9sbCwgaXNOdW1lcmljLCByZW1vdmVFdmVudExpc3RlbmVyLCB0cmFuc2Zvcm1Bcmd1bWVudHMsIHRyYW5zaXRpb25FbmQsIHRyYW5zaXRpb25TdHIsIHdpbmRvd0lzVW5kZWZpbmVkIH0gZnJvbSAnLi91dGlscyc7XG52YXIgY3VycmVudERyYXdlciA9IHt9O1xuXG52YXIgRHJhd2VyQ2hpbGQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERyYXdlckNoaWxkLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERyYXdlckNoaWxkKTtcblxuICBmdW5jdGlvbiBEcmF3ZXJDaGlsZChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmF3ZXJDaGlsZCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF90aGlzLmRvbUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmRvbSkge1xuICAgICAgICBfdGhpcy5kb20uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVtb3ZlU3RhcnRIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnN0YXJ0UG9zID0ge1xuICAgICAgICB4OiBlLnRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgeTogZS50b3VjaGVzWzBdLmNsaWVudFlcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLnJlbW92ZU1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIHZhciBkaWZmZXJYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gX3RoaXMuc3RhcnRQb3MueDtcbiAgICAgIHZhciBkaWZmZXJZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gX3RoaXMuc3RhcnRQb3MueTtcblxuICAgICAgaWYgKGN1cnJlbnRUYXJnZXQgPT09IF90aGlzLm1hc2tEb20gfHwgY3VycmVudFRhcmdldCA9PT0gX3RoaXMuaGFuZGxlckRvbSB8fCBjdXJyZW50VGFyZ2V0ID09PSBfdGhpcy5jb250ZW50RG9tICYmIGdldFRvdWNoUGFyZW50U2Nyb2xsKGN1cnJlbnRUYXJnZXQsIGUudGFyZ2V0LCBkaWZmZXJYLCBkaWZmZXJZKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGRvbSA9IGUudGFyZ2V0O1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihkb20sIHRyYW5zaXRpb25FbmQsIF90aGlzLnRyYW5zaXRpb25FbmQpO1xuICAgICAgZG9tLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB9O1xuXG4gICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuRVNDKSB7XG4gICAgICAgIHZhciBvbkNsb3NlID0gX3RoaXMucHJvcHMub25DbG9zZTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICAgIG9uQ2xvc2UoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcGVuID0gX3RoaXMkcHJvcHMub3BlbixcbiAgICAgICAgICBhZnRlclZpc2libGVDaGFuZ2UgPSBfdGhpcyRwcm9wcy5hZnRlclZpc2libGVDaGFuZ2U7XG5cbiAgICAgIGlmIChlLnRhcmdldCA9PT0gX3RoaXMuY29udGVudFdyYXBwZXIgJiYgZS5wcm9wZXJ0eU5hbWUubWF0Y2goL3RyYW5zZm9ybSQvKSkge1xuICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuXG4gICAgICAgIGlmICghb3BlbiAmJiBfdGhpcy5nZXRDdXJyZW50RHJhd2VyU29tZSgpKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1ggPSAnJztcblxuICAgICAgICAgIGlmIChfdGhpcy5tYXNrRG9tKSB7XG4gICAgICAgICAgICBfdGhpcy5tYXNrRG9tLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgICAgIF90aGlzLm1hc2tEb20uc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWZ0ZXJWaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgYWZ0ZXJWaXNpYmxlQ2hhbmdlKCEhb3Blbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub3BlbkxldmVsVHJhbnNpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcGVuID0gX3RoaXMkcHJvcHMyLm9wZW4sXG4gICAgICAgICAgd2lkdGggPSBfdGhpcyRwcm9wczIud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHMyLmhlaWdodDtcblxuICAgICAgdmFyIF90aGlzJGdldEhvcml6b250YWxCbyA9IF90aGlzLmdldEhvcml6b250YWxCb29sQW5kUGxhY2VtZW50TmFtZSgpLFxuICAgICAgICAgIGlzSG9yaXpvbnRhbCA9IF90aGlzJGdldEhvcml6b250YWxCby5pc0hvcml6b250YWwsXG4gICAgICAgICAgcGxhY2VtZW50TmFtZSA9IF90aGlzJGdldEhvcml6b250YWxCby5wbGFjZW1lbnROYW1lO1xuXG4gICAgICB2YXIgY29udGVudFZhbHVlID0gX3RoaXMuY29udGVudERvbSA/IF90aGlzLmNvbnRlbnREb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbaXNIb3Jpem9udGFsID8gJ3dpZHRoJyA6ICdoZWlnaHQnXSA6IDA7XG4gICAgICB2YXIgdmFsdWUgPSAoaXNIb3Jpem9udGFsID8gd2lkdGggOiBoZWlnaHQpIHx8IGNvbnRlbnRWYWx1ZTtcblxuICAgICAgX3RoaXMuc2V0TGV2ZWxBbmRTY3JvbGxpbmcob3BlbiwgcGxhY2VtZW50TmFtZSwgdmFsdWUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRMZXZlbFRyYW5zZm9ybSA9IGZ1bmN0aW9uIChvcGVuLCBwbGFjZW1lbnROYW1lLCB2YWx1ZSwgcmlnaHQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBwbGFjZW1lbnQgPSBfdGhpcyRwcm9wczMucGxhY2VtZW50LFxuICAgICAgICAgIGxldmVsTW92ZSA9IF90aGlzJHByb3BzMy5sZXZlbE1vdmUsXG4gICAgICAgICAgZHVyYXRpb24gPSBfdGhpcyRwcm9wczMuZHVyYXRpb24sXG4gICAgICAgICAgZWFzZSA9IF90aGlzJHByb3BzMy5lYXNlLFxuICAgICAgICAgIHNob3dNYXNrID0gX3RoaXMkcHJvcHMzLnNob3dNYXNrOyAvLyByb3V0ZXIg5YiH5o2i5pe25Y+v6IO95Lya5a+86Iez6aG16Z2i5aSx5Y675rua5Yqo5p2h77yM5omA5Lul6ZyA6KaB5pe25pe26I635Y+W44CCXG5cbiAgICAgIF90aGlzLmxldmVsRG9tLmZvckVhY2goZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICBkb20uc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIFwiLmNvbmNhdChkdXJhdGlvbiwgXCIgXCIpLmNvbmNhdChlYXNlKTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihkb20sIHRyYW5zaXRpb25FbmQsIF90aGlzLnRyYW5zaXRpb25FbmQpO1xuICAgICAgICB2YXIgbGV2ZWxWYWx1ZSA9IG9wZW4gPyB2YWx1ZSA6IDA7XG5cbiAgICAgICAgaWYgKGxldmVsTW92ZSkge1xuICAgICAgICAgIHZhciAkbGV2ZWxNb3ZlID0gdHJhbnNmb3JtQXJndW1lbnRzKGxldmVsTW92ZSwge1xuICAgICAgICAgICAgdGFyZ2V0OiBkb20sXG4gICAgICAgICAgICBvcGVuOiBvcGVuXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV2ZWxWYWx1ZSA9IG9wZW4gPyAkbGV2ZWxNb3ZlWzBdIDogJGxldmVsTW92ZVsxXSB8fCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyICR2YWx1ZSA9IHR5cGVvZiBsZXZlbFZhbHVlID09PSAnbnVtYmVyJyA/IFwiXCIuY29uY2F0KGxldmVsVmFsdWUsIFwicHhcIikgOiBsZXZlbFZhbHVlO1xuICAgICAgICB2YXIgcGxhY2VtZW50UG9zID0gcGxhY2VtZW50ID09PSAnbGVmdCcgfHwgcGxhY2VtZW50ID09PSAndG9wJyA/ICR2YWx1ZSA6IFwiLVwiLmNvbmNhdCgkdmFsdWUpO1xuICAgICAgICBwbGFjZW1lbnRQb3MgPSBzaG93TWFzayAmJiBwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgcmlnaHQgPyBcImNhbGMoXCIuY29uY2F0KHBsYWNlbWVudFBvcywgXCIgKyBcIikuY29uY2F0KHJpZ2h0LCBcInB4KVwiKSA6IHBsYWNlbWVudFBvcztcbiAgICAgICAgZG9tLnN0eWxlLnRyYW5zZm9ybSA9IGxldmVsVmFsdWUgPyBcIlwiLmNvbmNhdChwbGFjZW1lbnROYW1lLCBcIihcIikuY29uY2F0KHBsYWNlbWVudFBvcywgXCIpXCIpIDogJyc7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0TGV2ZWxBbmRTY3JvbGxpbmcgPSBmdW5jdGlvbiAob3BlbiwgcGxhY2VtZW50TmFtZSwgdmFsdWUpIHtcbiAgICAgIHZhciBvbkNoYW5nZSA9IF90aGlzLnByb3BzLm9uQ2hhbmdlO1xuXG4gICAgICBpZiAoIXdpbmRvd0lzVW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciByaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPyBnZXRTY3JvbGxCYXJTaXplKHRydWUpIDogMDtcblxuICAgICAgICBfdGhpcy5zZXRMZXZlbFRyYW5zZm9ybShvcGVuLCBwbGFjZW1lbnROYW1lLCB2YWx1ZSwgcmlnaHQpO1xuXG4gICAgICAgIF90aGlzLnRvZ2dsZVNjcm9sbGluZ1RvRHJhd2VyQW5kQm9keShyaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZShvcGVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMudG9nZ2xlU2Nyb2xsaW5nVG9EcmF3ZXJBbmRCb2R5ID0gZnVuY3Rpb24gKHJpZ2h0KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZ2V0T3BlbkNvdW50ID0gX3RoaXMkcHJvcHM0LmdldE9wZW5Db3VudCxcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBfdGhpcyRwcm9wczQuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIHNob3dNYXNrID0gX3RoaXMkcHJvcHM0LnNob3dNYXNrLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczQub3BlbjtcbiAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIgJiYgZ2V0Q29udGFpbmVyKCk7XG4gICAgICB2YXIgb3BlbkNvdW50ID0gZ2V0T3BlbkNvdW50ICYmIGdldE9wZW5Db3VudCgpOyAvLyDlpITnkIYgYm9keSDmu5rliqhcblxuICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIucGFyZW50Tm9kZSA9PT0gZG9jdW1lbnQuYm9keSAmJiBzaG93TWFzaykge1xuICAgICAgICB2YXIgZXZlbnRBcnJheSA9IFsndG91Y2hzdGFydCddO1xuICAgICAgICB2YXIgZG9tQXJyYXkgPSBbZG9jdW1lbnQuYm9keSwgX3RoaXMubWFza0RvbSwgX3RoaXMuaGFuZGxlckRvbSwgX3RoaXMuY29udGVudERvbV07XG5cbiAgICAgICAgaWYgKG9wZW4gJiYgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICBpZiAocmlnaHQpIHtcbiAgICAgICAgICAgIF90aGlzLmFkZFNjcm9sbGluZ0VmZmVjdChyaWdodCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9wZW5Db3VudCA9PT0gMSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7IC8vIOaJi+acuuemgea7mlxuXG4gICAgICAgICAgZG9tQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihpdGVtLCBldmVudEFycmF5W2ldIHx8ICd0b3VjaG1vdmUnLCBpID8gX3RoaXMucmVtb3ZlTW92ZUhhbmRsZXIgOiBfdGhpcy5yZW1vdmVTdGFydEhhbmRsZXIsIF90aGlzLnBhc3NpdmUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGlzLmdldEN1cnJlbnREcmF3ZXJTb21lKCkpIHtcbiAgICAgICAgICAvLyDmsqHmnInlvLnmoYbnmoTnirbmgIHkuIvmuIXpmaQgb3ZlcmZsb3c7XG4gICAgICAgICAgaWYgKCFvcGVuQ291bnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvdWNoQWN0aW9uID0gJyc7XG5cbiAgICAgICAgICBpZiAocmlnaHQpIHtcbiAgICAgICAgICAgIF90aGlzLnJlbVNjcm9sbGluZ0VmZmVjdChyaWdodCk7XG4gICAgICAgICAgfSAvLyDmgaLlpI3kuovku7ZcblxuXG4gICAgICAgICAgZG9tQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihpdGVtLCBldmVudEFycmF5W2ldIHx8ICd0b3VjaG1vdmUnLCBpID8gX3RoaXMucmVtb3ZlTW92ZUhhbmRsZXIgOiBfdGhpcy5yZW1vdmVTdGFydEhhbmRsZXIsIF90aGlzLnBhc3NpdmUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmFkZFNjcm9sbGluZ0VmZmVjdCA9IGZ1bmN0aW9uIChyaWdodCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzNS5wbGFjZW1lbnQsXG4gICAgICAgICAgZHVyYXRpb24gPSBfdGhpcyRwcm9wczUuZHVyYXRpb24sXG4gICAgICAgICAgZWFzZSA9IF90aGlzJHByb3BzNS5lYXNlLFxuICAgICAgICAgIGdldE9wZW5Db3VudCA9IF90aGlzJHByb3BzNS5nZXRPcGVuQ291bnQsXG4gICAgICAgICAgc3dpdGNoU2Nyb2xsaW5nRWZmZWN0ID0gX3RoaXMkcHJvcHM1LnN3aXRjaFNjcm9sbGluZ0VmZmVjdDtcbiAgICAgIHZhciBvcGVuQ291bnQgPSBnZXRPcGVuQ291bnQgJiYgZ2V0T3BlbkNvdW50KCk7XG5cbiAgICAgIGlmIChvcGVuQ291bnQgPT09IDEpIHtcbiAgICAgICAgc3dpdGNoU2Nyb2xsaW5nRWZmZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB3aWR0aFRyYW5zaXRpb24gPSBcIndpZHRoIFwiLmNvbmNhdChkdXJhdGlvbiwgXCIgXCIpLmNvbmNhdChlYXNlKTtcbiAgICAgIHZhciB0cmFuc2Zvcm1UcmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gXCIuY29uY2F0KGR1cmF0aW9uLCBcIiBcIikuY29uY2F0KGVhc2UpO1xuICAgICAgX3RoaXMuZG9tLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG5cbiAgICAgIHN3aXRjaCAocGxhY2VtZW50KSB7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC1cIi5jb25jYXQocmlnaHQsIFwicHgpXCIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLndpZHRoID0gXCJjYWxjKDEwMCUgLSBcIi5jb25jYXQocmlnaHQsIFwicHgpXCIpO1xuICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWigwKSc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnRpbWVvdXQpO1xuICAgICAgX3RoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuZG9tKSB7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiLmNvbmNhdCh0cmFuc2Zvcm1UcmFuc2l0aW9uLCBcIixcIikuY29uY2F0KHdpZHRoVHJhbnNpdGlvbik7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVtU2Nyb2xsaW5nRWZmZWN0ID0gZnVuY3Rpb24gKHJpZ2h0KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcGxhY2VtZW50ID0gX3RoaXMkcHJvcHM2LnBsYWNlbWVudCxcbiAgICAgICAgICBkdXJhdGlvbiA9IF90aGlzJHByb3BzNi5kdXJhdGlvbixcbiAgICAgICAgICBlYXNlID0gX3RoaXMkcHJvcHM2LmVhc2UsXG4gICAgICAgICAgZ2V0T3BlbkNvdW50ID0gX3RoaXMkcHJvcHM2LmdldE9wZW5Db3VudCxcbiAgICAgICAgICBzd2l0Y2hTY3JvbGxpbmdFZmZlY3QgPSBfdGhpcyRwcm9wczYuc3dpdGNoU2Nyb2xsaW5nRWZmZWN0O1xuICAgICAgdmFyIG9wZW5Db3VudCA9IGdldE9wZW5Db3VudCAmJiBnZXRPcGVuQ291bnQoKTtcblxuICAgICAgaWYgKCFvcGVuQ291bnQpIHtcbiAgICAgICAgc3dpdGNoU2Nyb2xsaW5nRWZmZWN0KHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNpdGlvblN0cikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgIHZhciBoZWlnaHRUcmFuc2l0aW9uO1xuICAgICAgdmFyIHdpZHRoVHJhbnNpdGlvbiA9IFwid2lkdGggXCIuY29uY2F0KGR1cmF0aW9uLCBcIiBcIikuY29uY2F0KGVhc2UpO1xuICAgICAgdmFyIHRyYW5zZm9ybVRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSBcIi5jb25jYXQoZHVyYXRpb24sIFwiIFwiKS5jb25jYXQoZWFzZSk7XG5cbiAgICAgIHN3aXRjaCAocGxhY2VtZW50KSB7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIHdpZHRoVHJhbnNpdGlvbiA9IFwid2lkdGggMHMgXCIuY29uY2F0KGVhc2UsIFwiIFwiKS5jb25jYXQoZHVyYXRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdChyaWdodCwgXCJweClcIik7XG4gICAgICAgICAgICBfdGhpcy5kb20uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICB3aWR0aFRyYW5zaXRpb24gPSBcIndpZHRoIDBzIFwiLmNvbmNhdChlYXNlLCBcIiBcIikuY29uY2F0KGR1cmF0aW9uKTtcblxuICAgICAgICAgICAgaWYgKF90aGlzLm1hc2tEb20pIHtcbiAgICAgICAgICAgICAgX3RoaXMubWFza0RvbS5zdHlsZS5sZWZ0ID0gXCItXCIuY29uY2F0KHJpZ2h0LCBcInB4XCIpO1xuICAgICAgICAgICAgICBfdGhpcy5tYXNrRG9tLnN0eWxlLndpZHRoID0gXCJjYWxjKDEwMCUgKyBcIi5jb25jYXQocmlnaHQsIFwicHgpXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcy5kb20uc3R5bGUud2lkdGggPSBcImNhbGMoMTAwJSArIFwiLmNvbmNhdChyaWdodCwgXCJweClcIik7XG4gICAgICAgICAgICBfdGhpcy5kb20uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVaKDApJztcbiAgICAgICAgICAgIGhlaWdodFRyYW5zaXRpb24gPSBcImhlaWdodCAwcyBcIi5jb25jYXQoZWFzZSwgXCIgXCIpLmNvbmNhdChkdXJhdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnRpbWVvdXQpO1xuICAgICAgX3RoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuZG9tKSB7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiLmNvbmNhdCh0cmFuc2Zvcm1UcmFuc2l0aW9uLCBcIixcIikuY29uY2F0KGhlaWdodFRyYW5zaXRpb24gPyBcIlwiLmNvbmNhdChoZWlnaHRUcmFuc2l0aW9uLCBcIixcIikgOiAnJykuY29uY2F0KHdpZHRoVHJhbnNpdGlvbik7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldEN1cnJlbnREcmF3ZXJTb21lID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyhjdXJyZW50RHJhd2VyKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnREcmF3ZXJba2V5XTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRMZXZlbERvbSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgbGV2ZWwgPSBfcmVmLmxldmVsLFxuICAgICAgICAgIGdldENvbnRhaW5lciA9IF9yZWYuZ2V0Q29udGFpbmVyO1xuXG4gICAgICBpZiAod2luZG93SXNVbmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyICYmIGdldENvbnRhaW5lcigpO1xuICAgICAgdmFyIHBhcmVudCA9IGNvbnRhaW5lciA/IGNvbnRhaW5lci5wYXJlbnROb2RlIDogbnVsbDtcbiAgICAgIF90aGlzLmxldmVsRG9tID0gW107XG5cbiAgICAgIGlmIChsZXZlbCA9PT0gJ2FsbCcpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gcGFyZW50ID8gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50LmNoaWxkcmVuKSA6IFtdO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIGlmIChjaGlsZC5ub2RlTmFtZSAhPT0gJ1NDUklQVCcgJiYgY2hpbGQubm9kZU5hbWUgIT09ICdTVFlMRScgJiYgY2hpbGQubm9kZU5hbWUgIT09ICdMSU5LJyAmJiBjaGlsZCAhPT0gY29udGFpbmVyKSB7XG4gICAgICAgICAgICBfdGhpcy5sZXZlbERvbS5wdXNoKGNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChsZXZlbCkge1xuICAgICAgICBkYXRhVG9BcnJheShsZXZlbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChrZXkpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIF90aGlzLmxldmVsRG9tLnB1c2goaXRlbSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRIb3Jpem9udGFsQm9vbEFuZFBsYWNlbWVudE5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3RoaXMucHJvcHMucGxhY2VtZW50O1xuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnIHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JztcbiAgICAgIHZhciBwbGFjZW1lbnROYW1lID0gXCJ0cmFuc2xhdGVcIi5jb25jYXQoaXNIb3Jpem9udGFsID8gJ1gnIDogJ1knKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzSG9yaXpvbnRhbDogaXNIb3Jpem9udGFsLFxuICAgICAgICBwbGFjZW1lbnROYW1lOiBwbGFjZW1lbnROYW1lXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIF9zZWxmOiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyYXdlckNoaWxkLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoIXdpbmRvd0lzVW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgICAgIHRoaXMucGFzc2l2ZSA9IHBhc3NpdmVTdXBwb3J0ZWQgPyB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgfSA6IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3BlbiA9IHRoaXMucHJvcHMub3BlbjtcbiAgICAgIHRoaXMuZHJhd2VySWQgPSBcImRyYXdlcl9pZF9cIi5jb25jYXQoTnVtYmVyKChEYXRlLm5vdygpICsgTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSkudG9TdHJpbmcoKSkpLnRvU3RyaW5nKDE2KSk7XG4gICAgICB0aGlzLmdldExldmVsRG9tKHRoaXMucHJvcHMpO1xuXG4gICAgICBpZiAob3Blbikge1xuICAgICAgICBjdXJyZW50RHJhd2VyW3RoaXMuZHJhd2VySWRdID0gb3BlbjsgLy8g6buY6K6k5omT5byA54q25oCB5pe25o6o5Ye6IGxldmVsO1xuXG4gICAgICAgIHRoaXMub3BlbkxldmVsVHJhbnNpdGlvbigpO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuZG9tRm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgb3BlbiA9IHRoaXMucHJvcHMub3BlbjtcblxuICAgICAgaWYgKG9wZW4gIT09IHByZXZQcm9wcy5vcGVuKSB7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgdGhpcy5kb21Gb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudERyYXdlclt0aGlzLmRyYXdlcklkXSA9ICEhb3BlbjtcbiAgICAgICAgdGhpcy5vcGVuTGV2ZWxUcmFuc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZ2V0T3BlbkNvdW50ID0gX3RoaXMkcHJvcHM3LmdldE9wZW5Db3VudCxcbiAgICAgICAgICBvcGVuID0gX3RoaXMkcHJvcHM3Lm9wZW4sXG4gICAgICAgICAgc3dpdGNoU2Nyb2xsaW5nRWZmZWN0ID0gX3RoaXMkcHJvcHM3LnN3aXRjaFNjcm9sbGluZ0VmZmVjdDtcbiAgICAgIHZhciBvcGVuQ291bnQgPSB0eXBlb2YgZ2V0T3BlbkNvdW50ID09PSAnZnVuY3Rpb24nICYmIGdldE9wZW5Db3VudCgpO1xuICAgICAgZGVsZXRlIGN1cnJlbnREcmF3ZXJbdGhpcy5kcmF3ZXJJZF07XG5cbiAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgIHRoaXMuc2V0TGV2ZWxUcmFuc2Zvcm0oZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvdWNoQWN0aW9uID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3BlbkNvdW50KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgc3dpdGNoU2Nyb2xsaW5nRWZmZWN0KHRydWUpO1xuICAgICAgfVxuICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1lbWJlci1vcmRlcmluZ1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfY2xhc3NuYW1lcyxcbiAgICAgICAgICBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczguY2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHM4LmNoaWxkcmVuLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHM4LnN0eWxlLFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHM4LndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IF90aGlzJHByb3BzOC5oZWlnaHQsXG4gICAgICAgICAgZGVmYXVsdE9wZW4gPSBfdGhpcyRwcm9wczguZGVmYXVsdE9wZW4sXG4gICAgICAgICAgJG9wZW4gPSBfdGhpcyRwcm9wczgub3BlbixcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczgucHJlZml4Q2xzLFxuICAgICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzOC5wbGFjZW1lbnQsXG4gICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wczgubGV2ZWwsXG4gICAgICAgICAgbGV2ZWxNb3ZlID0gX3RoaXMkcHJvcHM4LmxldmVsTW92ZSxcbiAgICAgICAgICBlYXNlID0gX3RoaXMkcHJvcHM4LmVhc2UsXG4gICAgICAgICAgZHVyYXRpb24gPSBfdGhpcyRwcm9wczguZHVyYXRpb24sXG4gICAgICAgICAgZ2V0Q29udGFpbmVyID0gX3RoaXMkcHJvcHM4LmdldENvbnRhaW5lcixcbiAgICAgICAgICBoYW5kbGVyID0gX3RoaXMkcHJvcHM4LmhhbmRsZXIsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wczgub25DaGFuZ2UsXG4gICAgICAgICAgYWZ0ZXJWaXNpYmxlQ2hhbmdlID0gX3RoaXMkcHJvcHM4LmFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgICBzaG93TWFzayA9IF90aGlzJHByb3BzOC5zaG93TWFzayxcbiAgICAgICAgICBtYXNrQ2xvc2FibGUgPSBfdGhpcyRwcm9wczgubWFza0Nsb3NhYmxlLFxuICAgICAgICAgIG1hc2tTdHlsZSA9IF90aGlzJHByb3BzOC5tYXNrU3R5bGUsXG4gICAgICAgICAgb25DbG9zZSA9IF90aGlzJHByb3BzOC5vbkNsb3NlLFxuICAgICAgICAgIG9uSGFuZGxlQ2xpY2sgPSBfdGhpcyRwcm9wczgub25IYW5kbGVDbGljayxcbiAgICAgICAgICBrZXlib2FyZCA9IF90aGlzJHByb3BzOC5rZXlib2FyZCxcbiAgICAgICAgICBnZXRPcGVuQ291bnQgPSBfdGhpcyRwcm9wczguZ2V0T3BlbkNvdW50LFxuICAgICAgICAgIHN3aXRjaFNjcm9sbGluZ0VmZmVjdCA9IF90aGlzJHByb3BzOC5zd2l0Y2hTY3JvbGxpbmdFZmZlY3QsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHM4LCBbXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcInN0eWxlXCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJkZWZhdWx0T3BlblwiLCBcIm9wZW5cIiwgXCJwcmVmaXhDbHNcIiwgXCJwbGFjZW1lbnRcIiwgXCJsZXZlbFwiLCBcImxldmVsTW92ZVwiLCBcImVhc2VcIiwgXCJkdXJhdGlvblwiLCBcImdldENvbnRhaW5lclwiLCBcImhhbmRsZXJcIiwgXCJvbkNoYW5nZVwiLCBcImFmdGVyVmlzaWJsZUNoYW5nZVwiLCBcInNob3dNYXNrXCIsIFwibWFza0Nsb3NhYmxlXCIsIFwibWFza1N0eWxlXCIsIFwib25DbG9zZVwiLCBcIm9uSGFuZGxlQ2xpY2tcIiwgXCJrZXlib2FyZFwiLCBcImdldE9wZW5Db3VudFwiLCBcInN3aXRjaFNjcm9sbGluZ0VmZmVjdFwiXSk7IC8vIOmmluasoea4suafk+mDveWwhuaYr+WFs+mXreeKtuaAgeOAglxuXG5cbiAgICAgIHZhciBvcGVuID0gdGhpcy5kb20gPyAkb3BlbiA6IGZhbHNlO1xuICAgICAgdmFyIHdyYXBwZXJDbGFzc05hbWUgPSBjbGFzc25hbWVzKHByZWZpeENscywgKF9jbGFzc25hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHBsYWNlbWVudCksIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3BlblwiKSwgb3BlbiksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgY2xhc3NOYW1lIHx8ICcnLCAhIWNsYXNzTmFtZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgJ25vLW1hc2snLCAhc2hvd01hc2spLCBfY2xhc3NuYW1lcykpO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0SG9yaXpvbnRhbEJvMiA9IHRoaXMuZ2V0SG9yaXpvbnRhbEJvb2xBbmRQbGFjZW1lbnROYW1lKCksXG4gICAgICAgICAgcGxhY2VtZW50TmFtZSA9IF90aGlzJGdldEhvcml6b250YWxCbzIucGxhY2VtZW50TmFtZTsgLy8g55m+5YiG5q+U5LiO5YOP57Sg5Yqo55S75LiN5ZCM5q2l77yM56ys5LiA5qyh5omT55So5ZCO5YWo55So5YOP57Sg5Yqo55S744CCXG4gICAgICAvLyBjb25zdCBkZWZhdWx0VmFsdWUgPSAhdGhpcy5jb250ZW50RG9tIHx8ICFsZXZlbCA/ICcxMDAlJyA6IGAke3ZhbHVlfXB4YDtcblxuXG4gICAgICB2YXIgcGxhY2VtZW50UG9zID0gcGxhY2VtZW50ID09PSAnbGVmdCcgfHwgcGxhY2VtZW50ID09PSAndG9wJyA/ICctMTAwJScgOiAnMTAwJSc7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gb3BlbiA/ICcnIDogXCJcIi5jb25jYXQocGxhY2VtZW50TmFtZSwgXCIoXCIpLmNvbmNhdChwbGFjZW1lbnRQb3MsIFwiKVwiKTtcbiAgICAgIHZhciBoYW5kbGVyQ2hpbGRyZW4gPSBoYW5kbGVyICYmIFJlYWN0LmNsb25lRWxlbWVudChoYW5kbGVyLCB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIGlmIChoYW5kbGVyLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICAgIGhhbmRsZXIucHJvcHMub25DbGljaygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvbkhhbmRsZUNsaWNrKSB7XG4gICAgICAgICAgICBvbkhhbmRsZUNsaWNrKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgIF90aGlzMy5oYW5kbGVyRG9tID0gYztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICB0YWJJbmRleDogLTEsXG4gICAgICAgIGNsYXNzTmFtZTogd3JhcHBlckNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgX3RoaXMzLmRvbSA9IGM7XG4gICAgICAgIH0sXG4gICAgICAgIG9uS2V5RG93bjogb3BlbiAmJiBrZXlib2FyZCA/IHRoaXMub25LZXlEb3duIDogdW5kZWZpbmVkLFxuICAgICAgICBvblRyYW5zaXRpb25FbmQ6IHRoaXMub25XcmFwcGVyVHJhbnNpdGlvbkVuZFxuICAgICAgfSksIHNob3dNYXNrICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWFza1wiKSxcbiAgICAgICAgb25DbGljazogbWFza0Nsb3NhYmxlID8gb25DbG9zZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgc3R5bGU6IG1hc2tTdHlsZSxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgIF90aGlzMy5tYXNrRG9tID0gYztcbiAgICAgICAgfVxuICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGVudC13cmFwcGVyXCIpLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgIG1zVHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgd2lkdGg6IGlzTnVtZXJpYyh3aWR0aCkgPyBcIlwiLmNvbmNhdCh3aWR0aCwgXCJweFwiKSA6IHdpZHRoLFxuICAgICAgICAgIGhlaWdodDogaXNOdW1lcmljKGhlaWdodCkgPyBcIlwiLmNvbmNhdChoZWlnaHQsIFwicHhcIikgOiBoZWlnaHRcbiAgICAgICAgfSxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgIF90aGlzMy5jb250ZW50V3JhcHBlciA9IGM7XG4gICAgICAgIH1cbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGVudFwiKSxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgIF90aGlzMy5jb250ZW50RG9tID0gYztcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiBvcGVuICYmIHNob3dNYXNrID8gdGhpcy5yZW1vdmVTdGFydEhhbmRsZXIgOiB1bmRlZmluZWQsXG4gICAgICAgIG9uVG91Y2hNb3ZlOiBvcGVuICYmIHNob3dNYXNrID8gdGhpcy5yZW1vdmVNb3ZlSGFuZGxlciA6IHVuZGVmaW5lZFxuICAgICAgfSwgY2hpbGRyZW4pLCBoYW5kbGVyQ2hpbGRyZW4pKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBfcmVmMikge1xuICAgICAgdmFyIHByZXZQcm9wcyA9IF9yZWYyLnByZXZQcm9wcyxcbiAgICAgICAgICBfc2VsZiA9IF9yZWYyLl9zZWxmO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgcHJldlByb3BzOiBwcm9wc1xuICAgICAgfTtcblxuICAgICAgaWYgKHByZXZQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBwbGFjZW1lbnQgPSBwcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgICAgICBsZXZlbCA9IHByb3BzLmxldmVsO1xuXG4gICAgICAgIGlmIChwbGFjZW1lbnQgIT09IHByZXZQcm9wcy5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAvLyB0ZXN0IOeahCBidWcsIOacieWKqOeUu+i/h+Wcuu+8jOWIoOmZpCBkb21cbiAgICAgICAgICBfc2VsZi5jb250ZW50RG9tID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZXZlbCAhPT0gcHJldlByb3BzLmxldmVsKSB7XG4gICAgICAgICAgX3NlbGYuZ2V0TGV2ZWxEb20ocHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyYXdlckNoaWxkO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5EcmF3ZXJDaGlsZC5kZWZhdWx0UHJvcHMgPSB7XG4gIHN3aXRjaFNjcm9sbGluZ0VmZmVjdDogZnVuY3Rpb24gc3dpdGNoU2Nyb2xsaW5nRWZmZWN0KCkge31cbn07XG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJDaGlsZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgUG9ydGFsIGZyb20gXCJyYy11dGlsL2VzL1BvcnRhbFdyYXBwZXJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGlsZCBmcm9tICcuL0RyYXdlckNoaWxkJztcblxudmFyIERyYXdlcldyYXBwZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERyYXdlcldyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRHJhd2VyV3JhcHBlcik7XG5cbiAgZnVuY3Rpb24gRHJhd2VyV3JhcHBlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmF3ZXJXcmFwcGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX3RoaXMub25IYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkhhbmRsZUNsaWNrID0gX3RoaXMkcHJvcHMub25IYW5kbGVDbGljayxcbiAgICAgICAgICAkb3BlbiA9IF90aGlzJHByb3BzLm9wZW47XG5cbiAgICAgIGlmIChvbkhhbmRsZUNsaWNrKSB7XG4gICAgICAgIG9uSGFuZGxlQ2xpY2soZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgJG9wZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBfb3BlbiA9IF90aGlzLnN0YXRlLm9wZW47XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46ICFfb3BlblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25DbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25DbG9zZSA9IF90aGlzJHByb3BzMi5vbkNsb3NlLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczIub3BlbjtcblxuICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgb25DbG9zZShlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcGVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvcGVuID0gdHlwZW9mIHByb3BzLm9wZW4gIT09ICd1bmRlZmluZWQnID8gcHJvcHMub3BlbiA6ICEhcHJvcHMuZGVmYXVsdE9wZW47XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBvcGVuXG4gICAgfTtcblxuICAgIGlmICgnb25NYXNrQ2xpY2snIGluIHByb3BzKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2Bvbk1hc2tDbGlja2AgYXJlIHJlbW92ZWQsIHBsZWFzZSB1c2UgYG9uQ2xvc2VgIGluc3RlYWQuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyYXdlcldyYXBwZXIsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptZW1iZXItb3JkZXJpbmdcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlZmF1bHRPcGVuID0gX3RoaXMkcHJvcHMzLmRlZmF1bHRPcGVuLFxuICAgICAgICAgIGdldENvbnRhaW5lciA9IF90aGlzJHByb3BzMy5nZXRDb250YWluZXIsXG4gICAgICAgICAgd3JhcHBlckNsYXNzTmFtZSA9IF90aGlzJHByb3BzMy53cmFwcGVyQ2xhc3NOYW1lLFxuICAgICAgICAgIGZvcmNlUmVuZGVyID0gX3RoaXMkcHJvcHMzLmZvcmNlUmVuZGVyLFxuICAgICAgICAgIGhhbmRsZXIgPSBfdGhpcyRwcm9wczMuaGFuZGxlcixcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wczMsIFtcImRlZmF1bHRPcGVuXCIsIFwiZ2V0Q29udGFpbmVyXCIsIFwid3JhcHBlckNsYXNzTmFtZVwiLCBcImZvcmNlUmVuZGVyXCIsIFwiaGFuZGxlclwiXSk7XG5cbiAgICAgIHZhciBvcGVuID0gdGhpcy5zdGF0ZS5vcGVuOyAvLyDmuLLmn5PlnKjlvZPliY0gZG9tIOmHjO+8m1xuXG4gICAgICBpZiAoIWdldENvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3NOYW1lLFxuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgICAgIF90aGlzMi5kb20gPSBjO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChDaGlsZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICBvcGVuOiBvcGVuLFxuICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgICAgZ2V0Q29udGFpbmVyOiBmdW5jdGlvbiBnZXRDb250YWluZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLmRvbTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ2xvc2U6IHRoaXMub25DbG9zZSxcbiAgICAgICAgICBvbkhhbmRsZUNsaWNrOiB0aGlzLm9uSGFuZGxlQ2xpY2tcbiAgICAgICAgfSkpKTtcbiAgICAgIH0gLy8g5aaC5p6c5pyJIGhhbmRsZXIg5Li65YaF572u5by65Yi25riy5p+T77ybXG5cblxuICAgICAgdmFyICRmb3JjZVJlbmRlciA9ICEhaGFuZGxlciB8fCBmb3JjZVJlbmRlcjtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFBvcnRhbCwge1xuICAgICAgICB2aXNpYmxlOiBvcGVuLFxuICAgICAgICBmb3JjZVJlbmRlcjogJGZvcmNlUmVuZGVyLFxuICAgICAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcbiAgICAgICAgd3JhcHBlckNsYXNzTmFtZTogd3JhcHBlckNsYXNzTmFtZVxuICAgICAgfSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHZpc2libGUgPSBfcmVmLnZpc2libGUsXG4gICAgICAgICAgICBhZnRlckNsb3NlID0gX3JlZi5hZnRlckNsb3NlLFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJ2aXNpYmxlXCIsIFwiYWZ0ZXJDbG9zZVwiXSk7XG5cbiAgICAgICAgcmV0dXJuICgvLyByZWFjdCAxNe+8jGNvbXBvbmVudFdpbGxVbm1vdW50IOaXtiBQb3J0YWwg6L+U5ZueIGFmdGVyQ2xvc2UsIHZpc2libGUuXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGlsZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHJlc3QsIHtcbiAgICAgICAgICAgIG9wZW46IHZpc2libGUgIT09IHVuZGVmaW5lZCA/IHZpc2libGUgOiBvcGVuLFxuICAgICAgICAgICAgYWZ0ZXJWaXNpYmxlQ2hhbmdlOiBhZnRlckNsb3NlICE9PSB1bmRlZmluZWQgPyBhZnRlckNsb3NlIDogcHJvcHMuYWZ0ZXJWaXNpYmxlQ2hhbmdlLFxuICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICAgIG9uQ2xvc2U6IF90aGlzMi5vbkNsb3NlLFxuICAgICAgICAgICAgb25IYW5kbGVDbGljazogX3RoaXMyLm9uSGFuZGxlQ2xpY2tcbiAgICAgICAgICB9KSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgcHJldlByb3BzID0gX3JlZjIucHJldlByb3BzO1xuICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICBwcmV2UHJvcHM6IHByb3BzXG4gICAgICB9O1xuXG4gICAgICBpZiAodHlwZW9mIHByZXZQcm9wcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvcHMub3BlbiAhPT0gcHJldlByb3BzLm9wZW4pIHtcbiAgICAgICAgbmV3U3RhdGUub3BlbiA9IHByb3BzLm9wZW47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJhd2VyV3JhcHBlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuRHJhd2VyV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZWZpeENsczogJ2RyYXdlcicsXG4gIHBsYWNlbWVudDogJ2xlZnQnLFxuICBnZXRDb250YWluZXI6ICdib2R5JyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBsZXZlbDogJ2FsbCcsXG4gIGR1cmF0aW9uOiAnLjNzJyxcbiAgZWFzZTogJ2N1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KScsXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHt9LFxuICBhZnRlclZpc2libGVDaGFuZ2U6IGZ1bmN0aW9uIGFmdGVyVmlzaWJsZUNoYW5nZSgpIHt9LFxuICBoYW5kbGVyOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZHJhd2VyLWhhbmRsZVwiXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZHJhd2VyLWhhbmRsZS1pY29uXCJcbiAgfSkpLFxuICBzaG93TWFzazogdHJ1ZSxcbiAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICBtYXNrU3R5bGU6IHt9LFxuICB3cmFwcGVyQ2xhc3NOYW1lOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIGZvcmNlUmVuZGVyOiBmYWxzZVxufTtcbmV4cG9ydCBkZWZhdWx0IERyYXdlcldyYXBwZXI7IiwiLy8gZXhwb3J0IHRoaXMgcGFja2FnZSdzIGFwaVxuaW1wb3J0IERyYXdlciBmcm9tICcuL0RyYXdlcldyYXBwZXInO1xuZXhwb3J0IGRlZmF1bHQgRHJhd2VyOyIsImV4cG9ydCBmdW5jdGlvbiBkYXRhVG9BcnJheSh2YXJzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhcnMpKSB7XG4gICAgcmV0dXJuIHZhcnM7XG4gIH1cblxuICByZXR1cm4gW3ZhcnNdO1xufVxudmFyIHRyYW5zaXRpb25FbmRPYmplY3QgPSB7XG4gIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICBNb3pUcmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQnXG59O1xuZXhwb3J0IHZhciB0cmFuc2l0aW9uU3RyID0gT2JqZWN0LmtleXModHJhbnNpdGlvbkVuZE9iamVjdCkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XG4gIHJldHVybiBrZXkgaW4gKGh0bWwgPyBodG1sLnN0eWxlIDoge30pO1xufSlbMF07XG5leHBvcnQgdmFyIHRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kT2JqZWN0W3RyYW5zaXRpb25TdHJdO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGlmICh0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICB9IGVsc2UgaWYgKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICB0YXJnZXQuYXR0YWNoRXZlbnQoXCJvblwiLmNvbmNhdChldmVudFR5cGUpLCBjYWxsYmFjayk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGlmICh0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICB9IGVsc2UgaWYgKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICB0YXJnZXQuZGV0YWNoRXZlbnQoXCJvblwiLmNvbmNhdChldmVudFR5cGUpLCBjYWxsYmFjayk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUFyZ3VtZW50cyhhcmcsIGNiKSB7XG4gIHZhciByZXN1bHQgPSB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKGNiKSA6IGFyZztcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDIpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtyZXN1bHRbMF0sIHJlc3VsdFsxXV07XG4gIH1cblxuICByZXR1cm4gW3Jlc3VsdF07XG59XG5leHBvcnQgdmFyIGlzTnVtZXJpYyA9IGZ1bmN0aW9uIGlzTnVtZXJpYyh2YWx1ZSkge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG59O1xuZXhwb3J0IHZhciB3aW5kb3dJc1VuZGVmaW5lZCA9ICEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmV4cG9ydCB2YXIgZ2V0VG91Y2hQYXJlbnRTY3JvbGwgPSBmdW5jdGlvbiBnZXRUb3VjaFBhcmVudFNjcm9sbChyb290LCBjdXJyZW50VGFyZ2V0LCBkaWZmZXJYLCBkaWZmZXJZKSB7XG4gIGlmICghY3VycmVudFRhcmdldCB8fCBjdXJyZW50VGFyZ2V0ID09PSBkb2N1bWVudCB8fCBjdXJyZW50VGFyZ2V0IGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gcm9vdCDkuLogZHJhd2VyLWNvbnRlbnQg6K6+5a6a5LqGIG92ZXJmbG93LCDliKTmlq3kuLogcm9vdCDnmoQgcGFyZW50IOaXtue7k+adn+a7muWKqO+8m1xuXG5cbiAgaWYgKGN1cnJlbnRUYXJnZXQgPT09IHJvb3QucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGlzWSA9IE1hdGgubWF4KE1hdGguYWJzKGRpZmZlclgpLCBNYXRoLmFicyhkaWZmZXJZKSkgPT09IE1hdGguYWJzKGRpZmZlclkpO1xuICB2YXIgaXNYID0gTWF0aC5tYXgoTWF0aC5hYnMoZGlmZmVyWCksIE1hdGguYWJzKGRpZmZlclkpKSA9PT0gTWF0aC5hYnMoZGlmZmVyWCk7XG4gIHZhciBzY3JvbGxZID0gY3VycmVudFRhcmdldC5zY3JvbGxIZWlnaHQgLSBjdXJyZW50VGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgdmFyIHNjcm9sbFggPSBjdXJyZW50VGFyZ2V0LnNjcm9sbFdpZHRoIC0gY3VycmVudFRhcmdldC5jbGllbnRXaWR0aDtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50VGFyZ2V0KTtcbiAgdmFyIG92ZXJmbG93WSA9IHN0eWxlLm92ZXJmbG93WSA9PT0gJ2F1dG8nIHx8IHN0eWxlLm92ZXJmbG93WSA9PT0gJ3Njcm9sbCc7XG4gIHZhciBvdmVyZmxvd1ggPSBzdHlsZS5vdmVyZmxvd1ggPT09ICdhdXRvJyB8fCBzdHlsZS5vdmVyZmxvd1ggPT09ICdzY3JvbGwnO1xuICB2YXIgeSA9IHNjcm9sbFkgJiYgb3ZlcmZsb3dZO1xuICB2YXIgeCA9IHNjcm9sbFggJiYgb3ZlcmZsb3dYO1xuXG4gIGlmIChpc1kgJiYgKCF5IHx8IHkgJiYgKGN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wID49IHNjcm9sbFkgJiYgZGlmZmVyWSA8IDAgfHwgY3VycmVudFRhcmdldC5zY3JvbGxUb3AgPD0gMCAmJiBkaWZmZXJZID4gMCkpIHx8IGlzWCAmJiAoIXggfHwgeCAmJiAoY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0ID49IHNjcm9sbFggJiYgc2Nyb2xsWCA8IDAgfHwgY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0IDw9IDAgJiYgc2Nyb2xsWCA+IDApKSkge1xuICAgIHJldHVybiBnZXRUb3VjaFBhcmVudFNjcm9sbChyb290LCBjdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUsIGRpZmZlclgsIGRpZmZlclkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIENvbnRhaW5lclJlbmRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29udGFpbmVyUmVuZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENvbnRhaW5lclJlbmRlcik7XG5cbiAgZnVuY3Rpb24gQ29udGFpbmVyUmVuZGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250YWluZXJSZW5kZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF90aGlzLnJlbW92ZUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfdGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgIF90aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF90aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgX3RoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKHByb3BzLCByZWFkeSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzLnZpc2libGUsXG4gICAgICAgICAgZ2V0Q29tcG9uZW50ID0gX3RoaXMkcHJvcHMuZ2V0Q29tcG9uZW50LFxuICAgICAgICAgIGZvcmNlUmVuZGVyID0gX3RoaXMkcHJvcHMuZm9yY2VSZW5kZXIsXG4gICAgICAgICAgZ2V0Q29udGFpbmVyID0gX3RoaXMkcHJvcHMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIHBhcmVudCA9IF90aGlzJHByb3BzLnBhcmVudDtcblxuICAgICAgaWYgKHZpc2libGUgfHwgcGFyZW50Ll9jb21wb25lbnQgfHwgZm9yY2VSZW5kZXIpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICBfdGhpcy5jb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlYWN0RE9NLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHBhcmVudCwgZ2V0Q29tcG9uZW50KHByb3BzKSwgX3RoaXMuY29udGFpbmVyLCBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgICAgIHJlYWR5LmNhbGwodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRhaW5lclJlbmRlciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvTW91bnQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Nb3VudCkge1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9EZXN0cm95KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29udGFpbmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAgIHJlbmRlckNvbXBvbmVudDogdGhpcy5yZW5kZXJDb21wb25lbnQsXG4gICAgICAgIHJlbW92ZUNvbnRhaW5lcjogdGhpcy5yZW1vdmVDb250YWluZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250YWluZXJSZW5kZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkNvbnRhaW5lclJlbmRlci5wcm9wVHlwZXMgPSB7XG4gIGF1dG9Nb3VudDogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9EZXN0cm95OiBQcm9wVHlwZXMuYm9vbCxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZvcmNlUmVuZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFyZW50OiBQcm9wVHlwZXMuYW55LFxuICBnZXRDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5Db250YWluZXJSZW5kZXIuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvTW91bnQ6IHRydWUsXG4gIGF1dG9EZXN0cm95OiB0cnVlLFxuICBmb3JjZVJlbmRlcjogZmFsc2Vcbn07XG5leHBvcnQgeyBDb250YWluZXJSZW5kZXIgYXMgZGVmYXVsdCB9OyIsIi8qKlxuICogQGlnbm9yZVxuICogc29tZSBrZXktY29kZXMgZGVmaW5pdGlvbiBhbmQgdXRpbHMgZnJvbSBjbG9zdXJlLWxpYnJhcnlcbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cbnZhciBLZXlDb2RlID0ge1xuICAvKipcbiAgICogTUFDX0VOVEVSXG4gICAqL1xuICBNQUNfRU5URVI6IDMsXG5cbiAgLyoqXG4gICAqIEJBQ0tTUEFDRVxuICAgKi9cbiAgQkFDS1NQQUNFOiA4LFxuXG4gIC8qKlxuICAgKiBUQUJcbiAgICovXG4gIFRBQjogOSxcblxuICAvKipcbiAgICogTlVNTE9DSyBvbiBGRi9TYWZhcmkgTWFjXG4gICAqL1xuICBOVU1fQ0VOVEVSOiAxMixcblxuICAvKipcbiAgICogRU5URVJcbiAgICovXG4gIEVOVEVSOiAxMyxcblxuICAvKipcbiAgICogU0hJRlRcbiAgICovXG4gIFNISUZUOiAxNixcblxuICAvKipcbiAgICogQ1RSTFxuICAgKi9cbiAgQ1RSTDogMTcsXG5cbiAgLyoqXG4gICAqIEFMVFxuICAgKi9cbiAgQUxUOiAxOCxcblxuICAvKipcbiAgICogUEFVU0VcbiAgICovXG4gIFBBVVNFOiAxOSxcblxuICAvKipcbiAgICogQ0FQU19MT0NLXG4gICAqL1xuICBDQVBTX0xPQ0s6IDIwLFxuXG4gIC8qKlxuICAgKiBFU0NcbiAgICovXG4gIEVTQzogMjcsXG5cbiAgLyoqXG4gICAqIFNQQUNFXG4gICAqL1xuICBTUEFDRTogMzIsXG5cbiAgLyoqXG4gICAqIFBBR0VfVVBcbiAgICovXG4gIFBBR0VfVVA6IDMzLFxuXG4gIC8qKlxuICAgKiBQQUdFX0RPV05cbiAgICovXG4gIFBBR0VfRE9XTjogMzQsXG5cbiAgLyoqXG4gICAqIEVORFxuICAgKi9cbiAgRU5EOiAzNSxcblxuICAvKipcbiAgICogSE9NRVxuICAgKi9cbiAgSE9NRTogMzYsXG5cbiAgLyoqXG4gICAqIExFRlRcbiAgICovXG4gIExFRlQ6IDM3LFxuXG4gIC8qKlxuICAgKiBVUFxuICAgKi9cbiAgVVA6IDM4LFxuXG4gIC8qKlxuICAgKiBSSUdIVFxuICAgKi9cbiAgUklHSFQ6IDM5LFxuXG4gIC8qKlxuICAgKiBET1dOXG4gICAqL1xuICBET1dOOiA0MCxcblxuICAvKipcbiAgICogUFJJTlRfU0NSRUVOXG4gICAqL1xuICBQUklOVF9TQ1JFRU46IDQ0LFxuXG4gIC8qKlxuICAgKiBJTlNFUlRcbiAgICovXG4gIElOU0VSVDogNDUsXG5cbiAgLyoqXG4gICAqIERFTEVURVxuICAgKi9cbiAgREVMRVRFOiA0NixcblxuICAvKipcbiAgICogWkVST1xuICAgKi9cbiAgWkVSTzogNDgsXG5cbiAgLyoqXG4gICAqIE9ORVxuICAgKi9cbiAgT05FOiA0OSxcblxuICAvKipcbiAgICogVFdPXG4gICAqL1xuICBUV086IDUwLFxuXG4gIC8qKlxuICAgKiBUSFJFRVxuICAgKi9cbiAgVEhSRUU6IDUxLFxuXG4gIC8qKlxuICAgKiBGT1VSXG4gICAqL1xuICBGT1VSOiA1MixcblxuICAvKipcbiAgICogRklWRVxuICAgKi9cbiAgRklWRTogNTMsXG5cbiAgLyoqXG4gICAqIFNJWFxuICAgKi9cbiAgU0lYOiA1NCxcblxuICAvKipcbiAgICogU0VWRU5cbiAgICovXG4gIFNFVkVOOiA1NSxcblxuICAvKipcbiAgICogRUlHSFRcbiAgICovXG4gIEVJR0hUOiA1NixcblxuICAvKipcbiAgICogTklORVxuICAgKi9cbiAgTklORTogNTcsXG5cbiAgLyoqXG4gICAqIFFVRVNUSU9OX01BUktcbiAgICovXG4gIFFVRVNUSU9OX01BUks6IDYzLFxuXG4gIC8qKlxuICAgKiBBXG4gICAqL1xuICBBOiA2NSxcblxuICAvKipcbiAgICogQlxuICAgKi9cbiAgQjogNjYsXG5cbiAgLyoqXG4gICAqIENcbiAgICovXG4gIEM6IDY3LFxuXG4gIC8qKlxuICAgKiBEXG4gICAqL1xuICBEOiA2OCxcblxuICAvKipcbiAgICogRVxuICAgKi9cbiAgRTogNjksXG5cbiAgLyoqXG4gICAqIEZcbiAgICovXG4gIEY6IDcwLFxuXG4gIC8qKlxuICAgKiBHXG4gICAqL1xuICBHOiA3MSxcblxuICAvKipcbiAgICogSFxuICAgKi9cbiAgSDogNzIsXG5cbiAgLyoqXG4gICAqIElcbiAgICovXG4gIEk6IDczLFxuXG4gIC8qKlxuICAgKiBKXG4gICAqL1xuICBKOiA3NCxcblxuICAvKipcbiAgICogS1xuICAgKi9cbiAgSzogNzUsXG5cbiAgLyoqXG4gICAqIExcbiAgICovXG4gIEw6IDc2LFxuXG4gIC8qKlxuICAgKiBNXG4gICAqL1xuICBNOiA3NyxcblxuICAvKipcbiAgICogTlxuICAgKi9cbiAgTjogNzgsXG5cbiAgLyoqXG4gICAqIE9cbiAgICovXG4gIE86IDc5LFxuXG4gIC8qKlxuICAgKiBQXG4gICAqL1xuICBQOiA4MCxcblxuICAvKipcbiAgICogUVxuICAgKi9cbiAgUTogODEsXG5cbiAgLyoqXG4gICAqIFJcbiAgICovXG4gIFI6IDgyLFxuXG4gIC8qKlxuICAgKiBTXG4gICAqL1xuICBTOiA4MyxcblxuICAvKipcbiAgICogVFxuICAgKi9cbiAgVDogODQsXG5cbiAgLyoqXG4gICAqIFVcbiAgICovXG4gIFU6IDg1LFxuXG4gIC8qKlxuICAgKiBWXG4gICAqL1xuICBWOiA4NixcblxuICAvKipcbiAgICogV1xuICAgKi9cbiAgVzogODcsXG5cbiAgLyoqXG4gICAqIFhcbiAgICovXG4gIFg6IDg4LFxuXG4gIC8qKlxuICAgKiBZXG4gICAqL1xuICBZOiA4OSxcblxuICAvKipcbiAgICogWlxuICAgKi9cbiAgWjogOTAsXG5cbiAgLyoqXG4gICAqIE1FVEFcbiAgICovXG4gIE1FVEE6IDkxLFxuXG4gIC8qKlxuICAgKiBXSU5fS0VZX1JJR0hUXG4gICAqL1xuICBXSU5fS0VZX1JJR0hUOiA5MixcblxuICAvKipcbiAgICogQ09OVEVYVF9NRU5VXG4gICAqL1xuICBDT05URVhUX01FTlU6IDkzLFxuXG4gIC8qKlxuICAgKiBOVU1fWkVST1xuICAgKi9cbiAgTlVNX1pFUk86IDk2LFxuXG4gIC8qKlxuICAgKiBOVU1fT05FXG4gICAqL1xuICBOVU1fT05FOiA5NyxcblxuICAvKipcbiAgICogTlVNX1RXT1xuICAgKi9cbiAgTlVNX1RXTzogOTgsXG5cbiAgLyoqXG4gICAqIE5VTV9USFJFRVxuICAgKi9cbiAgTlVNX1RIUkVFOiA5OSxcblxuICAvKipcbiAgICogTlVNX0ZPVVJcbiAgICovXG4gIE5VTV9GT1VSOiAxMDAsXG5cbiAgLyoqXG4gICAqIE5VTV9GSVZFXG4gICAqL1xuICBOVU1fRklWRTogMTAxLFxuXG4gIC8qKlxuICAgKiBOVU1fU0lYXG4gICAqL1xuICBOVU1fU0lYOiAxMDIsXG5cbiAgLyoqXG4gICAqIE5VTV9TRVZFTlxuICAgKi9cbiAgTlVNX1NFVkVOOiAxMDMsXG5cbiAgLyoqXG4gICAqIE5VTV9FSUdIVFxuICAgKi9cbiAgTlVNX0VJR0hUOiAxMDQsXG5cbiAgLyoqXG4gICAqIE5VTV9OSU5FXG4gICAqL1xuICBOVU1fTklORTogMTA1LFxuXG4gIC8qKlxuICAgKiBOVU1fTVVMVElQTFlcbiAgICovXG4gIE5VTV9NVUxUSVBMWTogMTA2LFxuXG4gIC8qKlxuICAgKiBOVU1fUExVU1xuICAgKi9cbiAgTlVNX1BMVVM6IDEwNyxcblxuICAvKipcbiAgICogTlVNX01JTlVTXG4gICAqL1xuICBOVU1fTUlOVVM6IDEwOSxcblxuICAvKipcbiAgICogTlVNX1BFUklPRFxuICAgKi9cbiAgTlVNX1BFUklPRDogMTEwLFxuXG4gIC8qKlxuICAgKiBOVU1fRElWSVNJT05cbiAgICovXG4gIE5VTV9ESVZJU0lPTjogMTExLFxuXG4gIC8qKlxuICAgKiBGMVxuICAgKi9cbiAgRjE6IDExMixcblxuICAvKipcbiAgICogRjJcbiAgICovXG4gIEYyOiAxMTMsXG5cbiAgLyoqXG4gICAqIEYzXG4gICAqL1xuICBGMzogMTE0LFxuXG4gIC8qKlxuICAgKiBGNFxuICAgKi9cbiAgRjQ6IDExNSxcblxuICAvKipcbiAgICogRjVcbiAgICovXG4gIEY1OiAxMTYsXG5cbiAgLyoqXG4gICAqIEY2XG4gICAqL1xuICBGNjogMTE3LFxuXG4gIC8qKlxuICAgKiBGN1xuICAgKi9cbiAgRjc6IDExOCxcblxuICAvKipcbiAgICogRjhcbiAgICovXG4gIEY4OiAxMTksXG5cbiAgLyoqXG4gICAqIEY5XG4gICAqL1xuICBGOTogMTIwLFxuXG4gIC8qKlxuICAgKiBGMTBcbiAgICovXG4gIEYxMDogMTIxLFxuXG4gIC8qKlxuICAgKiBGMTFcbiAgICovXG4gIEYxMTogMTIyLFxuXG4gIC8qKlxuICAgKiBGMTJcbiAgICovXG4gIEYxMjogMTIzLFxuXG4gIC8qKlxuICAgKiBOVU1MT0NLXG4gICAqL1xuICBOVU1MT0NLOiAxNDQsXG5cbiAgLyoqXG4gICAqIFNFTUlDT0xPTlxuICAgKi9cbiAgU0VNSUNPTE9OOiAxODYsXG5cbiAgLyoqXG4gICAqIERBU0hcbiAgICovXG4gIERBU0g6IDE4OSxcblxuICAvKipcbiAgICogRVFVQUxTXG4gICAqL1xuICBFUVVBTFM6IDE4NyxcblxuICAvKipcbiAgICogQ09NTUFcbiAgICovXG4gIENPTU1BOiAxODgsXG5cbiAgLyoqXG4gICAqIFBFUklPRFxuICAgKi9cbiAgUEVSSU9EOiAxOTAsXG5cbiAgLyoqXG4gICAqIFNMQVNIXG4gICAqL1xuICBTTEFTSDogMTkxLFxuXG4gIC8qKlxuICAgKiBBUE9TVFJPUEhFXG4gICAqL1xuICBBUE9TVFJPUEhFOiAxOTIsXG5cbiAgLyoqXG4gICAqIFNJTkdMRV9RVU9URVxuICAgKi9cbiAgU0lOR0xFX1FVT1RFOiAyMjIsXG5cbiAgLyoqXG4gICAqIE9QRU5fU1FVQVJFX0JSQUNLRVRcbiAgICovXG4gIE9QRU5fU1FVQVJFX0JSQUNLRVQ6IDIxOSxcblxuICAvKipcbiAgICogQkFDS1NMQVNIXG4gICAqL1xuICBCQUNLU0xBU0g6IDIyMCxcblxuICAvKipcbiAgICogQ0xPU0VfU1FVQVJFX0JSQUNLRVRcbiAgICovXG4gIENMT1NFX1NRVUFSRV9CUkFDS0VUOiAyMjEsXG5cbiAgLyoqXG4gICAqIFdJTl9LRVlcbiAgICovXG4gIFdJTl9LRVk6IDIyNCxcblxuICAvKipcbiAgICogTUFDX0ZGX01FVEFcbiAgICovXG4gIE1BQ19GRl9NRVRBOiAyMjQsXG5cbiAgLyoqXG4gICAqIFdJTl9JTUVcbiAgICovXG4gIFdJTl9JTUU6IDIyOSxcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09IEZ1bmN0aW9uID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAgKiB3aGV0aGVyIHRleHQgYW5kIG1vZGlmaWVkIGtleSBpcyBlbnRlcmVkIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAqL1xuICBpc1RleHRNb2RpZnlpbmdLZXlFdmVudDogZnVuY3Rpb24gaXNUZXh0TW9kaWZ5aW5nS2V5RXZlbnQoZSkge1xuICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuXG4gICAgaWYgKGUuYWx0S2V5ICYmICFlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IC8vIEZ1bmN0aW9uIGtleXMgZG9uJ3QgZ2VuZXJhdGUgdGV4dFxuICAgIGtleUNvZGUgPj0gS2V5Q29kZS5GMSAmJiBrZXlDb2RlIDw9IEtleUNvZGUuRjEyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBUaGUgZm9sbG93aW5nIGtleXMgYXJlIHF1aXRlIGhhcm1sZXNzLCBldmVuIGluIGNvbWJpbmF0aW9uIHdpdGhcbiAgICAvLyBDVFJMLCBBTFQgb3IgU0hJRlQuXG5cblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBLZXlDb2RlLkFMVDpcbiAgICAgIGNhc2UgS2V5Q29kZS5DQVBTX0xPQ0s6XG4gICAgICBjYXNlIEtleUNvZGUuQ09OVEVYVF9NRU5VOlxuICAgICAgY2FzZSBLZXlDb2RlLkNUUkw6XG4gICAgICBjYXNlIEtleUNvZGUuRE9XTjpcbiAgICAgIGNhc2UgS2V5Q29kZS5FTkQ6XG4gICAgICBjYXNlIEtleUNvZGUuRVNDOlxuICAgICAgY2FzZSBLZXlDb2RlLkhPTUU6XG4gICAgICBjYXNlIEtleUNvZGUuSU5TRVJUOlxuICAgICAgY2FzZSBLZXlDb2RlLkxFRlQ6XG4gICAgICBjYXNlIEtleUNvZGUuTUFDX0ZGX01FVEE6XG4gICAgICBjYXNlIEtleUNvZGUuTUVUQTpcbiAgICAgIGNhc2UgS2V5Q29kZS5OVU1MT0NLOlxuICAgICAgY2FzZSBLZXlDb2RlLk5VTV9DRU5URVI6XG4gICAgICBjYXNlIEtleUNvZGUuUEFHRV9ET1dOOlxuICAgICAgY2FzZSBLZXlDb2RlLlBBR0VfVVA6XG4gICAgICBjYXNlIEtleUNvZGUuUEFVU0U6XG4gICAgICBjYXNlIEtleUNvZGUuUFJJTlRfU0NSRUVOOlxuICAgICAgY2FzZSBLZXlDb2RlLlJJR0hUOlxuICAgICAgY2FzZSBLZXlDb2RlLlNISUZUOlxuICAgICAgY2FzZSBLZXlDb2RlLlVQOlxuICAgICAgY2FzZSBLZXlDb2RlLldJTl9LRVk6XG4gICAgICBjYXNlIEtleUNvZGUuV0lOX0tFWV9SSUdIVDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIHdoZXRoZXIgY2hhcmFjdGVyIGlzIGVudGVyZWQuXG4gICAqL1xuICBpc0NoYXJhY3RlcktleTogZnVuY3Rpb24gaXNDaGFyYWN0ZXJLZXkoa2V5Q29kZSkge1xuICAgIGlmIChrZXlDb2RlID49IEtleUNvZGUuWkVSTyAmJiBrZXlDb2RlIDw9IEtleUNvZGUuTklORSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5OVU1fWkVSTyAmJiBrZXlDb2RlIDw9IEtleUNvZGUuTlVNX01VTFRJUExZKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLkEgJiYga2V5Q29kZSA8PSBLZXlDb2RlLlopIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gU2FmYXJpIHNlbmRzIHplcm8ga2V5IGNvZGUgZm9yIG5vbi1sYXRpbiBjaGFyYWN0ZXJzLlxuXG5cbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignV2ViS2l0JykgIT09IC0xICYmIGtleUNvZGUgPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgY2FzZSBLZXlDb2RlLlFVRVNUSU9OX01BUks6XG4gICAgICBjYXNlIEtleUNvZGUuTlVNX1BMVVM6XG4gICAgICBjYXNlIEtleUNvZGUuTlVNX01JTlVTOlxuICAgICAgY2FzZSBLZXlDb2RlLk5VTV9QRVJJT0Q6XG4gICAgICBjYXNlIEtleUNvZGUuTlVNX0RJVklTSU9OOlxuICAgICAgY2FzZSBLZXlDb2RlLlNFTUlDT0xPTjpcbiAgICAgIGNhc2UgS2V5Q29kZS5EQVNIOlxuICAgICAgY2FzZSBLZXlDb2RlLkVRVUFMUzpcbiAgICAgIGNhc2UgS2V5Q29kZS5DT01NQTpcbiAgICAgIGNhc2UgS2V5Q29kZS5QRVJJT0Q6XG4gICAgICBjYXNlIEtleUNvZGUuU0xBU0g6XG4gICAgICBjYXNlIEtleUNvZGUuQVBPU1RST1BIRTpcbiAgICAgIGNhc2UgS2V5Q29kZS5TSU5HTEVfUVVPVEU6XG4gICAgICBjYXNlIEtleUNvZGUuT1BFTl9TUVVBUkVfQlJBQ0tFVDpcbiAgICAgIGNhc2UgS2V5Q29kZS5CQUNLU0xBU0g6XG4gICAgICBjYXNlIEtleUNvZGUuQ0xPU0VfU1FVQVJFX0JSQUNLRVQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgS2V5Q29kZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIFBvcnRhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9ydGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFBvcnRhbCk7XG5cbiAgZnVuY3Rpb24gUG9ydGFsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3J0YWwpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBvcnRhbCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmNyZWF0ZUNvbnRhaW5lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIGRpZFVwZGF0ZSA9IHRoaXMucHJvcHMuZGlkVXBkYXRlO1xuXG4gICAgICBpZiAoZGlkVXBkYXRlKSB7XG4gICAgICAgIGRpZFVwZGF0ZShwcmV2UHJvcHMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ29udGFpbmVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUNvbnRhaW5lclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIoKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLnByb3BzLmdldENvbnRhaW5lcigpO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVDb250YWluZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ29udGFpbmVyKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9jb250YWluZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb3J0YWw7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGRpZFVwZGF0ZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5leHBvcnQgeyBQb3J0YWwgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUscmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgcG9seWZpbGwgfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XG5pbXBvcnQgQ29udGFpbmVyUmVuZGVyIGZyb20gJy4vQ29udGFpbmVyUmVuZGVyJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9Qb3J0YWwnO1xuaW1wb3J0IHN3aXRjaFNjcm9sbGluZ0VmZmVjdCBmcm9tICcuL3N3aXRjaFNjcm9sbGluZ0VmZmVjdCc7XG5pbXBvcnQgc2V0U3R5bGUgZnJvbSAnLi9zZXRTdHlsZSc7XG52YXIgb3BlbkNvdW50ID0gMDtcbnZhciB3aW5kb3dJc1VuZGVmaW5lZCA9ICEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbnZhciBJU19SRUFDVF8xNiA9ICgnY3JlYXRlUG9ydGFsJyBpbiBSZWFjdERPTSk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE5MzQwXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xOTMzMlxuXG52YXIgY2FjaGVPdmVyZmxvdyA9IHt9O1xuXG52YXIgUG9ydGFsV3JhcHBlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9ydGFsV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQb3J0YWxXcmFwcGVyKTtcblxuICBmdW5jdGlvbiBQb3J0YWxXcmFwcGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcnRhbFdyYXBwZXIpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBfdGhpcy5nZXRQYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZ2V0Q29udGFpbmVyID0gX3RoaXMucHJvcHMuZ2V0Q29udGFpbmVyO1xuXG4gICAgICBpZiAoZ2V0Q29udGFpbmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0Q29udGFpbmVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGdldENvbnRhaW5lcilbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBnZXRDb250YWluZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdHlwZW9mKGdldENvbnRhaW5lcikgPT09ICdvYmplY3QnICYmIGdldENvbnRhaW5lciBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBnZXRDb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh3aW5kb3dJc1VuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFfdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgX3RoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdmFyIHBhcmVudCA9IF90aGlzLmdldFBhcmVudCgpO1xuXG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoX3RoaXMuY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRXcmFwcGVyQ2xhc3NOYW1lKCk7XG5cbiAgICAgIHJldHVybiBfdGhpcy5jb250YWluZXI7XG4gICAgfTtcblxuICAgIF90aGlzLnNldFdyYXBwZXJDbGFzc05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgd3JhcHBlckNsYXNzTmFtZSA9IF90aGlzLnByb3BzLndyYXBwZXJDbGFzc05hbWU7XG5cbiAgICAgIGlmIChfdGhpcy5jb250YWluZXIgJiYgd3JhcHBlckNsYXNzTmFtZSAmJiB3cmFwcGVyQ2xhc3NOYW1lICE9PSBfdGhpcy5jb250YWluZXIuY2xhc3NOYW1lKSB7XG4gICAgICAgIF90aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSB3cmFwcGVyQ2xhc3NOYW1lO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlUG9ydGFsID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgIC8vIFdhcm5pbmc6IGRvbid0IHJlbmFtZSBfY29tcG9uZW50XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3V0aWwvcHVsbC82NSNkaXNjdXNzaW9uX3IzNTI0MDc5MTZcbiAgICAgIF90aGlzLl9jb21wb25lbnQgPSBjO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW1vdmVDdXJyZW50Q29udGFpbmVyID0gZnVuY3Rpb24gKHZpc2libGUpIHtcbiAgICAgIF90aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICBfdGhpcy5fY29tcG9uZW50ID0gbnVsbDtcblxuICAgICAgaWYgKCFJU19SRUFDVF8xNikge1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgIF90aGlzLnJlbmRlckNvbXBvbmVudCh7XG4gICAgICAgICAgICBhZnRlckNsb3NlOiBfdGhpcy5yZW1vdmVDb250YWluZXIsXG4gICAgICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge30sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLnJlbW92ZUNvbnRhaW5lcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN3aXRjaFNjcm9sbGluZ0VmZmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvcGVuQ291bnQgPT09IDEgJiYgIU9iamVjdC5rZXlzKGNhY2hlT3ZlcmZsb3cpLmxlbmd0aCkge1xuICAgICAgICBzd2l0Y2hTY3JvbGxpbmdFZmZlY3QoKTsgLy8gTXVzdCBiZSBzZXQgYWZ0ZXIgc3dpdGNoU2Nyb2xsaW5nRWZmZWN0XG5cbiAgICAgICAgY2FjaGVPdmVyZmxvdyA9IHNldFN0eWxlKHtcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghb3BlbkNvdW50KSB7XG4gICAgICAgIHNldFN0eWxlKGNhY2hlT3ZlcmZsb3cpO1xuICAgICAgICBjYWNoZU92ZXJmbG93ID0ge307XG4gICAgICAgIHN3aXRjaFNjcm9sbGluZ0VmZmVjdCh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIF92aXNpYmxlID0gcHJvcHMudmlzaWJsZTtcbiAgICBvcGVuQ291bnQgPSBfdmlzaWJsZSA/IG9wZW5Db3VudCArIDEgOiBvcGVuQ291bnQ7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBfc2VsZjogX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcylcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb3J0YWxXcmFwcGVyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5zZXRXcmFwcGVyQ2xhc3NOYW1lKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIHZpc2libGUgPSB0aGlzLnByb3BzLnZpc2libGU7IC8vIOemu+W8gOaXtuS4jeS8miByZW5kZXLvvIwg5a+85Yiw56a75byA5pe25pWw5YC85LiN5Y+Y77yM5pS555SoIGZ1bmMg44CC44CCXG5cbiAgICAgIG9wZW5Db3VudCA9IHZpc2libGUgJiYgb3BlbkNvdW50ID8gb3BlbkNvdW50IC0gMSA6IG9wZW5Db3VudDtcbiAgICAgIHRoaXMucmVtb3ZlQ3VycmVudENvbnRhaW5lcih2aXNpYmxlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgZm9yY2VSZW5kZXIgPSBfdGhpcyRwcm9wcy5mb3JjZVJlbmRlcixcbiAgICAgICAgICB2aXNpYmxlID0gX3RoaXMkcHJvcHMudmlzaWJsZTtcbiAgICAgIHZhciBwb3J0YWwgPSBudWxsO1xuICAgICAgdmFyIGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIGdldE9wZW5Db3VudDogZnVuY3Rpb24gZ2V0T3BlbkNvdW50KCkge1xuICAgICAgICAgIHJldHVybiBvcGVuQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldENvbnRhaW5lcjogdGhpcy5nZXRDb250YWluZXIsXG4gICAgICAgIHN3aXRjaFNjcm9sbGluZ0VmZmVjdDogdGhpcy5zd2l0Y2hTY3JvbGxpbmdFZmZlY3RcbiAgICAgIH07IC8vIHN1cHBwb3J0IHJlYWN0MTVcblxuICAgICAgaWYgKCFJU19SRUFDVF8xNikge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyUmVuZGVyLCB7XG4gICAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgICAgICAgYXV0b0Rlc3Ryb3k6IGZhbHNlLFxuICAgICAgICAgIGdldENvbXBvbmVudDogZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xuICAgICAgICAgICAgdmFyIGV4dHJhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbihfb2JqZWN0U3ByZWFkKHt9LCBleHRyYSwge30sIGNoaWxkUHJvcHMsIHtcbiAgICAgICAgICAgICAgcmVmOiBfdGhpczIuc2F2ZVBvcnRhbFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0Q29udGFpbmVyOiB0aGlzLmdldENvbnRhaW5lcixcbiAgICAgICAgICBmb3JjZVJlbmRlcjogZm9yY2VSZW5kZXJcbiAgICAgICAgfSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICB2YXIgcmVuZGVyQ29tcG9uZW50ID0gX3JlZi5yZW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbW92ZUNvbnRhaW5lciA9IF9yZWYucmVtb3ZlQ29udGFpbmVyO1xuICAgICAgICAgIF90aGlzMi5yZW5kZXJDb21wb25lbnQgPSByZW5kZXJDb21wb25lbnQ7XG4gICAgICAgICAgX3RoaXMyLnJlbW92ZUNvbnRhaW5lciA9IHJlbW92ZUNvbnRhaW5lcjtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JjZVJlbmRlciB8fCB2aXNpYmxlIHx8IHRoaXMuX2NvbXBvbmVudCkge1xuICAgICAgICBwb3J0YWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIHtcbiAgICAgICAgICBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIHJlZjogdGhpcy5zYXZlUG9ydGFsXG4gICAgICAgIH0sIGNoaWxkcmVuKGNoaWxkUHJvcHMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBvcnRhbDtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBfcmVmMikge1xuICAgICAgdmFyIHByZXZQcm9wcyA9IF9yZWYyLnByZXZQcm9wcyxcbiAgICAgICAgICBfc2VsZiA9IF9yZWYyLl9zZWxmO1xuICAgICAgdmFyIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgICAgIGdldENvbnRhaW5lciA9IHByb3BzLmdldENvbnRhaW5lcjtcblxuICAgICAgaWYgKHByZXZQcm9wcykge1xuICAgICAgICB2YXIgcHJldlZpc2libGUgPSBwcmV2UHJvcHMudmlzaWJsZSxcbiAgICAgICAgICAgIHByZXZHZXRDb250YWluZXIgPSBwcmV2UHJvcHMuZ2V0Q29udGFpbmVyO1xuXG4gICAgICAgIGlmICh2aXNpYmxlICE9PSBwcmV2VmlzaWJsZSkge1xuICAgICAgICAgIG9wZW5Db3VudCA9IHZpc2libGUgJiYgIXByZXZWaXNpYmxlID8gb3BlbkNvdW50ICsgMSA6IG9wZW5Db3VudCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2V0Q29udGFpbmVySXNGdW5jID0gdHlwZW9mIGdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcHJldkdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJztcblxuICAgICAgICBpZiAoZ2V0Q29udGFpbmVySXNGdW5jID8gZ2V0Q29udGFpbmVyLnRvU3RyaW5nKCkgIT09IHByZXZHZXRDb250YWluZXIudG9TdHJpbmcoKSA6IGdldENvbnRhaW5lciAhPT0gcHJldkdldENvbnRhaW5lcikge1xuICAgICAgICAgIF9zZWxmLnJlbW92ZUN1cnJlbnRDb250YWluZXIoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByZXZQcm9wczogcHJvcHNcbiAgICAgIH07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBvcnRhbFdyYXBwZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblBvcnRhbFdyYXBwZXIucHJvcFR5cGVzID0ge1xuICB3cmFwcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmb3JjZVJlbmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmFueSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbFxufTtcbmV4cG9ydCBkZWZhdWx0IHBvbHlmaWxsKFBvcnRhbFdyYXBwZXIpOyIsInZhciBjYWNoZWQ7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxCYXJTaXplKGZyZXNoKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAoZnJlc2ggfHwgY2FjaGVkID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBpbm5lci5zdHlsZS5oZWlnaHQgPSAnMjAwcHgnO1xuICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBvdXRlclN0eWxlID0gb3V0ZXIuc3R5bGU7XG4gICAgb3V0ZXJTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgb3V0ZXJTdHlsZS50b3AgPSAwO1xuICAgIG91dGVyU3R5bGUubGVmdCA9IDA7XG4gICAgb3V0ZXJTdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG91dGVyU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG91dGVyU3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gJzE1MHB4JztcbiAgICBvdXRlclN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAgIHZhciB3aWR0aENvbnRhaW5lZCA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdmFyIHdpZHRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAod2lkdGhDb250YWluZWQgPT09IHdpZHRoU2Nyb2xsKSB7XG4gICAgICB3aWR0aFNjcm9sbCA9IG91dGVyLmNsaWVudFdpZHRoO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuICAgIGNhY2hlZCA9IHdpZHRoQ29udGFpbmVkIC0gd2lkdGhTY3JvbGw7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkO1xufSIsIi8qKlxuICogRWFzeSB0byBzZXQgZWxlbWVudCBzdHlsZSwgcmV0dXJuIHByZXZpb3VzIHN0eWxlXG4gKiBJRSBicm93c2VyIGNvbXBhdGlibGUoSUUgYnJvd3NlciBkb2Vzbid0IG1lcmdlIG92ZXJmbG93IHN0eWxlLCBuZWVkIHRvIHNldCBpdCBzZXBhcmF0ZWx5KVxuICogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTkzOTNcbiAqXG4gKi9cbmZ1bmN0aW9uIHNldFN0eWxlKHN0eWxlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBlbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gZG9jdW1lbnQuYm9keSA6IF9vcHRpb25zJGVsZW1lbnQ7XG4gIHZhciBvbGRTdHlsZSA9IHt9O1xuICB2YXIgc3R5bGVLZXlzID0gT2JqZWN0LmtleXMoc3R5bGUpOyAvLyBJRSBicm93c2VyIGNvbXBhdGlibGVcblxuICBzdHlsZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgb2xkU3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XTtcbiAgfSk7XG4gIHN0eWxlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZVtrZXldO1xuICB9KTtcbiAgcmV0dXJuIG9sZFN0eWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRTdHlsZTsiLCJpbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tICcuL2dldFNjcm9sbEJhclNpemUnO1xuaW1wb3J0IHNldFN0eWxlIGZyb20gJy4vc2V0U3R5bGUnO1xuXG5mdW5jdGlvbiBpc0JvZHlPdmVyZmxvd2luZygpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG59XG5cbnZhciBjYWNoZVN0eWxlID0ge307XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGNsb3NlKSB7XG4gIGlmICghaXNCb2R5T3ZlcmZsb3dpbmcoKSAmJiAhY2xvc2UpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTk3MjlcblxuXG4gIHZhciBzY3JvbGxpbmdFZmZlY3RDbGFzc05hbWUgPSAnYW50LXNjcm9sbGluZy1lZmZlY3QnO1xuICB2YXIgc2Nyb2xsaW5nRWZmZWN0Q2xhc3NOYW1lUmVnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChzY3JvbGxpbmdFZmZlY3RDbGFzc05hbWUpLCAnZycpO1xuICB2YXIgYm9keUNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lO1xuXG4gIGlmIChjbG9zZSkge1xuICAgIGlmICghc2Nyb2xsaW5nRWZmZWN0Q2xhc3NOYW1lUmVnLnRlc3QoYm9keUNsYXNzTmFtZSkpIHJldHVybjtcbiAgICBzZXRTdHlsZShjYWNoZVN0eWxlKTtcbiAgICBjYWNoZVN0eWxlID0ge307XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBib2R5Q2xhc3NOYW1lLnJlcGxhY2Uoc2Nyb2xsaW5nRWZmZWN0Q2xhc3NOYW1lUmVnLCAnJykudHJpbSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzY3JvbGxCYXJTaXplID0gZ2V0U2Nyb2xsQmFyU2l6ZSgpO1xuXG4gIGlmIChzY3JvbGxCYXJTaXplKSB7XG4gICAgY2FjaGVTdHlsZSA9IHNldFN0eWxlKHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6IFwiY2FsYygxMDAlIC0gXCIuY29uY2F0KHNjcm9sbEJhclNpemUsIFwicHgpXCIpXG4gICAgfSk7XG5cbiAgICBpZiAoIXNjcm9sbGluZ0VmZmVjdENsYXNzTmFtZVJlZy50ZXN0KGJvZHlDbGFzc05hbWUpKSB7XG4gICAgICB2YXIgYWRkQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQoYm9keUNsYXNzTmFtZSwgXCIgXCIpLmNvbmNhdChzY3JvbGxpbmdFZmZlY3RDbGFzc05hbWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBhZGRDbGFzc05hbWUudHJpbSgpO1xuICAgIH1cbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMucmVuZGVyVmlld0RlZmF1bHQgPSByZW5kZXJWaWV3RGVmYXVsdDtcbmV4cG9ydHMucmVuZGVyVHJhY2tIb3Jpem9udGFsRGVmYXVsdCA9IHJlbmRlclRyYWNrSG9yaXpvbnRhbERlZmF1bHQ7XG5leHBvcnRzLnJlbmRlclRyYWNrVmVydGljYWxEZWZhdWx0ID0gcmVuZGVyVHJhY2tWZXJ0aWNhbERlZmF1bHQ7XG5leHBvcnRzLnJlbmRlclRodW1iSG9yaXpvbnRhbERlZmF1bHQgPSByZW5kZXJUaHVtYkhvcml6b250YWxEZWZhdWx0O1xuZXhwb3J0cy5yZW5kZXJUaHVtYlZlcnRpY2FsRGVmYXVsdCA9IHJlbmRlclRodW1iVmVydGljYWxEZWZhdWx0O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cblxuZnVuY3Rpb24gcmVuZGVyVmlld0RlZmF1bHQocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCgnZGl2JywgcHJvcHMpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmFja0hvcml6b250YWxEZWZhdWx0KF9yZWYpIHtcbiAgICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3N0eWxlJ10pO1xuXG4gICAgdmFyIGZpbmFsU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHtcbiAgICAgICAgcmlnaHQ6IDIsXG4gICAgICAgIGJvdHRvbTogMixcbiAgICAgICAgbGVmdDogMixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzXG4gICAgfSk7XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIF9leHRlbmRzKHsgc3R5bGU6IGZpbmFsU3R5bGUgfSwgcHJvcHMpKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJhY2tWZXJ0aWNhbERlZmF1bHQoX3JlZjIpIHtcbiAgICB2YXIgc3R5bGUgPSBfcmVmMi5zdHlsZSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFsnc3R5bGUnXSk7XG5cbiAgICB2YXIgZmluYWxTdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwge1xuICAgICAgICByaWdodDogMixcbiAgICAgICAgYm90dG9tOiAyLFxuICAgICAgICB0b3A6IDIsXG4gICAgICAgIGJvcmRlclJhZGl1czogM1xuICAgIH0pO1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KCdkaXYnLCBfZXh0ZW5kcyh7IHN0eWxlOiBmaW5hbFN0eWxlIH0sIHByb3BzKSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRodW1iSG9yaXpvbnRhbERlZmF1bHQoX3JlZjMpIHtcbiAgICB2YXIgc3R5bGUgPSBfcmVmMy5zdHlsZSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjMsIFsnc3R5bGUnXSk7XG5cbiAgICB2YXIgZmluYWxTdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjIpJ1xuICAgIH0pO1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KCdkaXYnLCBfZXh0ZW5kcyh7IHN0eWxlOiBmaW5hbFN0eWxlIH0sIHByb3BzKSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRodW1iVmVydGljYWxEZWZhdWx0KF9yZWY0KSB7XG4gICAgdmFyIHN0eWxlID0gX3JlZjQuc3R5bGUsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWY0LCBbJ3N0eWxlJ10pO1xuXG4gICAgdmFyIGZpbmFsU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC4yKSdcbiAgICB9KTtcbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCgnZGl2JywgX2V4dGVuZHMoeyBzdHlsZTogZmluYWxTdHlsZSB9LCBwcm9wcykpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JhZjIgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmMik7XG5cbnZhciBfZG9tQ3NzID0gcmVxdWlyZSgnZG9tLWNzcycpO1xuXG52YXIgX2RvbUNzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb21Dc3MpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaXNTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9pc1N0cmluZycpO1xuXG52YXIgX2lzU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzU3RyaW5nKTtcblxudmFyIF9nZXRTY3JvbGxiYXJXaWR0aCA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldFNjcm9sbGJhcldpZHRoJyk7XG5cbnZhciBfZ2V0U2Nyb2xsYmFyV2lkdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0U2Nyb2xsYmFyV2lkdGgpO1xuXG52YXIgX3JldHVybkZhbHNlID0gcmVxdWlyZSgnLi4vdXRpbHMvcmV0dXJuRmFsc2UnKTtcblxudmFyIF9yZXR1cm5GYWxzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXR1cm5GYWxzZSk7XG5cbnZhciBfZ2V0SW5uZXJXaWR0aCA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldElubmVyV2lkdGgnKTtcblxudmFyIF9nZXRJbm5lcldpZHRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldElubmVyV2lkdGgpO1xuXG52YXIgX2dldElubmVySGVpZ2h0ID0gcmVxdWlyZSgnLi4vdXRpbHMvZ2V0SW5uZXJIZWlnaHQnKTtcblxudmFyIF9nZXRJbm5lckhlaWdodDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJbm5lckhlaWdodCk7XG5cbnZhciBfc3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMnKTtcblxudmFyIF9kZWZhdWx0UmVuZGVyRWxlbWVudHMgPSByZXF1aXJlKCcuL2RlZmF1bHRSZW5kZXJFbGVtZW50cycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTY3JvbGxiYXJzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU2Nyb2xsYmFycywgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTY3JvbGxiYXJzKHByb3BzKSB7XG4gICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JvbGxiYXJzKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIHJlc3RbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBTY3JvbGxiYXJzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2Nyb2xsYmFycykpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXMsIHByb3BzXS5jb25jYXQocmVzdCkpKTtcblxuICAgICAgICBfdGhpcy5nZXRTY3JvbGxMZWZ0ID0gX3RoaXMuZ2V0U2Nyb2xsTGVmdC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZ2V0U2Nyb2xsVG9wID0gX3RoaXMuZ2V0U2Nyb2xsVG9wLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5nZXRTY3JvbGxXaWR0aCA9IF90aGlzLmdldFNjcm9sbFdpZHRoLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5nZXRTY3JvbGxIZWlnaHQgPSBfdGhpcy5nZXRTY3JvbGxIZWlnaHQuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmdldENsaWVudFdpZHRoID0gX3RoaXMuZ2V0Q2xpZW50V2lkdGguYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmdldENsaWVudEhlaWdodCA9IF90aGlzLmdldENsaWVudEhlaWdodC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZ2V0VmFsdWVzID0gX3RoaXMuZ2V0VmFsdWVzLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5nZXRUaHVtYkhvcml6b250YWxXaWR0aCA9IF90aGlzLmdldFRodW1iSG9yaXpvbnRhbFdpZHRoLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5nZXRUaHVtYlZlcnRpY2FsSGVpZ2h0ID0gX3RoaXMuZ2V0VGh1bWJWZXJ0aWNhbEhlaWdodC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZ2V0U2Nyb2xsTGVmdEZvck9mZnNldCA9IF90aGlzLmdldFNjcm9sbExlZnRGb3JPZmZzZXQuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmdldFNjcm9sbFRvcEZvck9mZnNldCA9IF90aGlzLmdldFNjcm9sbFRvcEZvck9mZnNldC5iaW5kKF90aGlzKTtcblxuICAgICAgICBfdGhpcy5zY3JvbGxMZWZ0ID0gX3RoaXMuc2Nyb2xsTGVmdC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuc2Nyb2xsVG9wID0gX3RoaXMuc2Nyb2xsVG9wLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5zY3JvbGxUb0xlZnQgPSBfdGhpcy5zY3JvbGxUb0xlZnQuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLnNjcm9sbFRvVG9wID0gX3RoaXMuc2Nyb2xsVG9Ub3AuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLnNjcm9sbFRvUmlnaHQgPSBfdGhpcy5zY3JvbGxUb1JpZ2h0LmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5zY3JvbGxUb0JvdHRvbSA9IF90aGlzLnNjcm9sbFRvQm90dG9tLmJpbmQoX3RoaXMpO1xuXG4gICAgICAgIF90aGlzLmhhbmRsZVRyYWNrTW91c2VFbnRlciA9IF90aGlzLmhhbmRsZVRyYWNrTW91c2VFbnRlci5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuaGFuZGxlVHJhY2tNb3VzZUxlYXZlID0gX3RoaXMuaGFuZGxlVHJhY2tNb3VzZUxlYXZlLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5oYW5kbGVIb3Jpem9udGFsVHJhY2tNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVIb3Jpem9udGFsVHJhY2tNb3VzZURvd24uYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmhhbmRsZVZlcnRpY2FsVHJhY2tNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVWZXJ0aWNhbFRyYWNrTW91c2VEb3duLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5oYW5kbGVIb3Jpem9udGFsVGh1bWJNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVIb3Jpem9udGFsVGh1bWJNb3VzZURvd24uYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmhhbmRsZVZlcnRpY2FsVGh1bWJNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVWZXJ0aWNhbFRodW1iTW91c2VEb3duLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUgPSBfdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCA9IF90aGlzLmhhbmRsZVNjcm9sbC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuaGFuZGxlRHJhZyA9IF90aGlzLmhhbmRsZURyYWcuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmhhbmRsZURyYWdFbmQgPSBfdGhpcy5oYW5kbGVEcmFnRW5kLmJpbmQoX3RoaXMpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGlkTW91bnRVbml2ZXJzYWw6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2Nyb2xsYmFycywgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnRVbml2ZXJzYWwoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnRVbml2ZXJzYWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnRVbml2ZXJzYWwoKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3NvcnQtY29tcFxuICAgICAgICAgICAgdmFyIHVuaXZlcnNhbCA9IHRoaXMucHJvcHMudW5pdmVyc2FsO1xuXG4gICAgICAgICAgICBpZiAoIXVuaXZlcnNhbCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpZE1vdW50VW5pdmVyc2FsOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICAgICAgKDAsIF9yYWYyLmNhbmNlbCkodGhpcy5yZXF1ZXN0RnJhbWUpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRyYWNrc1RpbWVvdXQpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmRldGVjdFNjcm9sbGluZ0ludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U2Nyb2xsTGVmdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZpZXcpIHJldHVybiAwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlldy5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRTY3JvbGxUb3AnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZpZXcpIHJldHVybiAwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlldy5zY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNjcm9sbFdpZHRoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjcm9sbFdpZHRoKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZpZXcpIHJldHVybiAwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlldy5zY3JvbGxXaWR0aDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U2Nyb2xsSGVpZ2h0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjcm9sbEhlaWdodCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy52aWV3KSByZXR1cm4gMDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZXcuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRDbGllbnRXaWR0aCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbGllbnRXaWR0aCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy52aWV3KSByZXR1cm4gMDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZXcuY2xpZW50V2lkdGg7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldENsaWVudEhlaWdodCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbGllbnRIZWlnaHQoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlldykgcmV0dXJuIDA7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aWV3LmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0VmFsdWVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlcygpIHtcbiAgICAgICAgICAgIHZhciBfcmVmMiA9IHRoaXMudmlldyB8fCB7fSxcbiAgICAgICAgICAgICAgICBfcmVmMiRzY3JvbGxMZWZ0ID0gX3JlZjIuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gX3JlZjIkc2Nyb2xsTGVmdCA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYyJHNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgX3JlZjIkc2Nyb2xsVG9wID0gX3JlZjIuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcCA9IF9yZWYyJHNjcm9sbFRvcCA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYyJHNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICBfcmVmMiRzY3JvbGxXaWR0aCA9IF9yZWYyLnNjcm9sbFdpZHRoLFxuICAgICAgICAgICAgICAgIHNjcm9sbFdpZHRoID0gX3JlZjIkc2Nyb2xsV2lkdGggPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmMiRzY3JvbGxXaWR0aCxcbiAgICAgICAgICAgICAgICBfcmVmMiRzY3JvbGxIZWlnaHQgPSBfcmVmMi5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3JlZjIkc2Nyb2xsSGVpZ2h0ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZjIkc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIF9yZWYyJGNsaWVudFdpZHRoID0gX3JlZjIuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgY2xpZW50V2lkdGggPSBfcmVmMiRjbGllbnRXaWR0aCA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYyJGNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgIF9yZWYyJGNsaWVudEhlaWdodCA9IF9yZWYyLmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgICAgICBjbGllbnRIZWlnaHQgPSBfcmVmMiRjbGllbnRIZWlnaHQgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmMiRjbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGVmdDogc2Nyb2xsTGVmdCAvIChzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoKSB8fCAwLFxuICAgICAgICAgICAgICAgIHRvcDogc2Nyb2xsVG9wIC8gKHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCkgfHwgMCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIHNjcm9sbFdpZHRoOiBzY3JvbGxXaWR0aCxcbiAgICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ6IHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgICAgICBjbGllbnRXaWR0aDogY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgY2xpZW50SGVpZ2h0OiBjbGllbnRIZWlnaHRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFRodW1iSG9yaXpvbnRhbFdpZHRoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRodW1iSG9yaXpvbnRhbFdpZHRoKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgdGh1bWJTaXplID0gX3Byb3BzLnRodW1iU2l6ZSxcbiAgICAgICAgICAgICAgICB0aHVtYk1pblNpemUgPSBfcHJvcHMudGh1bWJNaW5TaXplO1xuICAgICAgICAgICAgdmFyIF92aWV3ID0gdGhpcy52aWV3LFxuICAgICAgICAgICAgICAgIHNjcm9sbFdpZHRoID0gX3ZpZXcuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgICAgICAgY2xpZW50V2lkdGggPSBfdmlldy5jbGllbnRXaWR0aDtcblxuICAgICAgICAgICAgdmFyIHRyYWNrV2lkdGggPSAoMCwgX2dldElubmVyV2lkdGgyW1wiZGVmYXVsdFwiXSkodGhpcy50cmFja0hvcml6b250YWwpO1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gTWF0aC5jZWlsKGNsaWVudFdpZHRoIC8gc2Nyb2xsV2lkdGggKiB0cmFja1dpZHRoKTtcbiAgICAgICAgICAgIGlmICh0cmFja1dpZHRoID09PSB3aWR0aCkgcmV0dXJuIDA7XG4gICAgICAgICAgICBpZiAodGh1bWJTaXplKSByZXR1cm4gdGh1bWJTaXplO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHdpZHRoLCB0aHVtYk1pblNpemUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRUaHVtYlZlcnRpY2FsSGVpZ2h0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRodW1iVmVydGljYWxIZWlnaHQoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgdGh1bWJTaXplID0gX3Byb3BzMi50aHVtYlNpemUsXG4gICAgICAgICAgICAgICAgdGh1bWJNaW5TaXplID0gX3Byb3BzMi50aHVtYk1pblNpemU7XG4gICAgICAgICAgICB2YXIgX3ZpZXcyID0gdGhpcy52aWV3LFxuICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IF92aWV3Mi5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICAgICAgY2xpZW50SGVpZ2h0ID0gX3ZpZXcyLmNsaWVudEhlaWdodDtcblxuICAgICAgICAgICAgdmFyIHRyYWNrSGVpZ2h0ID0gKDAsIF9nZXRJbm5lckhlaWdodDJbXCJkZWZhdWx0XCJdKSh0aGlzLnRyYWNrVmVydGljYWwpO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IE1hdGguY2VpbChjbGllbnRIZWlnaHQgLyBzY3JvbGxIZWlnaHQgKiB0cmFja0hlaWdodCk7XG4gICAgICAgICAgICBpZiAodHJhY2tIZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuIDA7XG4gICAgICAgICAgICBpZiAodGh1bWJTaXplKSByZXR1cm4gdGh1bWJTaXplO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGhlaWdodCwgdGh1bWJNaW5TaXplKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U2Nyb2xsTGVmdEZvck9mZnNldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY3JvbGxMZWZ0Rm9yT2Zmc2V0KG9mZnNldCkge1xuICAgICAgICAgICAgdmFyIF92aWV3MyA9IHRoaXMudmlldyxcbiAgICAgICAgICAgICAgICBzY3JvbGxXaWR0aCA9IF92aWV3My5zY3JvbGxXaWR0aCxcbiAgICAgICAgICAgICAgICBjbGllbnRXaWR0aCA9IF92aWV3My5jbGllbnRXaWR0aDtcblxuICAgICAgICAgICAgdmFyIHRyYWNrV2lkdGggPSAoMCwgX2dldElubmVyV2lkdGgyW1wiZGVmYXVsdFwiXSkodGhpcy50cmFja0hvcml6b250YWwpO1xuICAgICAgICAgICAgdmFyIHRodW1iV2lkdGggPSB0aGlzLmdldFRodW1iSG9yaXpvbnRhbFdpZHRoKCk7XG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0IC8gKHRyYWNrV2lkdGggLSB0aHVtYldpZHRoKSAqIChzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U2Nyb2xsVG9wRm9yT2Zmc2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjcm9sbFRvcEZvck9mZnNldChvZmZzZXQpIHtcbiAgICAgICAgICAgIHZhciBfdmlldzQgPSB0aGlzLnZpZXcsXG4gICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3ZpZXc0LnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgICAgICBjbGllbnRIZWlnaHQgPSBfdmlldzQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgICAgICB2YXIgdHJhY2tIZWlnaHQgPSAoMCwgX2dldElubmVySGVpZ2h0MltcImRlZmF1bHRcIl0pKHRoaXMudHJhY2tWZXJ0aWNhbCk7XG4gICAgICAgICAgICB2YXIgdGh1bWJIZWlnaHQgPSB0aGlzLmdldFRodW1iVmVydGljYWxIZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybiBvZmZzZXQgLyAodHJhY2tIZWlnaHQgLSB0aHVtYkhlaWdodCkgKiAoc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2Nyb2xsTGVmdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxMZWZ0KCkge1xuICAgICAgICAgICAgdmFyIGxlZnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy52aWV3KSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Njcm9sbFRvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxUb3AoKSB7XG4gICAgICAgICAgICB2YXIgdG9wID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMudmlldykgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2Nyb2xsVG9MZWZ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFRvTGVmdCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy52aWV3KSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Njcm9sbFRvVG9wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZpZXcpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMudmlldy5zY3JvbGxUb3AgPSAwO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzY3JvbGxUb1JpZ2h0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFRvUmlnaHQoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlldykgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjcm9sbExlZnQgPSB0aGlzLnZpZXcuc2Nyb2xsV2lkdGg7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Njcm9sbFRvQm90dG9tJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZpZXcpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMudmlldy5zY3JvbGxUb3AgPSB0aGlzLnZpZXcuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRMaXN0ZW5lcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhdGhpcy52aWV3KSByZXR1cm47XG4gICAgICAgICAgICB2YXIgdmlldyA9IHRoaXMudmlldyxcbiAgICAgICAgICAgICAgICB0cmFja0hvcml6b250YWwgPSB0aGlzLnRyYWNrSG9yaXpvbnRhbCxcbiAgICAgICAgICAgICAgICB0cmFja1ZlcnRpY2FsID0gdGhpcy50cmFja1ZlcnRpY2FsLFxuICAgICAgICAgICAgICAgIHRodW1iSG9yaXpvbnRhbCA9IHRoaXMudGh1bWJIb3Jpem9udGFsLFxuICAgICAgICAgICAgICAgIHRodW1iVmVydGljYWwgPSB0aGlzLnRodW1iVmVydGljYWw7XG5cbiAgICAgICAgICAgIHZpZXcuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgICAgICAgICAgaWYgKCEoMCwgX2dldFNjcm9sbGJhcldpZHRoMltcImRlZmF1bHRcIl0pKCkpIHJldHVybjtcbiAgICAgICAgICAgIHRyYWNrSG9yaXpvbnRhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVUcmFja01vdXNlRW50ZXIpO1xuICAgICAgICAgICAgdHJhY2tIb3Jpem9udGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZVRyYWNrTW91c2VMZWF2ZSk7XG4gICAgICAgICAgICB0cmFja0hvcml6b250YWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVIb3Jpem9udGFsVHJhY2tNb3VzZURvd24pO1xuICAgICAgICAgICAgdHJhY2tWZXJ0aWNhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVUcmFja01vdXNlRW50ZXIpO1xuICAgICAgICAgICAgdHJhY2tWZXJ0aWNhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVUcmFja01vdXNlTGVhdmUpO1xuICAgICAgICAgICAgdHJhY2tWZXJ0aWNhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVZlcnRpY2FsVHJhY2tNb3VzZURvd24pO1xuICAgICAgICAgICAgdGh1bWJIb3Jpem9udGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlSG9yaXpvbnRhbFRodW1iTW91c2VEb3duKTtcbiAgICAgICAgICAgIHRodW1iVmVydGljYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVWZXJ0aWNhbFRodW1iTW91c2VEb3duKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUxpc3RlbmVycycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICF0aGlzLnZpZXcpIHJldHVybjtcbiAgICAgICAgICAgIHZhciB2aWV3ID0gdGhpcy52aWV3LFxuICAgICAgICAgICAgICAgIHRyYWNrSG9yaXpvbnRhbCA9IHRoaXMudHJhY2tIb3Jpem9udGFsLFxuICAgICAgICAgICAgICAgIHRyYWNrVmVydGljYWwgPSB0aGlzLnRyYWNrVmVydGljYWwsXG4gICAgICAgICAgICAgICAgdGh1bWJIb3Jpem9udGFsID0gdGhpcy50aHVtYkhvcml6b250YWwsXG4gICAgICAgICAgICAgICAgdGh1bWJWZXJ0aWNhbCA9IHRoaXMudGh1bWJWZXJ0aWNhbDtcblxuICAgICAgICAgICAgdmlldy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgICAgICAgICBpZiAoISgwLCBfZ2V0U2Nyb2xsYmFyV2lkdGgyW1wiZGVmYXVsdFwiXSkoKSkgcmV0dXJuO1xuICAgICAgICAgICAgdHJhY2tIb3Jpem9udGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZVRyYWNrTW91c2VFbnRlcik7XG4gICAgICAgICAgICB0cmFja0hvcml6b250YWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlVHJhY2tNb3VzZUxlYXZlKTtcbiAgICAgICAgICAgIHRyYWNrSG9yaXpvbnRhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUhvcml6b250YWxUcmFja01vdXNlRG93bik7XG4gICAgICAgICAgICB0cmFja1ZlcnRpY2FsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZVRyYWNrTW91c2VFbnRlcik7XG4gICAgICAgICAgICB0cmFja1ZlcnRpY2FsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZVRyYWNrTW91c2VMZWF2ZSk7XG4gICAgICAgICAgICB0cmFja1ZlcnRpY2FsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlVmVydGljYWxUcmFja01vdXNlRG93bik7XG4gICAgICAgICAgICB0aHVtYkhvcml6b250YWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVIb3Jpem9udGFsVGh1bWJNb3VzZURvd24pO1xuICAgICAgICAgICAgdGh1bWJWZXJ0aWNhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVZlcnRpY2FsVGh1bWJNb3VzZURvd24pO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgICAgICAgIC8vIFBvc3NpYmx5IHNldHVwIGJ5IGBoYW5kbGVEcmFnU3RhcnRgXG4gICAgICAgICAgICB0aGlzLnRlYXJkb3duRHJhZ2dpbmcoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlU2Nyb2xsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVNjcm9sbChldmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBvblNjcm9sbCA9IF9wcm9wczMub25TY3JvbGwsXG4gICAgICAgICAgICAgICAgb25TY3JvbGxGcmFtZSA9IF9wcm9wczMub25TY3JvbGxGcmFtZTtcblxuICAgICAgICAgICAgaWYgKG9uU2Nyb2xsKSBvblNjcm9sbChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB2YWx1ZXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wID0gdmFsdWVzLnNjcm9sbFRvcDtcblxuICAgICAgICAgICAgICAgIF90aGlzMi52aWV3U2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnZpZXdTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgaWYgKG9uU2Nyb2xsRnJhbWUpIG9uU2Nyb2xsRnJhbWUodmFsdWVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kZXRlY3RTY3JvbGxpbmcoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlU2Nyb2xsU3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlU2Nyb2xsU3RhcnQoKSB7XG4gICAgICAgICAgICB2YXIgb25TY3JvbGxTdGFydCA9IHRoaXMucHJvcHMub25TY3JvbGxTdGFydDtcblxuICAgICAgICAgICAgaWYgKG9uU2Nyb2xsU3RhcnQpIG9uU2Nyb2xsU3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsU3RhcnRBdXRvSGlkZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVTY3JvbGxTdGFydEF1dG9IaWRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVNjcm9sbFN0YXJ0QXV0b0hpZGUoKSB7XG4gICAgICAgICAgICB2YXIgYXV0b0hpZGUgPSB0aGlzLnByb3BzLmF1dG9IaWRlO1xuXG4gICAgICAgICAgICBpZiAoIWF1dG9IaWRlKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnNob3dUcmFja3MoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlU2Nyb2xsU3RvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTY3JvbGxTdG9wKCkge1xuICAgICAgICAgICAgdmFyIG9uU2Nyb2xsU3RvcCA9IHRoaXMucHJvcHMub25TY3JvbGxTdG9wO1xuXG4gICAgICAgICAgICBpZiAob25TY3JvbGxTdG9wKSBvblNjcm9sbFN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsU3RvcEF1dG9IaWRlKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVNjcm9sbFN0b3BBdXRvSGlkZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTY3JvbGxTdG9wQXV0b0hpZGUoKSB7XG4gICAgICAgICAgICB2YXIgYXV0b0hpZGUgPSB0aGlzLnByb3BzLmF1dG9IaWRlO1xuXG4gICAgICAgICAgICBpZiAoIWF1dG9IaWRlKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmhpZGVUcmFja3MoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlV2luZG93UmVzaXplJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVdpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZUhvcml6b250YWxUcmFja01vdXNlRG93bicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVIb3Jpem9udGFsVHJhY2tNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGNsaWVudFggPSBldmVudC5jbGllbnRYO1xuXG4gICAgICAgICAgICB2YXIgX3RhcmdldCRnZXRCb3VuZGluZ0NsID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wubGVmdDtcblxuICAgICAgICAgICAgdmFyIHRodW1iV2lkdGggPSB0aGlzLmdldFRodW1iSG9yaXpvbnRhbFdpZHRoKCk7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gTWF0aC5hYnModGFyZ2V0TGVmdCAtIGNsaWVudFgpIC0gdGh1bWJXaWR0aCAvIDI7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdEZvck9mZnNldChvZmZzZXQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVWZXJ0aWNhbFRyYWNrTW91c2VEb3duJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVZlcnRpY2FsVHJhY2tNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xuXG4gICAgICAgICAgICB2YXIgX3RhcmdldCRnZXRCb3VuZGluZ0NsMiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wyLnRvcDtcblxuICAgICAgICAgICAgdmFyIHRodW1iSGVpZ2h0ID0gdGhpcy5nZXRUaHVtYlZlcnRpY2FsSGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gTWF0aC5hYnModGFyZ2V0VG9wIC0gY2xpZW50WSkgLSB0aHVtYkhlaWdodCAvIDI7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3BGb3JPZmZzZXQob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlSG9yaXpvbnRhbFRodW1iTW91c2VEb3duJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUhvcml6b250YWxUaHVtYk1vdXNlRG93bihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0V2lkdGggPSB0YXJnZXQub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgICAgIHZhciBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wzID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgIGxlZnQgPSBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wzLmxlZnQ7XG5cbiAgICAgICAgICAgIHRoaXMucHJldlBhZ2VYID0gb2Zmc2V0V2lkdGggLSAoY2xpZW50WCAtIGxlZnQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVWZXJ0aWNhbFRodW1iTW91c2VEb3duJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVZlcnRpY2FsVGh1bWJNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZURyYWdTdGFydChldmVudCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xuICAgICAgICAgICAgdmFyIG9mZnNldEhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIHZhciBfdGFyZ2V0JGdldEJvdW5kaW5nQ2w0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgIHRvcCA9IF90YXJnZXQkZ2V0Qm91bmRpbmdDbDQudG9wO1xuXG4gICAgICAgICAgICB0aGlzLnByZXZQYWdlWSA9IG9mZnNldEhlaWdodCAtIChjbGllbnRZIC0gdG9wKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0dXBEcmFnZ2luZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cERyYWdnaW5nKCkge1xuICAgICAgICAgICAgKDAsIF9kb21Dc3MyW1wiZGVmYXVsdFwiXSkoZG9jdW1lbnQuYm9keSwgX3N0eWxlcy5kaXNhYmxlU2VsZWN0U3R5bGUpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZURyYWdFbmQpO1xuICAgICAgICAgICAgZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IF9yZXR1cm5GYWxzZTJbXCJkZWZhdWx0XCJdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0ZWFyZG93bkRyYWdnaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRlYXJkb3duRHJhZ2dpbmcoKSB7XG4gICAgICAgICAgICAoMCwgX2RvbUNzczJbXCJkZWZhdWx0XCJdKShkb2N1bWVudC5ib2R5LCBfc3R5bGVzLmRpc2FibGVTZWxlY3RTdHlsZVJlc2V0KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlRHJhZyk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVEcmFnRW5kKTtcbiAgICAgICAgICAgIGRvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZURyYWdTdGFydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNldHVwRHJhZ2dpbmcoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlRHJhZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVEcmFnKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2UGFnZVgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG5cbiAgICAgICAgICAgICAgICB2YXIgX3RyYWNrSG9yaXpvbnRhbCRnZXRCID0gdGhpcy50cmFja0hvcml6b250YWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrTGVmdCA9IF90cmFja0hvcml6b250YWwkZ2V0Qi5sZWZ0O1xuXG4gICAgICAgICAgICAgICAgdmFyIHRodW1iV2lkdGggPSB0aGlzLmdldFRodW1iSG9yaXpvbnRhbFdpZHRoKCk7XG4gICAgICAgICAgICAgICAgdmFyIGNsaWNrUG9zaXRpb24gPSB0aHVtYldpZHRoIC0gdGhpcy5wcmV2UGFnZVg7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IC10cmFja0xlZnQgKyBjbGllbnRYIC0gY2xpY2tQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdEZvck9mZnNldChvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJldlBhZ2VZKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xuXG4gICAgICAgICAgICAgICAgdmFyIF90cmFja1ZlcnRpY2FsJGdldEJvdSA9IHRoaXMudHJhY2tWZXJ0aWNhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tUb3AgPSBfdHJhY2tWZXJ0aWNhbCRnZXRCb3UudG9wO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRodW1iSGVpZ2h0ID0gdGhpcy5nZXRUaHVtYlZlcnRpY2FsSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgdmFyIF9jbGlja1Bvc2l0aW9uID0gdGh1bWJIZWlnaHQgLSB0aGlzLnByZXZQYWdlWTtcbiAgICAgICAgICAgICAgICB2YXIgX29mZnNldCA9IC10cmFja1RvcCArIGNsaWVudFkgLSBfY2xpY2tQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3BGb3JPZmZzZXQoX29mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZURyYWdFbmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRHJhZ0VuZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJldlBhZ2VYID0gdGhpcy5wcmV2UGFnZVkgPSAwO1xuICAgICAgICAgICAgdGhpcy50ZWFyZG93bkRyYWdnaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZURyYWdFbmRBdXRvSGlkZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVEcmFnRW5kQXV0b0hpZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRHJhZ0VuZEF1dG9IaWRlKCkge1xuICAgICAgICAgICAgdmFyIGF1dG9IaWRlID0gdGhpcy5wcm9wcy5hdXRvSGlkZTtcblxuICAgICAgICAgICAgaWYgKCFhdXRvSGlkZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5oaWRlVHJhY2tzKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhbmRsZVRyYWNrTW91c2VFbnRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUcmFja01vdXNlRW50ZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrTW91c2VPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJhY2tNb3VzZUVudGVyQXV0b0hpZGUoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVHJhY2tNb3VzZUVudGVyQXV0b0hpZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVHJhY2tNb3VzZUVudGVyQXV0b0hpZGUoKSB7XG4gICAgICAgICAgICB2YXIgYXV0b0hpZGUgPSB0aGlzLnByb3BzLmF1dG9IaWRlO1xuXG4gICAgICAgICAgICBpZiAoIWF1dG9IaWRlKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnNob3dUcmFja3MoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVHJhY2tNb3VzZUxlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRyYWNrTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tNb3VzZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJhY2tNb3VzZUxlYXZlQXV0b0hpZGUoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlVHJhY2tNb3VzZUxlYXZlQXV0b0hpZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVHJhY2tNb3VzZUxlYXZlQXV0b0hpZGUoKSB7XG4gICAgICAgICAgICB2YXIgYXV0b0hpZGUgPSB0aGlzLnByb3BzLmF1dG9IaWRlO1xuXG4gICAgICAgICAgICBpZiAoIWF1dG9IaWRlKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmhpZGVUcmFja3MoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2hvd1RyYWNrcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93VHJhY2tzKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRyYWNrc1RpbWVvdXQpO1xuICAgICAgICAgICAgKDAsIF9kb21Dc3MyW1wiZGVmYXVsdFwiXSkodGhpcy50cmFja0hvcml6b250YWwsIHsgb3BhY2l0eTogMSB9KTtcbiAgICAgICAgICAgICgwLCBfZG9tQ3NzMltcImRlZmF1bHRcIl0pKHRoaXMudHJhY2tWZXJ0aWNhbCwgeyBvcGFjaXR5OiAxIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoaWRlVHJhY2tzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGVUcmFja3MoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbGluZykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhY2tNb3VzZU92ZXIpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBhdXRvSGlkZVRpbWVvdXQgPSB0aGlzLnByb3BzLmF1dG9IaWRlVGltZW91dDtcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRyYWNrc1RpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5oaWRlVHJhY2tzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICgwLCBfZG9tQ3NzMltcImRlZmF1bHRcIl0pKF90aGlzMy50cmFja0hvcml6b250YWwsIHsgb3BhY2l0eTogMCB9KTtcbiAgICAgICAgICAgICAgICAoMCwgX2RvbUNzczJbXCJkZWZhdWx0XCJdKShfdGhpczMudHJhY2tWZXJ0aWNhbCwgeyBvcGFjaXR5OiAwIH0pO1xuICAgICAgICAgICAgfSwgYXV0b0hpZGVUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGV0ZWN0U2Nyb2xsaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRldGVjdFNjcm9sbGluZygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxpbmcpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsU3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0U2Nyb2xsaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzNC5sYXN0Vmlld1Njcm9sbExlZnQgPT09IF90aGlzNC52aWV3U2Nyb2xsTGVmdCAmJiBfdGhpczQubGFzdFZpZXdTY3JvbGxUb3AgPT09IF90aGlzNC52aWV3U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX3RoaXM0LmRldGVjdFNjcm9sbGluZ0ludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczQuaGFuZGxlU2Nyb2xsU3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpczQubGFzdFZpZXdTY3JvbGxMZWZ0ID0gX3RoaXM0LnZpZXdTY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIF90aGlzNC5sYXN0Vmlld1Njcm9sbFRvcCA9IF90aGlzNC52aWV3U2Nyb2xsVG9wO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmFmJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJhZihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlcXVlc3RGcmFtZSkgX3JhZjNbXCJkZWZhdWx0XCJdLmNhbmNlbCh0aGlzLnJlcXVlc3RGcmFtZSk7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RGcmFtZSA9ICgwLCBfcmFmM1tcImRlZmF1bHRcIl0pKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpczUucmVxdWVzdEZyYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMucmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM2Ll91cGRhdGUoY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ191cGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG9uVXBkYXRlID0gX3Byb3BzNC5vblVwZGF0ZSxcbiAgICAgICAgICAgICAgICBoaWRlVHJhY2tzV2hlbk5vdE5lZWRlZCA9IF9wcm9wczQuaGlkZVRyYWNrc1doZW5Ob3ROZWVkZWQ7XG5cbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgICAgICAgICAgaWYgKCgwLCBfZ2V0U2Nyb2xsYmFyV2lkdGgyW1wiZGVmYXVsdFwiXSkoKSkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gdmFsdWVzLnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFdpZHRoID0gdmFsdWVzLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxXaWR0aCA9IHZhbHVlcy5zY3JvbGxXaWR0aDtcblxuICAgICAgICAgICAgICAgIHZhciB0cmFja0hvcml6b250YWxXaWR0aCA9ICgwLCBfZ2V0SW5uZXJXaWR0aDJbXCJkZWZhdWx0XCJdKSh0aGlzLnRyYWNrSG9yaXpvbnRhbCk7XG4gICAgICAgICAgICAgICAgdmFyIHRodW1iSG9yaXpvbnRhbFdpZHRoID0gdGhpcy5nZXRUaHVtYkhvcml6b250YWxXaWR0aCgpO1xuICAgICAgICAgICAgICAgIHZhciB0aHVtYkhvcml6b250YWxYID0gc2Nyb2xsTGVmdCAvIChzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoKSAqICh0cmFja0hvcml6b250YWxXaWR0aCAtIHRodW1iSG9yaXpvbnRhbFdpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgdGh1bWJIb3Jpem9udGFsU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aHVtYkhvcml6b250YWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgnICsgdGh1bWJIb3Jpem9udGFsWCArICdweCknXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gdmFsdWVzLnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdmFsdWVzLmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdmFsdWVzLnNjcm9sbEhlaWdodDtcblxuICAgICAgICAgICAgICAgIHZhciB0cmFja1ZlcnRpY2FsSGVpZ2h0ID0gKDAsIF9nZXRJbm5lckhlaWdodDJbXCJkZWZhdWx0XCJdKSh0aGlzLnRyYWNrVmVydGljYWwpO1xuICAgICAgICAgICAgICAgIHZhciB0aHVtYlZlcnRpY2FsSGVpZ2h0ID0gdGhpcy5nZXRUaHVtYlZlcnRpY2FsSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHRodW1iVmVydGljYWxZID0gc2Nyb2xsVG9wIC8gKHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCkgKiAodHJhY2tWZXJ0aWNhbEhlaWdodCAtIHRodW1iVmVydGljYWxIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHZhciB0aHVtYlZlcnRpY2FsU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGh1bWJWZXJ0aWNhbEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgnICsgdGh1bWJWZXJ0aWNhbFkgKyAncHgpJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUcmFja3NXaGVuTm90TmVlZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFja0hvcml6b250YWxTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHNjcm9sbFdpZHRoID4gY2xpZW50V2lkdGggPyAndmlzaWJsZScgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhY2tWZXJ0aWNhbFN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogc2Nyb2xsSGVpZ2h0ID4gY2xpZW50SGVpZ2h0ID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgKDAsIF9kb21Dc3MyW1wiZGVmYXVsdFwiXSkodGhpcy50cmFja0hvcml6b250YWwsIHRyYWNrSG9yaXpvbnRhbFN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgKDAsIF9kb21Dc3MyW1wiZGVmYXVsdFwiXSkodGhpcy50cmFja1ZlcnRpY2FsLCB0cmFja1ZlcnRpY2FsU3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoMCwgX2RvbUNzczJbXCJkZWZhdWx0XCJdKSh0aGlzLnRodW1iSG9yaXpvbnRhbCwgdGh1bWJIb3Jpem9udGFsU3R5bGUpO1xuICAgICAgICAgICAgICAgICgwLCBfZG9tQ3NzMltcImRlZmF1bHRcIl0pKHRoaXMudGh1bWJWZXJ0aWNhbCwgdGh1bWJWZXJ0aWNhbFN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodmFsdWVzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICAgICAgICAgIGNhbGxiYWNrKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHNjcm9sbGJhcldpZHRoID0gKDAsIF9nZXRTY3JvbGxiYXJXaWR0aDJbXCJkZWZhdWx0XCJdKSgpO1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICAgICAgICAgICAgdmFyIF9wcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIG9uU2Nyb2xsID0gX3Byb3BzNS5vblNjcm9sbCxcbiAgICAgICAgICAgICAgICBvblNjcm9sbEZyYW1lID0gX3Byb3BzNS5vblNjcm9sbEZyYW1lLFxuICAgICAgICAgICAgICAgIG9uU2Nyb2xsU3RhcnQgPSBfcHJvcHM1Lm9uU2Nyb2xsU3RhcnQsXG4gICAgICAgICAgICAgICAgb25TY3JvbGxTdG9wID0gX3Byb3BzNS5vblNjcm9sbFN0b3AsXG4gICAgICAgICAgICAgICAgb25VcGRhdGUgPSBfcHJvcHM1Lm9uVXBkYXRlLFxuICAgICAgICAgICAgICAgIHJlbmRlclZpZXcgPSBfcHJvcHM1LnJlbmRlclZpZXcsXG4gICAgICAgICAgICAgICAgcmVuZGVyVHJhY2tIb3Jpem9udGFsID0gX3Byb3BzNS5yZW5kZXJUcmFja0hvcml6b250YWwsXG4gICAgICAgICAgICAgICAgcmVuZGVyVHJhY2tWZXJ0aWNhbCA9IF9wcm9wczUucmVuZGVyVHJhY2tWZXJ0aWNhbCxcbiAgICAgICAgICAgICAgICByZW5kZXJUaHVtYkhvcml6b250YWwgPSBfcHJvcHM1LnJlbmRlclRodW1iSG9yaXpvbnRhbCxcbiAgICAgICAgICAgICAgICByZW5kZXJUaHVtYlZlcnRpY2FsID0gX3Byb3BzNS5yZW5kZXJUaHVtYlZlcnRpY2FsLFxuICAgICAgICAgICAgICAgIHRhZ05hbWUgPSBfcHJvcHM1LnRhZ05hbWUsXG4gICAgICAgICAgICAgICAgaGlkZVRyYWNrc1doZW5Ob3ROZWVkZWQgPSBfcHJvcHM1LmhpZGVUcmFja3NXaGVuTm90TmVlZGVkLFxuICAgICAgICAgICAgICAgIGF1dG9IaWRlID0gX3Byb3BzNS5hdXRvSGlkZSxcbiAgICAgICAgICAgICAgICBhdXRvSGlkZVRpbWVvdXQgPSBfcHJvcHM1LmF1dG9IaWRlVGltZW91dCxcbiAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uID0gX3Byb3BzNS5hdXRvSGlkZUR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHRodW1iU2l6ZSA9IF9wcm9wczUudGh1bWJTaXplLFxuICAgICAgICAgICAgICAgIHRodW1iTWluU2l6ZSA9IF9wcm9wczUudGh1bWJNaW5TaXplLFxuICAgICAgICAgICAgICAgIHVuaXZlcnNhbCA9IF9wcm9wczUudW5pdmVyc2FsLFxuICAgICAgICAgICAgICAgIGF1dG9IZWlnaHQgPSBfcHJvcHM1LmF1dG9IZWlnaHQsXG4gICAgICAgICAgICAgICAgYXV0b0hlaWdodE1pbiA9IF9wcm9wczUuYXV0b0hlaWdodE1pbixcbiAgICAgICAgICAgICAgICBhdXRvSGVpZ2h0TWF4ID0gX3Byb3BzNS5hdXRvSGVpZ2h0TWF4LFxuICAgICAgICAgICAgICAgIHN0eWxlID0gX3Byb3BzNS5zdHlsZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczUuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzNSwgWydvblNjcm9sbCcsICdvblNjcm9sbEZyYW1lJywgJ29uU2Nyb2xsU3RhcnQnLCAnb25TY3JvbGxTdG9wJywgJ29uVXBkYXRlJywgJ3JlbmRlclZpZXcnLCAncmVuZGVyVHJhY2tIb3Jpem9udGFsJywgJ3JlbmRlclRyYWNrVmVydGljYWwnLCAncmVuZGVyVGh1bWJIb3Jpem9udGFsJywgJ3JlbmRlclRodW1iVmVydGljYWwnLCAndGFnTmFtZScsICdoaWRlVHJhY2tzV2hlbk5vdE5lZWRlZCcsICdhdXRvSGlkZScsICdhdXRvSGlkZVRpbWVvdXQnLCAnYXV0b0hpZGVEdXJhdGlvbicsICd0aHVtYlNpemUnLCAndGh1bWJNaW5TaXplJywgJ3VuaXZlcnNhbCcsICdhdXRvSGVpZ2h0JywgJ2F1dG9IZWlnaHRNaW4nLCAnYXV0b0hlaWdodE1heCcsICdzdHlsZScsICdjaGlsZHJlbiddKTtcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICAgICAgICAgICAgdmFyIGRpZE1vdW50VW5pdmVyc2FsID0gdGhpcy5zdGF0ZS5kaWRNb3VudFVuaXZlcnNhbDtcblxuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyU3R5bGUgPSBfZXh0ZW5kcyh7fSwgX3N0eWxlcy5jb250YWluZXJTdHlsZURlZmF1bHQsIGF1dG9IZWlnaHQgJiYgX2V4dGVuZHMoe30sIF9zdHlsZXMuY29udGFpbmVyU3R5bGVBdXRvSGVpZ2h0LCB7XG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBhdXRvSGVpZ2h0TWluLFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogYXV0b0hlaWdodE1heFxuICAgICAgICAgICAgfSksIHN0eWxlKTtcblxuICAgICAgICAgICAgdmFyIHZpZXdTdHlsZSA9IF9leHRlbmRzKHt9LCBfc3R5bGVzLnZpZXdTdHlsZURlZmF1bHQsIHtcbiAgICAgICAgICAgICAgICAvLyBIaWRlIHNjcm9sbGJhcnMgYnkgc2V0dGluZyBhIG5lZ2F0aXZlIG1hcmdpblxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBzY3JvbGxiYXJXaWR0aCA/IC1zY3JvbGxiYXJXaWR0aCA6IDAsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBzY3JvbGxiYXJXaWR0aCA/IC1zY3JvbGxiYXJXaWR0aCA6IDBcbiAgICAgICAgICAgIH0sIGF1dG9IZWlnaHQgJiYgX2V4dGVuZHMoe30sIF9zdHlsZXMudmlld1N0eWxlQXV0b0hlaWdodCwge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBzY3JvbGxiYXJXaWR0aCB0byBhdXRvSGVpZ2h0IGluIG9yZGVyIHRvIGNvbXBlbnNhdGUgbmVnYXRpdmUgbWFyZ2luc1xuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogKDAsIF9pc1N0cmluZzJbXCJkZWZhdWx0XCJdKShhdXRvSGVpZ2h0TWluKSA/ICdjYWxjKCcgKyBhdXRvSGVpZ2h0TWluICsgJyArICcgKyBzY3JvbGxiYXJXaWR0aCArICdweCknIDogYXV0b0hlaWdodE1pbiArIHNjcm9sbGJhcldpZHRoLFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogKDAsIF9pc1N0cmluZzJbXCJkZWZhdWx0XCJdKShhdXRvSGVpZ2h0TWF4KSA/ICdjYWxjKCcgKyBhdXRvSGVpZ2h0TWF4ICsgJyArICcgKyBzY3JvbGxiYXJXaWR0aCArICdweCknIDogYXV0b0hlaWdodE1heCArIHNjcm9sbGJhcldpZHRoXG4gICAgICAgICAgICB9KSwgYXV0b0hlaWdodCAmJiB1bml2ZXJzYWwgJiYgIWRpZE1vdW50VW5pdmVyc2FsICYmIHtcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IGF1dG9IZWlnaHRNaW4sXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBhdXRvSGVpZ2h0TWF4XG4gICAgICAgICAgICB9LCB1bml2ZXJzYWwgJiYgIWRpZE1vdW50VW5pdmVyc2FsICYmIF9zdHlsZXMudmlld1N0eWxlVW5pdmVyc2FsSW5pdGlhbCk7XG5cbiAgICAgICAgICAgIHZhciB0cmFja0F1dG9IZWlnaHRTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAnICsgYXV0b0hpZGVEdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHRyYWNrSG9yaXpvbnRhbFN0eWxlID0gX2V4dGVuZHMoe30sIF9zdHlsZXMudHJhY2tIb3Jpem9udGFsU3R5bGVEZWZhdWx0LCBhdXRvSGlkZSAmJiB0cmFja0F1dG9IZWlnaHRTdHlsZSwgKCFzY3JvbGxiYXJXaWR0aCB8fCB1bml2ZXJzYWwgJiYgIWRpZE1vdW50VW5pdmVyc2FsKSAmJiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIHRyYWNrVmVydGljYWxTdHlsZSA9IF9leHRlbmRzKHt9LCBfc3R5bGVzLnRyYWNrVmVydGljYWxTdHlsZURlZmF1bHQsIGF1dG9IaWRlICYmIHRyYWNrQXV0b0hlaWdodFN0eWxlLCAoIXNjcm9sbGJhcldpZHRoIHx8IHVuaXZlcnNhbCAmJiAhZGlkTW91bnRVbml2ZXJzYWwpICYmIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KSh0YWdOYW1lLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgc3R5bGU6IGNvbnRhaW5lclN0eWxlLCByZWY6IGZ1bmN0aW9uIHJlZihfcmVmMykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczcuY29udGFpbmVyID0gX3JlZjM7XG4gICAgICAgICAgICAgICAgfSB9KSwgWygwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShyZW5kZXJWaWV3KHsgc3R5bGU6IHZpZXdTdHlsZSB9KSwgeyBrZXk6ICd2aWV3JywgcmVmOiBmdW5jdGlvbiByZWYoX3JlZjQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM3LnZpZXcgPSBfcmVmNDtcbiAgICAgICAgICAgICAgICB9IH0sIGNoaWxkcmVuKSwgKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHJlbmRlclRyYWNrSG9yaXpvbnRhbCh7IHN0eWxlOiB0cmFja0hvcml6b250YWxTdHlsZSB9KSwgeyBrZXk6ICd0cmFja0hvcml6b250YWwnLCByZWY6IGZ1bmN0aW9uIHJlZihfcmVmNSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczcudHJhY2tIb3Jpem9udGFsID0gX3JlZjU7XG4gICAgICAgICAgICAgICAgfSB9LCAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkocmVuZGVyVGh1bWJIb3Jpem9udGFsKHsgc3R5bGU6IF9zdHlsZXMudGh1bWJIb3Jpem9udGFsU3R5bGVEZWZhdWx0IH0pLCB7IHJlZjogZnVuY3Rpb24gcmVmKF9yZWY2KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNy50aHVtYkhvcml6b250YWwgPSBfcmVmNjtcbiAgICAgICAgICAgICAgICB9IH0pKSwgKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHJlbmRlclRyYWNrVmVydGljYWwoeyBzdHlsZTogdHJhY2tWZXJ0aWNhbFN0eWxlIH0pLCB7IGtleTogJ3RyYWNrVmVydGljYWwnLCByZWY6IGZ1bmN0aW9uIHJlZihfcmVmNykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczcudHJhY2tWZXJ0aWNhbCA9IF9yZWY3O1xuICAgICAgICAgICAgICAgIH0gfSwgKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHJlbmRlclRodW1iVmVydGljYWwoeyBzdHlsZTogX3N0eWxlcy50aHVtYlZlcnRpY2FsU3R5bGVEZWZhdWx0IH0pLCB7IHJlZjogZnVuY3Rpb24gcmVmKF9yZWY4KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNy50aHVtYlZlcnRpY2FsID0gX3JlZjg7XG4gICAgICAgICAgICAgICAgfSB9KSldKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTY3JvbGxiYXJzO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTY3JvbGxiYXJzO1xuXG5cblNjcm9sbGJhcnMucHJvcFR5cGVzID0ge1xuICAgIG9uU2Nyb2xsOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgICBvblNjcm9sbEZyYW1lOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgICBvblNjcm9sbFN0YXJ0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgICBvblNjcm9sbFN0b3A6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICAgIG9uVXBkYXRlOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgICByZW5kZXJWaWV3OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uZnVuYyxcbiAgICByZW5kZXJUcmFja0hvcml6b250YWw6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICAgIHJlbmRlclRyYWNrVmVydGljYWw6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5mdW5jLFxuICAgIHJlbmRlclRodW1iSG9yaXpvbnRhbDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gICAgcmVuZGVyVGh1bWJWZXJ0aWNhbDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gICAgdGFnTmFtZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgICB0aHVtYlNpemU6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gICAgdGh1bWJNaW5TaXplOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAgIGhpZGVUcmFja3NXaGVuTm90TmVlZGVkOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0uYm9vbCxcbiAgICBhdXRvSGlkZTogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmJvb2wsXG4gICAgYXV0b0hpZGVUaW1lb3V0OiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAgIGF1dG9IaWRlRHVyYXRpb246IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gICAgYXV0b0hlaWdodDogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLmJvb2wsXG4gICAgYXV0b0hlaWdodE1pbjogX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLm51bWJlciwgX3Byb3BUeXBlczJbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICAgIGF1dG9IZWlnaHRNYXg6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW19wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5udW1iZXIsIF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgICB1bml2ZXJzYWw6IF9wcm9wVHlwZXMyW1wiZGVmYXVsdFwiXS5ib29sLFxuICAgIHN0eWxlOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ub2JqZWN0LFxuICAgIGNoaWxkcmVuOiBfcHJvcFR5cGVzMltcImRlZmF1bHRcIl0ubm9kZVxufTtcblxuU2Nyb2xsYmFycy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcmVuZGVyVmlldzogX2RlZmF1bHRSZW5kZXJFbGVtZW50cy5yZW5kZXJWaWV3RGVmYXVsdCxcbiAgICByZW5kZXJUcmFja0hvcml6b250YWw6IF9kZWZhdWx0UmVuZGVyRWxlbWVudHMucmVuZGVyVHJhY2tIb3Jpem9udGFsRGVmYXVsdCxcbiAgICByZW5kZXJUcmFja1ZlcnRpY2FsOiBfZGVmYXVsdFJlbmRlckVsZW1lbnRzLnJlbmRlclRyYWNrVmVydGljYWxEZWZhdWx0LFxuICAgIHJlbmRlclRodW1iSG9yaXpvbnRhbDogX2RlZmF1bHRSZW5kZXJFbGVtZW50cy5yZW5kZXJUaHVtYkhvcml6b250YWxEZWZhdWx0LFxuICAgIHJlbmRlclRodW1iVmVydGljYWw6IF9kZWZhdWx0UmVuZGVyRWxlbWVudHMucmVuZGVyVGh1bWJWZXJ0aWNhbERlZmF1bHQsXG4gICAgdGFnTmFtZTogJ2RpdicsXG4gICAgdGh1bWJNaW5TaXplOiAzMCxcbiAgICBoaWRlVHJhY2tzV2hlbk5vdE5lZWRlZDogZmFsc2UsXG4gICAgYXV0b0hpZGU6IGZhbHNlLFxuICAgIGF1dG9IaWRlVGltZW91dDogMTAwMCxcbiAgICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAsXG4gICAgYXV0b0hlaWdodDogZmFsc2UsXG4gICAgYXV0b0hlaWdodE1pbjogMCxcbiAgICBhdXRvSGVpZ2h0TWF4OiAyMDAsXG4gICAgdW5pdmVyc2FsOiBmYWxzZVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjb250YWluZXJTdHlsZURlZmF1bHQgPSBleHBvcnRzLmNvbnRhaW5lclN0eWxlRGVmYXVsdCA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xufTtcblxuLy8gT3ZlcnJpZGVzIGNvbnRhaW5lclN0eWxlRGVmYXVsdCBwcm9wZXJ0aWVzXG52YXIgY29udGFpbmVyU3R5bGVBdXRvSGVpZ2h0ID0gZXhwb3J0cy5jb250YWluZXJTdHlsZUF1dG9IZWlnaHQgPSB7XG4gICAgaGVpZ2h0OiAnYXV0bydcbn07XG5cbnZhciB2aWV3U3R5bGVEZWZhdWx0ID0gZXhwb3J0cy52aWV3U3R5bGVEZWZhdWx0ID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCdcbn07XG5cbi8vIE92ZXJyaWRlcyB2aWV3U3R5bGVEZWZhdWx0IHByb3BlcnRpZXNcbnZhciB2aWV3U3R5bGVBdXRvSGVpZ2h0ID0gZXhwb3J0cy52aWV3U3R5bGVBdXRvSGVpZ2h0ID0ge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogdW5kZWZpbmVkLFxuICAgIGxlZnQ6IHVuZGVmaW5lZCxcbiAgICByaWdodDogdW5kZWZpbmVkLFxuICAgIGJvdHRvbTogdW5kZWZpbmVkXG59O1xuXG52YXIgdmlld1N0eWxlVW5pdmVyc2FsSW5pdGlhbCA9IGV4cG9ydHMudmlld1N0eWxlVW5pdmVyc2FsSW5pdGlhbCA9IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgbWFyZ2luQm90dG9tOiAwXG59O1xuXG52YXIgdHJhY2tIb3Jpem9udGFsU3R5bGVEZWZhdWx0ID0gZXhwb3J0cy50cmFja0hvcml6b250YWxTdHlsZURlZmF1bHQgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgaGVpZ2h0OiA2XG59O1xuXG52YXIgdHJhY2tWZXJ0aWNhbFN0eWxlRGVmYXVsdCA9IGV4cG9ydHMudHJhY2tWZXJ0aWNhbFN0eWxlRGVmYXVsdCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogNlxufTtcblxudmFyIHRodW1iSG9yaXpvbnRhbFN0eWxlRGVmYXVsdCA9IGV4cG9ydHMudGh1bWJIb3Jpem9udGFsU3R5bGVEZWZhdWx0ID0ge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbn07XG5cbnZhciB0aHVtYlZlcnRpY2FsU3R5bGVEZWZhdWx0ID0gZXhwb3J0cy50aHVtYlZlcnRpY2FsU3R5bGVEZWZhdWx0ID0ge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJ1xufTtcblxudmFyIGRpc2FibGVTZWxlY3RTdHlsZSA9IGV4cG9ydHMuZGlzYWJsZVNlbGVjdFN0eWxlID0ge1xuICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xufTtcblxudmFyIGRpc2FibGVTZWxlY3RTdHlsZVJlc2V0ID0gZXhwb3J0cy5kaXNhYmxlU2VsZWN0U3R5bGVSZXNldCA9IHtcbiAgICB1c2VyU2VsZWN0OiAnJ1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlNjcm9sbGJhcnMgPSB1bmRlZmluZWQ7XG5cbnZhciBfU2Nyb2xsYmFycyA9IHJlcXVpcmUoJy4vU2Nyb2xsYmFycycpO1xuXG52YXIgX1Njcm9sbGJhcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2Nyb2xsYmFycyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9TY3JvbGxiYXJzMltcImRlZmF1bHRcIl07XG5leHBvcnRzLlNjcm9sbGJhcnMgPSBfU2Nyb2xsYmFyczJbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldElubmVySGVpZ2h0O1xuZnVuY3Rpb24gZ2V0SW5uZXJIZWlnaHQoZWwpIHtcbiAgICB2YXIgY2xpZW50SGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0O1xuXG4gICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCksXG4gICAgICAgIHBhZGRpbmdUb3AgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5wYWRkaW5nVG9wLFxuICAgICAgICBwYWRkaW5nQm90dG9tID0gX2dldENvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbTtcblxuICAgIHJldHVybiBjbGllbnRIZWlnaHQgLSBwYXJzZUZsb2F0KHBhZGRpbmdUb3ApIC0gcGFyc2VGbG9hdChwYWRkaW5nQm90dG9tKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXRJbm5lcldpZHRoO1xuZnVuY3Rpb24gZ2V0SW5uZXJXaWR0aChlbCkge1xuICAgIHZhciBjbGllbnRXaWR0aCA9IGVsLmNsaWVudFdpZHRoO1xuXG4gICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCksXG4gICAgICAgIHBhZGRpbmdMZWZ0ID0gX2dldENvbXB1dGVkU3R5bGUucGFkZGluZ0xlZnQsXG4gICAgICAgIHBhZGRpbmdSaWdodCA9IF9nZXRDb21wdXRlZFN0eWxlLnBhZGRpbmdSaWdodDtcblxuICAgIHJldHVybiBjbGllbnRXaWR0aCAtIHBhcnNlRmxvYXQocGFkZGluZ0xlZnQpIC0gcGFyc2VGbG9hdChwYWRkaW5nUmlnaHQpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXRTY3JvbGxiYXJXaWR0aDtcblxudmFyIF9kb21Dc3MgPSByZXF1aXJlKCdkb20tY3NzJyk7XG5cbnZhciBfZG9tQ3NzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvbUNzcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgc2Nyb2xsYmFyV2lkdGggPSBmYWxzZTtcblxuZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgaWYgKHNjcm9sbGJhcldpZHRoICE9PSBmYWxzZSkgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAoMCwgX2RvbUNzczJbXCJkZWZhdWx0XCJdKShkaXYsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAtOTk5OSxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgICAgICAgICAgIE1zT3ZlcmZsb3dTdHlsZTogJ3Njcm9sbGJhcidcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgc2Nyb2xsYmFyV2lkdGggPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGg7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxiYXJXaWR0aCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aCB8fCAwO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBpc1N0cmluZztcbmZ1bmN0aW9uIGlzU3RyaW5nKG1heWJlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBtYXliZSA9PT0gJ3N0cmluZyc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcmV0dXJuRmFsc2U7XG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgLy8gVXNlIHRoZSBzZXRTdGF0ZSgpIHVwZGF0ZXIgdG8gZW5zdXJlIHN0YXRlIGlzbid0IHN0YWxlIGluIGNlcnRhaW4gZWRnZSBjYXNlcy5cbiAgZnVuY3Rpb24gdXBkYXRlcihwcmV2U3RhdGUpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQgPyBzdGF0ZSA6IG51bGw7XG4gIH1cbiAgLy8gQmluZGluZyBcInRoaXNcIiBpcyBpbXBvcnRhbnQgZm9yIHNoYWxsb3cgcmVuZGVyZXIgc3VwcG9ydC5cbiAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVyLmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHRyeSB7XG4gICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90ID0gdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZVxuICAgICk7XG4gIH0gZmluYWxseSB7XG4gICAgdGhpcy5wcm9wcyA9IHByZXZQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gcHJldlN0YXRlO1xuICB9XG59XG5cbi8vIFJlYWN0IG1heSB3YXJuIGFib3V0IGNXTS9jV1JQL2NXVSBtZXRob2RzIGJlaW5nIGRlcHJlY2F0ZWQuXG4vLyBBZGQgYSBmbGFnIHRvIHN1cHByZXNzIHRoZXNlIHdhcm5pbmdzIGZvciB0aGlzIHNwZWNpYWwgY2FzZS5cbmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsVXBkYXRlLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBwb2x5ZmlsbChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgaWYgKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBwb2x5ZmlsbCBjbGFzcyBjb21wb25lbnRzJyk7XG4gIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICAvLyBJZiBuZXcgY29tcG9uZW50IEFQSXMgYXJlIGRlZmluZWQsIFwidW5zYWZlXCIgbGlmZWN5Y2xlcyB3b24ndCBiZSBjYWxsZWQuXG4gIC8vIEVycm9yIGlmIGFueSBvZiB0aGVzZSBsaWZlY3ljbGVzIGFyZSBwcmVzZW50LFxuICAvLyBCZWNhdXNlIHRoZXkgd291bGQgd29yayBkaWZmZXJlbnRseSBiZXR3ZWVuIG9sZGVyIGFuZCBuZXdlciAoMTYuMyspIHZlcnNpb25zIG9mIFJlYWN0LlxuICB2YXIgZm91bmRXaWxsTW91bnROYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsVXBkYXRlTmFtZSA9IG51bGw7XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdjb21wb25lbnRXaWxsTW91bnQnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9XG4gIGlmIChcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbFxuICApIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZTtcbiAgICB2YXIgbmV3QXBpTmFtZSA9XG4gICAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoKSdcbiAgICAgICAgOiAnZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSc7XG5cbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICdVbnNhZmUgbGVnYWN5IGxpZmVjeWNsZXMgd2lsbCBub3QgYmUgY2FsbGVkIGZvciBjb21wb25lbnRzIHVzaW5nIG5ldyBjb21wb25lbnQgQVBJcy5cXG5cXG4nICtcbiAgICAgICAgY29tcG9uZW50TmFtZSArXG4gICAgICAgICcgdXNlcyAnICtcbiAgICAgICAgbmV3QXBpTmFtZSArXG4gICAgICAgICcgYnV0IGFsc28gY29udGFpbnMgdGhlIGZvbGxvd2luZyBsZWdhY3kgbGlmZWN5Y2xlczonICtcbiAgICAgICAgKGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxNb3VudE5hbWUgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbFxuICAgICAgICAgID8gJ1xcbiAgJyArIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWVcbiAgICAgICAgICA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbFVwZGF0ZU5hbWUgOiAnJykgK1xuICAgICAgICAnXFxuXFxuVGhlIGFib3ZlIGxpZmVjeWNsZXMgc2hvdWxkIGJlIHJlbW92ZWQuIExlYXJuIG1vcmUgYWJvdXQgdGhpcyB3YXJuaW5nIGhlcmU6XFxuJyArXG4gICAgICAgICdodHRwczovL2ZiLm1lL3JlYWN0LWFzeW5jLWNvbXBvbmVudC1saWZlY3ljbGUtaG9va3MnXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV00gYW5kIGNXUlAgdG8gaW52b2tlIHRoZSBuZXcgc3RhdGljIGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhlc2UgbGlmZWN5Y2xlcyBpZiBnRFNGUCBleGlzdHMuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBjb21wb25lbnRXaWxsTW91bnQ7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IGdldFNuYXBzaG90QmVmb3JlVXBkYXRlLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV1UgdG8gaW52b2tlIHRoZSBuZXcgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGF0IGxpZmVjeWNsZSBpZiBnU0JVIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBwb2x5ZmlsbCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpIGZvciBjb21wb25lbnRzIHRoYXQgZG8gbm90IGRlZmluZSBjb21wb25lbnREaWRVcGRhdGUoKSBvbiB0aGUgcHJvdG90eXBlJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGNvbXBvbmVudFdpbGxVcGRhdGU7XG5cbiAgICB2YXIgY29tcG9uZW50RGlkVXBkYXRlID0gcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZTtcblxuICAgIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbChcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZSxcbiAgICAgIG1heWJlU25hcHNob3RcbiAgICApIHtcbiAgICAgIC8vIDE2LjMrIHdpbGwgbm90IGV4ZWN1dGUgb3VyIHdpbGwtdXBkYXRlIG1ldGhvZDtcbiAgICAgIC8vIEl0IHdpbGwgcGFzcyBhIHNuYXBzaG90IHZhbHVlIHRvIGRpZC11cGRhdGUgdGhvdWdoLlxuICAgICAgLy8gT2xkZXIgdmVyc2lvbnMgd2lsbCByZXF1aXJlIG91ciBwb2x5ZmlsbGVkIHdpbGwtdXBkYXRlIHZhbHVlLlxuICAgICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYm90aCBjYXNlcywgYnV0IGNhbid0IGp1c3QgY2hlY2sgZm9yIHRoZSBwcmVzZW5jZSBvZiBcIm1heWJlU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZm9yIDw9IDE1LnggdmVyc2lvbnMgdGhpcyBtaWdodCBiZSBhIFwicHJldkNvbnRleHRcIiBvYmplY3QuXG4gICAgICAvLyBXZSBhbHNvIGNhbid0IGp1c3QgY2hlY2sgXCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBnZXQtc25hcHNob3QgbWlnaHQgcmV0dXJuIGEgZmFsc3kgdmFsdWUuXG4gICAgICAvLyBTbyBjaGVjayBmb3IgdGhlIGV4cGxpY2l0IF9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyBmbGFnIHRvIGRldGVybWluZSBiZWhhdmlvci5cbiAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnXG4gICAgICAgID8gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFxuICAgICAgICA6IG1heWJlU25hcHNob3Q7XG5cbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZS5jYWxsKHRoaXMsIHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB7IHBvbHlmaWxsIH07XG4iLCJcbnZhciBzcGFjZSA9IHJlcXVpcmUoJ3RvLXNwYWNlLWNhc2UnKVxuXG4vKipcbiAqIEV4cG9ydC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvQ2FtZWxDYXNlXG5cbi8qKlxuICogQ29udmVydCBhIGBzdHJpbmdgIHRvIGNhbWVsIGNhc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cmluZykge1xuICByZXR1cm4gc3BhY2Uoc3RyaW5nKS5yZXBsYWNlKC9cXHMoXFx3KS9nLCBmdW5jdGlvbiAobWF0Y2hlcywgbGV0dGVyKSB7XG4gICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG4iLCJcbi8qKlxuICogRXhwb3J0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9Ob0Nhc2VcblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSBzdHJpbmcgaXMgY2FtZWwtY2FzZS5cbiAqL1xuXG52YXIgaGFzU3BhY2UgPSAvXFxzL1xudmFyIGhhc1NlcGFyYXRvciA9IC8oX3wtfFxcLnw6KS9cbnZhciBoYXNDYW1lbCA9IC8oW2Etel1bQS1aXXxbQS1aXVthLXpdKS9cblxuLyoqXG4gKiBSZW1vdmUgYW55IHN0YXJ0aW5nIGNhc2UgZnJvbSBhIGBzdHJpbmdgLCBsaWtlIGNhbWVsIG9yIHNuYWtlLCBidXQga2VlcFxuICogc3BhY2VzIGFuZCBwdW5jdHVhdGlvbiB0aGF0IG1heSBiZSBpbXBvcnRhbnQgb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiB0b05vQ2FzZShzdHJpbmcpIHtcbiAgaWYgKGhhc1NwYWNlLnRlc3Qoc3RyaW5nKSkgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpXG4gIGlmIChoYXNTZXBhcmF0b3IudGVzdChzdHJpbmcpKSByZXR1cm4gKHVuc2VwYXJhdGUoc3RyaW5nKSB8fCBzdHJpbmcpLnRvTG93ZXJDYXNlKClcbiAgaWYgKGhhc0NhbWVsLnRlc3Qoc3RyaW5nKSkgcmV0dXJuIHVuY2FtZWxpemUoc3RyaW5nKS50b0xvd2VyQ2FzZSgpXG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIFNlcGFyYXRvciBzcGxpdHRlci5cbiAqL1xuXG52YXIgc2VwYXJhdG9yU3BsaXR0ZXIgPSAvW1xcV19dKygufCQpL2dcblxuLyoqXG4gKiBVbi1zZXBhcmF0ZSBhIGBzdHJpbmdgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiB1bnNlcGFyYXRlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2Uoc2VwYXJhdG9yU3BsaXR0ZXIsIGZ1bmN0aW9uIChtLCBuZXh0KSB7XG4gICAgcmV0dXJuIG5leHQgPyAnICcgKyBuZXh0IDogJydcbiAgfSlcbn1cblxuLyoqXG4gKiBDYW1lbGNhc2Ugc3BsaXR0ZXIuXG4gKi9cblxudmFyIGNhbWVsU3BsaXR0ZXIgPSAvKC4pKFtBLVpdKykvZ1xuXG4vKipcbiAqIFVuLWNhbWVsY2FzZSBhIGBzdHJpbmdgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiB1bmNhbWVsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoY2FtZWxTcGxpdHRlciwgZnVuY3Rpb24gKG0sIHByZXZpb3VzLCB1cHBlcnMpIHtcbiAgICByZXR1cm4gcHJldmlvdXMgKyAnICcgKyB1cHBlcnMudG9Mb3dlckNhc2UoKS5zcGxpdCgnJykuam9pbignICcpXG4gIH0pXG59XG4iLCJcbnZhciBjbGVhbiA9IHJlcXVpcmUoJ3RvLW5vLWNhc2UnKVxuXG4vKipcbiAqIEV4cG9ydC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3BhY2VDYXNlXG5cbi8qKlxuICogQ29udmVydCBhIGBzdHJpbmdgIHRvIHNwYWNlIGNhc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHRvU3BhY2VDYXNlKHN0cmluZykge1xuICByZXR1cm4gY2xlYW4oc3RyaW5nKS5yZXBsYWNlKC9bXFxXX10rKC58JCkvZywgZnVuY3Rpb24gKG1hdGNoZXMsIG1hdGNoKSB7XG4gICAgcmV0dXJuIG1hdGNoID8gJyAnICsgbWF0Y2ggOiAnJ1xuICB9KS50cmltKClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSY0RyYXdlciBmcm9tICdyYy1kcmF3ZXInO1xuXG50eXBlIERyYXdlclByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogYW55O1xuICBjbG9zZUJ1dHRvbj86IGFueTtcbiAgY2xvc2VCdXR0b25TdHlsZT86IGFueTtcbiAgZHJhd2VySGFuZGxlcjogYW55O1xuICB0b2dnbGVIYW5kbGVyOiBhbnk7XG4gIG9wZW46IGFueTtcbiAgd2lkdGg/OiBzdHJpbmc7XG4gIHBsYWNlbWVudD86ICdsZWZ0JyB8ICdyaWdodCcgfCAndG9wJyB8ICdib3R0b20nO1xufTtcblxuY29uc3QgRHJhd2VyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxEcmF3ZXJQcm9wcz4gPSAoe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICBjbG9zZUJ1dHRvbixcbiAgY2xvc2VCdXR0b25TdHlsZSxcbiAgZHJhd2VySGFuZGxlcixcbiAgdG9nZ2xlSGFuZGxlcixcbiAgb3BlbixcbiAgd2lkdGgsXG4gIHBsYWNlbWVudCxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8UmNEcmF3ZXJcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17dG9nZ2xlSGFuZGxlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtgZHJhd2VyICR7Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9YC50cmltKCl9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIGhhbmRsZXI9e2ZhbHNlfVxuICAgICAgICBsZXZlbD17bnVsbH1cbiAgICAgICAgZHVyYXRpb249XCIuNHNcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJhd2VyX19jbG9zZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgICAgICAgc3R5bGU9e2Nsb3NlQnV0dG9uU3R5bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Nsb3NlQnV0dG9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUmNEcmF3ZXI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImRyYXdlcl9faGFuZGxlclwiXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICA+XG4gICAgICAgIHtkcmF3ZXJIYW5kbGVyfVxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiAnMzAwcHgnLFxuICBwbGFjZW1lbnQ6ICdsZWZ0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb3Blbk1vZGFsIH0gZnJvbSAnQHJlZHEvcmV1c2UtbW9kYWwnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xuaW1wb3J0IERyYXdlciBmcm9tICdjb21wb25lbnRzL0RyYXdlci9EcmF3ZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IE5hdkxpbmsgZnJvbSAnY29tcG9uZW50cy9OYXZMaW5rL05hdkxpbmsnO1xuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSAnY29tcG9uZW50cy9BbGxTdmdJY29uJztcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICdjb250ZXh0cy9kcmF3ZXIvZHJhd2VyLmNvbnRleHQnO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICdjb250ZXh0cy9hdXRoL2F1dGguY29udGV4dCc7XG5pbXBvcnQgQXV0aGVudGljYXRpb25Gb3JtIGZyb20gJy4uLy4uL1NpZ25Jbk91dEZvcm0vRm9ybSc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge1xuICBIYW1idXJnZXJJY29uLFxuICBEcmF3ZXJDb250ZW50V3JhcHBlcixcbiAgRHJhd2VyQ2xvc2UsXG4gIERyYXdlclByb2ZpbGUsXG4gIExvZ291dFZpZXcsXG4gIExvZ2luVmlldyxcbiAgVXNlckF2YXRhcixcbiAgVXNlckRldGFpbHMsXG4gIERyYXdlck1lbnUsXG4gIERyYXdlck1lbnVJdGVtLFxuICBVZXNyT3B0aW9uTWVudSxcbn0gZnJvbSAnLi9IZWFkZXIuc3R5bGUnO1xuaW1wb3J0IFVzZXJJbWFnZSBmcm9tICdpbWFnZS91c2VyLmpwZyc7XG5cbmltcG9ydCB7XG4gIFBST0NFRURfVE9fQ0hFQ0tPVVRfUEFHRSxcbiAgLy8gQUxURVJOQVRJVkVfQ0hFQ0tPVVRfUEFHRSxcbiAgUFJPRklMRV9QQUdFLFxuICBZT1VSX09SREVSLFxuICBPUkRFUl9SRUNFSVZFRCxcbiAgSEVMUF9QQUdFLFxuICBPRkZFUl9QQUdFLFxufSBmcm9tICdjb25zdGFudHMvbmF2aWdhdGlvbic7XG5cbmNvbnN0IERyYXdlck1lbnVJdGVtcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGludGxMYWJlbElkOiAnbmF2TGlua0hvbWUnLFxuICAgIGxhYmVsOiAnSG9tZScsXG4gICAgaHJlZjogJy9ob21lL3R5cGU9MScsXG4gIH0sXG4gIFxuICAvLyB7XG4gIC8vICAgaWQ6IDMsXG4gIC8vICAgbGFiZWw6ICdDaGVja291dCBTZWNvbmQnLFxuICAvLyAgIGludGxMYWJlbElkOiAnYWx0ZXJuYXRpdmVDaGVja291dCcsXG4gIC8vICAgaHJlZjogQUxURVJOQVRJVkVfQ0hFQ0tPVVRfUEFHRSxcbiAgLy8gfSxcbiAgXG4gIFxuICAvLyB7XG4gIC8vICAgaWQ6IDYsXG4gIC8vICAgaW50bExhYmVsSWQ6ICduYXZsaW5rT3JkZXJSZWNlaXZlZCcsXG4gIC8vICAgbGFiZWw6ICdSZWNlaXZlZCcsXG4gIC8vICAgaHJlZjogT1JERVJfUkVDRUlWRUQsXG4gIC8vIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICBpbnRsTGFiZWxJZDogJ25hdmxpbmtIZWxwJyxcbiAgICBsYWJlbDogJ0hlbHAnLFxuICAgIGhyZWY6IEhFTFBfUEFHRSxcbiAgfSxcbiAge1xuICAgIGlkOiA4LFxuICAgIGludGxMYWJlbElkOiAnbmF2bGlua09mZmVyJyxcbiAgICBsYWJlbDogJ09mZmVyJyxcbiAgICBocmVmOiBPRkZFUl9QQUdFLFxuICB9LFxuXTtcblxuY29uc3QgQXV0aGVudGljYXRlZEl0ZW1zID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaW50bExhYmVsSWQ6ICduYXZMaW5rSG9tZScsXG4gICAgbGFiZWw6ICdIb21lJyxcbiAgICBocmVmOiAnL2hvbWUvdHlwZT0xJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGludGxMYWJlbElkOiAnbmF2bGlua0NoZWNrb3V0JyxcbiAgICBsYWJlbDogJ0NoZWNrb3V0JyxcbiAgICBocmVmOiBQUk9DRUVEX1RPX0NIRUNLT1VUX1BBR0UsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogMyxcbiAgLy8gICBsYWJlbDogJ0NoZWNrb3V0IFNlY29uZCcsXG4gIC8vICAgaW50bExhYmVsSWQ6ICdhbHRlcm5hdGl2ZUNoZWNrb3V0JyxcbiAgLy8gICBocmVmOiBBTFRFUk5BVElWRV9DSEVDS09VVF9QQUdFLFxuICAvLyB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaW50bExhYmVsSWQ6ICduYXZsaW5rUHJvZmlsZScsXG4gICAgbGFiZWw6ICdQcm9maWxlJyxcbiAgICBocmVmOiBQUk9GSUxFX1BBR0UsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBpbnRsTGFiZWxJZDogJ3NpZGViYXJZb3VyT3JkZXInLFxuICAgIGxhYmVsOiAnT3JkZXInLFxuICAgIGhyZWY6IFlPVVJfT1JERVIsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogNixcbiAgLy8gICBpbnRsTGFiZWxJZDogJ25hdmxpbmtPcmRlclJlY2VpdmVkJyxcbiAgLy8gICBsYWJlbDogJ1JlY2VpdmVkJyxcbiAgLy8gICBocmVmOiBPUkRFUl9SRUNFSVZFRCxcbiAgLy8gfSxcbiAge1xuICAgIGlkOiA3LFxuICAgIGludGxMYWJlbElkOiAnbmF2bGlua0hlbHAnLFxuICAgIGxhYmVsOiAnSGVscCcsXG4gICAgaHJlZjogSEVMUF9QQUdFLFxuICB9LFxuICB7XG4gICAgaWQ6IDgsXG4gICAgaW50bExhYmVsSWQ6ICduYXZsaW5rT2ZmZXInLFxuICAgIGxhYmVsOiAnT2ZmZXInLFxuICAgIGhyZWY6IE9GRkVSX1BBR0UsXG4gIH0sXG5dO1xuXG5cblxuXG5cbmNvbnN0IE1vYmlsZURyYXdlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQ8YW55PihEcmF3ZXJDb250ZXh0KTtcbiAgY29uc3Qge1xuICAgIGF1dGhTdGF0ZTogeyBpc0F1dGhlbnRpY2F0ZWQgfSxcbiAgICBhdXRoRGlzcGF0Y2gsXG4gIH0gPSB1c2VDb250ZXh0PGFueT4oQXV0aENvbnRleHQpO1xuICAvLyBUb2dnbGUgZHJhd2VyXG4gIGNvbnN0IHRvZ2dsZUhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1RPR0dMRScsXG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICAgIGF1dGhEaXNwYXRjaCh7IHR5cGU6ICdTSUdOX09VVCcgfSk7XG4gICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVzZXRTZWFyY2ggPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1JFU0VUJyxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaWduSW5PdXRGb3JtID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdUT0dHTEUnLFxuICAgIH0pO1xuXG4gICAgYXV0aERpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTSUdOSU4nLFxuICAgIH0pO1xuXG4gICAgb3Blbk1vZGFsKHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lOiAncXVpY2stdmlldy1vdmVybGF5JyxcbiAgICAgIGNsb3NlT25DbGlja091dHNpZGU6IHRydWUsXG4gICAgICBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uRm9ybSxcbiAgICAgIGNsb3NlQ29tcG9uZW50OiAnJyxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBlbmFibGVSZXNpemluZzogZmFsc2UsXG4gICAgICAgIGRpc2FibGVEcmFnZ2luZzogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiAncXVpY2stdmlldy1tb2RhbCcsXG4gICAgICAgIHdpZHRoOiA0NTgsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHdpZHRoPSczMTZweCdcbiAgICAgIGRyYXdlckhhbmRsZXI9e1xuICAgICAgICA8SGFtYnVyZ2VySWNvbj5cbiAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgPC9IYW1idXJnZXJJY29uPlxuICAgICAgfVxuICAgICAgb3Blbj17c3RhdGUuaXNPcGVufVxuICAgICAgdG9nZ2xlSGFuZGxlcj17dG9nZ2xlSGFuZGxlcn1cbiAgICAgIGNsb3NlQnV0dG9uPXtcbiAgICAgICAgPERyYXdlckNsb3NlPlxuICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgPC9EcmF3ZXJDbG9zZT5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZT5cbiAgICAgICAgPERyYXdlckNvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgIDxEcmF3ZXJQcm9maWxlPlxuICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IChcbiAgICAgICAgICAgICAgPExvZ2luVmlldz5cbiAgICAgICAgICAgICAgICA8VXNlckF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtVc2VySW1hZ2V9IGFsdD0ndXNlcl9hdmF0YXInIC8+XG4gICAgICAgICAgICAgICAgPC9Vc2VyQXZhdGFyPlxuICAgICAgICAgICAgICAgIDxVc2VyRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgIDxoMz5EYXZpZCBLaW5kZXJzb248L2gzPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+Kzk5MCAzNzQgOTg3PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVXNlckRldGFpbHM+XG4gICAgICAgICAgICAgIDwvTG9naW5WaWV3PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExvZ291dFZpZXc+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaW50bEJ1dHRvbklkPSdtb2JpbGVTaWduSW5CdXR0b25UZXh0J1xuICAgICAgICAgICAgICAgICAgdGl0bGU9J0pvaW4gSW4nXG4gICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2lnbl9pbidcbiAgICAgICAgICAgICAgICAgIC8vIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaCgnL3NpZ25pbicpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTG9nb3V0Vmlldz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9EcmF3ZXJQcm9maWxlPlxuXG4gICAgICAgICAgPERyYXdlck1lbnU+XG4gICAgICAgICAgICB7aXNBdXRoZW50aWNhdGVkP0F1dGhlbnRpY2F0ZWRJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPERyYXdlck1lbnVJdGVtIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIGludGxJZD17aXRlbS5pbnRsTGFiZWxJZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZHJhd2VyX21lbnVfaXRlbSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0RyYXdlck1lbnVJdGVtPlxuICAgICAgICAgICAgKSk6XG4gICAgICAgICAgICBEcmF3ZXJNZW51SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxEcmF3ZXJNZW51SXRlbSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICBpbnRsSWQ9e2l0ZW0uaW50bExhYmVsSWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2RyYXdlcl9tZW51X2l0ZW0nXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9EcmF3ZXJNZW51SXRlbT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0RyYXdlck1lbnU+XG5cbiAgICAgICAgICB7aXNBdXRoZW50aWNhdGVkICYmIChcbiAgICAgICAgICAgIDxVZXNyT3B0aW9uTWVudT5cbiAgICAgICAgICAgICAgPERyYXdlck1lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPScvcHJvZmlsZSdcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdZb3VyIEFjY291bnQgU2V0dGluZ3MnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2RyYXdlcl9tZW51X2l0ZW0nXG4gICAgICAgICAgICAgICAgICBpbnRsSWQ9J25hdmxpbmtBY2NvdW50U2V0dGluZ3MnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9EcmF3ZXJNZW51SXRlbT5cbiAgICAgICAgICAgICAgPERyYXdlck1lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlTG9nb3V0fSBjbGFzc05hbWU9J2RyYXdlcl9tZW51X2l0ZW0nPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsb2dvdXRCdG4nPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgIGlkPSduYXZsaW5rTG9nb3V0J1xuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPSdMb2dvdXQnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvRHJhd2VyTWVudUl0ZW0+XG4gICAgICAgICAgICA8L1Vlc3JPcHRpb25NZW51PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRHJhd2VyQ29udGVudFdyYXBwZXI+XG4gICAgICA8L1Njcm9sbGJhcnM+XG4gICAgPC9EcmF3ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVEcmF3ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tICdAcmVkcS9yZXVzZS1tb2RhbCc7XG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tICcuL01vYmlsZURyYXdlcic7XG5cbmltcG9ydCB7XG4gIE1vYmlsZUhlYWRlcldyYXBwZXIsXG4gIE1vYmlsZUhlYWRlcklubmVyV3JhcHBlcixcbiAgRHJhd2VyV3JhcHBlcixcbiAgTG9nb1dyYXBwZXIsXG4gIFNlYXJjaFdyYXBwZXIsXG4gIFNlYXJjaE1vZGFsV3JhcHBlcixcbiAgU2VhcmNoTW9kYWxDbG9zZSxcbn0gZnJvbSAnLi9IZWFkZXIuc3R5bGUnO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICdjb21wb25lbnRzL1NlYXJjaEJveC9TZWFyY2hCb3gnO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJ2NvbnRleHRzL3NlYXJjaC9zZWFyY2guY29udGV4dCc7XG5pbXBvcnQgeyBIZWFkZXJDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvaGVhZGVyL2hlYWRlci5jb250ZXh0JztcbmltcG9ydCBMb2dvSW1hZ2UgZnJvbSAnaW1hZ2UvbG9nby5zdmcnO1xuXG5pbXBvcnQgeyBTZWFyY2hJY29uLCBMb25nQXJyb3dMZWZ0IH0gZnJvbSAnY29tcG9uZW50cy9BbGxTdmdJY29uJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvTG9nby9Mb2dvJztcbmltcG9ydCBMYW5ndWFnZVN3aXRjaGVyIGZyb20gJy4vTWVudS9MYW5ndWFnZVN3aXRjaGVyL0xhbmd1YWdlU3dpdGNoZXInO1xuaW1wb3J0IHsgaXNDYXRlZ29yeVBhZ2UgfSBmcm9tICcuLi9pcy1ob21lLXBhZ2UnO1xuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSAnaGVscGVyL3VzZUNvbXBvbmVudFNpemUnO1xuXG50eXBlIE1vYmlsZUhlYWRlclByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHBhdGhuYW1lPzogc3RyaW5nO1xuICBjbG9zZVNlYXJjaD86IGFueTtcbn07XG50eXBlIFNlYXJjaE1vZGFsUHJvcHMgPSB7XG4gIHN0YXRlPzogYW55O1xuICBoYW5kbGVTZWFyY2g/OiBhbnk7XG4gIHBhdGhuYW1lPzogc3RyaW5nO1xufTtcblxuY29uc3QgU2VhcmNoTW9kYWw6IFJlYWN0LkZDPFNlYXJjaE1vZGFsUHJvcHM+ID0gKHtcbiAgc3RhdGUsXG4gIHBhdGhuYW1lLFxuICBoYW5kbGVTZWFyY2gsXG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShzdGF0ZS50ZXh0IHx8ICcnKTtcbiAgY29uc3QgaGFuZGxlU2VhcmNoSW5wdXQgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgc2V0VGV4dCh0ZXh0KTtcbiAgfTtcbiAgY29uc3QgeyBwYWdlLCAuLi51cmxTdGF0ZSB9ID0gc3RhdGU7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tTZWFyY2hCdXR0b24gPSAoKSA9PiB7XG4gICAgaGFuZGxlU2VhcmNoKHRleHQpO1xuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIC4uLnVybFN0YXRlLFxuICAgICAgICB0ZXh0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFNlYXJjaE1vZGFsV3JhcHBlcj5cbiAgICAgIDxTZWFyY2hNb2RhbENsb3NlIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiBjbG9zZU1vZGFsKCl9PlxuICAgICAgICA8TG9uZ0Fycm93TGVmdCAvPlxuICAgICAgPC9TZWFyY2hNb2RhbENsb3NlPlxuICAgICAgPFNlYXJjaEJveFxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItbW9kYWwtc2VhcmNoXCJcbiAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICBpbnB1dFN0eWxlPXt7IGhlaWdodDogMzUgfX1cbiAgICAgICAgYnV0dG9uVGV4dD1cIlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgaGFuZGxlU2VhcmNoPXtoYW5kbGVTZWFyY2hJbnB1dH1cbiAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU2VhcmNoQnV0dG9ufVxuICAgICAgICBwYXRobmFtZT17cGF0aG5hbWV9XG4gICAgICAvPlxuICAgIDwvU2VhcmNoTW9kYWxXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgTW9iaWxlSGVhZGVyOiBSZWFjdC5GQzxNb2JpbGVIZWFkZXJQcm9wcz4gPSAoeyBjbGFzc05hbWUsIHBhdGhuYW1lIH0pID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XG5cbiAgY29uc3QgW21vYmlsZUhlYWRlclJlZiwgZGltZW5zaW9uc10gPSB1c2VEaW1lbnNpb25zKCk7XG4gIGNvbnN0IHsgaGVhZGVyRGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQ8YW55PihIZWFkZXJDb250ZXh0KTtcblxuICBjb25zdCBoZWFkZXJIZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhlYWRlckRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdHRVRfTU9CSUxFX0hFSUdIVCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtb2JpbGVIZWlnaHQ6IGhlYWRlckhlaWdodCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sIFtoZWFkZXJIZWlnaHRdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1VQREFURScsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0ZXh0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU2VhcmNoTW9kYWwgPSAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZW5hYmxlUmVzaXppbmc6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlRHJhZ2dpbmc6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogJ3NlYXJjaC1tb2RhbC1tb2JpbGUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIH0sXG4gICAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlOiBmYWxzZSxcbiAgICAgIGNvbXBvbmVudDogU2VhcmNoTW9kYWwsXG4gICAgICBjb21wb25lbnRQcm9wczogeyBzdGF0ZSwgcGF0aG5hbWUsIGhhbmRsZVNlYXJjaCB9LFxuICAgICAgY2xvc2VDb21wb25lbnQ6ICgpID0+IDxkaXYgLz4sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaXNIb21lUGFnZSA9IGlzQ2F0ZWdvcnlQYWdlKHBhdGhuYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJQcm92aWRlcj5cbiAgICAgIDxNb2JpbGVIZWFkZXJXcmFwcGVyPlxuICAgICAgICA8TW9iaWxlSGVhZGVySW5uZXJXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSByZWY9e21vYmlsZUhlYWRlclJlZn0+XG4gICAgICAgICAgPERyYXdlcldyYXBwZXI+XG4gICAgICAgICAgICA8TW9iaWxlRHJhd2VyIC8+XG4gICAgICAgICAgPC9EcmF3ZXJXcmFwcGVyPlxuXG4gICAgICAgICAgey8qIDxMb2dvV3JhcHBlcj5cbiAgICAgICAgICAgIDxMb2dvIGltYWdlVXJsPXtMb2dvSW1hZ2V9IGFsdD1cInNob3AgbG9nb1wiIC8+XG4gICAgICAgICAgPC9Mb2dvV3JhcHBlcj4gKi99XG5cbiAgICAgICAgICB7LyogPExhbmd1YWdlU3dpdGNoZXIgLz4gKi99XG5cbiAgICAgICAgICB7aXNIb21lUGFnZSA/IChcbiAgICAgICAgICAgIDxTZWFyY2hXcmFwcGVyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaE1vZGFsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hJY29uV3JhcHBlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgICAgICA8L1NlYXJjaFdyYXBwZXI+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvTW9iaWxlSGVhZGVySW5uZXJXcmFwcGVyPlxuICAgICAgPC9Nb2JpbGVIZWFkZXJXcmFwcGVyPlxuICAgIDwvRHJhd2VyUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVIZWFkZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcmF3ZXJDb250ZXh0IH0gZnJvbSAnLi9kcmF3ZXIuY29udGV4dCc7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdUT0dHTEUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzT3BlbjogIXN0YXRlLmlzT3BlbixcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IERyYXdlclByb3ZpZGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPERyYXdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCJmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oLi4uYXJncykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXG4gICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYm91bmNlO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi9kZWJvdW5jZSc7IC8vIG1heWJlIHVzZSBhIGhvb2sgaW5zdGVhZD9cblxuZnVuY3Rpb24gdXNlRGltZW5zaW9ucyhcbiAgbGl2ZU1lYXN1cmUgPSB0cnVlLFxuICBkZWxheSA9IDI1MCxcbiAgaW5pdGlhbERpbWVuc2lvbnMgPSB7fVxuKSB7XG4gIGNvbnN0IFtkaW1lbnNpb25zLCBzZXREaW1lbnNpb25zXSA9IHVzZVN0YXRlKGluaXRpYWxEaW1lbnNpb25zKTtcbiAgY29uc3QgW25vZGUsIHNldE5vZGVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgcmVmID0gdXNlQ2FsbGJhY2sobmV3Tm9kZSA9PiB7XG4gICAgc2V0Tm9kZShuZXdOb2RlKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbmVlZCByZWYgdG8gY29udGludWVcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZWFzdXJlID0gKCkgPT4ge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RpbWVuc2lvbnMgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBzZXREaW1lbnNpb25zKG5ld0RpbWVuc2lvbnMpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBpbnZva2UgbWVhc3VyZSByaWdodCBhd2F5XG4gICAgbWVhc3VyZSgpO1xuXG4gICAgaWYgKGxpdmVNZWFzdXJlKSB7XG4gICAgICBjb25zdCBkZWJvdW5jZU1lYXN1cmUgPSBkZWJvdW5jZShtZWFzdXJlLCBkZWxheSk7XG5cbiAgICAgIGlmICgnUmVzaXplT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihkZWJvdW5jZU1lYXN1cmUpO1xuICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKG5vZGUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VNZWFzdXJlKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VNZWFzdXJlKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZU1lYXN1cmUpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlTWVhc3VyZSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZU1lYXN1cmUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VNZWFzdXJlKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbbm9kZSwgbGl2ZU1lYXN1cmUsIGRlbGF5XSk7XG5cbiAgcmV0dXJuIFtyZWYsIGRpbWVuc2lvbnMsIG5vZGVdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VEaW1lbnNpb25zO1xuXG4vLyBVc2FnZVxuXG4vLyBmdW5jdGlvbiBBcHAoKSB7XG4vLyAgIGNvbnN0IFt3cmFwcGVyUmVmLCBkaW1lbnNpb25zXSA9IHVzZURpbWVuc2lvbnMoKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgcmVmPXt3cmFwcGVyUmVmfT5cbi8vICAgICAgIGhlaWdodDoge2RpbWVuc2lvbnMuaGVpZ2h0fVxuLy8gICAgICAgd2lkdGg6IHtkaW1lbnNpb25zLndpZHRofVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==