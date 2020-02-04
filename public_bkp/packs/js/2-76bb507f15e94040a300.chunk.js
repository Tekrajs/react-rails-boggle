(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./app/javascript/components/common/Board/Board.css":
/*!**********************************************************!*\
  !*** ./app/javascript/components/common/Board/Board.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Board.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/Board/Board.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./app/javascript/components/common/Board/index.js":
/*!*********************************************************!*\
  !*** ./app/javascript/components/common/Board/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tile */ "./app/javascript/components/common/Tile/index.js");
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.css */ "./app/javascript/components/common/Board/Board.css");
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Board_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/common/Board/index.js";





var Board = function Board(props) {
  var board = props.board,
      handleClick = props.handleClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "orange-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, board.map(function (row, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, row.map(function (tile) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tile__WEBPACK_IMPORTED_MODULE_1__["default"], {
        extraClass: "tile-" + board.length,
        hint: tile.hint,
        selected: tile.selected,
        letter: tile.letter,
        key: tile.columnId,
        handleClick: handleClick.bind(_this, tile.rowId, tile.columnId),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./app/javascript/components/common/CurrentWord/CurrentWord.css":
/*!**********************************************************************!*\
  !*** ./app/javascript/components/common/CurrentWord/CurrentWord.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./CurrentWord.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/CurrentWord/CurrentWord.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./app/javascript/components/common/CurrentWord/index.js":
/*!***************************************************************!*\
  !*** ./app/javascript/components/common/CurrentWord/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrentWord_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrentWord.css */ "./app/javascript/components/common/CurrentWord/CurrentWord.css");
/* harmony import */ var _CurrentWord_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CurrentWord_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/common/CurrentWord/index.js";



var CurrentWord = function CurrentWord(props) {
  var currentWord = props.currentWord,
      label = props.label;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "word-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "current-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "current-word",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, currentWord));
};

/* harmony default export */ __webpack_exports__["default"] = (CurrentWord);

/***/ }),

/***/ "./app/javascript/components/common/IconButton/IconButton.css":
/*!********************************************************************!*\
  !*** ./app/javascript/components/common/IconButton/IconButton.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./IconButton.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/IconButton/IconButton.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./app/javascript/components/common/IconButton/index.js":
/*!**************************************************************!*\
  !*** ./app/javascript/components/common/IconButton/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconButton.css */ "./app/javascript/components/common/IconButton/IconButton.css");
/* harmony import */ var _IconButton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_IconButton_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/common/IconButton/index.js";




var IconButton = function IconButton(props) {
  var handleSubmit = props.handleSubmit,
      tooltip = props.tooltip,
      iconName = props.iconName,
      extraClass = props.extraClass;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: extraClass ? extraClass : "action-button",
    "data-tip": tooltip ? tooltip : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    onClick: handleSubmit,
    icon: iconName ? iconName : "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconButton);

/***/ }),

/***/ "./app/javascript/components/common/NavBar/NavBar.css":
/*!************************************************************!*\
  !*** ./app/javascript/components/common/NavBar/NavBar.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./NavBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/NavBar/NavBar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./app/javascript/components/common/NavBar/index.js":
/*!**********************************************************!*\
  !*** ./app/javascript/components/common/NavBar/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./app/javascript/hoc/_Aux/index.js");
/* harmony import */ var _NavBar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBar.css */ "./app/javascript/components/common/NavBar/NavBar.css");
/* harmony import */ var _NavBar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NavBar_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../IconButton */ "./app/javascript/components/common/IconButton/index.js");
/* harmony import */ var _constants_navBarAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/navBarAction */ "./app/javascript/constants/navBarAction.js");
/* harmony import */ var react_stopwatch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-stopwatch */ "./node_modules/react-stopwatch/dist/react-stopwatch.m.js");
/* harmony import */ var _constants_routeNames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/routeNames */ "./app/javascript/constants/routeNames.js");
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/common/NavBar/index.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var NavBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavBar).call(this, props));
  }

  _createClass(NavBar, [{
    key: "routeChange",
    value: function routeChange() {
      this.props.history.push(_constants_routeNames__WEBPACK_IMPORTED_MODULE_10__["ROUTE_SCORES"]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          currentUser = _this$props.currentUser,
          timeLimit = _this$props.timeLimit;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        iconName: "home",
        tooltip: "Back to Home",
        handleSubmit: function handleSubmit() {
          _this.props.onClick ? _this.props.onClick(_constants_navBarAction__WEBPACK_IMPORTED_MODULE_8__["NB_HOME"]) : null;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        iconName: "redo",
        tooltip: "Reset Game",
        handleSubmit: function handleSubmit() {
          _this.props.onClick ? _this.props.onClick(_constants_navBarAction__WEBPACK_IMPORTED_MODULE_8__["NB_RESET"]) : null;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), timeLimit && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stopwatch__WEBPACK_IMPORTED_MODULE_9__["default"], {
        seconds: 0,
        minutes: 0,
        hours: 0,
        limit: timeLimit,
        onChange: function onChange(_ref) {
          var hours = _ref.hours,
              minutes = _ref.minutes,
              seconds = _ref.seconds;
        },
        onCallback: function onCallback() {
          return _this.routeChange();
        },
        render: function render(_ref2) {
          var formatted = _ref2.formatted,
              hours = _ref2.hours,
              minutes = _ref2.minutes,
              seconds = _ref2.seconds;
          var extraClass = "timer-green";
          if (minutes > 2) extraClass = "timer-red";else if (minutes > 1 && minutes < 2) extraClass = "timer-yellow";
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "game-stopwatch " + extraClass,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }, "Elapsed: ", formatted);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "game-player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Player: ", currentUser ? currentUser.userName : "")));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  var _state$game = state.game,
      currentUser = _state$game.currentUser,
      timeLimit = _state$game.timeLimit;
  console.log('Time Limit: ', timeLimit);
  return {
    currentUser: currentUser,
    timeLimit: timeLimit
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps))(NavBar));

/***/ }),

