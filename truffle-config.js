/* eslint-disable no-undef */
const HDWalletProvider = require('@truffle/hdwallet-provider');
// const mnemonic = 'unhappy act surge accident wool because risk arrive cactus test demand barrel';

const testNetProvider = new HDWalletProvider({
  privateKeys: ['2649bb71f981f02ea41f89287b464a913cb8d43adea9f8894527542b592bdb1b'],
  providerOrUrl: 'https://data-seed-prebsc-2-s1.binance.org:8545/'
})

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      chainId: 1337,
      network_id: "5777", // Match any network id
    },
    testnet: {
      provider: () => testNetProvider,
      network_id: "97",
      gas: 5000000, // Adjust gas limit as needed
      gasPrice: 25000000000, // Adjust gas price as needed
      confirmations: 2, // Number of confirmations to wait for
      timeoutBlocks: 2000000000000, // Timeout for deployment
      skipDryRun: true,
      gasLimit: 6721975,
    }
  },
  compilers: {
    solc: {
      version: "0.8.0", // Change to the required Solidity version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};