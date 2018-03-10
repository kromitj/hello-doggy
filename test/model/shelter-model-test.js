const shelterModelCRUDTest = require('./shelter/shelter-model-crud-test');

const shelterModelTest = (assert, shelter, seeds) => {
	shelterModelCRUDTest(assert, shelter, seeds);
}


module.exports = shelterModelTest;