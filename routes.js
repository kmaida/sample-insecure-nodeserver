// Data
const cc = require('./fakecreditcards.json');

module.exports = function(app) {
  // API works
  app.get('/api', (req, res) => {
    res.send('API works!');
  });

  // GET fake credit card data
  app.get('/api/customers', (req, res) => {
    res.send(cc);
  });
};
