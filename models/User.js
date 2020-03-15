module.exports = (Sequelize, DataTypes) =>{
    const User = Sequelize.define('users',{
        email:DataTypes.STRING,
        password:DataTypes.STRING,
        token:DataTypes.STRING
    });
};
