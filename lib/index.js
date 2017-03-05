'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _textInput = require('./inputs/text-input');

var _textInput2 = _interopRequireDefault(_textInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


// import TextAreaControl from './text-area-control';
// import SubmitButton from '../../submit-button';

// Valid Input Controls
exports.TextInput = _textInput2.default;

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      isSubmitting: false,
      values: {},
      valid: true
    };
    _this.setupValues = {};
    _this._handleSubmit = _this._handleSubmit.bind(_this);
    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        onChange: this._onChange
      };
    }
  }, {
    key: 'render',
    value: function render() {
      // let submit;
      // if (this.props.onSubmit) {
      //   submit = (
      //     <div className="row">
      //       <SubmitButton
      //         onClick={this._handleSubmit}
      //         processing={this.state.isSubmitting}
      //         label={_t('Save')}
      //         altLabel={_t('Saving')}
      //         style="primary"
      //         disabled={this.props.disabled || !this.state.valid}
      //       />
      //     </div>
      //   );
      // }
      return _react2.default.createElement(
        'form',
        { className: 'form', role: 'form', onSubmit: this.props.onSubmit, noValidate: true },
        this.props.children
      );
    }
  }, {
    key: '_onChange',
    value: function _onChange(valueObj, setup) {
      var validValue = true;
      if (typeof valueObj.valid === 'boolean') {
        validValue = valueObj.valid;
      }
      var values = setup ? this.setupValues : this.state.values;
      values = _extends({}, values, _defineProperty({}, valueObj.name, {
        value: valueObj.value,
        valid: validValue
      }));
      if (setup) {
        this.setupValues = values;
      }

      var newState = {
        values: values,
        valid: (0, _lodash.every)(values, function (val) {
          return val.valid;
        })
      };
      this.setState(newState);
      if (this.props.onChange) {
        this.props.onChange(newState);
      }
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit(evt) {
      var _this2 = this;

      evt.preventDefault();
      if (this.state.valid) {
        this.setState({ isSubmitting: true });
        this.props.onSubmit(this.getValues(), function () {
          _this2.setState({ isSubmitting: false });
        });
      }
    }
  }, {
    key: 'getValues',
    value: function getValues() {
      return (0, _lodash.reduce)(this.state.values, function (values, valueObj, name) {
        return _extends({}, values, _defineProperty({}, name, valueObj.value));
      }, {});
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  onSubmit: _react.PropTypes.func, // Requires a callback for spinner
  children: _react.PropTypes.any.isRequired,
  onChange: _react.PropTypes.func,
  disabled: _react.PropTypes.bool
};

Form.childContextTypes = {
  onChange: _react.PropTypes.func
};

exports.default = Form;