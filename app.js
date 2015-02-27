var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var Twitter = require('twitter');
var ecstatic = require('ecstatic')({root: __dirname + '/public'});
var credentials = require('./credentials.js');

// Instantiate twitter client
var client;
credentials.getCredentials(function(keys){
	
	client = new Twitter({
		consumer_key: keys.consumer_key,
		consumer_secret: keys.consumer_secret,
		access_token_key: keys.access_token_key,
		access_token_secret: keys.access_token_secret
	});
});


////////////////////////////////////////////////////////////////////////////////////////
var results = {};

// TWITTER SEARCH 
function twitterSearch(since) {
	client.get('search/tweets', {q : '"@founderscoders" #stop OR #go OR #continue', result_type : 'recent', count: '100', since : since} , function(error, tweets, response){
	// POPULATE RESULTS OBJECT
		if (error) {
			console.log(error);
			return;
		}
		else if (tweets) {
			tweets.statuses.forEach(function(tweet, index) {
				// Check if new topic - new if 'retweeted status' property absent
				if (!tweet.retweeted_status) {
					// tweet URL: https://twitter.com/{user.screen_name}/status/{id_str}
					var tweetUrl = 'https://twitter.com/' + tweet.user.screen_name +'/status/' + tweet.id_str ;
					// strip hashtags and username from tweet text
					var tweetText = tweet.text.replace(/(^|\W)(@[a-z\d][\w-]*)|(#[a-z\d][\w-]*)/ig, '' ).trim();
					results[tweet.id] = {text : tweetText, retweets: tweet.retweet_count, hashtags: tweet.entities.hashtags, url: tweetUrl, user: tweet.user.screen_name};
				}
				// else tweet is retweet - set retweet count if greater than current
				else {
					if (results[tweet.id] && results[tweet.id].retweets < tweet.retweet_count) {
						results[tweet.id].retweets = tweet.retweet_count;
					}
				}
			});
		}
	});
}

setInterval(function(){
	// since date, format YEAR-MO-DA
	twitterSearch('2015-02-27');
},5000);

// SERVER

var server = http.createServer(function(req, res){
	if (req.url.match(/search/)) {
		// repackage into stop/go/continue properties
		var packagedResult = { 'stop' : [], 'go' : [], 'continue' : []};
		
		// TODO make this a function
		for (var key in results) {
			results[key].hashtags.forEach(function(hashtag, index) {
				if ( hashtag.text.match(/stop/i) ) {
					packagedResult.stop.push({ 	id : key, 
												text : results[key].text, 
												retweets : results[key].retweets,
												url : results[key].url, 
												user: results[key].user });
				}
				else if ( hashtag.text.match(/go/i) ) {
					packagedResult.go.push({ 	id : key, 
												text : results[key].text, 
												retweets : results[key].retweets,
												url : results[key].url, 
												user: results[key].user });
				}
				else if ( hashtag.text.match(/continue/i) ) {
					packagedResult['continue'].push({	id : key, 
														text : results[key].text, 
														retweets : results[key].retweets,
														url : results[key].url, 
														user: results[key].user });
				}
			});
		}
		console.log('Results: \n' + packagedResult);
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(packagedResult));
	}
	else {
		ecstatic(req, res);
	}
});

var currentPort = process.env.PORT || 8000;
server.listen(currentPort);
console.log('Server running on port ' + currentPort);
