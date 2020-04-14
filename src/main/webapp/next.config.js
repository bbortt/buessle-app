const webpack = require('webpack');

const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
    publicRuntimeConfig: {
        socketUrl: process.env.APPL_SOCKET_URL || 'ws://localhost:8080',
        apiUrl: process.env.APPL_API_URL || 'http://localhost:8080',
    },
    webpack(config) {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
            }),
        );

        return config
    },
});
