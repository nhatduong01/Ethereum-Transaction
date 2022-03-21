//https://eth-rinkeby.alchemyapi.io/v2/Kgj-vGt1jorC06_NdaMriRgYi6-flIEO
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Kgj-vGt1jorC06_NdaMriRgYi6-flIEO",
      accounts: [
        "46236c7a6b5b6220d402110cfb7bb39d2df30e2dc40c1c1994249e89f34c0fd5",
      ],
    },
  },
};
