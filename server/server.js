const express = require("express");
const citiesRoute = require("./routes/cities");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/cities", citiesRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});