const PROXY_CONFIG = {
  // Proxy-Setting for the KF-Theme
  '/wallet-backend': {
    target: 'http://wallet-backend:8080',
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      '^/wallet-backend': ''
    }
  }
};

module.exports = PROXY_CONFIG;
