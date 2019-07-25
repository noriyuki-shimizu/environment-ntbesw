const { resolve } = require('path');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  watch: true,
  mode: 'development',
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
