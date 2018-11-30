

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.renameColumn(
        'Notememos',
        'note',
        'reserve_contents'
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.renameColumn(
        'Notememos',
        'reserve_contents',
        'note',
      )
    ]
  }
};