'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = undefined;

var _reactCssThemrLegacy = require('react-css-themr-legacy');

var _identifiers = require('../identifiers.js');

var _progress_bar = require('../progress_bar');

var _input = require('../input');

var _Slider = require('./Slider.js');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemedSlider = (0, _reactCssThemrLegacy.themr)(_identifiers.SLIDER, _theme2.default)((0, _Slider.sliderFactory)(_progress_bar.ProgressBar, _input.Input));
exports.default = ThemedSlider;
exports.Slider = ThemedSlider;