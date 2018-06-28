'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _identifiers = require('../identifiers.js');

var _reactCssThemrLegacy = require('react-css-themr-legacy');

var _Input = require('./Input.js');

var _FontIcon = require('../font_icon/FontIcon.js');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = (0, _Input.inputFactory)(_FontIcon2.default);
var ThemedInput = (0, _reactCssThemrLegacy.themr)(_identifiers.INPUT, _theme2.default, { withRef: true })(Input);

exports.default = ThemedInput;
exports.Input = ThemedInput;