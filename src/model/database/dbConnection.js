const { Pool } = require('pg');
const url = require('url');
require('env2')('./config.env');


if (!process.env.DB_URL) throw new Error('There is a problem faced DB_URL !!');

const params = url.parse(process.env.DB_URL);
const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  user: username,
  password,
  ssl: true,
};
module.exports = new Pool(options);
