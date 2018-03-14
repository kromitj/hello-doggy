const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
	shelterId:  {
		type: Schema.Types.ObjectId,
		ref: 'shelter'
	},
	name: String,
	age: Number,
	type: String,
	breed: String,
	sex: String,
	weight: Number,
	spayedOrNudered: Boolean,
	adoptionFee: Number,
	description: String,
	likes: [ String ],
	dislikes: [String ],
	personalityTraits: [String],
	pictures: [String]
});

const Animal = mongoose.model('animal', AnimalSchema);

module.exports = Animal;

