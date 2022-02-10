require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space story rate night mistake install muscle army gaze'; 
let testAccounts = [
"0x66a545461727c61f1b113b8918c9ae056cd2dc92adc5297832bc970980789258",
"0xf8b5945eb581c9c2ee9297f6b1fb4d09a6ae74cf773ba02b2858a9f2b0e616f9",
"0x787a829a03bcbd51edeb7fadeef32ad22d6fcfc12fc20f0c50b6e1f0e3050029",
"0x749218c7ecaccabbd9dd5d9f37a3d0ed3fc98073f65f3b2665657d6896411a66",
"0x65652fd96c3920ef4e581ff05106b6ad912168d72e5bcf64aba7d224fd93531f",
"0xbcda924d08df5a16c18aa9a089ddbaab0868d98bc2fb1072baa5694c2e703ee3",
"0xee88a387b2dc3ab54eacb89b513770d340a0347a60611bb943198d519c1afe75",
"0xda552662673231ee44f7ac9f649607d2274eb592387fd07fb83b6f32486d0ee6",
"0xee771ab88e0842a048cf8ecb9a841b52c207757e8f77cc5fe1cbe5beed259e57",
"0xc1593e0b5ba0bd36ffcf2e7a5f234b1d932b00ad70caa61ff8b00295a4225774"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


