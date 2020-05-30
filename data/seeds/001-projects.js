
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Test project 1', description: 'Test project 1 description', completed: false},
        {name: 'Test project 2', description: 'Test project 2 description', completed: false},
        {name: 'Test project 3', description: 'Test project 3 description', completed: false},
        {name: 'Test project 4', description: 'Test project 4 description', completed: false},
        {name: 'Test project 5', description: 'Test project 5 description', completed: false},
        {name: 'Test project 6', description: 'Test project 6 description', completed: false}
      ]);
    });
};
