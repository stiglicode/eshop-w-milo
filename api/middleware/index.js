// # Imports
//
const __error = require("./error.middleware");
const secureAPI = require("./secure.middleware");

// # Object makers
//
const errors = {
	notFound: __error.notFound,
	errorHandler: __error.errorHandler,
};

// # Exports
//
module.exports = {
	errors,
	secureAPI,
};
