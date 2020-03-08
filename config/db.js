// Creating a base name for the MongoDB
const mongooseBaseName = "blogy";

// Create the MongoDB URI for Development and test
const database = {
    development: `mongodb://localhost/${mongooseBaseName}-development`,
    test: `mongodb://localhost/${mongooseBaseName}-test`
};

// Identify if development environment is Test or Development
const localDB = process.env.TESTENV ? database.test : database.development;

// Environment variable MONGODB_URI will be avilable in
// Heroku production environemnt, otherwise use Test or Development
const currentDB = process.env.MONGODB_URI || localDB;

// Export the aprpiate DB based on the cureent environemt
module.exports = currentDB;
