"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { id: "title", className: "col-sm-12" },
          React.createElement(
            "h1",
            null,
            this.props.title
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Step = function (_React$Component2) {
  _inherits(Step, _React$Component2);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
  }

  _createClass(Step, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row step" },
        React.createElement(
          "div",
          { className: "col-sm-12" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-sm-1" },
              React.createElement(
                "h3",
                null,
                this.props.letter
              )
            ),
            React.createElement(
              "div",
              { className: "col-sm-11" },
              React.createElement(
                "h3",
                null,
                this.props.description
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement("div", { className: "col-sm-2 block" }),
            React.createElement("div", { className: "col-sm-2 block" }),
            React.createElement("div", { className: "col-sm-2 block" }),
            React.createElement("div", { className: "col-sm-2 block" }),
            React.createElement("div", { className: "col-sm-2 block" }),
            React.createElement("div", { className: "col-sm-2 block" })
          )
        )
      );
    }
  }]);

  return Step;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(Header, { title: "SITBACK" }),
        React.createElement(Step, { letter: "S", description: "Stop" }),
        React.createElement(Step, { letter: "I", description: "Increase volume" }),
        React.createElement(Step, { letter: "T", description: "Touch" }),
        React.createElement(Step, { letter: "B", description: "Binky" }),
        React.createElement(Step, { letter: "A", description: "Add movement" }),
        React.createElement(Step, { letter: "C", description: "Cuddle" }),
        React.createElement(Step, { letter: "K", description: "Kk, give up!" })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
