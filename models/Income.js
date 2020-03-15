module.exports = (Sequelize, DataTypes) =>{
    const Income = Sequelize.define('incomes', {
        month:DataTypes.INTEGER,
        year:DataTypes.INTEGER,
        amount:DataTypes.FLOAT,
        income_source:DataTypes.INTEGER,
        recorded_by:DataTypes.INTEGER,
        description:DataTypes.TEXT
    });
};