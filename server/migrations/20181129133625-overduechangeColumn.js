'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn("Consultations", "overdue", {
        type: Sequelize.INTEGER
      }),
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.changeColumn("Consultations", "overdue", {
        type: Sequelize.STRING
      }),
    ]
  }
};
