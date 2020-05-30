const db = require('../data/db-config.js');

function getProjects() {
    return db('projects')
}

function getProjectByID(id) {
    return db('projects').where({ id }).first();
}

function getResources(id) {
    if (id) {
        return db('resources').where({ id })
    } else {
        return db('resources')
    }
}

function getTasks() {
    if (id) {
        return db('tasks').where({ id })
    } else {
        return db('tasks')
    }
}

function getTasksById(id) {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.id')
        .select('t.id', 'p.name', 'p.description', 'p.completed')
        .where({ project_id: id });
}

function addProjects(project) {
    return db('projects').insert(project)
}

function addResources() {
    return db('resources').insert(resource)
}

function addTasks() {
    return db('tasks').insert(task)
}

module.exports = {
    getProjects,
    getProjectByID,
    getResources,
    getTasks,
    getTasksById,
    addProjects,
    addResources,
    addTasks
};