var users = require("../models/").users;

module.exports = {
    index(req, res) {
        users.findAll().then((users) => {
            console.log(users);
            res.status(200).json(users);
        }).catch(function (err) {
            res.status(500).json(err);
        })
    },

    show(req, res) {
        users.findById(req.params.id, {

        }).then(function (user) {
            res.status(200).json(author);
        }).catch(function (error) {
            res.status(500).json(error);
        });
    },

    create(req, res) {
        users.create(req.body)
            .then(function (newAuthor) {
                res.status(200).json(newAuthor);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    //Edit an existing author details using model.update()
    update(req, res) {
        users.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function (updatedRecords) {
            res.status(200).json(updatedRecords);
        }).catch(function (error) {
            res.status(500).json(error);
        });
    },
    //Delete an existing author by the unique ID using model.destroy()
    delete(req, res) {
        users.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (deletedRecords) {
            res.status(200).json(deletedRecords);
        }).catch(function (error) {
            res.status(500).json(error);
        });
    }
};