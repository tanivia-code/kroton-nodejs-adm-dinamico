module.exports = {
  index: function(req, res) {
    res.render('home/index');
  },
  cards: function(req, res) {
    res.render('home/cards');
  },
  c: function(req, res) {
    res.render('home/buttons');
  },
}