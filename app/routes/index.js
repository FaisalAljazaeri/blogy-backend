const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Hello from server.");
});

module.exports = router;
