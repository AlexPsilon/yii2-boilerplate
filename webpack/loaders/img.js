module.exports = ({ limit, options }) => ({
  test: /\.(png|jpe?g|svg|gif)$/,
  exclude: /\/img\/static\//,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit,
      },
    },
    {
      loader: 'image-webpack-loader',
      options,
    },
  ],
});
