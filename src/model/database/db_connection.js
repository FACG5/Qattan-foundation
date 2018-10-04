const { Pool } = require('pg');
const url = require('url');
require('env2')('./config.env');


let { DB_URL } = process.env;

if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.TEST_DB_URL;
}

if (!DB_URL) {
  throw new Error(' Where DB_URL ');
}
const params = url.parse(DB_URL);
const [username, password] = params.auth.split(':');

const options = {
  password,
  user: username,
  port: params.port,
  host: params.hostname,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNICTIONS || 2,
  ssl: params.hostname !== 'localhost',
};

module.exports = new Pool(options);
