const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanTerminalWebpackPlugin = require('clean-terminal-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {resolve} = require('path')
module.exports = (env, options) => {
  return {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css', '.scss']
    },
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
      filename: 'app.bundle.js',
      path: resolve(__dirname, '..', 'personal-website-backend', 'src', 'dist')
    },
    module: {
      rules: [
        {
          /** Typescript config */ test: /\.ts(x)?$/,
          use: 'ts-loader'
        } /** End of Typescript config */,

        {
          /** JS config */ test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        } /** End of JS config */,

        {
          /** CSS module config */ test: /\.(c|sa|sc)ss$/,
          use: [
            'style-loader',

            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]_[hash:base64:5]'
                }
              }
            },
            // 'typescript-plugin-css-modules',
            'sass-loader'
          ],
          include: /\.m\.(c|sa|sc)ss$/
        } /** End of CSS modules config */,

        {
          /** Global CSS config */ test: /\.(c|sa|sc)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: /\.m\.(c|sa|sc)ss$/
        } /** End of global CSS config */,
        
        {
          test: /\.(ico|png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ]
    },
    devServer: {
      port: 9000,
      open: true,
      historyApiFallback: true
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: 'src/public/index.html'
      }),
      new CleanTerminalWebpackPlugin({
        message: 'App running in http://localhost:9000',
        onlyInWatchMode: true
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'src/public/images', to: 'images' }]
      })
    ],
    stats: {
      all: false,
      errors: true,
      colors: true
    }
  }
}
