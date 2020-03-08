const router = require("express").Router();
const Article = require("../models/Article");

/**
 * @route   GET /api/articles
 * @action  INDEX
 * @desc    Get all articles
 * @access  Public
 */
router.get("/", (req, res) => {
    Article.find({})
        .then(articles => res.status(200).json({ articles }))
        .catch(err => res.status(400).json({err}));
});

module.exports = router;
