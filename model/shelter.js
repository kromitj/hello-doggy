const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShelterSchema = new Schema({
	name: String,
	address: String,
	phone: String
});

const Shelter = mongoose.model('shelter', ShelterSchema);

module.exports = Shelter;