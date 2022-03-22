const EquipoController = require("../controllers/user.controller");

module.exports = app => {
  app.get("/api/equipos/", EquipoController.findAllEquipos);
  app.get("/api/equipos/:id", EquipoController.findOneSingleEquipo);
  app.put("/api/equipos/update/:id", EquipoController.updateExistingEquipo);
  app.post("/api/equipos/new", EquipoController.createNewEquipo);
  app.delete("/api/equipos/delete/:id", EquipoController.deleteAnExistingEquipo);
};