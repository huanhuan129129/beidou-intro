const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (app, defaultConfig, dev) => {
  // 添加 .styl 文件支持
  defaultConfig.module.rules.push({
    test: /\.styl$/,
    loader: ExtractTextPlugin.extract({
      fallback: require.resolve('style-loader'),
      use: ['css-loader', 'stylus-loader'].map(require.resolve),
    })
  });
  defaultConfigs.plugins.pus(
    new ExtractTextPlugin('[name].css')
  );
  return defaultConfig;
};
