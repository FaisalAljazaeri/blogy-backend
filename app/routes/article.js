const router = require("express").Router();
const Article = require("../models/Article");

/**
 * @method GET
 * @route   /api/articles
 * @action  INDEX
 * @desc    Get all articles
 * @access  Public
 */
router.get("/", (req, res) => {
    Article.find({})
        .then(articles => res.status(200).json({ articles }))
        .catch(err => res.status(400).json({ err }));
});

/**
 * @method GET
 * @route   /api/articles/:id
 * @action  SHOW
 * @desc    Get an article by id
 * @access  Public
 */

/**
 * @method POST
 * @route   /api/articles
 * @action  CREATE
 * @desc    Create a new article
 * @access  Public
 */
router.post("/", (req, res) => {
    Article.create(req.body.article)
        .then(article => res.status(201).json({ article }))
        .catch(err => res.status(400).json({ err }));
});

/**
 * @method PATCH
 * @route   /api/articles/:id
 * @action  UPDATE
 * @desc    Update an article by id
 * @access  Public
 */

/**
 * @method DELETE
 * @route   /api/articles/:id
 * @action  DESTROY
 * @desc    Delete an article by id
 * @access  Public
 */
module.exports = router;
