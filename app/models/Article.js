const mongoose = require("mongoose");

// Define Article schema
const articleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String
        },
        author: {
            type: String,
            required: true
        },
        published: {
            type: Boolean,
            default: true
        },
        publishedOn: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

// Compile Model based on the schema
const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
