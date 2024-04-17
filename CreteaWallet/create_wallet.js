const ethers = require('ethers')
const fs = require('fs');

function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    return [wallet.address,wallet.privateKey,wallet.mnemonic.phrase]
}

let wallet_list = []
for (let i = 0; i < 20; i++) {
    const wallet = createWallet()
    wallet_list.push({
        "address":wallet[0],
        "privateKey":wallet[1],
        "mnemonic":wallet[2]
    })
}
fs.writeFile('data.json', JSON.stringify(wallet_list), (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Data written to file');
    }
});