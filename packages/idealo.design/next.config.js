const withPlugins = require('next-compose-plugins');

const withTM = require('next-transpile-modules')(['@fux/layout-grid'])
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path')

module.exports = withPlugins([
    withTM,
    withMDX,
    withSass,
    withImages,
], {
    // experimental: {
    //     // scss: true,
    // },
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    cssModules: true,
    webpack: (config, options) => {
        config.plugins.push(
            new MiniCssExtractPlugin({
                // Enable to remove warnings about conflicting order
                ignoreOrder: true
            })
        );

        // Here is the magic
        // We push our config into the resolve.modules array
        config.resolve.modules.push(
            path.resolve('./'),
        )

        config.resolve.alias['components'] = path.join(__dirname, 'components')

        if (!options.isServer) {
            config.node = {
                fs: 'empty'
            }
        }

        return config
    },
})

