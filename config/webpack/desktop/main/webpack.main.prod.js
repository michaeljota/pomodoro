/*
 * @author: @michaeljota
 */

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.main.common.js');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

module.exports = (dev) => {
  return webpackMerge(commonConfig(dev), {
    /**
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [

      /**
       * Plugin: UglifyJsPlugin
       * Description: Minimize all JavaScript output of chunks.
       * Loaders are switched into minimizing mode.
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
       */
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
        },
        compress: {
          screw_ie8: true,
        },
        comments: false,
      }),

      /**
       * Plugin: DefinePlugin
       * Description: Define free variables.
       * Useful for having development builds with debug logging or adding global constants.
       *
       * Environment helpers
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
       */
      new webpack.DefinePlugin({
        'ENV': {
          'ENV': JSON.stringify(ENV),
        },
      }),
    ],
  });
}
