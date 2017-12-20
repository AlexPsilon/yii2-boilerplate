module.exports = ExtractTextPlugin => ({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  }),
});
