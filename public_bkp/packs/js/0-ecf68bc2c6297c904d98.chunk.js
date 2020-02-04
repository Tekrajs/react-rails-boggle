(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/javascript/components/common/Button/Button.css":
/*!************************************************************!*\
  !*** ./app/javascript/components/common/Button/Button.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/Button/Button.css");

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

/***/ "./app/javascript/components/common/Button/index.js":
/*!**********************************************************!*\
  !*** ./app/javascript/components/common/Button/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.css */ "./app/javascript/components/common/Button/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/rails-projects/boggle-rails-react/app/javascript/components/common/Button/index.js";



var Button = function Button(props) {
  var handleSubmit = props.handleSubmit,
      label = props.label,
      extraClass = props.extraClass;
  var btnClass = " button ";

  if (extraClass) {
    btnClass += extraClass;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: btnClass,
    onClick: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, label);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./app/javascript/constants/apiEndPoint.js":
/*!*************************************************!*\
  !*** ./app/javascript/constants/apiEndPoint.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  GAMES: {
    INIT: GenerateApiUrl('games'),
    NEW_GAME: GenerateApiUrl('games/new'),
    EVALUATE: GenerateApiUrl('games/evaluate')
  }
});

function GenerateApiUrl(postUrl) {
  return '/v1/' + postUrl;
}

/***/ }),

/***/ "./app/javascript/services/game.service.js":
/*!*************************************************!*\
  !*** ./app/javascript/services/game.service.js ***!
  \*************************************************/
/*! exports provided: gameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameService", function() { return gameService; });
/* harmony import */ var _constants_apiEndPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/apiEndPoint */ "./app/javascript/constants/apiEndPoint.js");
/* harmony import */ var _constants_storageItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/storageItems */ "./app/javascript/constants/storageItems.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var gameService = {
  initGame: initGame,
  evaluateWord: evaluateWord,
  backToHome: backToHome
};

function evaluateWord(data) {
  var param = '?word=' + data.word;
  return fetch(_constants_apiEndPoint__WEBPACK_IMPORTED_MODULE_0__["default"].GAMES.EVALUATE + param).then(function (response) {
    return response.json();
  }).then(function (response) {
    if (response && response.success && response.data) {
      var responsePackage = _objectSpread({}, response, {
        word: data.word
      });

      return responsePackage;
    } else {
      return response;
    }
  })["catch"](function (error) {
    return {
      success: false,
      message: error
    };
  });
}

function initGame(data) {
  var param = '?length=' + data.boardSize;
  return fetch(_constants_apiEndPoint__WEBPACK_IMPORTED_MODULE_0__["default"].GAMES.NEW_GAME + param).then(function (response) {
    return response.json();
  }).then(function (response) {
    if (response && response.success && response.data && response.data.board_data) {
      var responsePackage = _objectSpread({}, response, {
        userName: data.userName,
        stageID: data.stageID,
        boardSize: data.boardSize
      });

      localStorage.setItem(_constants_storageItems__WEBPACK_IMPORTED_MODULE_1__["ST_USER_INFO"], JSON.stringify(responsePackage));
      return responsePackage;
    } else {
      return response;
    }
  })["catch"](function (error) {
    return {
      success: false,
      message: error
    };
  });
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}

function backToHome() {
  localStorage.removeItem(_constants_storageItems__WEBPACK_IMPORTED_MODULE_1__["ST_USER_INFO"]);
}

/***/ }),

/***/ "./app/javascript/store/actions/game.action.js":
/*!*****************************************************!*\
  !*** ./app/javascript/store/actions/game.action.js ***!
  \*****************************************************/
/*! exports provided: gameAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameAction", function() { return gameAction; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./app/javascript/store/types.js");
/* harmony import */ var _constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/messageType.js */ "./app/javascript/constants/messageType.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./app/javascript/helpers/index.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game.service */ "./app/javascript/services/game.service.js");
/* harmony import */ var _constants_routeNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/routeNames */ "./app/javascript/constants/routeNames.js");





