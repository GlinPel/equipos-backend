const mongoose = require("mongoose");

const EquipoSchema = new mongoose.Schema({
	name: {
		type: String,
		require: [true, "El nombre es obligatorio"],
		minLength: [3, "El nombre debe tener más de 3 carácteres"]
	},
	position: {
		type: String,
		require: false,
	},
	status: {
		type: Number,
		default: 0
	}
});

const Equipo = mongoose.model("Equipo", EquipoSchema);

module.exports = Equipo;