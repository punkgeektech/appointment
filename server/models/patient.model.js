const sql = require("./db.js");

const Patient = function(patient) {
  this.name = patient.name;
  this.dob = patient.dob;
  this.phone = patient.phone;
  this.email = patient.email;
  this.address = patient.address;
  this.driverlicense = patient.driverlicense;
  this.appointment = patient.appointment;
};

Patient.create = (newPatient, result) => {
  sql.query("INSERT INTO user SET ?", newPatient, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created patient: ", { id: res.insertId, ...newPatient });
    result(null, { id: res.insertId, ...newPatient });
  });
};

Patient.getAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("patients: ", res);
    result(null, res);
  });
};

module.exports = Patient;
