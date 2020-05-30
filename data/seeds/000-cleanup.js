const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return cleaner.clean(knex, {
    mode: 'truncate',
    ignoreTables: ['knex_migrates', 'knex_migrations_lock']
  })
};
