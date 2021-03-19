const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
 
const app = express();
 
app.use('/api', createProxyMiddleware({ target: 'http://makeup-api.herokuapp.com', changeOrigin: true }));
app.listen(3000);