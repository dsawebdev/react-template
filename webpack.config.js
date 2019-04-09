const path = require('path');
// import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/
      }, 
      {
        test: /\.scss$/, 
        use:[
          'style-loader', 
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
