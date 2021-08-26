const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();


app.use(fileUpload({
  createParentPath: true
}))
app.use(cors())
// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post("/photo", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
	message: "No files"
      })
    } else {
      const {picture} = req.files

      picture.mv("./uploads/" + picture.name)

      res.send({
        status: true,
	message: "File is uploaded",
	path: picture
      })
    }
  } catch (e) {
    res.status(500).send(e);
  }
})

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./patient.routes.js")(app);
// set port, listen for requests

app.use('/static', express.static('uploads'))

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});
