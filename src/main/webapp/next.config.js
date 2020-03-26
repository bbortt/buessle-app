const webpack = require('webpack')

const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
    publicRuntimeConfig: {
        backendUrl: process.env.APPL_BACKEND_URL || 'http://localhost:8080',
    },
    webpack(config) {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
            }),
        )

        return config
    },
})
