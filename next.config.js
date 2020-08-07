const withSass = require('@zeit/next-sass');
const withPurgeCss = require('next-purgecss');

module.exports = withSass(withPurgeCss({
    webpack: (config, {isServer}) => {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });

        return config
    }
}));
