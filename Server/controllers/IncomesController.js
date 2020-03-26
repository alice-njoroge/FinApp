const Joi = require('joi');
const db = require('../models');

const index = async (req, res)=>{
    try {
        const income = await db.incomes.findAll({include:"source"});
        return res.json(income);
    }catch (e) {
      throw e;
    }
};

module.exports = {
    index
};