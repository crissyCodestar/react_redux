var path = require('path');
// const express = require('express');
// const webpack = require('webpack');
const config = require('./webpack.config.dev');


const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack( config );
var express = require('express');
var app = express();

// const app = express();
// const compiler = webpack(config);


app.use(middleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
