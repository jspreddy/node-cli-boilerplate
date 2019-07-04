#!/usr/bin/env node
"use strict";
var _commander = _interopRequireDefault(require("commander"));
var _lodash = _interopRequireDefault(require("lodash"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_commander.default.
version('0.1.0').
usage('<name>').
arguments('<name>').
action(name => {
  console.log(_lodash.default.repeat('-', 20));
  console.log(`From inside the subprogram "loki-program": Your input was: ${name}`);
  console.log(_lodash.default.repeat('-', 20));
}).
parse(process.argv);