const express = require('express');

const Projects = require('./projectModels.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(project => {
            res.json(project)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get projects.' })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.getProjectByID(id)
        .then(project => {
            if (project) {
                res.json(project)
            } else {
                res.status(404).json({ message: "Project with that ID does not exist." })
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to get project." })
        })
})

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.addProjects(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to add project.' })
        })
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.getTasksByProjectId(id)
        .then(tasks => {
            if (tasks.length) {
                res.json(tasks)
            } else {
                res.status(404).json({ message: "Could not find tasks for this project" })
            }
        })
        .catch(error => {
            res.status(500).json({ messge: "Failed to retrieve tasks" })
        })
})

router.get('/:id/resources', (req, res) => {
    const { id } = req.params;

    Projects.getResourcesByProjectId(id)
        .then(resources => {
            if (resources.length) {
                res.json(resources)
            } else {
                res.status(404).json({ message: "Could not find resources for this project" })
            }
        })
        .catch(error => {
            res.status(500).json({ messge: "Failed to retrieve resources" })
        })
})

module.exports = router;