require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/iwetRHcZ3yFariqL2nzqH6KGNeF1li00",
      accounts: [
        "fcb0d32698d5978c50715b6f0a4847a149b9ce4ffb146a5041b890f711587093",
      ],
    },
  },
};
