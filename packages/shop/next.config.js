const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

// next.js configuration
const nextConfig = {
  env: {
    STRIPE_PUBLIC_KEY: 'you_stripe_public_key_here',
    // API_URLL: 'http://dev74.onlinetestingserver.com/pickbazaar-admin/shop/graphql',
    // API_URLL: 'http://localhost:4000/shop/graphql',
    // API_URL: 'http://dev74.onlinetestingserver.com/fleetcart_graphql/graphql/'
    API_URL: 'http://dev74.onlinetestingserver.com/fleetcart_lighthouse/FleetCart/public/graphql'
    
    // http://dev74.onlinetestingserver.com/fleetcart_lighthouse/FleetCart/public/graphql-playground



    
  },
  webpack: (config) => {
    config.resolve.modules.push(__dirname);

    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
