const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        type: 'json',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',   
          'css-loader',    
          'sass-loader', 
           'babel-loader'   
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets/images', to: 'assets/images' }],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: './dist',
    open: true,
  },
};
