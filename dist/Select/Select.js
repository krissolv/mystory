"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../../main.scss");

const _excluded = ["label", "options"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Super UI component for user interaction
 */
const Select = _ref => {
  let {
    label,
    options
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("label", null, label, /*#__PURE__*/_react.default.createElement("select", props, options.map((option, index) => /*#__PURE__*/_react.default.createElement("option", {
    value: option.value
  }, option.label))));
};

exports.Select = Select;
Select.propTypes = {
  /**
   * Array of select options
   */
  options: _propTypes.default.array,

  /**
   * Label displayed above select
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Is this a multiple type select?
   */
  multiple: _propTypes.default.bool
};
Select.defaultProps = {
  multiple: false
};