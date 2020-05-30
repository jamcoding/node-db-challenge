
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Mac Computer', description: 'Mac Computer'},
        {name: 'Windows Computer', description: 'Windows Computer'},
        {name: 'Phone', description: 'Cell phone'},
        {name: 'Book', description: ''}
      ]);
    });
};
