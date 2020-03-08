const express = require("express");
const mongoose = require("mongoose");
const app = express();
const indexRoute = require("./app//routes/index");

// Require DB Config File
const db = require("./config/db");

// Establish DB connection
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once("open", () => {
    console.log("Connected");
});

app.use(express.json());

app.use("/", indexRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
});
