const assert = require('assert');
const Admin = require('../model/admin');
const adminModelTest = require('./model/admin-model-test');

const seeds = require('./seeds');
const adminSeeds = seeds.adminSeeds;

adminModelTest(assert, Admin, adminSeeds)