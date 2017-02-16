const path = require("path")
const fs = require("fs")
const port = 9999;
console.log("start at " + port)

module.exports = {
  port: port,
  source: [
    './lib',
    'README.md',
  ],
  lazyLoad: true,
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2',
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-ljdoc',
  ],
  webpackConfig (config) {
    config.devtool = 'eval-source-map'
    config.resolve.alias = {
      "mystique-react": process.cwd()
    }
    return config
  }
};