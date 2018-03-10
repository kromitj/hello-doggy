const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
	fName: {
		type: String, 
		required: true,
	},
	lName: {
		type: String, 
		required: true,
	},
	email: {
		type: String, 
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	passwordDigest: {
		type: String,
		required: true
	}
});

const Admin = mongoose.model('admin', AdminSchema);

module.exports = Admin;