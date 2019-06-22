const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./config/db");
const routerIndex = require("./routes/index");

db.sync({ force: true });

app.use(bodyParser.json());

// Test db
db.authenticate()
  .then(() => console.log("DB connected"))
  .catch(e => console.log(e));

app.use("/", routerIndex);

const port = 8000;

app.listen(port, () => {
  console.log("We are live on " + port);
});
