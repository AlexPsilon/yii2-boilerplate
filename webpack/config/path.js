const path = require('path');

const ASSETS = 'assets';
const ROOT_PATH = path.join(__dirname, '..', '..');
const SRC_PATH = path.join(ROOT_PATH, 'src', 'frontend');
const FRONTEND_PATH = path.join(ROOT_PATH, 'dist', 'frontend');
const ASSETS_PATH = path.join(FRONTEND_PATH, 'web', ASSETS);

module.exports = {
  ASSETS,
  ROOT_PATH,
  SRC_PATH,
  FRONTEND_PATH,
  ASSETS_PATH,
};
