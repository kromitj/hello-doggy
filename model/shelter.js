const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AnimalSchema = require('./animal');

const ShelterSchema = new Schema({
	name: String,
	address: String,
	phone: String,
	animals: [{
		type: Schema.Types.ObjectId,
		ref: 'animal'
	}],
	shelterAdmin: {
		type: Schema.Types.ObjectId,
		ref: 'shelterAdmin'
	}
});


const Shelter = mongoose.model('shelter', ShelterSchema);


module.exports = Shelter;