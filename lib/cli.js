"use strict";var _lodash = _interopRequireDefault(require("lodash"));
var _commander = _interopRequireDefault(require("commander"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_commander.default.
version('0.1.0').
option('-p, --peppers', 'Add peppers').
parse(process.argv);

if (_commander.default.peppers) {
  _lodash.default.repeat('-', 20);
  console.log('peppers');
}