const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(png|bmp)$/,
          use: 'url-loader'
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      // We are generating a single file, so no public path is needed. This is
      // recommmended to include because it will prevent the dev server from
      // working right:
      publicPath: '',
    },
    plugins: [
      // Define Bundler Build Feature Flags
      new webpack.DefinePlugin({
        // Drop Options API from bundle
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        // This fixes some bug which prevents the dev server from working right
        cache: false,
      }),
      new HtmlInlineScriptPlugin(),
    ],
  };