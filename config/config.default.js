// config/config.default.js
const path = require('path');
module.exports = {
  keys: 'test',
  isomorphic: {
    universal: {
      assets: ['.styl'],
    }
  },
  router: {
    entry: 'index',
  },
  webpack: {
    custom: {
      configPath: path.join(__dirname, './webpack.js'),
    },
  },
};
