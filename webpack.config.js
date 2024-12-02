const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Optional for copying static assets like images

module.exports = {
  entry: './src/index.js', // Entry point for the React application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '', // Ensure correct paths for assets
  },
  mode: 'production', // Set to 'production' for optimized builds
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpile JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/, // Handle SCSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS to a separate file
          'css-loader',                 // Handle CSS imports
          'sass-loader',                // Compile SCSS to CSS
        ],
      },
      {
        test: /\.css$/, // Handle CSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS to a separate file
          'css-loader',                 // Handle CSS imports
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle image files in src/images/
        include: path.resolve(__dirname, 'src/images'), // Ensure Webpack processes images inside src/images
        type: 'asset/resource', // Webpack will process images as assets and output them in dist/images
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // Use the template in the public folder
      filename: 'index.html',        // Output to dist/index.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/stylesheets/style.css', // Output CSS to dist/css/stylesheets/style.css
    }),
    new CopyWebpackPlugin({
      patterns: [
        // If you need to copy images from src/images to dist/images, keep this part
        { from: 'src/images', to: 'images' }, // Copy images from src/images to dist/images
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from 'public' folder during development
    },
    compress: true,
    port: 3000,
    historyApiFallback: true, // This enables React Router to handle all navigation

  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
