require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/pDNm8KSE-tWr6zCG49fmPkIYjJZViJn_',
      accounts: ['46957d3448046a0386f8c40f6e90b65bd9b3fc15c0422239af4e06c54cc088a0'],
    },
  },
};