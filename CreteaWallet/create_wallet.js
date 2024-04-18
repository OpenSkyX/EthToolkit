const ethers = require('ethers')
const fs = require('fs');

function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    return [wallet.address,wallet.privateKey,wallet.mnemonic.phrase]
}
function extracted(wallet) {
    fs.writeFile('data.json', JSON.stringify(wallet), (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Data written to file');
        }
    });
}

function batch() {
    let wallet_list_batch = []
    for (let i = 0; i < 20; i++) {
        const wallet = createWallet()
        wallet_list_batch.push({
            "address":wallet[0],
            "privateKey":wallet[1],
            "mnemonic":wallet[2]
        })
    }
    extracted(wallet_list_batch)
}

function segmentAddress(difficult) {
    let wallet_list = []
        while (true){
            const wallet = createWallet()
            if (wallet[0].startsWith(difficult)){
                wallet_list.push({
                    "address":wallet[0],
                    "privateKey":wallet[1],
                    "mnemonic":wallet[2]
                })
                extracted(wallet_list);
                return
            }

        }

}

// batch()
segmentAddress("0x000")