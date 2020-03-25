module.exports = (Sequelize, DataTypes) => {
    const IncomeSource = Sequelize.define('income_sources', {
        name:DataTypes.STRING
    });
    IncomeSource.associate = models => {
      IncomeSource.hasMany(models.incomes, {foreignKey: "income_source_id", as:'incomes', onDelete:'cascade'})
    };

    return IncomeSource;
};