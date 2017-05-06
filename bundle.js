/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MixinMethods = function () {
	function MixinMethods() {
		_classCallCheck(this, MixinMethods);
	}

	_createClass(MixinMethods, null, [{
		key: "getCsvBlob",
		value: function getCsvBlob(my_array) {
			var csvContent = "\uFEFF";
			my_array.forEach(function (infoArray, index) {
				infoArray.forEach(function (a, i) {
					if (typeof a !== 'string') {
						a = a.toString();
					}
					csvContent += "\"";
					csvContent += a.replace(/\r/g, "").replace(/\n/g, "").replace(/"/g, "\"\"");
					csvContent += i < infoArray.length ? "\"," : "\"";
				});
				if (index < my_array.length) {
					csvContent += "\n";
				}
			});
			return new Blob([csvContent], { type: 'text/csv' });
		}
	}, {
		key: "escapeHtml",
		value: function escapeHtml(unsafe) {
			return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
		}
	}]);

	return MixinMethods;
}();

exports.default = MixinMethods;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExportComponent(props) {
	return _react2.default.createElement(
		'p',
		null,
		_react2.default.createElement(
			'a',
			{
				download: props.name,
				href: URL.createObjectURL(props.blobObject)
			},
			props.text
		)
	);
}
exports.default = ExportComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var myState = {
	InitState: function InitState() {
		return {
			url: 'state',
			database: [],
			directoryMetadata: {
				name: null,
				textCount: 0,
				deep: 0,
				tags: null
			},
			query: null,
			result: null
		};
	},
	PageState: function PageState(url) {
		return {
			url: url,
			query: selector(url, queryMap),
			result: selector(url, resultMap)
		};
	}
};
exports.default = myState;

