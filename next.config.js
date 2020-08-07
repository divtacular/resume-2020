//const withSass = require('@zeit/next-sass');
const withPurgeCss = require('next-purgecss');

module.exports = withPurgeCss({
    purgeCss: {
        whitelist: () => ['animation_on', 'animation_off', 'switch', 'lever']
    },
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
});
