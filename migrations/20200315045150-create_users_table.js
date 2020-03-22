'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
          name:{
              type:Sequelize.STRING,
              allowNull:false
          },
          createdAt:Sequelize.DATE,
          updatedAt:Sequelize.DATE
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};
