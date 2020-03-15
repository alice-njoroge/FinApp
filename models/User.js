module.exports = (Sequelize, DataTypes) =>{
    const User = Sequelize.define('users',{
        email:DataTypes.STRING,
        password:DataTypes.STRING,
        token:DataTypes.STRING
    });
    User.associate = (models) =>{
      User.hasMany(models.incomes, {foreignKey:'recorded_by_id' as 'incomes', onDelete:'cascade'})
    };
    return User;
};
