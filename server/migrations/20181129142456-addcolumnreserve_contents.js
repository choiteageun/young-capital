'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("consultations", "reserve_contents",{
      type:Sequelize.STRING
    })
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("consultations", "reserve_contents")
    
  }
};
