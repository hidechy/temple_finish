'use strict';

module.exports = (sequelize, DataTypes) => {
    
  const Temple = sequelize.define('t_temple', {
    year: DataTypes.STRING,
    month: DataTypes.STRING,
    day: DataTypes.STRING,
    temple: DataTypes.STRING,
    memo: DataTypes.STRING,
    address: DataTypes.STRING,
    station: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {freezeTableName: true, timestamps: false});

  Temple.associate = function(models) {
  };

  return Temple;
};
