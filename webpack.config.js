const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Handles CSS files
        use: ['style-loader', 'css-loader'],
      },
      // Handling images (png, svg, jpg, jpeg, gif)
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Webpack 5 Asset Modules
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from 'public' folder
    },
    compress: true,
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both JS and JSX files
  },
};
