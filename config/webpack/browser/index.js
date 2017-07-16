module.exports = (env) => {
  if (env.prod) {
    return require('./webpack.prod')(env);
  }
  return require('./webpack.dev')(env);
};
