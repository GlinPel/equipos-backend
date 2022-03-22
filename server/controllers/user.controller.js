const Equipo = require("../models/user.model");

module.exports.findAllEquipos = (req, res) => {
  Equipo.find()
    .then( equipo => res.json({ equipo }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleEquipo = (req, res) => {
	Equipo.findOne({ _id: req.params.id })
		.then( equipo => res.json({ equipo }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewEquipo = (req, res) => {
  Equipo.create(req.body)
    .then( equipo => res.json({ equipo }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingEquipo = (req, res) => {
  Equipo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then( equipo => res.json({ equipo }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingEquipo = (req, res) => {
  Equipo.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
