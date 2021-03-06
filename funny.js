var FunnyCinemaQuotes = function(){
	var quotes = [
		{sentence: "Go ahead, make my day.",character: "\"Dirty\" Harry Callahan"},
		{sentence:"Frankly, my dear, I don't give a damn.",character: "Rhett Butler and any guy with a broken heart"},
		{sentence:"I'm gonna make him an offer he can't refuse.",character: "Vito Corleone"},
		{sentence: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",character: "\"Dirty\" Harry Callahan"},
		{sentence:"Rosebud.",character: "Charles Foster Kane and my inner kid after I watched that movie"},
		{sentence:"Bond. James Bond.",character: "I don't need to tell you who said that"},
		{sentence:"I'll be back.",character: "This machine before the apocalypse... and the Terminator"},
		{sentence:"Houston, we have a problem.",character: "Jim Lovell and everyone who played to be an astronaut"},
		{sentence:"Here's Johnny!",character: "Jack Torrance... and you must watch that film if you haven't"},
		{sentence:"Mama always said life was like a box of chocolates. You never know what you're gonna get.",character: "Forrest Gump"},
		{sentence:"I'm sorry, Dave. I'm afraid I can't do that.",character: "HAL... and my roomates"},
		{sentence:"My precious.",character: "Accept it, everyone told that once because Gollum"},
		{sentence:"A martini. Shaken, not stirred.",character: "Me trying to be cool (James Bond copied me)"},
		{sentence:"I'm the king of the world!",character: "Jack Dawson, Freeze!!!!"}
	];
	
	this.getRandomQuote = function() {
		var quotesNumber = quotes.length;
		var random = parseInt(Math.random()*quotesNumber);
		return quotes[random];
	}
	
	this.printQuoteConsole = function() {
		quote = this.getRandomQuote();
		console.log("%c\""+quote.sentence+"\"\n%c"+quote.character,"font-style: italic;","font-weight: bold;");
	}
}