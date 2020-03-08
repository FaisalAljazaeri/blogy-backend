const express = require("express");
const mongoose = require("mongoose");
const app = express();
const indexRoute = require("./routes/index");

app.use(express.json());

app.use("/", indexRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
});
