module.exports = app => {
  const patients = require("./controllers/patient.controller.js");

  // Create a new Patient
  app.post("/patients", patients.create);

  // Retrieve all Patients
  app.get("/patients", patients.findAll);
};