var queryMap = {
	frequency: function frequency() {
		return {
			typing: '',
			done: new Set(),
			filters: []
		};
	},
	context: function context() {
		return {
			typing: '',
			filters: []
		};
	}
};
var resultMap = {
	frequency: function frequency() {
		return {
			totals: {},
			drawData: []
		};
	},
	context: function context() {
		return {
			term: '',
			table: null,
			blob: null
		};
	}
};
function selector(url, dict) {
	if (!(url in dict)) {
		return null;
	}
	return dict[url]();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColorSet = function () {
	function ColorSet() {
		var alpha = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		_classCallCheck(this, ColorSet);

		this.grey = 61;
		this.colors = [[this.grey, this.grey, this.grey], [255, 59, 48], [90, 200, 250], [255, 149, 0], [0, 122, 255], [255, 204, 0], [88, 86, 214], [76, 217, 100], [255, 45, 85]];
		this.alpha = null;
		if (alpha) {
			this.alpha = 1.6;
		}
	}

	_createClass(ColorSet, [{
		key: 'rotate',
		value: function rotate() {
			var _this = this;

			var c = this.colors.shift();
			this.colors.push(c);
			if (this.alpha === null) {
				return;
			}
			var circle = c.every(function (value) {
				return value === _this.grey;
			});
			if (circle) {
				this.alpha = this.alpha * 0.625;
			}
		}
	}, {
		key: 'getColor_array',
		value: function getColor_array() {
			this.rotate();
			if (this.alpha === null) {
				return this.colors[0].slice();
			}
			return this.colors[0].slice().push(this.alpha);
		}
	}, {
		key: 'getColor_rgba',
		value: function getColor_rgba() {
			this.rotate();
			var c = this.colors[0].map(function (x) {
				return x.toString();
			}).join(',');
			if (this.alpha === null) {
				return 'rgba(' + c + ',1)';
			}
			return 'rgba(' + c + ',' + this.alpha.toFixed(3) + ')';
		}
	}]);

	return ColorSet;
}();

exports.default = ColorSet;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = reactChartjs2;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var my_events = ['PageChange', 'InputDirChange', 'AddFilter', 'RemoveFilter', 'FilterExcludeChange', 'FilterEqualChange', 'FilterValueChange', 'FilterKeyChange', 'FiltersApply', 'FrequencyTyping', 'FrequencySubmit', 'FrequencyRemove', 'ContextTyping', 'ContextSubmit', 'ShiftToSpan'];

function getActions(dispatcher) {
	var obj = new Object();
	my_events.forEach(function (item) {
		obj[item] = function (p) {
			dispatcher.dispatch({
				type: item,
				payload: p
			});
		};
	});
	return obj;
}
exports.default = getActions;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppStore = __webpack_require__(11);

var _AppStore2 = _interopRequireDefault(_AppStore);

var _FilterStore = __webpack_require__(13);

var _FilterStore2 = _interopRequireDefault(_FilterStore);

var _RouterStore = __webpack_require__(15);

var _RouterStore2 = _interopRequireDefault(_RouterStore);

var _FrequencyStore = __webpack_require__(14);

var _FrequencyStore2 = _interopRequireDefault(_FrequencyStore);

var _ContextStore = __webpack_require__(12);

var _ContextStore2 = _interopRequireDefault(_ContextStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getDispatcher(target) {
	return new Dispatcher(target, all_stores);
}
exports.default = getDispatcher;

var all_stores = {
	global: [_AppStore2.default, _RouterStore2.default, _FilterStore2.default],
	pages: {
		frequency: [_FrequencyStore2.default],
		context: [_ContextStore2.default]
	}
};

var Dispatcher = function () {
	function Dispatcher(component, stores) {
		var _this = this;

		_classCallCheck(this, Dispatcher);

		this.component = component;
		this.stores = stores;
		this.now_url = null;
		this.setState = function (dict) {
			_this.component.setState(dict);
		};
	}

	_createClass(Dispatcher, [{
		key: 'setURL',
		value: function setURL(url) {
			this.now_url = url;
		}
	}, {
		key: 'dispatch',
		value: function dispatch(command) {
			var _this2 = this;

			this.stores.global.forEach(function (store) {
				_this2.runCommand(store, command);
			});
			if (!(this.now_url in this.stores.pages)) {
				return;
			}
			this.stores.pages[this.now_url].forEach(function (store) {
				_this2.runCommand(store, command);
			});
		}
	}, {
		key: 'runCommand',
		value: function runCommand(store, command) {
			if (!(command.type in store)) {
				return;
			}
			store[command.type](command.payload, this.component.state, this.setState, this.component);
		}
	}]);

	return Dispatcher;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MenuView = __webpack_require__(19);

var _MenuView2 = _interopRequireDefault(_MenuView);

var _StatePage = __webpack_require__(24);

var _StatePage2 = _interopRequireDefault(_StatePage);

var _FrequencyPage = __webpack_require__(23);

var _FrequencyPage2 = _interopRequireDefault(_FrequencyPage);

var _ContextPage = __webpack_require__(22);

var _ContextPage2 = _interopRequireDefault(_ContextPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AppView(props) {
	return _react2.default.createElement(
		'div',
		null,
		props.state.database.length === 0 ? _react2.default.createElement(DirectoryInput, { actions: props.actions }) : '',
		_react2.default.createElement(_MenuView2.default, props),
		props.state.database.length === 0 ? _react2.default.createElement(
			'div',
			{ className: 'article' },
			_react2.default.createElement(
				'h2',
				null,
				'\u8AAA\u660E'
			),
			_react2.default.createElement(
				'p',
				null,
				'\u6539\u5BEB\u81EA\u653F\u5927\u8CC7\u79D1\u5289\u662D\u9E9F\u6559\u6388\u6240\u8A2D\u8A08\u7684',
				_react2.default.createElement(
					'a',
					{ href: 'https://sites.google.com/site/taiwandigitalhumanities/ruan-ti-gong-ju' },
					'\u81FA\u7063\u6578\u4F4D\u4EBA\u6587\u5C0F\u5C0F\u8B9A\u57FA\u672C\u6587\u672C\u5206\u6790\u3001\u7D71\u8A08\u8207\u8A9E\u5883\u64F7\u53D6\u5DE5\u5177'
				),
				'\u3002'
			),
			_react2.default.createElement(
				'h3',
				null,
				'\u7279\u6027'
			),
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					'\u8DE8\u5E73\u53F0\u3001\u514D\u5B89\u88DD'
				),
				_react2.default.createElement(
					'li',
					null,
					'\u53EF\u96E2\u7DDA\u64CD\u4F5C\uFF0C\u4E0D\u5C0D\u8CC7\u6599\u9032\u884C\u4E0A\u50B3'
				)
			),
			_react2.default.createElement(
				'h3',
				null,
				'\u793A\u7BC4\u8CC7\u6599'
			),
			_react2.default.createElement(
				'p',
				null,
				'\u672C\u5DE5\u5177\u63D0\u4F9B',
				_react2.default.createElement(
					'a',
					{ href: 'demo1.zip' },
					'\u4E09\u570B\u6F14\u7FA9'
				),
				'\u548C',
				_react2.default.createElement(
					'a',
					{ href: 'demo2.zip' },
					'\u97D3\u570B\u96FB\u5F71\u4E3B\u8981\u6F14\u54E1\u8CC7\u6599'
				),
				'\u5169\u500B\u8CC7\u6599\u96C6\u7576\u4F5C\u793A\u7BC4\u8CC7\u6599\uFF0C\u4E0B\u8F09\u5F8C\u4E26\u89E3\u58D3\u7E2E\uFF0C\u518D',
				_react2.default.createElement(
					'em',
					null,
					'\u9EDE\u9078\u672C\u9801\u4E0A\u65B9\u7684\u9078\u64C7\u8CC7\u6599\u96C6\u6240\u5728\u7684\u8CC7\u6599\u593E'
				),
				'\u5F8C\u958B\u59CB\u64CD\u4F5C\u3002'
			),
			_react2.default.createElement(
				'p',
				null,
				'\u524D\u8005\u63A1\u56DE\u6578\u5206\u985E\uFF0C\u5C55\u793A\u672C\u7A0B\u5F0F\u5C0D\u6587\u672C\u57FA\u672C\u6AA2\u7D22\uFF0C\u8A66\u8457\u8F38\u5165\u60A8\u6240\u77E5\u7684\u4E09\u570B\u4EBA\u7269\u67E5\u770B\u4ED6\u5011\u5728\u5404\u56DE\u7684\u51FA\u5834\u72C0\u6CC1\u548C\u51FA\u5834\u8A9E\u5883\uFF1B\u5F8C\u8005\u63A1\u4E0A\u6620\u5E74\u6708\u4EFD\u4F86\u5206\u985E\uFF0C\u5C55\u793A\u672C\u7A0B\u5F0F\u8655\u7406\u968E\u5C64\u8A66\u8CC7\u6599\u593E\u7D50\u69CB\u7684\u80FD\u529B\uFF0C\u8F38\u5165',
				_react2.default.createElement(
					'strong',
					null,
					'\u5433\u9054\u5EB6'
				),
				'\u3001',
				_react2.default.createElement(
					'strong',
					null,
					'\u99AC\u6771\u932B'
				),
				'\u3001',
				_react2.default.createElement(
					'strong',
					null,
					'\u8D99\u9707\u96C4'
				),
				'\u6216\u662F\u4F60\u6240\u8A8D\u8B58\u97D3\u570B\u6F14\u54E1\u67E5\u770B\u4ED6\u5011\u7684\u6F14\u51FA\u72C0\u6CC1\u3002'
			),
			_react2.default.createElement(
				'h3',
				null,
				'\u5354\u52A9\u958B\u767C\u6B64\u5DE5\u5177'
			),
			_react2.default.createElement(
				'p',
				null,
				'\u672C\u7A0B\u5F0F',
				_react2.default.createElement(
					'a',
					{ href: 'https://github.com/ldkrsi/TaiwanDH-React' },
					'\u5728GitHub\u4E0A\u958B\u6E90'
				),
				'\uFF0C\u6B61\u8FCE\u5C0D\u6587\u5B57\u5206\u6790\u5DE5\u5177\u6709\u8208\u8DA3\u7684\u4EBA\u7D66\u6211\u5011Pull Request\u6216Fork\u51FA\u5EF6\u4F38\u7248\u672C\u3002'
			)
		) : '',
		props.state.database.length === 0 ? '' : _react2.default.createElement(MainArea, props)
	);
}
exports.default = AppView;


function MainArea(props) {
	switch (props.state.url) {
		case 'state':
			return _react2.default.createElement(_StatePage2.default, props);
		case 'frequency':
			return _react2.default.createElement(_FrequencyPage2.default, props);
		case 'context':
			return _react2.default.createElement(_ContextPage2.default, props);
		default:
			return _react2.default.createElement(
				'div',
				null,
				'error'
			);
	}
}
function DirectoryInput(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'directory-input' },
		_react2.default.createElement(
			'label',
			{
				htmlFor: 'directory-input'
			},
			'\u9078\u64C7\u8CC7\u6599\u96C6\u6240\u5728\u7684\u8CC7\u6599\u593E'
		),
		_react2.default.createElement('input', { type: 'file',
			id: 'directory-input',
			ref: function ref(dom) {
				if (dom === null) {
					return;
				}
				dom.webkitdirectory = true;
			},
			onChange: props.actions.InputDirChange
		})
	);
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _TextEntity = __webpack_require__(18);

var _TextEntity2 = _interopRequireDefault(_TextEntity);

var _TagDict = __webpack_require__(17);

var _TagDict2 = _interopRequireDefault(_TagDict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppStore = {
	InputDirChange: function InputDirChange(payload, state, setState, target) {
		setState({ database: [] });
		var files = payload.target.files;
		var counter = 0,
		    deep = 0,
		    tags = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var f = _step.value;

				if (f.type !== 'text/plain') {
					continue;
				}
				read_file(f, setState, target);
				counter += 1;
				deep = Math.max(deep, f.webkitRelativePath.split("/").length - 2);
				f.webkitRelativePath.split("/").slice(1, -1).forEach(function (item, i) {
					if (tags.length <= i) {
						tags.push(new _TagDict2.default());
					}
					tags[i].add(item);
				});
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		setState({
			directoryMetadata: {
				name: files[0].webkitRelativePath.split("/")[0],
				textCount: counter,
				deep: deep,
				tags: tags
			}
		});
	}
};

exports.default = AppStore;


function read_file(file, setState, target) {
	var reader = new FileReader();
	reader.onload = function (evt) {
		var text = new _TextEntity2.default(file, evt.target.result);
		setState({ database: target.state.database.concat([text]) });
	};
	reader.readAsText(file);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var ContextStore = {
	ContextTyping: function ContextTyping(payload, state, setState) {
		var query = state.query;
		query.typing = payload;
		setState({ query: query });
	},
	ContextSubmit: function ContextSubmit(payload, state, setState) {
		var query = state.query,
		    result = state.result;
		var term = query.typing.trim();
		if (term.length === 0) {
			return;
		}
		result.term = term;
		result.table = getContents(term, state.database, query.filters);
		result.blob = toHtmlBlob(result.table);
		setState({ result: result });
	},
	ShiftToSpan: function ShiftToSpan(payload, state, setState) {
		var result = state.result;
		var row = result.table[payload.index];
		row[2] = (row[2] + payload.value + row[3]) % row[3];
		setState({ result: result });
	},
	FiltersApply: function FiltersApply(payload, state, setState) {
		ContextStore.ContextSubmit(payload, state, setState);
	}
};
exports.default = ContextStore;

function getContents(string, database, filters) {
	var result = [];
	database.forEach(function (text) {
		var tags = text.metadata.tags;
		var pass = filters.every(function (f) {
			return f.passFilter(tags[f.key]);
		});
		if (!pass) {
			return;
		}
		var tmp = text.tagging(string);
		if (tmp === null) {
			return;
		}
		result.push([text.metadata.relativePath, tmp.text, 0, tmp.counter]);
	});
	return result;
}
function toHtmlBlob(table) {
	var result = '\uFEFF';
	table.forEach(function (row) {
		result += '<div>';
		result += '<h2>';
		result += row[0];
		result += '</h2>';
		result += '<p>';
		result += row[1];
		result += '</p>';
		result += '</div>';
	});
	return new Blob([result], { type: 'text/html' });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Filter = __webpack_require__(16);

var _Filter2 = _interopRequireDefault(_Filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterStore = {
	AddFilter: function AddFilter(payload, state, setState) {
		state.query.filters.push(new _Filter2.default(true, 0, true, state.directoryMetadata.tags[0].keys()[0]));
		setState({ query: state.query });
	},
	RemoveFilter: function RemoveFilter(payload, state, setState) {
		state.query.filters.splice(parseInt(payload), 1);
		setState({ query: state.query });
	},
	FilterExcludeChange: function FilterExcludeChange(payload, state, setState) {
		state.query.filters[payload.index].setExclude(payload.value);
		setState({ query: state.query });
	},
	FilterEqualChange: function FilterEqualChange(payload, state, setState) {
		state.query.filters[payload.index].setEqual(payload.value);
		setState({ query: state.query });
	},
	FilterValueChange: function FilterValueChange(payload, state, setState) {
		state.query.filters[payload.index].setValue(payload.value);
		setState({ query: state.query });
	},
	FilterKeyChange: function FilterKeyChange(payload, state, setState) {
		state.query.filters[payload.index].setKey(payload.value, state.directoryMetadata.tags[payload.value].keys()[0]);
		setState({ query: state.query });
	}
};

exports.default = FilterStore;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

var _colorSet = __webpack_require__(4);

var _colorSet2 = _interopRequireDefault(_colorSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FrequencyStore = {
	FrequencyTyping: function FrequencyTyping(payload, state, setState) {
		var query = state.query;
		query.typing = payload;
		setState({ query: query });
	},
	FrequencyRemove: function FrequencyRemove(payload, state, setState) {
		var query = state.query;
		var result = state.result;
		query.done.delete(payload);
		delete result.totals[payload];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = result.drawData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var item = _step.value;

				item.datasets = item.datasets.filter(function (row, i) {
					if (row.myID !== payload) {
						return true;
					}
					return false;
				});
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		result.drawData.forEach(function (item, i) {
			item.csv = drawDataToCSV(item, state.directoryMetadata.tags[i]);
		});
		setState({ query: query, result: result });
	},
	FrequencySubmit: function FrequencySubmit(payload, state, setState) {
		var query = state.query,
		    result = state.result;
		var term = query.typing.trim();
		if (term.length === 0) {
			return;
		}
		query.typing = '';
		query.done.add(term);
		var tag_set = state.directoryMetadata.tags;
		mergeResult(term, result, occurrencesCounter(state.database, term, query.filters), tag_set);
		result.drawData.forEach(function (item, i) {
			item.csv = drawDataToCSV(item, tag_set[i]);
		});
		setState({ query: query, result: result });
	},
	FiltersApply: function FiltersApply(payload, state, setState) {
		var query = state.query,
		    result = state.result;
		if (query.done.size === 0) {
			return;
		}
		result.drawData = [];
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = query.done[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var term = _step2.value;

				mergeResult(term, result, occurrencesCounter(state.database, term, query.filters), state.directoryMetadata.tags);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		result.drawData.forEach(function (item, i) {
			item.csv = drawDataToCSV(item, state.directoryMetadata.tags[i]);
		});
		setState({ result: result });
	}
};
exports.default = FrequencyStore;


function drawDataToCSV(chartData, tagData) {
	var my_array = [[''].concat(chartData.labels)];
	chartData.datasets.forEach(function (row) {
		if (row.type !== 'bar') {
			return;
		}
		my_array.push([row.myID].concat(row.data));
	});
	my_array.push(['文章總計'].concat(chartData.labels.map(function (item) {
		return tagData.value(item);
	})));
	return _mixin2.default.getCsvBlob(my_array);
}
function mergeResult(term, result, count_result, tags) {
	var drawData = result.drawData;
	count_result.result.forEach(function (row, i) {
		var keys = Object.keys(row).sort();
		if (!(i in drawData)) {
			drawData.push({
				labels: keys,
				datasets: [],
				csv: null,
				colorController: new _colorSet2.default(false)
			});
		}
		var obj = drawData[i];
		pushChartDataRow(row, term, obj.datasets, {
			key_order: keys,
			colors: obj.colorController,
			tag_dict: tags[i]
		});
	});
	result.totals[term] = count_result.counter;
}
function occurrencesCounter(texts, string, filters) {
	var result = [],
	    counter = 0;
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		var _loop = function _loop() {
			var text = _step3.value;

			var tags = text.metadata.tags;
			var pass = filters.every(function (f) {
				return f.passFilter(tags[f.key]);
			});
			if (!pass) {
				return 'continue';
			}
			var c = text.occurrences(string);
			tags.forEach(function (tag, i) {
				if (!(i in result)) {
					result.push({});
				}
				if (!(tag in result[i])) {
					result[i][tag] = 0;
				}
				result[i][tag] += c;
			});
			counter += c;
		};

		for (var _iterator3 = texts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var _ret = _loop();

			if (_ret === 'continue') continue;
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	return {
		counter: counter,
		result: result
	};
}
function pushChartDataRow(source, string, target, args) {
	var data1 = [],
	    data2 = [];
	args.key_order.forEach(function (t) {
		var v = source[t];
		data1.push(v);
		data2.push(Math.round(v / args.tag_dict.value(t) * 100) / 100);
	});
	var color = args.colors.getColor_array().map(function (x) {
		return x.toString();
	}).join(',');
	target.push({
		type: 'bar',
		yAxisID: 'y-axis-1',
		borderWidth: 1,
		borderColor: 'rgba(' + color + ',1)',
		backgroundColor: 'rgba(' + color + ',0.2)',
		hoverBorderColor: 'rgba(' + color + ',1)',
		hoverBackgroundColor: 'rgba(' + color + ',0.4)',
		myID: string,
		label: string + " (累計)",
		data: data1
	});
	target.push({
		type: 'line',
		yAxisID: 'y-axis-2',
		fill: false,
		lineTension: 0,
		borderWidth: 1,
		pointBorderWidth: 1,
		pointHoverBorderWidth: 2,
		pointRadius: 2,
		pointHoverRadius: 4,
		backgroundColor: 'rgba(' + color + ',0.4)',
		borderColor: 'rgba(' + color + ',1)',
		pointBorderColor: 'rgba(' + color + ',1)',
		hoverBorderColor: 'rgba(' + color + ',1)',
		pointHoverBackgroundColor: 'rgba(' + color + ',1)',
		pointHoverBorderColor: 'rgba(' + color + ',1)',
		myID: string,
		label: string + " (比率)",
		data: data2
	});
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _States = __webpack_require__(3);

var _States2 = _interopRequireDefault(_States);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterStore = {
	PageChange: function PageChange(payload, state, setState, target) {
		target.myDispatcher.setURL(payload);
		setState(_States2.default.PageState(payload));
	}
};
exports.default = RouterStore;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function () {
	function Filter(_exclude, _key, _equal, _value) {
		_classCallCheck(this, Filter);

		this.exclude = _exclude;
		this.key = _key;
		this.equal = _equal;
		this.value = _value;
	}

	_createClass(Filter, [{
		key: 'is_exclude',
		value: function is_exclude() {
			if (this.exclude) {
				return '1';
			}
			return '0';
		}
	}, {
		key: 'is_equal',
		value: function is_equal() {
			if (this.equal) {
				return '1';
			}
			return '0';
		}
	}, {
		key: 'setExclude',
		value: function setExclude(v) {
			this.exclude = v === '1';
		}
	}, {
		key: 'setEqual',
		value: function setEqual(v) {
			this.equal = v === '1';
		}
	}, {
		key: 'setValue',
		value: function setValue(v) {
			this.value = v;
		}
	}, {
		key: 'setKey',
		value: function setKey(k, v) {
			this.key = k;
			this.value = v;
		}
	}, {
		key: 'passFilter',
		value: function passFilter(value) {
			return this.exclude ^ !(this.equal ^ value === this.value);
		}
	}]);

	return Filter;
}();

exports.default = Filter;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TagDict = function () {
	function TagDict() {
		_classCallCheck(this, TagDict);

		this.datastruct = {};
	}

	_createClass(TagDict, [{
		key: "add",
		value: function add(item) {
			var data = this.datastruct;
			if (!(item in data)) {
				data[item] = 0;
			}
			data[item] += 1;
		}
	}, {
		key: "keys",
		value: function keys() {
			return Object.keys(this.datastruct).sort();
		}
	}, {
		key: "size",
		value: function size() {
			return Object.keys(this.datastruct).length;
		}
	}, {
		key: "value",
		value: function value(key) {
			return this.datastruct[key];
		}
	}, {
		key: "items",
		value: function items() {
			return Object.entries(this.datastruct).sort(function (a, b) {
				return a[0].localeCompare(b[0]);
			});
		}
	}]);

	return TagDict;
}();

exports.default = TagDict;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextEntity = function () {
	function TextEntity(file_meta, text) {
		_classCallCheck(this, TextEntity);

		this.metadata = {
			name: file_meta.name,
			lastModifiedDate: file_meta.lastModifiedDate,
			relativePath: file_meta.webkitRelativePath,
			tags: file_meta.webkitRelativePath.split("/").slice(1, -1)
		};
		this.text = text.trim();
	}

	_createClass(TextEntity, [{
		key: "occurrences",
		value: function occurrences(string) {
			return (this.text.match(new RegExp(string, "g")) || []).length;
		}
	}, {
		key: "tagging",
		value: function tagging(string) {
			var f = this.occurrences(string);
			if (f === 0) {
				return null;
			}
			var text = _mixin2.default.escapeHtml(this.text);
			string = _mixin2.default.escapeHtml(string);
			return {
				counter: f,
				text: text.replace(new RegExp(string, 'g'), function (x) {
					return '<em>' + x + '</em>';
				})
			};
		}
	}]);

	return TextEntity;
}();

exports.default = TextEntity;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeTable = [{ text: "狀態", url: "state" }, { text: "詞頻分析", url: "frequency" }, { text: "語境分析", url: "context" }];

function Menu(props) {
	var onClick = function onClick(e) {
		props.actions.PageChange(e.target.dataset.url);
	};
	if (props.state.database.length === 0) {
		return _react2.default.createElement(
			"nav",
			null,
			_react2.default.createElement(
				"ul",
				{ className: "disable" },
				routeTable.map(function (item, i) {
					return _react2.default.createElement(
						"li",
						{ key: i },
						item.text
					);
				})
			)
		);
	}
	return _react2.default.createElement(
		"nav",
		null,
		_react2.default.createElement(
			"ul",
			{ className: "enable" },
			routeTable.map(function (item, i) {
				return _react2.default.createElement(
					"li",
					{ key: i,
						className: item.url === props.state.url ? 'active' : '',
						onClick: item.url === props.state.url ? '' : onClick,
						"data-url": item.url
					},
					item.text
				);
			})
		)
	);
}
exports.default = Menu;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _removeComponent = __webpack_require__(21);

var _removeComponent2 = _interopRequireDefault(_removeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FilterComponent(props) {
	var filters = props.filters;
	var applyBtn = _react2.default.createElement(
		'button',
		{ onClick: props.actions.FiltersApply },
		'Apply'
	);
	return _react2.default.createElement(
		'div',
		{ className: 'filter-component' },
		_react2.default.createElement(
			'h3',
			null,
			'\u7BE9\u9078\u5668'
		),
		filters.map(function (item, i) {
			return _react2.default.createElement(FilterItem, {
				key: i,
				myIndex: i,
				filter: item,
				tags: props.tags,
				actions: props.actions
			});
		}),
		_react2.default.createElement(
			'div',
			{ className: 'button-group' },
			_react2.default.createElement(
				'button',
				{ className: 'small',
					onClick: props.actions.AddFilter
				},
				'+'
			),
			applyBtn
		)
	);
}
exports.default = FilterComponent;


function FilterItem(props) {
	var filter = props.filter;
	var tags = props.tags;
	var onRemoveClick = function onRemoveClick(index) {
		props.actions.RemoveFilter(parseInt(index));
	};
	var onExcludeChange = function onExcludeChange(e) {
		props.actions.FilterExcludeChange({ index: props.myIndex, value: e.target.value });
	};
	var onEqualChange = function onEqualChange(e) {
		props.actions.FilterEqualChange({ index: props.myIndex, value: e.target.value });
	};
	var onValueChange = function onValueChange(e) {
		props.actions.FilterValueChange({ index: props.myIndex, value: e.target.value });
	};
	var onKeyChange = function onKeyChange(e) {
		props.actions.FilterKeyChange({ index: props.myIndex, value: parseInt(e.target.value) });
	};
	return _react2.default.createElement(
		'div',
		{ className: 'filter-li' },
		_react2.default.createElement(
			'select',
			{ value: filter.is_exclude(), onChange: onExcludeChange },
			_react2.default.createElement(
				'option',
				{ value: '1' },
				'\u6392\u9664'
			),
			_react2.default.createElement(
				'option',
				{ value: '0' },
				'\u5305\u542B'
			)
		),
		_react2.default.createElement(
			'select',
			{ value: filter.key.toString(), onChange: onKeyChange },
			tags.map(function (row, i) {
				return _react2.default.createElement(
					'option',
					{ key: i, value: i.toString() },
					'第' + (i + 1).toString() + '層'
				);
			})
		),
		_react2.default.createElement(
			'select',
			{ value: filter.is_equal(), onChange: onEqualChange },
			_react2.default.createElement(
				'option',
				{ value: '1' },
				'\u7B49\u65BC'
			),
			_react2.default.createElement(
				'option',
				{ value: '0' },
				'\u4E0D\u7B49\u65BC'
			)
		),
		_react2.default.createElement(
			'select',
			{ value: filter.value, onChange: onValueChange },
			tags[filter.key].keys().map(function (k, i) {
				return _react2.default.createElement(
					'option',
					{ key: i, value: k },
					k
				);
			})
		),
		_react2.default.createElement(_removeComponent2.default, { myValue: props.myIndex, action: onRemoveClick })
	);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RemoveComponent(props) {
	var onClickFunction = function onClickFunction(e) {
		props.action(e.target.dataset.value);
	};
	return _react2.default.createElement(
		"span",
		{ className: "remove-x",
			"data-value": props.myValue,
			onClick: onClickFunction
		},
		"\u2716"
	);
}

exports.default = RemoveComponent;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _exportComponent = __webpack_require__(2);

var _exportComponent2 = _interopRequireDefault(_exportComponent);

var _filterComponent = __webpack_require__(20);

var _filterComponent2 = _interopRequireDefault(_filterComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContextPage(props) {
	var state = props.state;
	var filter = _react2.default.createElement(_filterComponent2.default, {
		filters: state.query.filters,
		tags: state.directoryMetadata.tags,
		actions: props.actions
	});
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(InputArea, props),
		filter,
		props.state.result.table === null ? '' : _react2.default.createElement(ResultArea, props)
	);
}
exports.default = ContextPage;

function ResultArea(props) {
	var result = props.state.result;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h2',
			null,
			result.term
		),
		_react2.default.createElement(
			'div',
			{ className: 'block-element' },
			_react2.default.createElement(
				'p',
				null,
				'\u5171',
				result.table.length,
				'\u500B\u6587\u672C\u5305\u542B',
				_react2.default.createElement(
					'strong',
					null,
					result.term
				),
				'\u9019\u500B\u8A5E\u5F59'
			),
			_react2.default.createElement(_exportComponent2.default, { name: result.term + '語境.html', text: '\u9EDE\u6B64\u532F\u51FA\u4E0B\u65B9\u8CC7\u6599(html)', blobObject: result.blob })
		),
		_react2.default.createElement(
			'div',
			{ className: 'context-table' },
			result.table.map(function (row, i) {
				return _react2.default.createElement(DataRow, { row: row, index: i, key: i, actions: props.actions });
			})
		)
	);
}
function DataRow(props) {
	var row = props.row;
	var to_scrollLeft = function to_scrollLeft(dom) {
		if (dom === null) {
			return;
		}
		var target = dom.getElementsByTagName('em')[row[2]];
		var v = target.offsetLeft - dom.offsetLeft - 450;
		dom.scrollLeft = v;
	};
	var nextSpan = function nextSpan() {
		props.actions.ShiftToSpan({
			index: props.index,
			value: 1
		});
	};
	var prevSpan = function prevSpan() {
		props.actions.ShiftToSpan({
			index: props.index,
			value: -1
		});
	};
	return _react2.default.createElement(
		'div',
		{ className: 'row' },
		_react2.default.createElement(
			'h3',
			null,
			row[0]
		),
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'a',
				{ onClick: prevSpan },
				'\u4E0A\u4E00\u500B'
			),
			'\xA0',
			_react2.default.createElement(
				'a',
				{ onClick: nextSpan },
				'\u4E0B\u4E00\u500B'
			),
			'\xA0',
			Array.apply(null, Array(row[3])).map(function (_, i) {
				return row[2] === i ? _react2.default.createElement(
					'span',
					null,
					'\u2022'
				) : _react2.default.createElement(
					'span',
					null,
					'\u22C5'
				);
			})
		),
		_react2.default.createElement(
			'div',
			{ ref: to_scrollLeft },
			_react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: row[1] } })
		)
	);
}
function InputArea(props) {
	var onChange = function onChange(e) {
		props.actions.ContextTyping(e.target.value);
	};
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement('input', {
			type: 'text',
			placeholder: '\u8F38\u5165\u8A5E\u5F59',
			value: props.state.query.typing,
			onChange: onChange
		}),
		_react2.default.createElement(
			'button',
			{
				onClick: props.actions.ContextSubmit
			},
			'\u78BA\u5B9A'
		)
	);
}
//http://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
//http://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = __webpack_require__(5);

var _exportComponent = __webpack_require__(2);

var _exportComponent2 = _interopRequireDefault(_exportComponent);

var _filterComponent = __webpack_require__(20);

var _filterComponent2 = _interopRequireDefault(_filterComponent);

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FrequencyPage(props) {
	var state = props.state;
	var filter = _react2.default.createElement(_filterComponent2.default, {
		filters: state.query.filters,
		tags: state.directoryMetadata.tags,
		actions: props.actions
	});
	if (state.query.done.size === 0) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(InputArea, props),
			filter
		);
	}
	var result = [];
	if (state.result.drawData.length > 0) {
		result.push(_react2.default.createElement(
			'h2',
			null,
			'\u5206\u5C64\u7D71\u8A08'
		));
		state.result.drawData.forEach(function (data, i) {
			result.push(_react2.default.createElement(ChartElement, { key: i,
				deep: (i + 1).toString(),
				data: data
			}));
		});
	}
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(InputArea, props),
		_react2.default.createElement(InputedArea, props),
		filter,
		_react2.default.createElement(ResultArea, { totals: state.result.totals }),
		result.map(function (item) {
			return item;
		})
	);
}
exports.default = FrequencyPage;


