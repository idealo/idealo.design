const path = require('path')
const webpack = require('webpack')

const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'

const common = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
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
  let mode = argv.mode || 'development'

  const config = {

    ...common,
    mode,

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.module\.s[ac]ss$/,
          use: [
            {
              loader: isDevelopment
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: isDevelopment,
                esModule: false,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
                implementation: require('node-sass'),
              }
            },
          ],
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /\.module.(s[ac]ss)$/,
          use: [
            {
              loader: isDevelopment
                ? 'style-loader'
                : 'isomorphic-style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                esModule: false,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
                implementation: require('node-sass'),
              }
            },
          ],
        },
        {
          test: /.svg$/,
          loader: 'babel-loader',
        },
      ]
    },

    target: 'web',

    entry: {
      app: './src/ui/index.js',
    },

    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: './src/ui/public/index.html',
        publicPath: '/public'
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment
          ? '[name].css'
          : '[name].[fullhash].css',
        chunkFilename: isDevelopment
          ? '[id].css'
          : '[id].[chunkhash].css',
      }),
    ],

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },

    // optimization: {
    //   // minimizer: [new TerserPlugin()],

    //   splitChunks: {
    //     cacheGroups: {
    //       vendors: {
    //         priority: -10,
    //         test: /[\\/]node_modules[\\/]/
    //       }
    //     },

    //     chunks: 'async',
    //     minChunks: 1,
    //     minSize: 30000,
    //     name: false
    //   }
    // },

    output: {
      path: path.resolve(__dirname, 'dist/public'),
      filename: '[name].js',
    },

  }

  return config
}

const server = function(env, argv) {

  const config = {

    ...common,
    target: 'node',

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },


        {
          test: /\.module\.s[ac]ss$/,
          use: [
            {
              loader: isDevelopment
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: isDevelopment,
                esModule: false,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
                implementation: require('node-sass'),
              }
            },
          ],
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /\.module.(s[ac]ss)$/,
          use: [
            {
              loader: isDevelopment
                ? 'style-loader'
                : 'isomorphic-style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                esModule: false,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
                implementation: require('node-sass'),
              }
            },
          ],
        },
        {
          test: /.svg$/,
          loader: 'babel-loader',
        },



      ],
    },

    entry: {
      server: './src/server/index.js',
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },

    plugins: [
      // new webpack.ProgressPlugin(),
      // new HtmlWebpackPlugin({
      //   template: './src/ui/public/index.html',
      //   publicPath: '/public'
      // }),
      new MiniCssExtractPlugin({
        filename: isDevelopment
          ? '[name].css'
          : '[name].[fullhash].css',
        chunkFilename: isDevelopment
          ? '[id].css'
          : '[id].[chunkhash].css',
      }),
    ],


  }

  return config
}

module.exports = [app, server]
