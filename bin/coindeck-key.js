const program = require('commander');
const key = require('../commands/key')

program
    .command('set')
    .description('Set An API Key -- https://p.nomics.com/cryptocurrency-bitcoin-api')
    .action(key.set);

program
    .command('view')
    .description('View API Key')
    .action(key.view);

program
    .command('delete')
    .description('Deleted API Key')
    .action(key.delete);

program.parse(process.argv);