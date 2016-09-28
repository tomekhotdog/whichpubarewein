function getPubName(currentPubNumber) {
	var pubs = ["The Dickins Tavern",
			"The Victoria", 
			"Duke Of Kendal", 
			"The Larrik", 
			"The Chapel"]

	if (currentPubNumber >= pubs.length) return "Not sure...";
	return pubs[currentPubNumber];
}

function getPubImageSource(currentPubNumber) {
	var sources = ["https://whatpub.com/img/WLD/16097/dickens-tavern-paddington/298/224/47207",
				  "http://www.victoriapaddington.co.uk/~/media/FAADC7B9C2984E9A9B0D542034CCA091.jpg?as=0",
				  "http://img01.beerintheevening.com/b3/b306934bee45d75974bfc641ef0ae1d3.jpg",
				  "http://www.pubandbar-network.co.uk/imagePubMain/1224594888pub.JPG",
				  "http://thechapellondon.com/images/gomena.jpg"];
	return sources[currentPubNumber];
}

function getRouteUrl() {
	return "https://www.google.co.uk/maps/dir/Dickens,+25+London+Street,+London+W2+1HH,+United+Kingdom/The+Victoria,+10A+Strathearn+Place,+London+W2+2NH,+United+Kingdom/Duke+Of+Kendal,+Connaught+Street,+London/THE+LARRIK,+Crawford+Place,+London/The+Chapel,+Chapel+Street,+London/@51.5167335,-0.1737021,16z/data=!3m1!4b1!4m32!4m31!1m5!1m1!1s0x48761ab2c5ce026f:0x9dc231aba0439f03!2m2!1d-0.1745341!2d51.5157862!1m5!1m1!1s0x4876054ca282a945:0x7517499701678b8a!2m2!1d-0.1712744!2d51.5134577!1m5!1m1!1s0x4876054acbdf9333:0xb934e229872d7952!2m2!1d-0.1662275!2d51.5145102!1m5!1m1!1s0x48761ab58c8fdffb:0xd67fdafad9561818!2m2!1d-0.1648794!2d51.5187936!1m5!1m1!1s0x48761ab5ddf0ea6b:0x920b92809176649c!2m2!1d-0.1662128!2d51.5198455!3e2";
}

function getCurrentPubRouteUrl(currentPubNumber) {
	switch(currentPubNumber) {
		case 0:
			return "https://www.google.co.uk/maps/dir/Wilson+House+-+Imperial+College+Halls,+Imperial+College+London,+Sussex+Gardens,+Paddington,+London/Dickens,+25+London+Street,+London+W2+1HH,+United+Kingdom/@51.5159729,-0.174462,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x48761ab48376eacf:0x22a7539da69ad1f2!2m2!1d-0.1700944!2d51.5170052!1m5!1m1!1s0x48761ab2c5ce026f:0x9dc231aba0439f03!2m2!1d-0.1745341!2d51.5157862?hl=en";
		case 1:
			return "https://www.google.co.uk/maps/dir/Wilson+House+-+Imperial+College+Halls,+Imperial+College+London,+Sussex+Gardens,+Paddington,+London/The+Victoria,+10A+Strathearn+Place,+London+W2+2NH,+United+Kingdom/@51.5152314,-0.1733304,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x48761ab48376eacf:0x22a7539da69ad1f2!2m2!1d-0.1700944!2d51.5170052!1m5!1m1!1s0x4876054ca282a945:0x7517499701678b8a!2m2!1d-0.1712744!2d51.5134577?hl=en";
		case 2:
			return "https://www.google.co.uk/maps/dir/Wilson+House+-+Imperial+College+Halls,+Imperial+College+London,+Sussex+Gardens,+Paddington,+London/Duke+Of+Kendal,+Connaught+Street,+London/@51.5158573,-0.1706272,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x48761ab48376eacf:0x22a7539da69ad1f2!2m2!1d-0.1700944!2d51.5170052!1m5!1m1!1s0x4876054acbdf9333:0xb934e229872d7952!2m2!1d-0.1662275!2d51.5145102?hl=en";
		case 3:
			return "https://www.google.co.uk/maps/dir/Wilson+House+-+Imperial+College+Halls,+Imperial+College+London,+Sussex+Gardens,+Paddington,+London/THE+LARRIK,+Crawford+Place,+London/@51.5176075,-0.1696756,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x48761ab48376eacf:0x22a7539da69ad1f2!2m2!1d-0.1700944!2d51.5170052!1m5!1m1!1s0x48761ab58c8fdffb:0xd67fdafad9561818!2m2!1d-0.1648794!2d51.5187936?hl=en";
		default:
			return "https://www.google.co.uk/maps/dir/Wilson+House+-+Imperial+College+Halls,+Imperial+College+London,+Sussex+Gardens,+Paddington,+London/The+Chapel,+Chapel+Street,+London/@51.5184657,-0.1701324,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x48761ab48376eacf:0x22a7539da69ad1f2!2m2!1d-0.1700944!2d51.5170052!1m5!1m1!1s0x48761ab5ddf0ea6b:0x920b92809176649c!2m2!1d-0.1662128!2d51.5198455?hl=en";
	}
}

function getCurrentPubSubtitle(currentPubNumber) {
	switch(currentPubNumber) {
		case 0:
			return "Cheapest pint: Fosters £4.15"
		case 1:
			return "Cheapest pint: Carling £4.10"
		case 2:
			return "Cheapest pint: British ales £4.25"
		case 3:
			return ""
		case 4:
			return "Cheapest pint: ales and bitters £3.90"
		default:
	}
}

module.exports = {
	getPubName,
	getPubImageSource,
	getRouteUrl,
	getCurrentPubRouteUrl,
	getCurrentPubSubtitle,
}