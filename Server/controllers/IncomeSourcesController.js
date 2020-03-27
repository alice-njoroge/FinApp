const db = require('../models');
const Joi = require('joi');

const index = async (req, res) => {
    const income_sources = await db.income_sources.findAll();
    return res.json(income_sources);
};

const create = async (req, res) => {
    const name = req.body.name;

    const schema = Joi.object().keys({
        name: Joi.string().required()
    });
    const result = Joi.validate(req.body, schema);
    console.log(result);
    const valid = result.error == null;
    if (!valid) {
        return res.status(400).json({message: "Bad request", error: result.error.message})
    }

    try {
        const income_source = await db.income_sources.create({name: name});
        return res.status(201).json({message: "created successfully", income_source: income_source})
    } catch (e) {
        throw e;
    }
};
const show = async (req, res) => {
    const id = req.params.id;
    try {
        const income_source = await db.income_sources.findByPk(id, {attributes: ["name", "createdAt"]});
        if (!income_source) {
            return res.status(404).json({message: "Not found"})
        }
        return res.json({income_source: income_source});
    } catch (e) {
        throw e;
    }
};
const update = async  (req, res)=>{
    const name = req.body.name;
    const id= req.params.id;
    const schema = Joi.object().keys({
        name:Joi.string().required()
    });
    const results = Joi.validate(req.body, schema);
    const valid = results.error == null;
    if(!valid){
        res.status(422).json({error:results.error.details, message:"Not processed"});
    }
    try{
        const source = await db.income_sources.findByPk(id);
        if (!source){
            return res.status(404).json({message:"Income Source not found!"});
        }
        source.name = name;
        source.save();
        return res.json(source);
    }catch (e) {
        throw e;
    }

};

const destroy = async (req, res) => {
    const id = req.params.id;
    try {
        const source = db.income_sources.findByPk(id);
        if (!source) {
            return res.json({message: "not found"})
        }
        await db.income_sources.destroy({where: {id: id}});
        return res.json({message: "deleted successfully"});

    } catch (e) {
        throw e;
    }
};

module.exports = {
    index,
    create,
    show,
    update,
    destroy
};
