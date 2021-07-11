const inquirer = require('inquirer');
const clr = require('colors');
const KeyManager = require('../lib/KeyManager.js');


 const key = {
     async set() {
         const keyManager = new KeyManager();
         const input = await inquirer.prompt([
             {
                 type: 'input',
                 name: 'key',
                 message: 'Enter API Key'.green + ' https://p.nomics.com/cryptocurrency-bitcoin-api :'
             }
         ]);
        const key = keyManager.SetKey(input.key);

        if(key)
        {
            console.log('API Key Set'.blue);
        }
     },

     view() {
         try {
            const keyManager = new KeyManager;
            const key = keyManager.getKey();
            console.log('Current API Key: '.green, key.yellow);
            return key;
         } catch (err) {
             console.error(err.message.red)
         }
     },

     delete() {
        try {
            const keyManager = new KeyManager;
            keyManager.deleteKey();
            console.log('deleted '.green);
            return;
         } catch (err) {
             console.error(err.message.red)
         }
     }
 };

 module.exports = key;