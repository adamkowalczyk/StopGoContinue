// TODO: strip @founderscoders and #hashtags from text
// Make colours proportional to colour space -curenttly, illegal values possible .. something like (255/maxRetweets)*retweets or colorScale?
// Do mouseover highlight in d3 use the data, not a placeholder
// 


// Mock Data ////////////////////////////////////////////////////////////////////////////
var mock1 = {
	'stop' : [{id: 1 , retweets: 3 , text: 'This is a sample tweet to see how long\n 140 characters might be on my screen, probably too long\n for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk'}, {id: 2 , retweets: 2 , text: 'This is a sample tweet to see how long 140 characters might be on my screen, probably too long for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk'}, {id: 3 , retweets: 6 , text: 'This is a sample tweet to see how long 140 characters might be on my screen, probably too long for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk'}, {id: 4 , retweets: 7 , text: 'This is a sample tweet to see how long 140 characters might be on my screen, probably too long for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk'}],
	'go' : [{id: 1 , retweets: 0 , text: 'This is a sample tweet to see how long 140 characters might be on my screen, probably too long for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 2 , retweets: 9 , text: 'Another Idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 3 , retweets: 0 , text: 'Not such a good idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 4 , retweets: 1 , text: 'Yet another idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }],
	'continue' : [{id: 1 , retweets: 4 , text: 'This is a sample tweet to see how long 140 characters might be on my screen, probably too long for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 2 , retweets: 5 , text: 'Another Idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 3 , retweets: 3 , text: 'Not such a good idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 4 , retweets: 3 , text: 'Yet another idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }],
};

var mock2 = {
	'stop' : [{id: 1 , retweets: 3 , text: 'This is a sample tweet to see how long\n 140 characters might be on my screen, probably too long\n for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 2 , retweets: 2 , text: 'This is a sample tweet to see how long 140 characters might be on my screen, probably too long for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk'}, {id: 3 , retweets: 6 , text: 'Not such a good idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk'}, {id: 4 , retweets: 7 , text: 'Yet another idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 5 , retweets: 5 , text: 'Yet another idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 6 , retweets: 2 , text: 'Yet another idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }],
	'go' : [{id: 1 , retweets: 0 , text: 'This is a sample tweet to see how long 140 characters might be on my screen, probably too long for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 2 , retweets: 9 , text: 'This is a sample tweet to see how long 140 characters might be on my screen, probably too long for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk'}, {id: 3 , retweets: 0 , text: 'Not such a good idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }],
	'continue' : [{id: 1 , retweets: 4 , text: 'This is a sample tweet to see how long 140 characters might be on my screen, probably too long for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 2 , retweets: 5 , text: 'This is a sample tweet to see how long 140 characters might be on my screen, probably too long for two columns. Uh-oh!!!', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk'}, {id: 3 , retweets: 3 , text: 'Not such a good idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 4 , retweets: 3 , text: 'Yet another idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 5 , retweets: 0 , text: 'Yet another idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk'}, {id: 6 , retweets: 5 , text: 'Yet another idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 7 , retweets: 12 , text: 'Yet another idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }],
};