/***/ "./app/javascript/components/common/ScoreBox/ScoreBox.css":
/*!****************************************************************!*\
  !*** ./app/javascript/components/common/ScoreBox/ScoreBox.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./ScoreBox.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/ScoreBox/ScoreBox.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./app/javascript/components/common/ScoreBox/TotalScore.js":
/*!*****************************************************************!*\
  !*** ./app/javascript/components/common/ScoreBox/TotalScore.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/common/ScoreBox/TotalScore.js";


var TotalScore = function TotalScore(props) {
  var totalScore = props.totalScore,
      label = props.label;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "total-score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, totalScore));
};

/* harmony default export */ __webpack_exports__["default"] = (TotalScore);

/***/ }),

/***/ "./app/javascript/components/common/ScoreBox/WordScoreList.js":
/*!********************************************************************!*\
  !*** ./app/javascript/components/common/ScoreBox/WordScoreList.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TotalScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TotalScore */ "./app/javascript/components/common/ScoreBox/TotalScore.js");
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/common/ScoreBox/WordScoreList.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var WordScoreList =
/*#__PURE__*/
function (_Component) {
  _inherits(WordScoreList, _Component);

  function WordScoreList(props) {
    _classCallCheck(this, WordScoreList);

    return _possibleConstructorReturn(this, _getPrototypeOf(WordScoreList).call(this, props));
  }

  _createClass(WordScoreList, [{
    key: "render",
    value: function render() {
      var wordScoreList = this.props.wordScoreList;
      var totalScore = 0;
      var words = [],
          scores = [];
      var wordsList = '',
          scoresList = '';

      if (wordScoreList) {
        totalScore = Object.values(wordScoreList).reduce(function (totalScore, next) {
          return totalScore + next;
        }, 0);
        words = Object.keys(wordScoreList);
        wordsList = words.map(function (word, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, word);
        });
        scores = Object.values(wordScoreList);
        scoresList = scores.map(function (score, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, score);
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "word-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "words",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "WORD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, wordsList)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "scores",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "SCORE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, scoresList))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TotalScore__WEBPACK_IMPORTED_MODULE_2__["default"], {
        totalScore: totalScore,
        label: "Total Score",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }));
    }
  }]);

  return WordScoreList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  var wordScoreList = state.game.wordScoreList;
  return {
    wordScoreList: wordScoreList
  };
}

WordScoreList = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(WordScoreList);
/* harmony default export */ __webpack_exports__["default"] = (WordScoreList);

/***/ }),

/***/ "./app/javascript/components/common/ScoreBox/index.js":
/*!************************************************************!*\
  !*** ./app/javascript/components/common/ScoreBox/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WordScoreList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WordScoreList */ "./app/javascript/components/common/ScoreBox/WordScoreList.js");
/* harmony import */ var _ScoreBox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScoreBox.css */ "./app/javascript/components/common/ScoreBox/ScoreBox.css");
/* harmony import */ var _ScoreBox_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ScoreBox_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/common/ScoreBox/index.js";




var ScoreBox = function ScoreBox(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "score-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WordScoreList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ScoreBox);

/***/ }),

/***/ "./app/javascript/components/common/Tile/Tile.css":
/*!********************************************************!*\
  !*** ./app/javascript/components/common/Tile/Tile.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Tile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/Tile/Tile.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./app/javascript/components/common/Tile/index.js":
/*!********************************************************!*\
  !*** ./app/javascript/components/common/Tile/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile.css */ "./app/javascript/components/common/Tile/Tile.css");
/* harmony import */ var _Tile_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tile_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/common/Tile/index.js";



var Tile = function Tile(props) {
  var hint = props.hint,
      selected = props.selected,
      letter = props.letter,
      handleClick = props.handleClick,
      extraClass = props.extraClass;
  var tileClass = '';

  if (extraClass) {
    tileClass += extraClass;
  }

  if (hint && !selected) {
    tileClass += ' hint ';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: selected ? " tile-item tile-selected ".concat(tileClass) : "tile-item tile ".concat(tileClass, " "),
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, letter);
};

/* harmony default export */ __webpack_exports__["default"] = (Tile);

/***/ }),

/***/ "./app/javascript/components/common/TimeSand/TimeSand.css":
/*!****************************************************************!*\
  !*** ./app/javascript/components/common/TimeSand/TimeSand.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./TimeSand.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/TimeSand/TimeSand.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./app/javascript/components/common/TimeSand/index.js":
/*!************************************************************!*\
  !*** ./app/javascript/components/common/TimeSand/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TimeSand_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeSand.css */ "./app/javascript/components/common/TimeSand/TimeSand.css");
/* harmony import */ var _TimeSand_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TimeSand_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/common/TimeSand/index.js";



var TimeSand = function TimeSand() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hour-glass",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "glass",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sand-stream",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-sand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom-sand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TimeSand);

/***/ }),

/***/ "./app/javascript/components/screens/stage/Stage1.css":
/*!************************************************************!*\
  !*** ./app/javascript/components/screens/stage/Stage1.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Stage1.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/screens/stage/Stage1.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./app/javascript/components/screens/stage/Stage1.js":
/*!***********************************************************!*\
  !*** ./app/javascript/components/screens/stage/Stage1.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./app/javascript/hoc/_Aux/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants_gameUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/gameUtil */ "./app/javascript/constants/gameUtil.js");
