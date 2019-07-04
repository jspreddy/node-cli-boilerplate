#!/usr/bin/env node
"use strict";var _commander = _interopRequireDefault(require("commander"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_commander.default.
version('0.1.0').
option('-p, --peppers', 'Add peppers').
command('program <name>', 'This is a sub program for the loki tool.').
command('disguise <name>', 'Another sub command.').
parse(process.argv);

if (_commander.default.peppers) {
  console.log('peppers');
}