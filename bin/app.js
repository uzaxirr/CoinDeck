#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

clear(); //clears the terminal

//display app title
console.log(chalk.magentaBright(
figlet.textSync('CoinDeck', { horizontalLayout: 'full' })));

//show welcome message
console.log("Welcome to CoinDeck.\nKeep a track of your favourite Crypto from Your CLI "
    + chalk.yellow("https://lo-victoria.com")+ " Star The Repo ^^");


// console.log("Hello from app.js");

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- https://nomics.com/')
    .command('check', 'Check Current Coin Price Info')
    .parse(process.argv);