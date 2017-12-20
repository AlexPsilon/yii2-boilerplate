module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions', 'ie 11'],
    },
    'css-mqpacker': {
      sort: true,
    },
    'postcss-inline-svg': {},
  },
};
