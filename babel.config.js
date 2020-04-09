// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: true,
      },
    ],
  ],
  plugins: [
    // See https://github.com/developit/htm/tree/master/packages/babel-plugin-htm
    // for configuration options.
    ['babel-plugin-htm', {
      import: 'preact',
    }],
  ],
};