function ResultArea(props) {
	var obj = props.totals;
	var keys = Object.keys(obj);
	var dataset = keys.map(function (k) {
		return obj[k];
	});
	var options = {
		legend: { display: false },
		scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
	};
	var data = {
		labels: keys,
		datasets: [{
			borderWidth: 1,
			borderColor: 'rgba(255,45,85,1)',
			backgroundColor: 'rgba(255,45,85,0.2)',
			hoverBorderColor: 'rgba(255,45,85,1)',
			hoverBackgroundColor: 'rgba(255,45,85,0.4)',
			label: "出現次數",
			data: dataset
		}]
	};
	var my_array = [['', '數量']];
	Array.prototype.push.apply(my_array, Object.entries(obj));
	var blob_obj = _mixin2.default.getCsvBlob(my_array);
	return _react2.default.createElement(
		'div',
		{ className: 'chart-element' },
		_react2.default.createElement(
			'h2',
			null,
			'\u8A5E\u983B\u7D71\u8A08'
		),
		_react2.default.createElement(_reactChartjs.Bar, {
			data: data,
			options: options
		}),
		_react2.default.createElement(_exportComponent2.default, {
			name: '詞頻統計.csv',
			blobObject: blob_obj,
			text: '\u532F\u51FA\u5716\u8868\u8CC7\u6599(csv)'
		})
	);
}
function ChartElement(props) {
	var name = "第" + props.deep + "層";
	return _react2.default.createElement(
		'div',
		{ className: 'chart-element' },
		_react2.default.createElement(
			'h3',
			null,
			name
		),
		_react2.default.createElement(_reactChartjs.Bar, {
			data: props.data,
			options: chart_options
		}),
		_react2.default.createElement(_exportComponent2.default, {
			name: '詞頻統計(' + name + ').csv',
			blobObject: props.data.csv,
			text: '\u532F\u51FA\u5716\u8868\u8CC7\u6599(csv)'
		}),
		_react2.default.createElement(
			'p',
			null,
			'\u7D2F\u8A08(\u9577\u689D\u5716) = \u51FA\u73FE\u6B21\u6578'
		),
		_react2.default.createElement(
			'p',
			null,
			'\u6BD4\u7387(\u6298\u7DDA\u5716) = \u51FA\u73FE\u6B21\u6578 / \u8A72\u5206\u985E\u6587\u7AE0\u7E3D\u6578'
		)
	);
}
var chart_options = {
	scales: {
		yAxes: [{
			id: 'y-axis-1',
			position: 'left',
			gridLines: {
				display: false
			},
			ticks: { beginAtZero: true }
		}, {
			id: 'y-axis-2',
			position: 'right',
			ticks: { beginAtZero: true }
		}]
	}
};
function InputedArea(props) {
	var onClickRemove = function onClickRemove(e) {
		props.actions.FrequencyRemove(e.target.dataset.term);
	};
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'ul',
			{ className: 'term-list-small' },
			Array.from(props.state.query.done).map(function (item, i) {
				return _react2.default.createElement(
					'li',
					{ key: item },
					item,
					_react2.default.createElement(
						'span',
						{
							className: 'remove-x',
							'data-term': item,
							onClick: onClickRemove
						},
						'\u2716'
					)
				);
			})
		)
	);
}
function InputArea(props) {
	var onChange = function onChange(e) {
		props.actions.FrequencyTyping(e.target.value);
	};
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement('input', {
			type: 'text',
			placeholder: '\u8F38\u5165\u8A5E\u5F59',
			value: props.state.query.typing,
			onChange: onChange
		}),
		_react2.default.createElement(
			'button',
			{
				onClick: props.actions.FrequencySubmit
			},
			'Add'
		)
	);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = __webpack_require__(5);

