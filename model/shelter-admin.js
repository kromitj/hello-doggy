const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShelterAdminSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	username: String,
	passwordDigest: String,
	shelterId: {
        type: Schema.Types.ObjectId,
        ref: 'shelter'
    }
});

ShelterAdminSchema.methods.addAnimal = function(animal, done) {
    const shelter = mongoose.model('shelter');
    shelter.findById(this.shelterId)
    .then((shelter) => {
    	shelter.animals.push(animal)
        console.log("shelter: ", shelter)
        shelter.save()
    }).then(() => done())
  };

const ShelterAdmin = mongoose.model('shelterAdmin', ShelterAdminSchema);

module.exports = ShelterAdmin;