/* harmony import */ var _common_Board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Board */ "./app/javascript/components/common/Board/index.js");
/* harmony import */ var _common_ScoreBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ScoreBox */ "./app/javascript/components/common/ScoreBox/index.js");
/* harmony import */ var _common_CurrentWord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/CurrentWord */ "./app/javascript/components/common/CurrentWord/index.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Button */ "./app/javascript/components/common/Button/index.js");
/* harmony import */ var _Stage1_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Stage1.css */ "./app/javascript/components/screens/stage/Stage1.css");
/* harmony import */ var _Stage1_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Stage1_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_NavBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/NavBar */ "./app/javascript/components/common/NavBar/index.js");
/* harmony import */ var _constants_navBarAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/navBarAction */ "./app/javascript/constants/navBarAction.js");
/* harmony import */ var _common_TimeSand__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/TimeSand */ "./app/javascript/components/common/TimeSand/index.js");
/* harmony import */ var _constants_routeNames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constants/routeNames */ "./app/javascript/constants/routeNames.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/actions */ "./app/javascript/store/actions/index.js");
/* harmony import */ var _constants_messageType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../constants/messageType */ "./app/javascript/constants/messageType.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../helpers */ "./app/javascript/helpers/index.js");
/* harmony import */ var react_confirm_alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-confirm-alert */ "./node_modules/react-confirm-alert/lib/index.js");
/* harmony import */ var react_confirm_alert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_confirm_alert__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-confirm-alert/src/react-confirm-alert.css */ "./node_modules/react-confirm-alert/src/react-confirm-alert.css");
/* harmony import */ var react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/screens/stage/Stage1.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

















 // Import

 // Import css

var Stage1 =
/*#__PURE__*/
function (_Component) {
  _inherits(Stage1, _Component);

  function Stage1(props) {
    var _this;

    _classCallCheck(this, Stage1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stage1).call(this, props));

    _this.backtoHome = function () {
      var dispatch = _this.props.dispatch;
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_13__["gameAction"].clearGame());
    };

    _this.clearStage = function () {
      var clearedBoard = _this.initBoard;

      _this.setState({
        currentWord: "",
        currentWordPosition: [],
        board: clearedBoard
      });
    };

    var _props$currentUser = props.currentUser,
        data = _props$currentUser.data,
        boardSize = _props$currentUser.boardSize;
    var board_data = data.board_data;
    _this.initBoard = Object(_constants_gameUtil__WEBPACK_IMPORTED_MODULE_3__["shuffleBoard"])(board_data, boardSize);
    _this.state = {
      board: _this.initBoard,
      currentWord: "",
      currentWordPosition: []
    };
    _this.onUserAction = _this.onUserAction.bind(_assertThisInitialized(_this));
    _this.onEndGameClick = _this.onEndGameClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Stage1, [{
    key: "onUserAction",
    value: function onUserAction(item) {
      switch (item) {
        case _constants_navBarAction__WEBPACK_IMPORTED_MODULE_10__["NB_HOME"]:
          this.backtoHome(); // this.props.history.push(ROUTE_INTRO);

          break;

        case _constants_navBarAction__WEBPACK_IMPORTED_MODULE_10__["NB_RESET"]:
          window.location.reload(); // this.props.history.push(ROUTE_STAGE1);

          break;

        default:
          alert(3);
          break;
      }
    } // 1. click on the tile
    // 2. update tile selected to true.
    // 2.1 Can select and unselect the tile
    // 2.2 Can only unselect the last tile
    // 2.3 Update currentWord as we select and unselect
    // 2.4. Can only select the surrounding cells
    // 2.5 Make a copy of board, word, currentWordPositions, etc
    // 2.6 Mutate the state
    // 3. render the board with updated tile so it renders as active

  }, {
    key: "handleClick",
    value: function handleClick(rowId, columnId) {
      var selectedTile = this.state.board[rowId][columnId];
      var lastSelectedTile = this.state.currentWordPosition[this.state.currentWordPosition.length - 1];
      debugger;

      if (selectedTile.selected) {
        // Check if selectedTile is last tile
        if (Object(_constants_gameUtil__WEBPACK_IMPORTED_MODULE_3__["isTileEqual"])(selectedTile, lastSelectedTile)) {
          // Unselected selectedTile and remove from currentWordPosition
          // Also update the board to set the tile to unselected
          var newBoard = Object(_constants_gameUtil__WEBPACK_IMPORTED_MODULE_3__["copyBoard"])(this.state.board);
          newBoard[rowId][columnId].selected = false;
          var currentPosition = this.state.currentWordPosition.slice(0, -1);

          if (currentPosition.length <= 0) {
            newBoard = Object(_constants_gameUtil__WEBPACK_IMPORTED_MODULE_3__["clearHints"])(newBoard);
          } else {
            var currentRowId = currentPosition[currentPosition.length - 1].rowId;
            var currentColId = currentPosition[currentPosition.length - 1].columnId;
            newBoard = Object(_constants_gameUtil__WEBPACK_IMPORTED_MODULE_3__["toggleHints"])(newBoard, currentRowId, currentColId);
          } // newBoard[rowId][columnId].selected = false;


          this.setState({
            currentWord: this.state.currentWord.slice(0, -1),
            board: newBoard,
            currentWordPosition: currentPosition
          });
        }
      } else {
        if (!lastSelectedTile || Object(_constants_gameUtil__WEBPACK_IMPORTED_MODULE_3__["isAdjacent"])(selectedTile, lastSelectedTile)) {
          // Select the tile
          var _newBoard = Object(_constants_gameUtil__WEBPACK_IMPORTED_MODULE_3__["copyBoard"])(this.state.board);

          _newBoard[rowId][columnId].selected = true;
          _newBoard = Object(_constants_gameUtil__WEBPACK_IMPORTED_MODULE_3__["toggleHints"])(_newBoard, rowId, columnId);
          this.setState({
            // update current word with selected tile
            currentWord: this.state.currentWord.concat(_newBoard[rowId][columnId].letter),
            // update board
            board: _newBoard,
            // update current word position with selected tile position
            currentWordPosition: this.state.currentWordPosition.concat({
              rowId: rowId,
              columnId: columnId
            })
          });
        }
      }
    }
  }, {
    key: "onEndGameClick",
    value: function onEndGameClick() {
      var props = this.props;
      Object(react_confirm_alert__WEBPACK_IMPORTED_MODULE_16__["confirmAlert"])({
        title: "Quit Game",
        message: "Are you sure you want to end this game ?",
        buttons: [{
          label: "Yes",
          onClick: function onClick() {
            props.history.push(_constants_routeNames__WEBPACK_IMPORTED_MODULE_12__["ROUTE_SCORES"]);
          }
        }, {
          label: "Not Yet ",
          onClick: function onClick() {
            return console.log("submission canceled");
          }
        }]
      });
    } // Adds Current Word to the Word List

  }, {
    key: "handleSubmit",
    value: function handleSubmit(word) {
      var _this2 = this;

      var currentList = this.props.wordScoreList; // Check if word is valid

      if (word.length < 3) {
        return;
      }

      if (currentList && currentList[word]) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_15__["showMessage"])(_constants_messageType__WEBPACK_IMPORTED_MODULE_14__["MessageType"].ERROR, Object(_helpers__WEBPACK_IMPORTED_MODULE_15__["GenerateMessage"])(_constants_messageType__WEBPACK_IMPORTED_MODULE_14__["InGameMessageType"].EXISTS, ""));
        this.clearStage();
        return;
      }

      var dispatch = this.props.dispatch;
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_13__["gameAction"].evaluateWord({
        word: word
      }, function () {
        _this2.clearStage();
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_NavBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: this.onUserAction,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-area left-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Board__WEBPACK_IMPORTED_MODULE_4__["default"], {
        board: this.state.board,
        handleClick: this.handleClick.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_CurrentWord__WEBPACK_IMPORTED_MODULE_6__["default"], {
        currentWord: this.state.currentWord,
        label: "Current Word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        handleSubmit: this.handleSubmit.bind(this, this.state.currentWord),
        label: "SUBMIT WORD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ScoreBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        extraClass: "btn-primary btn-end-game",
        handleSubmit: this.onEndGameClick,
        label: "QUIT GAME",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "timesand-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TimeSand__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }));
    }
  }]);

  return Stage1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  var _state$game = state.game,
      currentUser = _state$game.currentUser,
      wordScoreList = _state$game.wordScoreList;
  return {
    currentUser: currentUser,
    wordScoreList: wordScoreList
  };
}

