const path = require('path');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@stylexjs/babel-plugin',
      {
        dev: process.env.NODE_ENV === 'development',
        runtimeInjection: false,
        getConditionalClasses: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          tpye: 'commonJS',
          rootDir: path.join(__dirname),
        },
      }
    ]
  ]
};
