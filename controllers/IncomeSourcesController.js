const db = require('../models');

const index = async (req, res) => {
  const income_sources = await db.income_sources.findAll();
  return res.json(income_sources);
};

module.exports = {
  index
};
