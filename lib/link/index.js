'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = undefined;

var _reactCssThemrLegacy = require('react-css-themr-legacy');

var _identifiers = require('../identifiers.js');

var _Link = require('./Link.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedLink = (0, _reactCssThemrLegacy.themr)(_identifiers.LINK, _theme2.default)(_Link.Link);

exports.default = ThemedLink;
exports.Link = ThemedLink;