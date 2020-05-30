
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Test task description 1', notes: 'Test task notes 1', completed: false, project_id: 1},
        {description: 'Test task description 2', notes: 'Test task notes 2', completed: false, project_id: 2},
        {description: 'Test task description 3', notes: 'Test task notes 3', completed: false, project_id: 3},
        {description: 'Test task description 4', notes: 'Test task notes 4', completed: false, project_id: 3},
        {description: 'Test task description 5', notes: 'Test task notes 5', completed: false, project_id: 4},
        {description: 'Test task description 6', notes: 'Test task notes 6', completed: false, project_id: 5},
        {description: 'Test task description 7', notes: 'Test task notes 7', completed: false, project_id: 6}
      ]);
    });
};
