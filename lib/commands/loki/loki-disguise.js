#!/usr/bin/env node
"use strict";
var _lodash = _interopRequireDefault(require("lodash"));
var _commander = _interopRequireDefault(require("commander"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_commander.default.
version('0.1.0').
usage('<name>').
arguments('<name>').
action(name => {
  console.log(_lodash.default.repeat('-', 20));
  console.log(`Hi! My name is ${name}.`);
  console.log(_lodash.default.repeat('-', 20));
}).
parse(process.argv);