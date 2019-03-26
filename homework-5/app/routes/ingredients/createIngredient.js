const Ingredient = require('../../models/ingredient');

const createIngredient = (request, response) => {
  const ingredient = request.body;
  const ingredientData = Object.assign({}, ingredient);

  const newIngredient = new Ingredient(ingredientData);
  
  const sendResponse = (ingredient) => {

    response.json({
      status: 'success',
      ingredient
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'ingredient was not saved'
    });
  };

  newIngredient.save()
    .then(sendResponse)
    .catch(sendError)

};

module.exports = createIngredient;