const HDWalletProvider = require('truffle-hdwallet-provider');

const privateKey = "";
const bscScanAPIKey = "";
module.exports = {
    contracts_directory: "./contracts",
    compilers: {
        solc: {
            version: "0.7.5",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200   // Optimize for how many times you intend to run the code
                }
                //,evmVersion: <string> // Default: "istanbul"
            },
        }
    },
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        testnet: {
            provider: () => new HDWalletProvider(privateKey, `https://data-seed-prebsc-2-s1.binance.org:8545`),
            network_id: 97,
            confirmations: 3,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        mainnet: {
            provider: () => new HDWalletProvider(privateKey, `https://bsc-dataseed.binance.org/`), //       http://35.72.193.66:8545
            network_id: 56,
            // skipDryRun: true,
            timeoutBlocks: 200,
            gasPrice: 5100000000, // 5.1 gwei, 
        }
    },
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        bscscan: bscScanAPIKey,
      }
};
