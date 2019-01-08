var knex = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.DBHOST || '127.0.0.1',
      user : process.env.DBUSER || '',
      password : process.env.DBPASSWORD || '',
      database : 'commentstable'
    }
  });

  module.exports = knex;