Stage1 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Stage1);
/* harmony default export */ __webpack_exports__["default"] = (Stage1);

/***/ }),

/***/ "./app/javascript/constants/gameUtil.js":
/*!**********************************************!*\
  !*** ./app/javascript/constants/gameUtil.js ***!
  \**********************************************/
/*! exports provided: clearHints, toggleHints, shuffleBoard, copyBoard, isTileEqual, isAdjacent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHints", function() { return clearHints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleHints", function() { return toggleHints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleBoard", function() { return shuffleBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyBoard", function() { return copyBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTileEqual", function() { return isTileEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdjacent", function() { return isAdjacent; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./app/javascript/data/index.js");

/**
 *  Split a string to an equal [size]
 *  @param size : 'size of the chunk' 
 */

String.prototype.chunk = function (size) {
  return [].concat.apply([], this.split('').map(function (x, i) {
    return i % size ? [] : this.slice(i, i + size);
  }, this));
};
/**
 *  Randomize a string 
 */


String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }

  return a.join("");
};

var clearHints = function clearHints(board) {
  for (var r = 0; r < board.length; r++) {
    var cols = board[r];

    for (var c = 0; c < cols.length; c++) {
      board[r][c].hint = false;
    }
  }

  return board;
};
var toggleHints = function toggleHints(newBoard, rowId, columnId) {
  newBoard = clearHints(newBoard);
  var activate = true; // Previous Row

  if (newBoard[rowId - 1]) {
    var previousRow = newBoard[rowId - 1];
    if (previousRow[columnId - 1]) previousRow[columnId - 1].hint = activate;
    if (previousRow[columnId]) previousRow[columnId].hint = activate;
    if (previousRow[columnId + 1]) previousRow[columnId + 1].hint = activate;
  } // Current Row


  if (newBoard[rowId][columnId - 1]) newBoard[rowId][columnId - 1].hint = activate;
  if (newBoard[rowId][columnId + 1]) newBoard[rowId][columnId + 1].hint = activate; // Next Row

  if (newBoard[rowId + 1]) {
    var nextRow = newBoard[rowId + 1];
    if (nextRow[columnId - 1]) nextRow[columnId - 1].hint = activate;
    if (nextRow[columnId]) nextRow[columnId].hint = activate;
    if (nextRow[columnId + 1]) nextRow[columnId + 1].hint = activate;
  }

  return newBoard;
};
/**
 * Generate a random 2D board of size [n x n]
 * @param boardData : 'string'
 * @param boardSize : integer number
*/

var shuffleBoard = function shuffleBoard(boardData, boardSize) {
  // Shuffle the board data
  // Divide into chunks of equal size
  // Create a 2D array of n-size with the chunk data
  var board = [];

  if (boardData && boardSize) {
    var strLength = boardData.length;
    if (strLength / boardSize != boardSize) return [];
    boardData = boardData.shuffle();
    var dice = boardData.chunk(boardSize);

    for (var row = 0; row < boardSize; row++) {
      var cols = [];
      var diceRow = dice[row];

      for (var col = 0; col < boardSize; col++) {
        var face = diceRow[col];
        var tileData = new _data__WEBPACK_IMPORTED_MODULE_0__["TileData"](face, row, col);
        cols.push(tileData);
      }

      board.push(cols);
    }
  }

  return board;
};
/**
* 
*/

