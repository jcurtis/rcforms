'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {itemShape} from './item-shape'
// import ControlWrapper from './control-wrapper'

var TextInputControl = function (_Component) {
  _inherits(TextInputControl, _Component);

  function TextInputControl(props) {
    _classCallCheck(this, TextInputControl);

    var _this = _possibleConstructorReturn(this, (TextInputControl.__proto__ || Object.getPrototypeOf(TextInputControl)).call(this, props));

    _this.state = {
      value: _this.props.initialValue || ''
    };
    _this._handleChange = _this._handleChange.bind(_this);
    _this._handleBlur = _this._handleBlur.bind(_this);
    _this.isValid = _this.isValid.bind(_this);
    return _this;
  }

  _createClass(TextInputControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.context.onChange) {
        this.context.onChange({
          name: this.props.name,
          value: this.state.value,
          valid: this.isValid(this.state.value)
        }, true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return (
        // <ControlWrapper {...this.props} errorMessage={this.state.errorMessage}>
        _react2.default.createElement('input', {
          name: this.props.name,
          type: 'text',
          value: this.state.value,
          readOnly: this.props.readOnly,
          onChange: this._handleChange,
          onBlur: this._handleBlur,
          className: 'form-control'
        })
        // </ControlWrapper>

      );
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(evt) {
      this.setState({ value: evt.target.value });
      if (this.context.onChange) {
        this.context.onChange({
          name: this.props.name,
          value: evt.target.value,
          valid: this.isValid(evt.target.value)
        });
      }
    }
  }, {
    key: '_handleBlur',
    value: function _handleBlur() {
      if (this.props.validation) {
        var _props$validation = this.props.validation(this.state.value, this.props.label),
            valid = _props$validation.valid,
            message = _props$validation.message;

        if (!valid && message) {
          this.setState({ errorMessage: message });
        } else {
          this.setState({ errorMessage: null });
        }
      }
    }
  }, {
    key: 'isValid',
    value: function isValid(value) {
      if (this.props.validation) {
        var _props$validation2 = this.props.validation(value, this.props.label),
            valid = _props$validation2.valid;

        return valid;
      }
      return true;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return {
        name: this.props.name,
        value: this.state.value
      };
    }
  }]);

  return TextInputControl;
}(_react.Component);

// TextInputControl.propTypes = itemShape

TextInputControl.contextTypes = {
  onChange: _react.PropTypes.func
};

exports.default = TextInputControl;