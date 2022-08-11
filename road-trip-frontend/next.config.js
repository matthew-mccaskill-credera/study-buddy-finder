const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['lodash-es', '@bessemer/cornerstone']);
const { parsed: localEnv } = require('dotenv').config();

module.exports = withPlugins([withTM], {
    distDir: 'build',
    webpack: (config, options) => {
        config.plugins.push(new options.webpack.EnvironmentPlugin(localEnv));
        config.resolve.fallback = { fs: false };
        return config;
    }
});