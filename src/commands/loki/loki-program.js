#!/usr/bin/env node

import program from 'commander';
import _ from 'lodash';

program
  .version('0.1.0')
  .usage('<name>')
  .arguments('<name>')
  .action((name) => {
    console.log(_.repeat('-', 20));
    console.log(`From inside the subprogram "loki-program": Your input was: ${name}`);
    console.log(_.repeat('-', 20));
  })
  .parse(process.argv);
