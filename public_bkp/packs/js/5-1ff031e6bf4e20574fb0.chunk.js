(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./app/javascript/components/screens/intro/GameIntro.css":
/*!***************************************************************!*\
  !*** ./app/javascript/components/screens/intro/GameIntro.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./GameIntro.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/screens/intro/GameIntro.css");

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

/***/ "./app/javascript/components/screens/intro/GameIntro.js":
/*!**************************************************************!*\
  !*** ./app/javascript/components/screens/intro/GameIntro.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Aux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/_Aux */ "./app/javascript/hoc/_Aux/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Button */ "./app/javascript/components/common/Button/index.js");
/* harmony import */ var _GameIntro_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameIntro.css */ "./app/javascript/components/screens/intro/GameIntro.css");
/* harmony import */ var _GameIntro_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_GameIntro_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/actions */ "./app/javascript/store/actions/index.js");
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/screens/intro/GameIntro.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var GameIntro =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameIntro, _React$Component);

  function GameIntro(props) {
    var _this;

    _classCallCheck(this, GameIntro);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameIntro).call(this, props));
    _this.state = {
      userName: "",
      stageID: 1,
      boardSize: 4
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GameIntro, [{
    key: "handleChange",
    value: function handleChange(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.setState({
        submitted: true
      });
      var _this$state = this.state,
          userName = _this$state.userName,
          stageID = _this$state.stageID,
          boardSize = _this$state.boardSize;
      var dispatch = this.props.dispatch;
      var history = this.props.history;

      if (userName && stageID) {
        var newGameObj = {
          userName: userName,
          stageID: stageID,
          boardSize: boardSize
        };
        dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_5__["gameAction"].initNewGame(newGameObj, history));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Welcome to Boggle !!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Boggle is a word game invented by Allan Turoff and originally distributed by Parker Brothers. The game is played using a grid of letters, in which the players attempt to find words in sequences of adjacent letters."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Basically, The player searches for words that can be constructed from the letters of sequentially adjacent cubes, where \"adjacent\" cubes are those horizontally, vertically and diagonally neighboring. Words must be at least three letters long, may include singular and plural (or other derived forms) separately. The application records all the words that is submitted by the players. After three minutes have elapsed, the application stops the player from the game play and the game enters the scoring phase.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Are you ready to play ?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "userName",
        className: "form-control input-element",
        placeholder: "Enter a User name > eg: John Doe",
        "aria-label": "userName",
        "aria-describedby": "basic-addon1",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-selector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "input-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Choose a board size :"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        name: "boardSize",
        className: "input-element",
        value: this.state.boardSize,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, " 4 x 4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, " 5 x 5 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, " 6 x 6"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        handleSubmit: this.handleSubmit,
        label: "START GAME",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }));
    }
  }]);

  return GameIntro;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapStateToProps(state) {
  return state;
}

GameIntro = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(GameIntro);
/* harmony default export */ __webpack_exports__["default"] = (GameIntro);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/screens/intro/GameIntro.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./app/javascript/components/screens/intro/GameIntro.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "\n.game-intro {\n  padding: 20px;\n  margin: 0;\n  float: left;\n  text-transform: none;\n}\n.row {\n  margin: 0;\n}\n.clear {\n  clear: both;\n}\n.input-selector {\n  display: grid;\n  margin: 20px 0;\n}\n.input-element {\n  width: 50%;\n  padding: 15px 22px;\n  margin: 10px 5px;\n  box-sizing: border-box;\n}\n.input-label{\n\n}", "",{"version":3,"sources":["GameIntro.css"],"names":[],"mappings":";AACA;EACE,aAAa;EACb,SAAS;EACT,WAAW;EACX,oBAAoB;AACtB;AACA;EACE,SAAS;AACX;AACA;EACE,WAAW;AACb;AAGA;EACE,aAAa;EACb,cAAc;AAChB;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;AACxB;AAGA;;AAEA","file":"GameIntro.css","sourcesContent":["\n.game-intro {\n  padding: 20px;\n  margin: 0;\n  float: left;\n  text-transform: none;\n}\n.row {\n  margin: 0;\n}\n.clear {\n  clear: both;\n}\n\n\n.input-selector {\n  display: grid;\n  margin: 20px 0;\n}\n.input-element {\n  width: 50%;\n  padding: 15px 22px;\n  margin: 10px 5px;\n  box-sizing: border-box;\n}\n\n\n.input-label{\n\n}"]}]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=5-1ff031e6bf4e20574fb0.chunk.js.map