'use strict';
module.exports = (sequelize, DataTypes) => {
  var Notememo = sequelize.define('Notememo', {
    userId: DataTypes.INTEGER,
    reserve_contents: DataTypes.STRING,
    consulId: DataTypes.INTEGER,
  }, {});
  Notememo.associate = function(models) {
    // associations can be defined here
  };
  return Notememo;
};