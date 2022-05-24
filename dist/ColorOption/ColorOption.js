"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorOption = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./ColorOption.css");

const _excluded = ["color", "title", "selected"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Color option in color picker component
 */
const ColorOption = _ref => {
  let {
    color,
    title,
    selected
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const mode = selected ? "color-option--selected" : "";
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ["color-option", mode].join(" ")
  }, props, {
    onClick: () => props.onSelect(color)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "color-option__color",
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "color-option__title"
  }, "Color: ", title));
};

exports.ColorOption = ColorOption;
ColorOption.propTypes = {
  /**
   * The hexadecimal color value
   */
  color: _propTypes.default.string,

  /**
   * The title of the color
   */
  title: _propTypes.default.string,

  /**
   * Color option is selected
   */
  selected: _propTypes.default.bool
};
ColorOption.defaultProps = {
  color: '#FFFFFF',
  title: 'White',
  selected: false
};