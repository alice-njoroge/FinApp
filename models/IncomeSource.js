module.exports = (Sequelize, DataTypes) => {
    const IncomeSource = Sequelize.define('income_sources', {
        name:DataTypes.STRING
    });
};