const express = require("express");
const cityRoute = require("./routes/cities");
const itineraryRoute = require("./routes/itineraries");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose")

const db = require('./config/keys').mongoURI;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/cities", cityRoute);
app.use("/itineraries", itineraryRoute);

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
