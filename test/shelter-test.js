const assert = require('assert');
const Shelter = require('../model/shelter');
const shelterModelTest = require('./model/shelter-model-test');

const seeds = require('./seeds');
const adminSeeds = seeds.shelterSeeds;

shelterModelTest(assert, Shelter, adminSeeds)