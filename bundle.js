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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
			done: new Set()
		};
	}
};
var resultMap = {
	frequency: function frequency() {
		return {
			totals: {},
			drawData: []
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function getActions(dispatcher) {
	return {
		PageChange: function PageChange(url) {
			dispatcher.dispatch({
				type: 'PageChange',
				payload: url
			});
		},
		InputDirChange: function InputDirChange(e) {
			dispatcher.dispatch({
				type: 'InputDirChange',
				payload: e
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

var _AppStore = __webpack_require__(8);

var _AppStore2 = _interopRequireDefault(_AppStore);

var _RouterStore = __webpack_require__(10);

var _RouterStore2 = _interopRequireDefault(_RouterStore);

var _FrequencyStore = __webpack_require__(9);

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

					if (!(command.type in store)) {
						continue;
					}
					store[command.type](command.payload, this.component.state, this.component);
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

var _StatePage = __webpack_require__(14);

var _StatePage2 = _interopRequireDefault(_StatePage);

var _FrequencyPage = __webpack_require__(13);

var _FrequencyPage2 = _interopRequireDefault(_FrequencyPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AppView(props) {
	if (props.state.database.length === 0) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(DirectoryInput, { actions: props.actions }),
			_react2.default.createElement(
				'nav',
				null,
				_react2.default.createElement(Menu, props)
			)
		);
	}
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'nav',
			null,
			_react2.default.createElement(Menu, props)
		),
		_react2.default.createElement(MainArea, props)
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
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _TextEntity = __webpack_require__(12);

var _TextEntity2 = _interopRequireDefault(_TextEntity);

var _TagDict = __webpack_require__(11);

var _TagDict2 = _interopRequireDefault(_TagDict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppStore = {
	InputDirChange: function InputDirChange(payload, state, target) {
		target.setState({ database: [] });
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
				read_file(f, target);
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

		target.setState({
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


function read_file(file, target) {
	var reader = new FileReader();
	reader.onload = function (evt) {
		var text = new _TextEntity2.default(file, evt.target.result);
		target.setState({ database: target.state.database.concat([text]) });
	};
	reader.readAsText(file);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mixin = __webpack_require__(24);

var _mixin2 = _interopRequireDefault(_mixin);

var _colorSet = __webpack_require__(23);

var _colorSet2 = _interopRequireDefault(_colorSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FrequencyStore = {
	FrequencyTyping: function FrequencyTyping(payload, state, target) {
		var query = state.query;
		query.typing = payload;
		target.setState({ query: query });
	},
	FrequencyRemove: function FrequencyRemove(payload, state, target) {
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
		target.setState({
			query: query,
			result: result
		});
	},
	FrequencySubmit: function FrequencySubmit(payload, state, target) {
		var query = state.query,
		    result = state.result;
		var term = query.typing.trim();
		if (term.length === 0) {
			return;
		}
		var drawData = result.drawData;
		var count_result = occurrencesCounter(state.database, term);
		query.typing = '';
		query.done.add(term);
		result.totals[term] = count_result.counter;
		count_result.result.forEach(function (row, i) {
			var tag_dict = state.directoryMetadata.tags[i];
			if (!(i in drawData)) {
				drawData.push({
					labels: tag_dict.keys(),
					datasets: [],
					csv: null,
					colorController: new _colorSet2.default(false)
				});
			}
			var obj = drawData[i];
			Array.prototype.push.apply(obj.datasets, getChartDataRow(tag_dict, row, term, obj.colorController));
		});
		drawData.forEach(function (item, i) {
			item.csv = drawDataToCSV(item, state.directoryMetadata.tags[i]);
		});
		target.setState({
			query: query,
			result: result
		});
	}
};
exports.default = FrequencyStore;


function drawDataToCSV(chartData, tagData) {
	var my_array = [[''].concat(chartData.labels)];
	chartData.datasets.forEach(function (row) {
		if (row.type !== 'bar') {
			return;
		}
		my_array.push([row.myID].concat(row.data.map(function (num) {
			return num.toString();
		})));
	});
	my_array.push(['文章總計'].concat(chartData.labels.map(function (item) {
		return tagData.value(item).toString();
	})));
	return _mixin2.default.getCsvBlob(my_array);
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
			text.metadata.tags.forEach(function (tag, i) {
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
function getChartDataRow(tag_dict, source, string, colors) {
	var data1 = tag_dict.keys().map(function (t) {
		return source[t];
	});
	var data2 = tag_dict.keys().map(function (t) {
		return Math.round(source[t] / tag_dict.value(t) * 100) / 100;
	});
	var color = colors.getColor_array().map(function (x) {
		return x.toString();
	}).join(',');
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _States = __webpack_require__(1);

var _States2 = _interopRequireDefault(_States);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterStore = {
	PageChange: function PageChange(payload, state, target) {
		target.setState(_States2.default.PageState(payload));
	}
};
exports.default = RouterStore;

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = __webpack_require__(15);

var _exportComponent = __webpack_require__(25);

var _exportComponent2 = _interopRequireDefault(_exportComponent);

var _mixin = __webpack_require__(24);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FrequencyPage(props) {
	var state = props.state;
	if (state.query.done.size === 0) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(InputArea, props)
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
	var blob_obj = _mixin2.default.getCsvBlob([[''].concat(keys), ['數量'].concat(dataset.map(function (value) {
		return value.toString();
	}))]);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = __webpack_require__(15);

var _colorSet = __webpack_require__(23);

var _colorSet2 = _interopRequireDefault(_colorSet);

var _exportComponent = __webpack_require__(25);

var _exportComponent2 = _interopRequireDefault(_exportComponent);

var _mixin = __webpack_require__(24);

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
	var blob_obj = _mixin2.default.getCsvBlob([[''].concat(keys), ['數量'].concat(data.datasets[0].data.map(function (value) {
		return value.toString();
	}))]);
	var my_array = [];
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
			name: '詞頻統計.csv',
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
			'p',
			null,
			_react2.default.createElement(
				'button',
				{
					className: 'warning',
					onClick: Reset
				},
				'Reset'
			)
		)
	);
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = reactChartjs2;

/***/ }),
/* 16 */
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

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
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
/* 24 */
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
	}]);

	return MixinMethods;
}();

exports.default = MixinMethods;

/***/ }),
/* 25 */
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

/***/ })
/******/ ]);