const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../modules/timestamp');

const ingredientSchema = new Schema({
  name: String,
  description: String
});

ingredientSchema.plugin(timestamp);

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;