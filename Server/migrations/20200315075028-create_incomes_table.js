'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('incomes', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            month: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            year: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            amount: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            income_source_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'income_sources',
                    key: 'id'
                }
            },
            recorded_by_id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            createdAt:Sequelize.DATE,
            updatedAt:Sequelize.DATE

        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('incomes');
    }
};
