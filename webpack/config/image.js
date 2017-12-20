/* Optimize options */
const options = {
  mozjpeg: {
    progressive: true,
    quality: 65,
  },
  optipng: {
    enabled: false,
  },
  pngquant: {
    quality: '65-90',
    speed: 4,
  },
  gifsicle: {
    interlaced: false,
  },
  webp: {
    quality: 75,
  },
};

/* Size limit inline image */
const limit = 10000;

module.exports = {
  options,
  limit,
};
