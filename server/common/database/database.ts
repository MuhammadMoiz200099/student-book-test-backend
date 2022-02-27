const knex = require('knex');
const knexfile = require('./knexfile');

const knexDB = knex(knexfile.development)

export default knexDB;