var copyBoard = function copyBoard(board) {
  var copiedBoard = board.map(function (row) {
    return row.map(function (tile) {
      return tile.clone();
    });
  });
  return copiedBoard;
};
var isTileEqual = function isTileEqual(tile1, tile2) {
  if (!tile1 || !tile2) return false;
  return tile1.rowId === tile2.rowId && tile1.columnId === tile2.columnId;
};
var isAdjacent = function isAdjacent(tile1, tile2) {
  if (!tile1 || !tile2) return false;

  if (isTileEqual(tile1, tile2)) {
    return false;
  }

  var colDiff = Math.abs(tile1.columnId - tile2.columnId);
  var rowDiff = Math.abs(tile1.rowId - tile2.rowId);

  if (colDiff <= 1 && rowDiff <= 1) {
    return true;
  } else {
    return false;
  }
};

/***/ }),

/***/ "./app/javascript/constants/navBarAction.js":
/*!**************************************************!*\
  !*** ./app/javascript/constants/navBarAction.js ***!
  \**************************************************/
/*! exports provided: NB_HOME, NB_RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_HOME", function() { return NB_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_RESET", function() { return NB_RESET; });
var NB_HOME = 'home';
var NB_RESET = 'reset';

/***/ }),

/***/ "./app/javascript/data/TileData.js":
/*!*****************************************!*\
  !*** ./app/javascript/data/TileData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TileData; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TileData =
/*#__PURE__*/
function () {
  function TileData(letter, rowId, columnId) {
    var selected = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var hint = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    _classCallCheck(this, TileData);

    this.letter = letter;
    this.rowId = rowId;
    this.columnId = columnId;
    this.selected = selected;
    this.hint = hint;
  }

  _createClass(TileData, [{
    key: "clone",
    value: function clone() {
      return new TileData(this.letter, this.rowId, this.columnId, this.selected, this.hint);
    }
  }]);

  return TileData;
}();



/***/ }),

/***/ "./app/javascript/data/index.js":
/*!**************************************!*\
  !*** ./app/javascript/data/index.js ***!
  \**************************************/
