const program = require('commander');
const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');
const chk = require('../commands/check.js')

program
    .command('price')
    .description('Check price Of Coin')
    .option(
        '--coin <type>',
        'Add Specific Coin Type in CSV Format',
        'BTC, ETH, XRP'
    )
    .option(
        '--curr <currency>',
        'Specify Your Preffered Currency',
        'USD'
    )
    .action(cmd => chk.price(cmd));

program.parse(process.argv);