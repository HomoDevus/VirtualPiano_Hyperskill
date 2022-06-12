module.exports = {
  entry: './src/scripts.js',
  mode: 'development',
  output: {
    path: `${__dirname}/docs`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  }
};