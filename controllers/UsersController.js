const db = require('../models');

const profile = async (req, res) => {
    const id = req.user.id;
    try{
        const user = await db.user.findByPk(id, {attributes:['name', 'email', 'createdAt']});
        if (!user){
            return res.status(404).json({message:"User not found"});
        }
        return res.json(user);
    }catch (e) {
        throw e;
    }

   };
module.exports = {
    profile
};