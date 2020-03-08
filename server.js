const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Hello from server.")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
});