var _colorSet = __webpack_require__(4);

var _colorSet2 = _interopRequireDefault(_colorSet);

var _exportComponent = __webpack_require__(2);

var _exportComponent2 = _interopRequireDefault(_exportComponent);

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StatePage(props) {
	var state = props.state;
	var tagsArray = state.directoryMetadata.tags;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(DirectoryMetadata, {
			metadata: state.directoryMetadata,
			count: state.database.length
		}),
		tagsArray.length > 0 ? _react2.default.createElement(
			'h2',
			null,
			'\u5206\u985E\u6578\u91CF'
		) : '',
		tagsArray.map(function (row, i) {
			return _react2.default.createElement(DoughnutChart, { key: i, tags: row, idStr: (i + 1).toString() });
		})
	);
}
exports.default = StatePage;


function DoughnutChart(props) {
	var tags = props.tags;
	var keys = tags.keys();
	var name = "第" + props.idStr + "層";
	var colors = new _colorSet2.default();
	var my_colors = keys.map(function () {
		return colors.getColor_rgba();
	});
	var data = {
		labels: keys,
		datasets: [{
			data: keys.map(function (key) {
				return tags.value(key);
			}),
			backgroundColor: my_colors,
			hoverBackgroundColor: my_colors
		}]
	};
	var options = { animation: { animateRotate: false } };
	var my_array = [['', '數量']];
	Array.prototype.push.apply(my_array, tags.items());
	var blob_obj = _mixin2.default.getCsvBlob(my_array);
	return _react2.default.createElement(
		'div',
		{ className: 'chart-element' },
		_react2.default.createElement(
			'h3',
			null,
			name
		),
		_react2.default.createElement(_reactChartjs.Doughnut, { data: data, options: options }),
		_react2.default.createElement(_exportComponent2.default, {
			name: name + '分類統計.csv',
			blobObject: blob_obj,
			text: '\u532F\u51FA\u7D71\u8A08\u8CC7\u6599(csv)'
		})
	);
}
function DirectoryMetadata(props) {
	var Reset = function Reset(e) {
		var f = confirm('確定要重設輸入資料？');
		if (f !== true) {
			return;
		}
		location.reload();
	};
	return _react2.default.createElement(
		'div',
		{ className: 'block-element' },
		_react2.default.createElement(
			'dl',
			null,
			_react2.default.createElement(
				'dt',
				null,
				'\u8CC7\u6599\u593E\u540D\u7A31'
			),
			_react2.default.createElement(
				'dd',
				null,
				props.metadata.name
			),
			_react2.default.createElement(
				'dt',
				null,
				'\u8CC7\u6599\u593E\u6DF1\u5EA6'
			),
			_react2.default.createElement(
				'dd',
				null,
				props.metadata.deep,
				'\u5C64'
			),
			_react2.default.createElement(
				'dt',
				null,
				'\u8F09\u5165\u72C0\u614B'
			),
			_react2.default.createElement(
				'dd',
				null,
				'\u5DF2\u8F09\u5165',
				props.count,
				'\u500Btxt\u6A94\uFF0C\u5171',
				props.metadata.textCount,
				'\u500Btxt\u6A94'
			)
		),
		_react2.default.createElement(
			'button',
			{
				className: 'warning',
				onClick: Reset
			},
			'Reset'
		)
	);
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(9);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _States = __webpack_require__(3);

var _States2 = _interopRequireDefault(_States);

var _AppView = __webpack_require__(8);

var _AppView2 = _interopRequireDefault(_AppView);

var _Dispatcher = __webpack_require__(7);

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _Action = __webpack_require__(6);

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppContainer = function (_React$Component) {
	_inherits(AppContainer, _React$Component);

	function AppContainer(props) {
		_classCallCheck(this, AppContainer);

		var _this = _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).call(this, props));

		_this.myDispatcher = (0, _Dispatcher2.default)(_this);
		_this.action = (0, _Action2.default)(_this.myDispatcher);
		_this.state = _States2.default.InitState();
		return _this;
	}

	_createClass(AppContainer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_AppView2.default, {
				actions: this.action,
				state: this.state
			});
		}
	}]);

	return AppContainer;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(AppContainer, null), document.getElementById('app'));

/***/ })
/******/ ]);