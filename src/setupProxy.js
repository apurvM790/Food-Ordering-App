const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/dapi',
    createProxyMiddleware({
      target: 'https://crossorigin.me/https://www.swiggy.com',
      changeOrigin: true,
      secure: false, // If SSL issues occur, try setting this to false
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      }
    })
  );
};
