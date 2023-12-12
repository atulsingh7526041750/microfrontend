const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     publicPath: 'auto', // Change this based on your setup
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'MicroFrontend1',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './MicroFrontend1': './src/index.js',
//       },
//       shared: {
//         react: { singleton: true },
//         'react-dom': { singleton: true },
//       },
//     }),
//   ],
//   devServer: {
//     port: 3001, // Change this based on your setup
//     hot: true,
//     open: true,
//     historyApiFallback: true, // Add this line
//   },
// };
module.exports = {
  mode: 'development',
  devServer: {
    port: 3002,
    },
    plugins: [
      new ModuleFederationPlugin({
              name: 'microFrontend2',
              filename: 'remoteEntry.js',
              exposes: {
                './MicroFrontEnd2Index': './src/index',
              },
            }),
      new HtmlWebpackPlugin({
        template: './public/index.html', // Path to your HTML file template
        // filename: 'index.html',       // Output HTML file name
      }),
    ],
};