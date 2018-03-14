const shelterAdminCRUDTest = require('./shelter-admin/shelter-admin-crud-test');
const shelterAdminInstanceMethodsTest = require('./shelter-admin/shelter-admin-instance-methods-test');

const shelterAdminModelTest = (assert, shelterAdmin, shelter, animal, seeds) => {
	shelterAdminCRUDTest(assert, shelterAdmin, shelter, seeds);
	shelterAdminInstanceMethodsTest(assert, shelterAdmin, shelter, animal, seeds)
}


module.exports = shelterAdminModelTest;