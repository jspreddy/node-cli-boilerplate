#!/usr/bin/env node
"use strict";
var _commander = _interopRequireDefault(require("commander"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_commander.default.
version('0.1.0').
usage('<name>').
arguments('<name>').
action(name => {
  console.log(`Your input was: ${name}`);
}).
parse(process.argv);