var gameAction = {
  initNewGame: initNewGame,
  evaluateWord: evaluateWord,
  clearGame: clearGame,
  backToHome: backToHome
};

function clearGame() {
  return function (dispatch) {
    dispatch(request());
    _services_game_service__WEBPACK_IMPORTED_MODULE_3__["gameService"].backToHome();
  };

  function request() {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_GAME"]
    };
  }
}

function evaluateWord() {
  var gameObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    word: ''
  };
  var onSuccess = arguments.length > 1 ? arguments[1] : undefined;
  var onFailure = arguments.length > 2 ? arguments[2] : undefined;
  return function (dispatch) {
    dispatch(request({
      word: gameObj.word
    })); // MAKE A CALL TO THE API

    _services_game_service__WEBPACK_IMPORTED_MODULE_3__["gameService"].evaluateWord(gameObj).then(function (response) {
      if (response) {
        if (response.success) {
          if (response.data && response.data.is_correct) {
            dispatch(success(response)); // <-- SUCCESS ACTION

            Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["MessageType"].SUCCESS, Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["GenerateMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["InGameMessageType"].SUCCESS, ''));
          } else {
            dispatch(incorrect(response)); // <-- SUCCESS ACTION

            Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["MessageType"].ERROR, Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["GenerateMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["InGameMessageType"].ERROR, ''));
          }

          if (onSuccess) onSuccess();
        } else {
          dispatch(failure(response.message)); // <-- FAILURE ACTION

          Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["MessageType"].ERROR, response.message);
        }
      } else {
        var msg = 'Something went wrong.';
        dispatch(failure(msg)); // <-- FAILURE ACTION

        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["MessageType"].ERROR, msg);
      }
    }, function (error) {
      dispatch(failure(error)); // <-- FAILURE ACTION

      Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["MessageType"].ERROR, error);
    });
  };

  function request(response) {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["EVALUATION_INIT"],
      response: response
    };
  }

  function success(response) {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["EVALUATION_SUCCESS"],
      response: response
    };
  }

  function incorrect(error) {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["EVALUATION_INCORRECT"],
      error: error
    };
  }

  function failure(error) {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["EVALUATION_FAILURE"],
      error: error
    };
  }
}

function initNewGame() {
  var initGameObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    userName: '',
    stageID: 0
  };
  var history = arguments.length > 1 ? arguments[1] : undefined;
  return function (dispatch) {
    // REQUEST ACTION -- >
    dispatch(request({
      userName: initGameObj.userName,
      stageID: initGameObj.stageID
    })); // MAKE A REQUEST TO THE API -->

    _services_game_service__WEBPACK_IMPORTED_MODULE_3__["gameService"].initGame(initGameObj).then(function (response) {
      if (response) {
        if (response.success) {
          dispatch(success(response)); // <-- SUCCESS ACTION

          history.push(_constants_routeNames__WEBPACK_IMPORTED_MODULE_4__["ROUTE_STAGE1"]);
          Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["MessageType"].SUCCESS, Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["GenerateMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["InGameMessageType"].GREETING, response.userName));
        } else {
          dispatch(failure(response.message)); // <-- FAILURE ACTION

          Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["MessageType"].ERROR, response.message);
        }
      } else {
        var msg = 'Something went wrong.';
        dispatch(failure(msg)); // <-- FAILURE ACTION

        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["MessageType"].ERROR, msg);
      }
    }, function (error) {
      dispatch(failure(error)); // <-- FAILURE ACTION

      Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["showMessage"])(_constants_messageType_js__WEBPACK_IMPORTED_MODULE_1__["MessageType"].ERROR, error);
    });
  };

  function request(user) {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["NEW_GAME_INIT"],
      user: user
    };
  }

  function success(user) {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["NEW_GAME_SUCCESS"],
      user: user
    };
  }

  function failure(error) {
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__["NEW_GAME_FAILURE"],
      error: error
    };
  }
}

