import _ from 'lodash';
import program from 'commander';

program
  .version('0.1.0')
  .option('-p, --peppers', 'Add peppers')
  .parse(process.argv);

if (program.peppers) {
  _.repeat('-', 20);
  console.log('peppers');
}
