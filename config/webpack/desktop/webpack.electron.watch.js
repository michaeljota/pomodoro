/*
 * @author: @michaeljota
 */

const appRoot = require('app-root-path');

const mainThreadConfig = require('./main');
const rendererThreadConfig = require('./renderer');

const webpackMerge = require('webpack-merge');
const { server, client } = require('electron-connect');

const electron = server.create({ path: appRoot.resolve('dist') });

/*
 * Webpack Plugins
 */
const { ProvidePlugin } = require('webpack');
const WebpackOnBuildPlugin = require('on-build-webpack');

/**
 * Function to wait a given time.
 *
 * @param {number} [ms=0] The time to wait in miliseconds
 * @returns A promise with a time out resolver.
 */
function sleep(ms = 0) {
  return new Promise((r) => setTimeout(r, ms));
}

module.exports = (env) => {
  let started = {
    main: false,
    renderer: false,
  };

  return [
    // The Electron main thread configuration
    webpackMerge(mainThreadConfig(env), {
      plugins: [
        new WebpackOnBuildPlugin(async (stats) => {
          if (started.main) {
            electron.restart();
            return;
          }

          started.main = true;
          // We need to wait until the renderer build has been completed in
          // order to start the electron process.
          while(!started.renderer) {
            await sleep();
          }
          electron.start();
        }),
        new ProvidePlugin({
          livesyncClient: client,
        }),
      ],
    }),
    // The Electron renderer thread configuration
    webpackMerge(rendererThreadConfig(env), {
      plugins: [
        new WebpackOnBuildPlugin((stats) => {
          if (started.renderer) {
            electron.reload();
            return;
          }

          started.renderer = true;
        }),
      ],
    }),
  ];
};
