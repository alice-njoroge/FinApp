'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('income_sources',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,
        required:true
      },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('income_sources');
  }
};
