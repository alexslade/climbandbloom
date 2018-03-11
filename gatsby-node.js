const lost = require('lost');

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    postcss: [lost()]
  });
};
