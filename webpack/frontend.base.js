const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const configImage = require('./config/image');
const { ASSETS, SRC_PATH, ASSETS_PATH } = require('./config/path');

module.exports = {
  context: SRC_PATH,
  entry: {
    common: './index.js',
  },
  output: {
    path: ASSETS_PATH,
    filename: 'common-[hash:7].js',
    publicPath: `/${ASSETS}/`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      require('./loaders/css')(ExtractTextPlugin),
      require('./loaders/scss')(ExtractTextPlugin),
      require('./loaders/fonts'),
      require('./loaders/img')(configImage),
      require('./loaders/img-static')(configImage),
      require('./loaders/js'),
      require('./loaders/jsx'),
    ],
  },
  plugins: [
    new ManifestPlugin(),
    new ExtractTextPlugin({
      filename: 'style-[hash:7].css',
      allChunks: true,
    }),
  ],
};
