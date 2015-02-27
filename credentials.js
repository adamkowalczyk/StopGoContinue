// Refactor to use process.env || require

var fs = require('fs');
var path = require('path');
module.exports = {
	getCredentials : function(callback) {
				var configCheck = true;
				var config;
				try {
					fs.readFileSync(path.join(__dirname,'config.json'));
				}
				catch (e) {
					configCheck = false;
				}
				if (configCheck) {
					config = require('./config.json');
				}

				// Set Ig key variables
				if (configCheck) {
					return callback({	consumer_key: config.cKey,
										consumer_secret: config.cSecret,
										access_token_key: config.atKey,
										access_token_secret: config.atSecret});
				}
				else {
					return callback({	consumer_key: process.env.C_KEY,
										consumer_secret: process.env.C_SECRET,
										access_token_key: process.env.AT_KEY,
										access_token_secret: process.env.AT_SECRET});
				}
	}
};