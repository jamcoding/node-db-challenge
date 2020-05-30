const db = require('../data/db-config.js');

function getProjects() {
    return db('projects')
}

function getProjectByID(id) {
    return db('projects').where({ id }).first();
}

function getTasksByProjectId(id) {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.id')
        .select('t.id', 'p.name', 'p.description', 'p.completed')
        .where({ project_id: id });
}

function getResourcesByProjectId(id) {
    return db('resources as r')
        .join('projects as p', 'p.id', 'r.id')
        .select('r.id', 'r.name', 'p.name', 'p.description', 'p.completed')
        .where({ resource_id: id });
}

function addProjects(project) {
    return db('projects').insert(project)
}

function addResources(resource) {
    return db('resources').insert(resource)
}

function addTasks(task) {
    return db('tasks').insert(task)
}

module.exports = {
    getProjects,
    getProjectByID,
    getTasksByProjectId,
    getResourcesByProjectId,
    addProjects,
    addResources,
    addTasks
};