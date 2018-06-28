'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = undefined;

var _reactCssThemrLegacy = require('react-css-themr-legacy');

var _identifiers = require('../identifiers.js');

var _Overlay = require('./Overlay.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedOverlay = (0, _reactCssThemrLegacy.themr)(_identifiers.OVERLAY, _theme2.default)(_Overlay.Overlay);
exports.default = ThemedOverlay;
exports.Overlay = ThemedOverlay;