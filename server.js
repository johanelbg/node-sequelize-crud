const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./config/db");

db.sync({ force: true });

app.use(bodyParser.json());

// Test db
db.authenticate()
  .then(() => console.log("DB connected"))
  .catch(e => console.log(e));

app.use("/companies", require("./routes/companies"));

const port = 8000;

app.listen(port, () => {
  console.log("We are live on " + port);
});
