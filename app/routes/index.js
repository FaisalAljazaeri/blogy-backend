const router = require("express").Router();

/**
 * @route   GET /
 * @action  INDEX
 * @desc    Get index
 * @access  Public
 */
router.get("/", (req, res) => {
    res.send("Hello from server.");
});

module.exports = router;
