'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = undefined;

var _reactCssThemrLegacy = require('react-css-themr-legacy');

var _identifiers = require('../identifiers.js');

var _Dropdown = require('./Dropdown.js');

var _input = require('../input');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = (0, _Dropdown.dropdownFactory)(_input.Input);
var ThemedDropdown = (0, _reactCssThemrLegacy.themr)(_identifiers.DROPDOWN, _theme2.default)(Dropdown);

exports.default = ThemedDropdown;
exports.Dropdown = ThemedDropdown;