function getPubName(currentPubNumber) {
	var pubs = ["The Dickins Tavern",
			"Duke Of Kendal", 
			"Lord Wargrave", 
			"The Larrik", 
			"The Chapel"]

	if (currentPubNumber >= pubs.length) return "Not sure...";
	return pubs[currentPubNumber];
}

function getPubImageSource(currentPubNumber) {
	var sources = ["https://whatpub.com/img/WLD/16097/dickens-tavern-paddington/298/224/47207",
				  "http://img01.beerintheevening.com/b3/b306934bee45d75974bfc641ef0ae1d3.jpg",
				  "http://www.perfectpint.co.uk/files/pubs/original/Lord_Wargrave_comp.png",
				  "http://www.pubandbar-network.co.uk/imagePubMain/1224594888pub.JPG",
				  "http://thechapellondon.com/images/gomena.jpg"];
	return sources[currentPubNumber];
}

function getRouteUrl() {
	return "https://www.google.co.uk/maps/dir/Dickens,+25+London+Street,+London+W2+1HH,+United+Kingdom/Duke+Of+Kendal,+38+Connaught+Street,+London+W2+2AF,+United+Kingdom/Lord+Wargrave,+Brendon+Street,+London/THE+LARRIK,+Crawford+Place,+London/The+Chapel,+Chapel+Street,+London/@51.5167982,-0.1737369,16z/data=!3m1!4b1!4m32!4m31!1m5!1m1!1s0x48761ab2c5ce026f:0x9dc231aba0439f03!2m2!1d-0.1745341!2d51.5157862!1m5!1m1!1s0x4876054acbdf9333:0xb934e229872d7952!2m2!1d-0.1662853!2d51.5145443!1m5!1m1!1s0x48761ab598773367:0xa7aca0158085ae4e!2m2!1d-0.165795!2d51.518106!1m5!1m1!1s0x48761ab58c8fdffb:0xd67fdafad9561818!2m2!1d-0.1648794!2d51.5187936!1m5!1m1!1s0x48761ab5ddf0ea6b:0x920b92809176649c!2m2!1d-0.1662128!2d51.5198455!3e2";
}

function getCurrentPubRouteUrl(currentPubNumber) {
	switch(currentPubNumber) {
		case 0:
			return "http://maps.apple.com/?q=51.515790,-0.174535";
		case 1:
			return "http://maps.apple.com/?q=51.514637,-0.165602";
		case 2:
			return "http://maps.apple.com/?q=51.518092,-0.165778";
		case 3:
			return "http://maps.apple.com/?q=51.518782,-0.164870";
		default:
			return "http://maps.apple.com/?q=51.519871,-0.166196";
	}
}

function getCurrentPubSubtitle(currentPubNumber) {
	switch(currentPubNumber) {
		case 0:
			return "Cheapest pint: Fosters £4.15";
		case 1:
			return "Cheapest pint: British ales £4.25";
		case 2:
			return "";
		case 3:
			return "";
		case 4:
			return "Cheapest pint: ales and bitters £3.90";
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