const assert = require('assert');
const seeds = require('./seeds');

const Admin = require('../model/admin');
const adminModelTest = require('./model/admin-model-test');
const adminSeeds = seeds.adminSeeds;

const Shelter = require('../model/shelter');
const shelterModelTest = require('./model/shelter-model-test');
const shelterSeeds = seeds.shelterSeeds

const ShelterAdmin = require('../model/shelter-admin');
const shelterAdminModelTest = require('./model/shelter-admin-model-test');
const shelterAdminSeeds = seeds.shelterAdminSeeds

const Animal = require('../model/animal');
const animalModelTest = require('./model/animal-model-test');
const animalSeeds = seeds.animalSeeds;

adminModelTest(assert, Admin, adminSeeds);
shelterModelTest(assert, Shelter, shelterSeeds);
shelterAdminModelTest(assert, ShelterAdmin, Shelter, Animal, shelterAdminSeeds);
animalModelTest(assert, Animal, ShelterAdmin, Shelter, animalSeeds);