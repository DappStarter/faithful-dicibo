require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain minor gloom enrich orange gas'; 
let testAccounts = [
"0xe0e11190bd921f04683c8026d2a99c5e1215090f630faa9523c63507f777b3e7",
"0xfcbcdedcc0c8c8e88ed44d17c560a723a9e6b246cf47f4cb0bf2cba0ad787c9a",
"0x931d4fc6c2c31a4174b04b382d06c9053627852a4d921651c376e482d83db57d",
"0x8e536df9795910091d7a5918eb354a4d47108e3d2a00e19193fa3f1fb99762da",
"0x6e38053ed8b73b1a9b5e9a5ec19fe6dee243e7c259b720888cf382bc259e550c",
"0x1fc380305d186bbe378c271b1970a9944bfbc682a9db7868d7b79dc0a586ad23",
"0x87863e56d7cbb2126f2f56872afe200ffb7cb14ca06ba61d0f854664b61a8bce",
"0x1f30e2964325dfbc8ad454a0b70aa8e9800c8549960ef6d2e42571ad787862ef",
"0x0a72fc9daefc9496a70dbd9f27ebfb7dd64de3d57b5d689fc81c23d2b20738c9",
"0x5c199e5087a2e6c222b518c3a8b9fdd567271d2d2fe29cdc6cd2c9364ffc662a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

