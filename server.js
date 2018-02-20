// Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// App
const app = express();

function reqSec(req, res, next) {
  // HTTP Strict Transport Security (HSTS)
  // Enforces HTTPS across the entire app
  // While nginx does a redirect, HSTS redirects
  // before anything is sent to the server
  res.setHeader('Strict-Transport-Security', 'max-age=630720');
  // Defend against Cross Site Scripting (XSS)
  // This is when a malicious entity injects scripts
  res.setHeader('X-XSS-Protection', '1; mode=block');
  // Require iFrame sources to come from the same origin
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  // Content Security Policy
  // Helpful in preventing XSS to ensure scripts only come
  // from approved origins
  res.setHeader("Content-Security-Policy", "script-src 'self'");
  // Send the request on with security headers
  return next();
}
app.use(reqSec);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Set port
const port = process.env.PORT || '1338';
app.set('port', port);

// Routes
require('./routes')(app);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));
