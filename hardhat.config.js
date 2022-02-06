require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const { PRIVATE_KEY, POLYGON_URL } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.0" }, { version: "0.4.24" }, { version: "0.6.6" }, { version: "0.7.0" }
    ]
  },
  networks: {
    // rinkeby: {
    //   url: API_URL,
    //   accounts: [PRIVATE_KEY]
    // },
    //31337: {
      //name: 'localhost',
      //keyHash: '0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4',
      //fee: '1000000000000000' //0.0001 Link in Wei
    //},
    mumbai: {
      url: POLYGON_URL,
      accounts: [PRIVATE_KEY],
      linkToken: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
      vrfCoordinator: '0x8C7382F9D8f56b33781fE506E897a4F1e2d17255',
      keyHash: '0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4',
      fee: '100000000000000' //0.0001 Link in Wei
    },
  },
  // },
  // etherscan: {
  //   apiKey: POLYGONSCAN_KEY
  // }
};
