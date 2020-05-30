const db = require('../data/db-config.js');

function getProjects() {
    return db('projects')
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

function addProjects(project) {
    return db('projects').insert(project, 'id')
}

function addResources() {
    return db('resources').insert(resource, 'id')
}

function addTasks() {
    return db('tasks').insert(task, 'id')
}

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProjects,
    addResources,
    addTasks
};