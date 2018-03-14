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

// ShelterAdminSchema.methods.addAnimal = function(animal, shelterId) {
//   console.log("shelterId: ", shelterId)
//   console.log("-------------------------------------->>>>>>>")
//   const shelter = mongoose.model('shelter');
//   shelter.findById(shelterId)
//   .then((shelter) => {
//   	shelter.animals.push(animal)
//       console.log("shelter: ", shelter)
//       return shelter.save()
//       .then((res) => {
//         return Promise.resolve(res.toObject())
//       })
//       .catch(err => {
//          return Promise.reject(err);
//       });
//     })
//   };

const ShelterAdmin = mongoose.model('shelterAdmin', ShelterAdminSchema);

module.exports = ShelterAdmin;