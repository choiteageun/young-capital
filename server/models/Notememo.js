'use strict';
module.exports = (sequelize, DataTypes) => {
  var Notememo = sequelize.define('Notememo', {
    userId: DataTypes.INTEGER,
    note: DataTypes.STRING,
    consulId: DataTypes.INTEGER,
    reserve_contents: DataTypes.STRING,
  }, {});
  Notememo.associate = function(models) {
    // associations can be defined here
  };
  return Notememo;
};