/*! exports provided: TileData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TileData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TileData */ "./app/javascript/data/TileData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileData", function() { return _TileData__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/Board/Board.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./app/javascript/components/common/Board/Board.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".orange-area {\n  background: #fff3e0;\n  padding: 15px 15px 5px 15px;\n  width: 252px;\n  margin: 0px;\n  height: 264px;\n  /* width: 300px;\n    margin: 0px;\n    height: 310px; */\n}\n\n.row {\n  width: 300px;\n  display: block;\n}\n\n.row button:last-child {\n  margin-right: 0;\n}\n", "",{"version":3,"sources":["Board.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,YAAY;EACZ,WAAW;EACX,aAAa;EACb;;oBAEkB;AACpB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB","file":"Board.css","sourcesContent":[".orange-area {\n  background: #fff3e0;\n  padding: 15px 15px 5px 15px;\n  width: 252px;\n  margin: 0px;\n  height: 264px;\n  /* width: 300px;\n    margin: 0px;\n    height: 310px; */\n}\n\n.row {\n  width: 300px;\n  display: block;\n}\n\n.row button:last-child {\n  margin-right: 0;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/CurrentWord/CurrentWord.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./app/javascript/components/common/CurrentWord/CurrentWord.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* Current Word */\n.current-header {\n    font-size: 15px;\n    font-weight: 600;\n    letter-spacing: 1.2px;\n    line-height: 1.5;\n    text-align: center;\n    color: #616161;\n    display: block;\n}\n.current-word {\n    font-size: 30px;\n    font-weight: normal;\n    letter-spacing: 3px;\n    text-align: center;\n    min-height: 35px;\n    color: #18252e;\n    display: block;\n}\n.word-area {\n    padding: 30px 0px 0px 0px;\n    /* padding: 30px 15px 0px 15px; */\n    width: 100%;\n}\n", "",{"version":3,"sources":["CurrentWord.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;IACI,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,cAAc;AAClB;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,cAAc;AAClB;AAEA;IACI,yBAAyB;IACzB,iCAAiC;IACjC,WAAW;AACf","file":"CurrentWord.css","sourcesContent":["/* Current Word */\n.current-header {\n    font-size: 15px;\n    font-weight: 600;\n    letter-spacing: 1.2px;\n    line-height: 1.5;\n    text-align: center;\n    color: #616161;\n    display: block;\n}\n\n.current-word {\n    font-size: 30px;\n    font-weight: normal;\n    letter-spacing: 3px;\n    text-align: center;\n    min-height: 35px;\n    color: #18252e;\n    display: block;\n}\n\n.word-area {\n    padding: 30px 0px 0px 0px;\n    /* padding: 30px 15px 0px 15px; */\n    width: 100%;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/IconButton/IconButton.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./app/javascript/components/common/IconButton/IconButton.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".action-button {\n  cursor: pointer;\n  margin-right: 25px;\n}\n", "",{"version":3,"sources":["IconButton.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,kBAAkB;AACpB","file":"IconButton.css","sourcesContent":[".action-button {\n  cursor: pointer;\n  margin-right: 25px;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/NavBar/NavBar.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./app/javascript/components/common/NavBar/NavBar.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".nav-bar {\n  float: left;\n  width: 100%;\n}\n\n.navbar-left {\n  float: left;\n  width: 42%;\n  padding-left: 20px;\n  margin-left: 15px;\n}\n\n.navbar-right {\n  float: right;\n  margin-right: 15px;\n  padding-right: 20px;\n}\n\n.game-player {\n  text-transform: capitalize;\n  color: #ef6c00;\n  font-weight: 600;\n}\n\n.game-stopwatch {\n  text-transform: capitalize;\n  float: right;\n}\n\n.timer-green {\n  color: green;\n}\n\n.timer-red {\n  color: red;\n  font-weight: 600;\n}\n\n.timer-yellow {\n  color: yellowgreen;\n  font-weight: bold;\n}\n", "",{"version":3,"sources":["NavBar.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AACA;EACE,0BAA0B;EAC1B,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;;AACA;EACE,kBAAkB;EAClB,iBAAiB;AACnB","file":"NavBar.css","sourcesContent":[".nav-bar {\n  float: left;\n  width: 100%;\n}\n\n.navbar-left {\n  float: left;\n  width: 42%;\n  padding-left: 20px;\n  margin-left: 15px;\n}\n\n.navbar-right {\n  float: right;\n  margin-right: 15px;\n  padding-right: 20px;\n}\n.game-player {\n  text-transform: capitalize;\n  color: #ef6c00;\n  font-weight: 600;\n}\n\n.game-stopwatch {\n  text-transform: capitalize;\n  float: right;\n}\n\n.timer-green {\n  color: green;\n}\n.timer-red {\n  color: red;\n  font-weight: 600;\n}\n.timer-yellow {\n  color: yellowgreen;\n  font-weight: bold;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/ScoreBox/ScoreBox.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./app/javascript/components/common/ScoreBox/ScoreBox.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "\n/* Score Area */\n\n.score-box {\n    width: 200px;\n    border-radius: 5px;\n    border: solid 1px #EEEEEE;\n    float: right;\n    margin: 15px;\n    padding: 20px;\n}\n\n.word-list {\n    width: 100%;\n    height: 192px;\n    max-height: 192px;\n    overflow-y: auto;\n}\n\n.total-score {\n    border-top: 1px solid #E0E0E0;\n    padding-top: 25px;\n    width: 100%;\n}\n\n.words {\n    width: 50%;\n    float: left;\n}\n\n.scores {\n    width: 50%;\n    float: left;\n    text-align: right;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\n.score-box li {\n    padding-top: 15px;\n    list-style-type: none;\n    font-size: 0.78em;\n}\n\n.total-score h2 {\n    text-align: left;\n}\n\nh2 {\n    font-size: 15px;\n    font-weight: 600;\n    letter-spacing: 1.2px;\n    display: inline;\n    color: #616161;\n}\n\n.total-score span {\n    text-align: right;\n    float: right;\n    position: relative;\n    top: -5px;\n    font-size: 25px;\n}\n", "",{"version":3,"sources":["ScoreBox.css"],"names":[],"mappings":";AACA,eAAe;;AAEf;IACI,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,UAAU;IACV,WAAW;IACX,iBAAiB;AACrB;;AACA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,eAAe;AACnB","file":"ScoreBox.css","sourcesContent":["\n/* Score Area */\n\n.score-box {\n    width: 200px;\n    border-radius: 5px;\n    border: solid 1px #EEEEEE;\n    float: right;\n    margin: 15px;\n    padding: 20px;\n}\n\n.word-list {\n    width: 100%;\n    height: 192px;\n    max-height: 192px;\n    overflow-y: auto;\n}\n\n.total-score {\n    border-top: 1px solid #E0E0E0;\n    padding-top: 25px;\n    width: 100%;\n}\n\n.words {\n    width: 50%;\n    float: left;\n}\n\n.scores {\n    width: 50%;\n    float: left;\n    text-align: right;\n}\nul {\n    margin: 0;\n    padding: 0;\n}\n\n.score-box li {\n    padding-top: 15px;\n    list-style-type: none;\n    font-size: 0.78em;\n}\n\n.total-score h2 {\n    text-align: left;\n}\n\nh2 {\n    font-size: 15px;\n    font-weight: 600;\n    letter-spacing: 1.2px;\n    display: inline;\n    color: #616161;\n}\n\n.total-score span {\n    text-align: right;\n    float: right;\n    position: relative;\n    top: -5px;\n    font-size: 25px;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/Tile/Tile.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./app/javascript/components/common/Tile/Tile.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".row button {\n  /* width: 52px;\n  height: 52px; */\n  /* width: 42px;\n  height: 42px; */\n  border-radius: 5px;\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  /* Safari */\n  transition: background 0.5s;\n  outline: none;\n  text-transform: uppercase;\n}\n\n\n.tile {\n  background: #fff;\n  border: solid 1px #757575;\n  box-shadow: 2px 2px 5px rgba(255, 204, 128, 0.25);\n  font-size: 24px;\n  font-weight: normal;\n  text-align: center;\n  color: #18252e;\n  width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n\n.tile:hover {\n  background: #fcf6ea;\n  cursor: pointer;\n}\n\n\n.tile-selected {\n  background: #ff9800;\n  border: solid 1px #fb8c00;\n  box-shadow: inset 2px 2px 5px rgba(223, 121, 10, 0.7);\n  width: 100%;\n  font-size: 24px;\n  font-weight: normal;\n  text-align: center;\n  color: #ffffff;\n}\n\n\n.tile-selected:hover {\n  background: #ef6c00;\n  cursor: pointer;\n}\n\n\n.tile-4 {\n  width: 55px;\n  height: 55px;\n}\n\n\n.tile-5 {\n  width: 42px;\n  height: 42px;\n}\n\n\n.tile-6 {\n  width: 35px;\n  height: 35px;\n}\n\n\n.hint {\n  background: #c0c0c0;\n}", "",{"version":3,"sources":["Tile.css"],"names":[],"mappings":"AAAA;EACE;iBACe;EACf;iBACe;EACf,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EAEnB,WAAW;EACX,2BAA2B;EAC3B,aAAa;EACb,yBAAyB;AAC3B;;;AAGA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,iDAAiD;EACjD,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;AACnB;;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,qDAAqD;EACrD,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;AAChB;;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;;AAIA;EACE,WAAW;EACX,YAAY;AACd;;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;;AAEA;EACE,mBAAmB;AACrB","file":"Tile.css","sourcesContent":[".row button {\n  /* width: 52px;\n  height: 52px; */\n  /* width: 42px;\n  height: 42px; */\n  border-radius: 5px;\n  float: left;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  -webkit-transition: background 0.5s;\n  /* Safari */\n  transition: background 0.5s;\n  outline: none;\n  text-transform: uppercase;\n}\n\n\n.tile {\n  background: #fff;\n  border: solid 1px #757575;\n  box-shadow: 2px 2px 5px rgba(255, 204, 128, 0.25);\n  font-size: 24px;\n  font-weight: normal;\n  text-align: center;\n  color: #18252e;\n  width: 100%;\n  user-select: none;\n}\n\n.tile:hover {\n  background: #fcf6ea;\n  cursor: pointer;\n}\n\n.tile-selected {\n  background: #ff9800;\n  border: solid 1px #fb8c00;\n  box-shadow: inset 2px 2px 5px rgba(223, 121, 10, 0.7);\n  width: 100%;\n  font-size: 24px;\n  font-weight: normal;\n  text-align: center;\n  color: #ffffff;\n}\n\n.tile-selected:hover {\n  background: #ef6c00;\n  cursor: pointer;\n}\n\n\n\n.tile-4 {\n  width: 55px;\n  height: 55px;\n}\n\n.tile-5 {\n  width: 42px;\n  height: 42px;\n}\n\n.tile-6 {\n  width: 35px;\n  height: 35px;\n}\n\n.hint {\n  background: #c0c0c0;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/TimeSand/TimeSand.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./app/javascript/components/common/TimeSand/TimeSand.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* body {\n    margin: 50px;\n  }\n   */\n\n.hour-glass {\n  position: relative;\n  width: 60px;\n  height: 120px;\n  overflow: visible;\n  display: table;\n}\n\n.glass {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: solid #c0c0c0 120px;\n  border-left: solid transparent 60px;\n  border-right: solid transparent 60px;\n}\n\n.glass::after {\n  content: \"\";\n  position: absolute;\n  left: -60px;\n  bottom: -120px;\n  border-bottom: solid #c0c0c0 120px;\n  border-left: solid transparent 60px;\n  border-right: solid transparent 60px;\n}\n\n.glass::before {\n  z-index: 1;\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: -6px;\n  width: 12px;\n  height: 20px;\n  background-color: #303030;\n  border-radius: 3px;\n}\n\n.top-sand {\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: solid #422608 3px;\n  border-left: solid transparent 2px;\n  border-right: solid transparent 2px;\n  right: -2px;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  bottom: 0;\n  -webkit-animation: drain 180s ease-in;\n          animation: drain 180s ease-in;\n}\n\n.bottom-sand {\n  position: absolute;\n  bottom: -120px;\n  border-bottom: solid #422608 100px;\n  border-left: solid transparent 48px;\n  border-right: solid transparent 48px;\n  right: -48px;\n  -webkit-animation: fill 180s ease-out;\n          animation: fill 180s ease-out;\n}\n\n.sand-stream {\n  position: absolute;\n  width: 0px;\n  height: 118px;\n  left: 59px;\n  top: 120px;\n  border-left: dotted #422608 3px;\n\n  opacity: 0;\n  -webkit-animation: shift 0.1s linear infinite, disappear 180s linear 1;\n          animation: shift 0.1s linear infinite, disappear 180s linear 1;\n}\n\n@-webkit-keyframes disappear {\n  0% {\n    display: block;\n    opacity: 0.9;\n  }\n  99% {\n    display: block;\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes disappear {\n  0% {\n    display: block;\n    opacity: 0.9;\n  }\n  99% {\n    display: block;\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@-webkit-keyframes shift {\n  0% {\n    top: 120px;\n  }\n  100% {\n    top: 123px;\n    height: 116px;\n  }\n}\n\n@keyframes shift {\n  0% {\n    top: 120px;\n  }\n  100% {\n    top: 123px;\n    height: 116px;\n  }\n}\n\n@-webkit-keyframes fill {\n  0% {\n    border-bottom: solid #422608 2px;\n    border-left: solid transparent 2px;\n    border-right: solid transparent 2px;\n    right: -2px;\n  }\n  100% {\n    border-bottom: solid #422608 100px;\n    border-left: solid transparent 48px;\n    border-right: solid transparent 48px;\n    right: -48px;\n  }\n}\n\n@keyframes fill {\n  0% {\n    border-bottom: solid #422608 2px;\n    border-left: solid transparent 2px;\n    border-right: solid transparent 2px;\n    right: -2px;\n  }\n  100% {\n    border-bottom: solid #422608 100px;\n    border-left: solid transparent 48px;\n    border-right: solid transparent 48px;\n    right: -48px;\n  }\n}\n\n@-webkit-keyframes drain {\n  0% {\n    border-top: solid #422608 100px;\n    border-left: solid transparent 48px;\n    border-right: solid transparent 48px;\n    right: -48px;\n  }\n  100% {\n    border-top: solid #422608 3px;\n    border-left: solid transparent 2px;\n    border-right: solid transparent 2px;\n    right: -2px;\n  }\n}\n\n@keyframes drain {\n  0% {\n    border-top: solid #422608 100px;\n    border-left: solid transparent 48px;\n    border-right: solid transparent 48px;\n    right: -48px;\n  }\n  100% {\n    border-top: solid #422608 3px;\n    border-left: solid transparent 2px;\n    border-right: solid transparent 2px;\n    right: -2px;\n  }\n}\n", "",{"version":3,"sources":["TimeSand.css"],"names":[],"mappings":"AAAA;;;IAGI;;AAEJ;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,mCAAmC;EACnC,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,kCAAkC;EAClC,mCAAmC;EACnC,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,6BAA6B;EAC7B,kCAAkC;EAClC,mCAAmC;EACnC,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,qCAA6B;UAA7B,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,kCAAkC;EAClC,mCAAmC;EACnC,oCAAoC;EACpC,YAAY;EACZ,qCAA6B;UAA7B,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,UAAU;EACV,UAAU;EACV,+BAA+B;;EAE/B,UAAU;EACV,sEAA8D;UAA9D,8DAA8D;AAChE;;AAEA;EACE;IACE,cAAc;IACd,YAAY;EACd;EACA;IACE,cAAc;IACd,YAAY;EACd;EACA;IACE,UAAU;IACV,aAAa;EACf;AACF;;AAbA;EACE;IACE,cAAc;IACd,YAAY;EACd;EACA;IACE,cAAc;IACd,YAAY;EACd;EACA;IACE,UAAU;IACV,aAAa;EACf;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;IACV,aAAa;EACf;AACF;;AARA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;IACV,aAAa;EACf;AACF;;AAEA;EACE;IACE,gCAAgC;IAChC,kCAAkC;IAClC,mCAAmC;IACnC,WAAW;EACb;EACA;IACE,kCAAkC;IAClC,mCAAmC;IACnC,oCAAoC;IACpC,YAAY;EACd;AACF;;AAbA;EACE;IACE,gCAAgC;IAChC,kCAAkC;IAClC,mCAAmC;IACnC,WAAW;EACb;EACA;IACE,kCAAkC;IAClC,mCAAmC;IACnC,oCAAoC;IACpC,YAAY;EACd;AACF;;AAEA;EACE;IACE,+BAA+B;IAC/B,mCAAmC;IACnC,oCAAoC;IACpC,YAAY;EACd;EACA;IACE,6BAA6B;IAC7B,kCAAkC;IAClC,mCAAmC;IACnC,WAAW;EACb;AACF;;AAbA;EACE;IACE,+BAA+B;IAC/B,mCAAmC;IACnC,oCAAoC;IACpC,YAAY;EACd;EACA;IACE,6BAA6B;IAC7B,kCAAkC;IAClC,mCAAmC;IACnC,WAAW;EACb;AACF","file":"TimeSand.css","sourcesContent":["/* body {\n    margin: 50px;\n  }\n   */\n\n.hour-glass {\n  position: relative;\n  width: 60px;\n  height: 120px;\n  overflow: visible;\n  display: table;\n}\n\n.glass {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: solid #c0c0c0 120px;\n  border-left: solid transparent 60px;\n  border-right: solid transparent 60px;\n}\n\n.glass::after {\n  content: \"\";\n  position: absolute;\n  left: -60px;\n  bottom: -120px;\n  border-bottom: solid #c0c0c0 120px;\n  border-left: solid transparent 60px;\n  border-right: solid transparent 60px;\n}\n\n.glass::before {\n  z-index: 1;\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: -6px;\n  width: 12px;\n  height: 20px;\n  background-color: #303030;\n  border-radius: 3px;\n}\n\n.top-sand {\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: solid #422608 3px;\n  border-left: solid transparent 2px;\n  border-right: solid transparent 2px;\n  right: -2px;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  bottom: 0;\n  animation: drain 180s ease-in;\n}\n\n.bottom-sand {\n  position: absolute;\n  bottom: -120px;\n  border-bottom: solid #422608 100px;\n  border-left: solid transparent 48px;\n  border-right: solid transparent 48px;\n  right: -48px;\n  animation: fill 180s ease-out;\n}\n\n.sand-stream {\n  position: absolute;\n  width: 0px;\n  height: 118px;\n  left: 59px;\n  top: 120px;\n  border-left: dotted #422608 3px;\n\n  opacity: 0;\n  animation: shift 0.1s linear infinite, disappear 180s linear 1;\n}\n\n@keyframes disappear {\n  0% {\n    display: block;\n    opacity: 0.9;\n  }\n  99% {\n    display: block;\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes shift {\n  0% {\n    top: 120px;\n  }\n  100% {\n    top: 123px;\n    height: 116px;\n  }\n}\n\n@keyframes fill {\n  0% {\n    border-bottom: solid #422608 2px;\n    border-left: solid transparent 2px;\n    border-right: solid transparent 2px;\n    right: -2px;\n  }\n  100% {\n    border-bottom: solid #422608 100px;\n    border-left: solid transparent 48px;\n    border-right: solid transparent 48px;\n    right: -48px;\n  }\n}\n\n@keyframes drain {\n  0% {\n    border-top: solid #422608 100px;\n    border-left: solid transparent 48px;\n    border-right: solid transparent 48px;\n    right: -48px;\n  }\n  100% {\n    border-top: solid #422608 3px;\n    border-left: solid transparent 2px;\n    border-right: solid transparent 2px;\n    right: -2px;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/screens/stage/Stage1.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./app/javascript/components/screens/stage/Stage1.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* Game Area */\n\n.game-area {\n  padding: 20px;\n  margin: 0;\n  float: left;\n  width: 300px;\n}\n\n.timesand-container {\n  position: fixed;\n  right: 5%;\n  top: 25%;\n}\n\n.clear {\n  clear: both;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-end-game {\n  width: 209px;\n  font-size: 14px;\n  height: 34px;\n  text-align: center;\n  margin: 0;\n  padding: 5px;\n  margin-left: 45px;\n  display: inline-block;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n  text-decoration: none;\n}\n", "",{"version":3,"sources":["Stage1.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd;EACE,aAAa;EACb,SAAS;EACT,WAAW;EACX,YAAY;AACd;;AACA;EACE,eAAe;EACf,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,qBAAqB;AACvB;;AACA;EACE,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,qBAAqB;EACrB,qBAAqB;AACvB","file":"Stage1.css","sourcesContent":["/* Game Area */\n\n.game-area {\n  padding: 20px;\n  margin: 0;\n  float: left;\n  width: 300px;\n}\n.timesand-container {\n  position: fixed;\n  right: 5%;\n  top: 25%;\n}\n\n.clear {\n  clear: both;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-end-game {\n  width: 209px;\n  font-size: 14px;\n  height: 34px;\n  text-align: center;\n  margin: 0;\n  padding: 5px;\n  margin-left: 45px;\n  display: inline-block;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n  text-decoration: none;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=2-76bb507f15e94040a300.chunk.js.map