#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');
const emoji = require('node-emoji')
clear(); //clears the terminal

//display app title
console.log(chalk.magentaBright(
figlet.textSync('CoinDeck', { horizontalLayout: 'full' })));

//show welcome message
console.log(chalk.cyan("Welcome to CoinDeck.\n")+chalk.blue("Keep a track of your favourite Crypto from Your CLI \n")
    +chalk.bold.green("Drop a ")+ emoji.get('star') +chalk.bold.green("  at The Repo ")+ chalk.yellow("https://github.com/uzair-ali10/CoinDeck \n"));


// console.log("Hello from app.js");

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- https://nomics.com/')
    .command('check', 'Check Current Coin Price Info')
    .parse(process.argv);