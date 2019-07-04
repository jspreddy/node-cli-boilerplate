#!/usr/bin/env node
import program from 'commander';

program
  .version('0.1.0')
  .option('-p, --peppers', 'Add peppers')
  .command('program <name>', 'This is a sub program for the loki tool.')
  .command('disguise <name>', 'Another sub command.')
  .parse(process.argv);

if (program.peppers) {
  console.log('peppers');
}