var mock3 = {
	'stop' : [{id: 1 , retweets: 6 , text: 'An Idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 2 , retweets: 8 , text: 'Another Idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }],
	'go' : [{id: 1 , retweets: 8 , text: 'An Idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 2 , retweets: 4 , text: 'Another Idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }],
	'continue' : [{id: 1 , retweets: 2 , text: 'An Idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }, {id: 2 , retweets: 13 , text: 'Another Idea', url : 'https://twitter.com/JavaScriptDaily/status/570599367331192832', user : 'A__Kowalczyk' }],
};

var mockEmpty = {};

var mocks = [mock1, mock2, mock3];
var count = 0;
var currentMock;
setInterval(function(){
	currentMock = mocks[count];
	if (count === 2) {
		count = 0;
	}
	else {
		count++;
	} 
},5000);
///////////////////////////////////////////////////////////////////////////////////

// Set trafficLight to change dataset
var trafficLight;

 //Width and height
var w = 1200;
var h = 300;

var svg;

function getTweets() {
	$.getJSON('./search')
	.done(function(tweets){
		console.log(tweets);
		drawChart(tweets); //(tweets)
	});
}

function drawChart(data) {

	var xScale = d3.scale.ordinal()
						.domain(d3.range(data[trafficLight].length))
						.rangeRoundBands([0, w], 0.02);
	
	// Get array of retweet counts for current chart
	var retweetList = [];
	data[trafficLight].forEach(function(tweet, index){
		retweetList.push(tweet.retweets);
	});

	// Use array to find max retweet count, and create range for y-axis
	var yScale = d3.scale.linear()
						.domain([0, d3.max(retweetList) + 1])
						.range([0, h]);

	var colorScale = d3.scale.linear()
						.domain([0, d3.max(retweetList)])
						.range([0,255]);

	var bars = svg.selectAll("rect").data(data[trafficLight]);
	var labels = svg.selectAll("text").data(data[trafficLight]);
	var tweetText = svg2.selectAll('text').data(data[trafficLight]);

	// Add new bars off right
	bars.enter()
			.append("rect")
			.attr({
				x 				: 	w,
				y 				: 	function(d) { return h - yScale(d.retweets+1); },
				width 			: 	xScale.rangeBand(),
				height 			: 	function(d) { return yScale(d.retweets+1); },
				class			: 	'target',
				'tweet-id'		: 	function(d) { return d.id; },
				'tweet-url'		: 	function(d) { return d.url; },
				'data-toggle'	: 	'tooltip',
				'data-container': 	'body',
				'data-placement': 	'bottom',
				title			: 	function(d) { return d.text; }
			});

	// Add new text 
	labels.enter()
			.append("text")
			.text(function(d) {
				return d.retweets;
			})
			.attr({
				x				: 	w,
				y				: 	function(d) { return h - yScale(d.retweets +1) + 14; },
				'text-anchor'	: 	'middle',
				'font-family'	: 	'sans-serif',
				'font-size'		: 	'16px',
				fill			: 	'white'
			});

	tweetText.enter()
			.append('text')
			.text(function(d){
				return d.text +' - ' + d.retweets;
			})
			.attr({
				x 				: 	25, //2 columns <= function(d,i) {return i % 2 === 0 ?  50 : 650 ;},
				y 				: 	h * 2,
				class 			: 	'target',
				'tweet-id'		: 	function(d) { return d.id; },
				'tweet-url'		: 	function(d) { return d.url; },
				'font-family'	: 	'sans-serif',
				'font-size'		: 	'20px',
				'fill'			: 	'white',
				'data-toggle'	: 	'tooltip',
				'data-container': 	'body',
				'data-placement': 	'bottom',
				title			: 	function(d) { return d.user; }
			});

	// Exit code needed when switching to a smaller dataset
	 bars.exit()
		.transition()
		.duration(500)
		.attr('x', w)
		.remove();

	labels.exit()
		.transition()
		.duration(500)
		.attr('x', w)
		.remove();

	tweetText.exit()
		.transition()
		.duration(500)
		.attr('y', h * 2)
		.remove();

	// Transition elements in, AND alter extant elements in place
	bars.transition()
		.duration(500)
		.attr({
			x 			: 	function(d, i) { return xScale(i); },
			y 			: 	function(d) { return h - yScale(d.retweets +1); },
			width 		: 	xScale.rangeBand(),
			height		: 	function(d) { return yScale(d.retweets +1); },
			class		: 	'target',
			'tweet-id'	: 	function(d){ return d.id; },
			'tweet-url'	: 	function(d){ return d.url; },
			fill		: 	function(d) {
											if (trafficLight === 'go') {
												return "rgb(0," + colorScale(d.retweets) + ",0)";  // (d.retweets * 30)
											}
											else if (trafficLight === 'stop') {
												return "rgb(" + colorScale(d.retweets) + ",0,0)";
											}
											else if (trafficLight === 'continue') {
												return "rgb(" + colorScale(d.retweets) + "," + Math.floor(colorScale(d.retweets / 2)) +  ",0)";
											}
										}
		});


	labels.transition()
			.duration(500)
			.text(function(d) {
				return d.retweets;
			})
			.attr({
				x 			: 	function(d, i) { return xScale(i) + xScale.rangeBand() / 2; },
				y 			: 	function(d) { return h - yScale(d.retweets +1) + 14; },
				width 		: 	xScale.rangeBand(),
				height		: 	function(d) { return yScale(d.retweets +1); }
			});

	tweetText.transition()
			.duration(500)
			.text(function(d){
				return d.text +' - ' + d.retweets;
			})
			.attr({
				y 			: 	function(d,i) { return i * 30 + 30; }, // 2 columns <= Math.floor(i/2)
				class 		: 	'target',
				'tweet-id'	: 	function(d){ return d.id; },
				'tweet-url'	: 	function(d){ return d.url; }
			});

	$("body").tooltip({ selector: '[data-toggle=tooltip]' });


	d3.selectAll('.target')
		.on('mouseover', function(){
			console.log(d3.select(this).attr('tweet-id'));
			d3.selectAll('[tweet-id="'+d3.select(this).attr("tweet-id")+'"]')
			.attr('fill', 'rgb(125,0,255)');
		})
		.on('mouseleave', function(){
			d3.select('text[tweet-id="'+d3.select(this).attr("tweet-id")+'"]')
				.attr('fill', 'white');
			d3.select('rect[tweet-id="'+d3.select(this).attr("tweet-id")+'"]')
				.attr('fill', function(d) { 
												if (trafficLight === 'go') {
													return "rgb(0," + colorScale(d.retweets) + ",0)";  // (d.retweets * 30)
												}
												else if (trafficLight === 'stop') {
													return "rgb(" + colorScale(d.retweets) + ",0,0)";
												}
												else if (trafficLight === 'continue') {
													return "rgb(" + colorScale(d.retweets) + "," + Math.floor(colorScale(d.retweets / 2)) +  ",0)";
												}
											});
		});

}


$(document).ready(function(){

	svg = d3.select("body").append("svg").attr( { width : w, height : h, id : 'barchart' });

	svg2 = d3.select("body").append("svg").attr( { width : w, height : h * 2 , id : 'tweet-text'});

	// Open tweet in new tab on click
	$(document).on('click', '.target', function(){
		var tweetUrl = $(this).attr('tweet-url');
		window.open(tweetUrl);
	});

	setInterval(function(){
		trafficLight = $('.chart-select:checked').val();
		getTweets();
	},5000);

});