'use strict';
module.exports = function(app) {
  var gameController = require('../controllers/controller');

  // gameController Routes
  app.route('/games')
    .get(gameController.list_all_games)
    .post(gameController.create_game);


  app.route('/games/:gameId')
    .get(gameController.read_game)
    .put(gameController.update_game)
    .delete(gameController.delete_game);
};