(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./app/javascript/components/screens/scores/Scores.css":
/*!*************************************************************!*\
  !*** ./app/javascript/components/screens/scores/Scores.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Scores.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/screens/scores/Scores.css");

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

/***/ "./app/javascript/components/screens/scores/Scores.js":
/*!************************************************************!*\
  !*** ./app/javascript/components/screens/scores/Scores.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./app/javascript/hoc/_Aux/index.js");
/* harmony import */ var _Scores_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Scores.css */ "./app/javascript/components/screens/scores/Scores.css");
/* harmony import */ var _Scores_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Scores_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Button */ "./app/javascript/components/common/Button/index.js");
/* harmony import */ var _constants_routeNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants/routeNames */ "./app/javascript/constants/routeNames.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers */ "./app/javascript/helpers/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/actions */ "./app/javascript/store/actions/index.js");
/* harmony import */ var _common_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/IconButton */ "./app/javascript/components/common/IconButton/index.js");
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/screens/scores/Scores.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Scores =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scores, _React$Component);

  function Scores(props) {
    var _this;

    _classCallCheck(this, Scores);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scores).call(this, props));

    _this.backtoHome = function () {
      var dispatch = _this.props.dispatch;
      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_8__["gameAction"].clearGame());
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();

      _this.backtoHome();
    };

    _this.state = {};
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));

    if (_this.props.trials <= 0 && !_this.props.wordScoreList) {
      _this.backtoHome();
    }

    return _this;
  }

  _createClass(Scores, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentUser = _this$props.currentUser,
          trials = _this$props.trials,
          wordScoreList = _this$props.wordScoreList,
          wrongCount = _this$props.wrongCount;
      var userName = currentUser.userName ? currentUser.userName : "";
      var resultMsg = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["GenerateMessageByTrials"])(trials, userName);
      var totalScore = 0;
      var totalCorrect = 0;
      var totalIncorrect = 0;

      if (wordScoreList) {
        totalScore = Object.values(wordScoreList).reduce(function (totalScore, next) {
          return totalScore + next;
        }, 0);
        totalCorrect = Object.keys(wordScoreList).length;
        totalIncorrect = wrongCount;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-scores",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, resultMsg), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-scores-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "result-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Player Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, userName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Total Trials:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, trials)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Total Points:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, totalScore)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Right:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, totalCorrect)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Wrong:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, totalIncorrect))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "action-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        iconName: "home",
        tooltip: "Back to Home",
        handleSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Back to home"))));
    }
  }]);

  return Scores;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  var _state$game = state.game,
      currentUser = _state$game.currentUser,
      wordScoreList = _state$game.wordScoreList,
      trials = _state$game.trials,
      wrongCount = _state$game.wrongCount;
  return {
    currentUser: currentUser,
    wordScoreList: wordScoreList,
    trials: trials,
    wrongCount: wrongCount
  };
}

Scores = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Scores);
/* harmony default export */ __webpack_exports__["default"] = (Scores);

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/screens/scores/Scores.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./app/javascript/components/screens/scores/Scores.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".game-scores {\n    padding: 20px;\n    margin: 0;\n    float: left;\n    text-transform: none;\n    width: 100%;\n    text-align: center;\n\n}\n\n.result-table {\n    width: 100%;\n    font-size: 18px;\n}\n\n.result-table tr:nth-child(2n+1) {\n    background-color: goldenrod;\n}\n\n.result-table th {\n    width: 40%;\n    text-align: left;\n    vertical-align: top;\n    padding: 8px;\n    margin: 10px;\n}\n\n.game-scores-chart {\n    margin: 30px;\n\n}\n\n.game-scores .action-button {\n    font-size: 39px;\n}\n\n.action-bar {\n    display: grid;\n}\n\n.game-scores .action-button {\n    font-size: 39px;\n    margin-right: 0;\n}", "",{"version":3,"sources":["Scores.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,oBAAoB;IACpB,WAAW;IACX,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAGA;IACI,2BAA2B;AAC/B;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;;AAEhB;;AACA;IACI,eAAe;AACnB;;AACA;IACI,aAAa;AACjB;;AACA;IACI,eAAe;IACf,eAAe;AACnB","file":"Scores.css","sourcesContent":[".game-scores {\n    padding: 20px;\n    margin: 0;\n    float: left;\n    text-transform: none;\n    width: 100%;\n    text-align: center;\n\n}\n\n.result-table {\n    width: 100%;\n    font-size: 18px;\n}\n\n\n.result-table tr:nth-child(2n+1) {\n    background-color: goldenrod;\n}\n\n.result-table th {\n    width: 40%;\n    text-align: left;\n    vertical-align: top;\n    padding: 8px;\n    margin: 10px;\n}\n\n.game-scores-chart {\n    margin: 30px;\n\n}\n.game-scores .action-button {\n    font-size: 39px;\n}\n.action-bar {\n    display: grid;\n}\n.game-scores .action-button {\n    font-size: 39px;\n    margin-right: 0;\n}"]}]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=4-d8776984655692ac16ce.chunk.js.map