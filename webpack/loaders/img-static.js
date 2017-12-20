module.exports = ({ options }) => ({
  test: /\.(png|jpe?g|svg|gif)$/,
  include: /\/img\/static\//,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'img/[name].[ext]',
      },
    },
    {
      loader: 'image-webpack-loader',
      options,
    },
  ],
});
