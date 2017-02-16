var path = require('path')
module.exports = function (webpackConfig, redSkull) {
  webpackConfig.resolve.alias.app = path.join(redSkull.src, 'app')
  webpackConfig.resolve.alias.components = path.join(redSkull.src, 'components')
  webpackConfig.resolve.alias.pages = path.join(redSkull.src, 'pages')
  return webpackConfig
}
