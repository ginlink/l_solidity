import "@nomiclabs/hardhat-waffle"
import "hardhat-gas-reporter"

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // solidity: "0.7.3",
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
}
