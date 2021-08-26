const Patient = require("../models/patient.model.js");

exports.create = (req, res) => {
 if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const patient = new Patient({
    name: req.body.appointment.name,
    dob: req.body.appointment.dob,
    phone: req.body.appointment.phone,
    email: req.body.appointment.email,
    address: req.body.appointment.address,
    driverlicense: req.body.appointment.driverlicense,
    appointment: req.body.appointment.date
  });

  // Save Patient in the database
  Patient.create(patient, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Patient."
      });
    else res.send(data);
  }); 
};

// Retrieve all Patients from the database.
exports.findAll = (req, res) => {
  Patient.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving patients."
      });
    else res.send(data);
  });
};
