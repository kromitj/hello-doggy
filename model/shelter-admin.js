const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShelterAdminSchema = new Schema({

});

const ShelterAdmin = mongoose.model('shelterAdmin', ShelterAdminSchema);

module.exports = snippetShelterAdmin;