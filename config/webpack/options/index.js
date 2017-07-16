// @ts-check

const appRoot = require('app-root-path');
const hasFlag = require('has-flag');

const { getHtmlElementsString } =  require('./html-elements-generator');
const { HEAD_TAGS } = require('./html-elements-definitions');

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

/**
 * HtmlWebpackPlugin configuration options
 *
 * See:
 */
const HTML_OPTIONS = {
  template: appRoot.resolve('src/index.html'),
  chunksSortMode: 'dependency',
  title: 'Your title',
  description: 'Your description',
  baseUrl: '/',
  isDevServer: isWebpackDevServer(),
  headTags: getHtmlElementsString(HEAD_TAGS),
};

/**
 * Production process configuration options
 */
const PROD_OPTIONS = {
  ENV: process.env.ENV = process.env.NODE_ENV = 'production',
  HMR: false,
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
};

/**
 * Development process configuration options
 */
const DEV_OPTIONS = {
  ENV: process.env.ENV = process.env.NODE_ENV = 'development',
  HMR: hasFlag('hot'),
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
};

module.exports = {
  HTML_OPTIONS,
  DEV_OPTIONS,
  PROD_OPTIONS,
};
