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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
			query: queryDispatcher(url),
			result: resultDispatcher(url)
		};
	}
};
exports.default = myState;


function queryDispatcher(url) {
	switch (url) {
		case 'frequency':
			return {
				typing: '',
				done: new Set()
			};
		default:
			return null;
	};
}
function resultDispatcher(url) {
	switch (url) {
		case 'frequency':
			return {
				totals: {},
				csvBlob: null,
				drawData: []
			};
		default:
			return null;
	};
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function getActions(dispatcher) {
	return {
		InputDirChange: function InputDirChange(e) {
			dispatcher.dispatch({
				type: 'InputDirChange',
				payload: e
			});
		},
		PageChange: function PageChange(url) {
			dispatcher.dispatch({
				type: 'PageChange',
				payload: url
			});
		},
		FrequencyTyping: function FrequencyTyping(query) {
			dispatcher.dispatch({
				type: 'FrequencyTyping',
				payload: query
			});
		},
		FrequencySubmit: function FrequencySubmit(e) {
			dispatcher.dispatch({
				type: 'FrequencySubmit',
				payload: e
			});
		},
		FrequencyRemove: function FrequencyRemove(term) {
			dispatcher.dispatch({
				type: 'FrequencyRemove',
				payload: term
			});
		}
	};
}
exports.default = getActions;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppStore = __webpack_require__(7);

var _AppStore2 = _interopRequireDefault(_AppStore);

var _RouterStore = __webpack_require__(9);

var _RouterStore2 = _interopRequireDefault(_RouterStore);

var _FrequencyStore = __webpack_require__(8);

var _FrequencyStore2 = _interopRequireDefault(_FrequencyStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getDispatcher(target) {
	return new Dispatcher(target, [_AppStore2.default, _RouterStore2.default, _FrequencyStore2.default]);
}
exports.default = getDispatcher;

var Dispatcher = function () {
	function Dispatcher(component, stores) {
		_classCallCheck(this, Dispatcher);

		this.component = component;
		this.stores = stores;
	}

	_createClass(Dispatcher, [{
		key: 'dispatch',
		value: function dispatch(command) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.stores[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var store = _step.value;

					store(this.component, command);
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
		}
	}]);

	return Dispatcher;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _StatePage = __webpack_require__(13);

var _StatePage2 = _interopRequireDefault(_StatePage);

var _FrequencyPage = __webpack_require__(12);

var _FrequencyPage2 = _interopRequireDefault(_FrequencyPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AppView(props) {
	var MainDom = '';
	var InputDom = _react2.default.createElement(DirectoryInput, { actions: props.actions });
	if (props.state.database.length > 0) {
		MainDom = _react2.default.createElement(MainArea, props);
		InputDom = '';
	}
	return _react2.default.createElement(
		'div',
		null,
		InputDom,
		_react2.default.createElement(
			'nav',
			null,
			_react2.default.createElement(Menu, props)
		),
		MainDom
	);
}
exports.default = AppView;


function MainArea(props) {
	switch (props.state.url) {
		case 'state':
			return _react2.default.createElement(_StatePage2.default, props);
		case 'frequency':
			return _react2.default.createElement(_FrequencyPage2.default, props);
		default:
			return _react2.default.createElement(
				'div',
				null,
				'error'
			);
	}
}
function Menu(props) {
	var onClick = function onClick(e) {
		props.actions.PageChange(e.target.dataset.url);
	};
	var items = [{ text: "狀態", url: "state" }, { text: "詞頻分析", url: "frequency" }];
	if (props.state.database.length === 0) {
		return _react2.default.createElement(
			'ul',
			{ className: 'disable' },
			items.map(function (item, i) {
				return _react2.default.createElement(
					'li',
					{ key: i },
					item.text
				);
			})
		);
	}
	return _react2.default.createElement(
		'ul',
		{ className: 'enable' },
		items.map(function (item, i) {
			return _react2.default.createElement(
				'li',
				{ key: i,
					className: item.url === props.state.url ? 'active' : '',
					onClick: item.url === props.state.url ? '' : onClick,
					'data-url': item.url
				},
				item.text
			);
		})
	);
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
			'\u9078\u64C7\u6587\u672C\u6240\u5728\u8CC7\u6599\u593E'
		),
		_react2.default.createElement('input', { type: 'file',
			id: 'directory-input',
			ref: function ref(d) {
				if (d) {
					d.webkitdirectory = true;
				}
			},
			onChange: props.actions.InputDirChange
		})
	);
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _TextEntity = __webpack_require__(11);

var _TextEntity2 = _interopRequireDefault(_TextEntity);

var _TagDict = __webpack_require__(10);

var _TagDict2 = _interopRequireDefault(_TagDict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AppStore(target, action) {
	(function () {
		switch (action.type) {
			case 'InputDirChange':
				target.setState({ database: [] });
				var files = action.payload.target.files;
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
						read_file(f, target);
						counter += 1;
						deep = Math.max(deep, f.webkitRelativePath.split("/").length - 2);
						f.webkitRelativePath.split("/").slice(1, -1).map(function (item, i) {
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

				target.setState({
					directoryMetadata: {
						name: files[0].webkitRelativePath.split("/")[0],
						textCount: counter,
						deep: deep,
						tags: tags
					}
				});
				break;
			default:
				break;
		}
	})();

	;
}
exports.default = AppStore;


function read_file(file, target) {
	var reader = new FileReader();
	reader.onload = function (evt) {
		var text = new _TextEntity2.default(file, evt.target.result);
		target.setState({ database: target.state.database.concat([text]) });
	};
	reader.readAsText(file);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function FrequencyStore(target, action) {
	var query = target.state.query;
	var result = target.state.result;

	var _ret = function () {
		switch (action.type) {
			case 'FrequencyTyping':
				query.typing = action.payload;
				target.setState({ query: query });
				return {
					v: void 0
				};
			case 'FrequencyRemove':
				var s = action.payload;
				query.done.delete(s);
				delete result.totals[s];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = result.drawData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var item = _step.value;

						item.datasets = item.datasets.filter(function (row, i) {
							if (row.myID !== s) {
								return false;
							}
							return true;
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

				result.csvBlob = toCSV(result.totals, result.drawData);
				target.setState({
					query: query,
					result: result
				});
				return {
					v: void 0
				};
			case 'FrequencySubmit':
				var term = query.typing.trim();
				if (term.length === 0) {
					return {
						v: void 0
					};
				}
				var state = target.state,
				    drawData = result.drawData;
				var count_result = occurrencesCounter(state.database, term);
				query.typing = '';
				query.done.add(term);
				result.totals[term] = count_result.counter;
				count_result.result.map(function (row, i) {
					var tags = state.directoryMetadata.tags[i];
					if (!(i in drawData)) {
						drawData.push({
							labels: tags.keys(),
							datasets: []
						});
					}
					Array.prototype.push.apply(drawData[i].datasets, getChartDataObject(row, tags, term));
				});
				result.csvBlob = toCSV(result.totals, drawData);
				target.setState({
					query: query,
					result: result
				});
				return {
					v: void 0
				};
			default:
				return {
					v: void 0
				};
		}
	}();

	if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
}
exports.default = FrequencyStore;


function toCSV(totals, drawData) {
	var my_array = [['詞彙', '出現次數']];
	for (var key in totals) {
		my_array.push([key, totals[key].toString()]);
	}
	my_array.push([]);
	drawData.forEach(function (chart, i) {
		my_array.push(['第' + (i + 1).toString() + '層']);
		my_array.push(['詞彙'].concat(chart.labels.slice()));
		chart.datasets.forEach(function (item, j) {
			if (item.type !== 'bar') {
				return;
			}
			my_array.push([item.myID].concat(item.data.map(function (num) {
				return num.toString();
			})));
		});
		my_array.push([]);
	});
	return getCsvBlob(my_array);
}

function getCsvBlob(my_array) {
	var csvContent = '\uFEFF';
	my_array.forEach(function (infoArray, index) {
		infoArray.forEach(function (a, i) {
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

function occurrencesCounter(texts, string) {
	var result = [],
	    counter = 0;
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		var _loop = function _loop() {
			var text = _step2.value;

			var c = text.occurrences(string);
			text.metadata.tags.map(function (tag, i) {
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

		for (var _iterator2 = texts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			_loop();
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

	return {
		counter: counter,
		result: result
	};
}
var colors = [[255, 59, 48], [90, 200, 250], [255, 149, 0], [0, 122, 255], [255, 204, 0], [88, 86, 214], [76, 217, 100], [255, 45, 85], [0, 0, 0], [158, 158, 158]];
function getChartDataObject(source, tags, string) {
	var data1 = tags.keys().map(function (t) {
		return source[t];
	});
	var data2 = tags.keys().map(function (t) {
		return Math.round(source[t] / tags.value(t) * 100) / 100;
	});
	var color = colors[0].map(function (x) {
		return x.toString();
	}).join(',');
	colors.push(colors.shift());
	return [{
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
	}, {
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
	}];
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _States = __webpack_require__(1);

var _States2 = _interopRequireDefault(_States);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RouterStore(target, action) {
	switch (action.type) {
		case 'PageChange':
			target.setState(_States2.default.PageState(action.payload));
			break;
		default:
			break;
	}
}
exports.default = RouterStore;

/***/ }),
/* 10 */
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
	}]);

	return TagDict;
}();

exports.default = TagDict;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
	}]);

	return TextEntity;
}();

exports.default = TextEntity;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FrequencyPage(props) {
	var result = [];
	if (props.state.query.done.size > 0) {
		result.push(_react2.default.createElement(ResultArea, { totals: props.state.result.totals }));
		if (props.state.directoryMetadata.tags.length > 0) {
			result.push(_react2.default.createElement(
				'h2',
				null,
				'\u5206\u5C64\u7D71\u8A08'
			));
			props.state.result.drawData.map(function (data, i) {
				result.push(_react2.default.createElement(ChartElement, { key: i,
					deep: (i + 1).toString(),
					data: data,
					redraw: props.state.result.redraw
				}));
			});
			result.push(_react2.default.createElement(
				'p',
				null,
				'\u7D2F\u8A08(\u9577\u689D\u5716) = \u51FA\u73FE\u6B21\u6578'
			));
			result.push(_react2.default.createElement(
				'p',
				null,
				'\u6BD4\u7387(\u6298\u7DDA\u5716) = \u51FA\u73FE\u6B21\u6578 / \u8A72\u5206\u985E\u6587\u7AE0\u7E3D\u6578'
			));
			result.push(_react2.default.createElement(
				'a',
				{
					download: 'test.csv',
					href: URL.createObjectURL(props.state.result.csvBlob)
				},
				'\u4E0B\u8F09'
			));
		}
	}
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(InputArea, props),
		_react2.default.createElement(InputedArea, props),
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
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h2',
			null,
			'\u8A5E\u983B\u7D71\u8A08'
		),
		_react2.default.createElement(_reactChartjs.Bar, {
			data: data,
			options: options
		})
	);
}
function ChartElement(props) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h3',
			null,
			"第" + props.deep + "層"
		),
		_react2.default.createElement(_reactChartjs.Bar, {
			data: props.data,
			options: chart_options
		})
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StatePage(props) {
	var Reset = function Reset(e) {
		var f = confirm('確定要重設輸入資料？');
		if (f !== true) {
			return;
		}
		location.reload();
	};
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(DirectoryMetadata, {
			metadata: props.state.directoryMetadata,
			count: props.state.database.length
		}),
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
exports.default = StatePage;

function DirectoryMetadata(props) {
	return _react2.default.createElement(
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
	);
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = reactChartjs2;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(5);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _States = __webpack_require__(1);

var _States2 = _interopRequireDefault(_States);

var _AppView = __webpack_require__(4);

var _AppView2 = _interopRequireDefault(_AppView);

var _Dispatcher = __webpack_require__(3);

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _Action = __webpack_require__(2);

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