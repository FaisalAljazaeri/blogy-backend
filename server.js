const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const indexRouter = require("./app/routes/index");
const articlesRouter = require("./app/routes/article");

// Require DB Config File
const db = require("./config/db");

// Establish DB connection
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once("open", () => {
    console.log("Connected");
});

const port = process.env.PORT || 5000;
const reactPort = 3000;

// Set CORS headers on response from this API using the `cors` NPM package
app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}`
    })
);

app.use(express.json());

app.use("/", indexRouter);
app.use("/api/articles", articlesRouter);

app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
});
