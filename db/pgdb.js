var {Pool} = require('pg');

var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ngnotes',
    password: '12345',
    port: 5432,
});

module.exports = pool;