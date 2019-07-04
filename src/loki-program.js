#!/usr/bin/env node

import program from 'commander';

program
  .version('0.1.0')
  .usage('<name>')
  .arguments('<name>')
  .action((name) => {
    console.log(`Your input was: ${name}`);
  })
  .parse(process.argv);
