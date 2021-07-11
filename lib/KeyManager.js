const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
    constructor() {
        this.conf = new Configstore("pkg.name");
    }
    
    SetKey(key) {
        this.conf.set('apiKey', key);
        return key;
    }

    getKey() {
        const key = this.conf.get('apiKey');
        if(!key)
        {
            throw new Error('No API Key Found - Get a Key at https://p.nomics.com/cryptocurrency-bitcoin-api');
            console.log("Error")
        }
        return key;
    }

    deleteKey() {
        const key = this.conf.get('apikey');
        if(key)
        {
            throw new Error('No API Key Found - Get a Key at https://p.nomics.com/cryptocurrency-bitcoin-api');
        }
        this.conf.delete('apiKey');
        return;
    }

}

module.exports = KeyManager;
