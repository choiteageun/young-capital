'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Consultations", "reserve_contents",{
      type:Sequelize.STRING
    })
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Consultations", "reserve_contents")
    
  }
};
