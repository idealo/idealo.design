const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


const common = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // include: [
        //   path.resolve(__dirname, 'src/ui'),
        //   path.resolve(__dirname, 'src/ui/components'),
        //   path.resolve(__dirname, 'src/ui/pages'),
        // ],
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.(scss|css)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",

            options: {
              sourceMap: true
            }
          },
        ],
      },
      {
        test: /.svg$/,
        loader: 'babel-loader',
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      Components: path.resolve(__dirname, 'src/ui/components'),
      Pages: path.resolve(__dirname, 'pages'),
      Data: path.resolve(__dirname, 'data'),
      Styles: path.resolve(__dirname, 'src/ui/styles'),
    },
  },
}

const app = function(env, argv) {

  const config = {
    ...common,

    mode: 'development',

    entry: {
      app: './src/ui/index.js',
    },

    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: './src/ui/public/index.html'
      })
    ],

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },

    optimization: {
      minimizer: [new TerserPlugin()],

      splitChunks: {
        cacheGroups: {
          vendors: {
            priority: -10,
            test: /[\\/]node_modules[\\/]/
          }
        },

        chunks: 'async',
        minChunks: 1,
        minSize: 30000,
        name: false
      }
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },

  }

  return config
}

const server = function(env, argv) {

  const config = {
    ...common,

    target: 'node',
    entry: {
      server: './src/server/index.js',
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
  }

  return config
}

module.exports = [app, server]
