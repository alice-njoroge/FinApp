'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('incomes',{
      id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
      month:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      year:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      amount:{
        type:Sequelize.FLOAT,
        allowNull:false
      },
      income_source:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      recorded_by:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      description:{
        type:Sequelize.TEXT,
        allowNull:false
      }

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('incomes');
  }
};
