const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // installed via npm

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}
