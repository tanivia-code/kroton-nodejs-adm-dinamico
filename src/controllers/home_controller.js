module.exports = {
  index: function(req, res) {
    res.render('home/index');
  },
  cards: function(req, res) {
    res.render('home/cards');
  },
  others: function (req, res) {
     res.render('home/others');
  }
}