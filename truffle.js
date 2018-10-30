

var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "xxxx";
var mnemonic = "xxxx";

var s = new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/v3/xxxxx');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {

    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "5771" // Match any network id
    },

    ropsten: {

       provider: function() {
              return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/v3/xxxxx')
       },
       network_id: 3,
       gas: 2000000  

   },




  }
};
