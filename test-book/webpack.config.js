const path = require('path');
console.log(__dirname,11111111111)
console.log(path.join(__dirname,'./src'))
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output:{
    filename:'./bundle.js'
  },
  mode:'development',
  devServer: {
    publicPath: './dist'
  }
};