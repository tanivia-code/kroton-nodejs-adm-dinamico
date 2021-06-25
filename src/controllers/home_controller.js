module.exports = {
  index: function(req, res) {
    res.render('home/index');
  },
  cards: function(req, res) {
    res.render('home/cards');
  },
  login: function(req, res) {
    res.render('home/login');
  },
}