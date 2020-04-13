module.exports = (Sequelize, DataTypes) =>{
    const Income = Sequelize.define('incomes', {
        month:DataTypes.INTEGER,
        year:DataTypes.INTEGER,
        amount:DataTypes.FLOAT,
        income_source_id:DataTypes.INTEGER,
        recorded_by_id:DataTypes.INTEGER,
        description:DataTypes.TEXT
    });
    Income.associate = models => {
        Income.belongsTo(models.user, {foreignKey:'recorded_by_id', as:'recordedBy'})
    };
    Income.associate = models => {
        Income.belongsTo(models.income_sources, {foreignKey: 'income_source_id', as: 'source'})
    };

    return Income;
};