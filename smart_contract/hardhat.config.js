// https://eth-goerli.g.alchemy.com/v2/LK3eGOhaYgStH1nzjANMHgD_3mOeRsO1

require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: "0.8.0",
    networks: {
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/LK3eGOhaYgStH1nzjANMHgD_3mOeRsO1",
            accounts : [ "234fc321a6972d08e5e32926e53655221e377d3f5f35041202bc466fc198ed91"],
        },
    },
};