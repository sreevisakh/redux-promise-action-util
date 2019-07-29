"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PromiseAction =
/*#__PURE__*/
function () {
  function PromiseAction(name) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, PromiseAction);

    this.prefix = prefix !== null ? "".concat(prefix, "/") : '';
    this.name = name;
    this.PENDING = "".concat(this.prefix).concat(name, "_PENDING");
    this.FULFILLED = "".concat(this.prefix).concat(name, "_FULFILLED");
    this.REJECTED = "".concat(this.prefix).concat(name, "_REJECTED");
    return "".concat(this.prefix).concat(this.name);
  }

  _createClass(PromiseAction, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.prefix).concat(this.name);
    }
  }]);

  return PromiseAction;
}();

exports["default"] = PromiseAction;

