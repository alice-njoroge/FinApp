const Joi = require('joi');
const db = require('../models');

const index = async (req, res) => {
    try {
        const income = await db.incomes.findAll({include: "source"});
        return res.json(income);
    } catch (e) {
        throw e;
    }
};
const create = async (req, res) => {
    const month = req.body.month;
    const year = req.body.year;
    const amount = req.body.amount;
    const income_source_id = req.body.income_source_id;
    const description = req.body.description;

    const schema = Joi.object().keys({
        month: Joi.number().required(),
        year: Joi.number().required(),
        amount: Joi.number().integer().min(0).required(),
        income_source_id: Joi.number().required(),
        description: Joi.string().allow('').required()
    });
    const results = Joi.validate(req.body, schema);
    const valid = results.error == null;
    if (!valid) {
        return res.status(400).json({error: results.error.details});
    }

    try {
        const income = await db.incomes.create({
            month: month,
            year: year,
            amount: amount,
            income_source_id: income_source_id,
            recorded_by_id: req.user.id,
            description: description
        });
        return res.json(income);
    } catch (e) {
        throw e;
    }

};
const show = async (req, res) => {
    const id = req.params.id;
    try {
        const income = await db.incomes.findByPk(id);
        if (!income) {
            return res.status(404).json({message: "Income not found"})
        }
        return res.json(income);

    } catch (e) {
        throw e;
    }
};
const update = async (req, res) => {
    const month = req.body.month;
    const year = req.body.year;
    const amount = req.body.amount;
    const income_source_id = req.body.income_source_id;
    const recorded_by_id = req.user.id;
    const description = req.body.description;

    const schema = Joi.object().keys({
        month: Joi.number().required(),
        year: Joi.number().required(),
        amount: Joi.number().integer().min(0).required(),
        income_source_id: Joi.number().required(),
        description: Joi.string().allow('').required()
    });
    const results = Joi.validate(req.body, schema);
    const valid = results.error == null;
    if (!valid) {
        return res.status(422).json({error: results.error.details});
    }
    try {
        const income = await db.incomes.findByPk(req.params.id);
        if (!income){
            return res.status(404).json({message:"Income not found!"})
        }
        income.month = month;
        income.year = year;
        income.amount = amount;
        income.income_source_id = income_source_id;
        income.recorded_by_id = recorded_by_id;
        income.description = description;
        income.save();

        return res.json(income);
    } catch (e) {
        throw e;

    }


};

module.exports = {
    index,
    create,
    show,
    update
};