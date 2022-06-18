const path =  require('path');
const axios = require('axios');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const proxyFactory = require('http-proxy-middleware');

const APP = 'gaobl-ui';
const PORT = 4201;
const PROXY_CONFIG = require('./proxy-local.conf');

axios.defaults.adapter = require('axios/lib/adapters/http');

const app = express();

// server setup and start
const start = () => {

  function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false;
    }
    return compression.filter(req, res);
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(compression({ filter: shouldCompress }));
  app.use(morgan('[:date[iso]] :method :url -> :status (HTTP/:http-version), :response-time[3]ms/:total-time[3]ms'));

  for(const key in PROXY_CONFIG) {
    if (key) {
      const apiProxy = proxyFactory.createProxyMiddleware(key, PROXY_CONFIG[key]);
      app.use(key, apiProxy);
    }
  }

  app.use(express.static(path.join(__dirname, '..', 'dist', APP), {etag: true}));

  app.use(
    '/assets/',
    express.static(path.join(__dirname, '..', 'dist', APP, 'assets'))
  );

  app.use(`/${APP}/health`, (_req, res) => {
    res.json({status: 'UP'});
  });

  app.use('/register', (_req, res) => {
    res.sendFile(path.join(__dirname, '../dist', APP, 'index.html'));
  });

  app.use('*', (req, res) => {
    console.log('Invalid request: ', req.originalUrl);
    res.sendStatus(403);
  });

  process.on('unhandledRejection', (reason, p) => {
    console.log('unhandledReject', reason, p);
  });

  module.exports = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
};

start();
