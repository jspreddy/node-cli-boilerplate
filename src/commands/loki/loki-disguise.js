#!/usr/bin/env node

import _ from 'lodash';
import program from 'commander';

program
  .version('0.1.0')
  .usage('<name>')
  .arguments('<name>')
  .action((name) => {
    console.log(_.repeat('-', 20));
    console.log(`Hi! My name is ${name}.`);
    console.log(_.repeat('-', 20));
  })
  .parse(process.argv);