function backToHome() {
  _services_game_service__WEBPACK_IMPORTED_MODULE_3__["gameService"].backToHome();
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["BACK_TO_HOME"]
  };
}

/***/ }),

/***/ "./app/javascript/store/actions/index.js":
/*!***********************************************!*\
  !*** ./app/javascript/store/actions/index.js ***!
  \***********************************************/
/*! exports provided: gameAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.action */ "./app/javascript/store/actions/game.action.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gameAction", function() { return _game_action__WEBPACK_IMPORTED_MODULE_0__["gameAction"]; });



/***/ }),

/***/ "./app/javascript/store/types.js":
/*!***************************************!*\
  !*** ./app/javascript/store/types.js ***!
  \***************************************/
/*! exports provided: CLEAR_GAME, EVALUATION_INIT, EVALUATION_SUCCESS, EVALUATION_INCORRECT, EVALUATION_FAILURE, NEW_GAME_INIT, NEW_GAME_SUCCESS, NEW_GAME_FAILURE, BACK_TO_HOME, ALERT_ACTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_GAME", function() { return CLEAR_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVALUATION_INIT", function() { return EVALUATION_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVALUATION_SUCCESS", function() { return EVALUATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVALUATION_INCORRECT", function() { return EVALUATION_INCORRECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVALUATION_FAILURE", function() { return EVALUATION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_GAME_INIT", function() { return NEW_GAME_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_GAME_SUCCESS", function() { return NEW_GAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_GAME_FAILURE", function() { return NEW_GAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK_TO_HOME", function() { return BACK_TO_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_ACTION", function() { return ALERT_ACTION; });
var CLEAR_GAME = "CLEAR_GAME";
var EVALUATION_INIT = "EVALUATION_INIT";
var EVALUATION_SUCCESS = "EVALUATION_SUCCESS";
var EVALUATION_INCORRECT = "EVALUATION_INCORRECT";
var EVALUATION_FAILURE = "EVALUATION_FAILURE";
var NEW_GAME_INIT = "NEW_GAME_INIT";
var NEW_GAME_SUCCESS = "NEW_GAME_SUCCESS";
var NEW_GAME_FAILURE = "NEW_GAME_FAILURE";
var BACK_TO_HOME = "BACK_TO_HOME";
var ALERT_ACTION = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR',
  INFO: 'ALERT_INFO',
  WARNING: 'ALERT_WARNING',
  DEFAULT: 'ALERT_DEFAULT'
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./app/javascript/components/common/Button/Button.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./app/javascript/components/common/Button/Button.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* Button States */\n.button {\n  width: 100%;\n  border-radius: 5px;\n  background-color: #ff9800;\n  margin-top: 25px;\n  padding: 20px 0; /* Safari */\n  transition: background 0.5s;\n  box-shadow: 2px 2px 5px rgba(255, 204, 128, 0.25);\n  display: block;\n  border: none;\n  font-size: 15px;\n  font-weight: 600;\n  text-align: center;\n  color: #ffffff;\n  letter-spacing: 3px;\n}\n.button:hover {\n  background: #ef6c00;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["Button.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;EACE,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,eAAe,EACsB,WAAW;EAChD,2BAA2B;EAC3B,iDAAiD;EACjD,cAAc;EACd,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB","file":"Button.css","sourcesContent":["/* Button States */\n.button {\n  width: 100%;\n  border-radius: 5px;\n  background-color: #ff9800;\n  margin-top: 25px;\n  padding: 20px 0;\n  -webkit-transition: background 0.5s; /* Safari */\n  transition: background 0.5s;\n  box-shadow: 2px 2px 5px rgba(255, 204, 128, 0.25);\n  display: block;\n  border: none;\n  font-size: 15px;\n  font-weight: 600;\n  text-align: center;\n  color: #ffffff;\n  letter-spacing: 3px;\n}\n\n.button:hover {\n  background: #ef6c00;\n  cursor: pointer;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=0-ecf68bc2c6297c904d98.chunk.js.map