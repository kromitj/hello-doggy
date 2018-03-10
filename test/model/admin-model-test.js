const adminConnectToDB = require('./admin/admin-connect-to-db');
const adminModelCRUDTest = require('./admin/admin-model-crud-test');
const adminModelTest = (assert, admin, seeds) => {
	adminConnectToDB(assert, admin, seeds);
	adminModelCRUDTest(assert, admin, seeds);
}
module.exports = adminModelTest;