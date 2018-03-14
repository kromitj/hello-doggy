const animalModelCRUDTest = require('./animal/animal-model-crud-test');

const animalModelTest = (assert, animal, shelterAdmin, shelter, seeds) => {
	console.log("animalModelTest")
	animalModelCRUDTest(assert, animal, shelterAdmin, shelter, seeds);
}

module.exports = animalModelTest;