const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const base = require('./frontend.base');
const { FRONTEND_PATH } = require('./config/path');

module.exports = Object.assign({}, base, {
  devtool: 'inline-source-map',
  plugins: [
    ...base.plugins,
    new BrowserSyncPlugin({
      port: 3000,
      host: '0.0.0.0',
      proxy: 'avikey-yii2.avkdev.local',
      files: [`${FRONTEND_PATH}/**/*.php`],
    }),
  ],
});
