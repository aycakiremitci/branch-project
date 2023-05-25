const db = require("../models");
const Branches = db.branches;
const Op = db.Sequelize.Op;

exports.getAll = (req, res) => {
    Branches.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving branches."
            });
        });
};

exports.getBranchById = (req, res) => {
    const id = req.params.id;

    Branches.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Branch with id=" + id + " " + err
            });
        });
};

exports.updateBranchById = (req, res) => {
    const id = req.params.id;

    Branches.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Branch was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Branch with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Branch with id=" + id
            });
        });
};
