module.exports = {
  test: /\.(ttf|otf|eot|woff2?)/,
  loader: 'file-loader',
  options: {
    name: 'fonts/[name].[ext]',
  },
};
