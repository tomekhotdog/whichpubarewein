function getPubName(currentPubNumber) {
	var pubs = ["Dickins",
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

module.exports = {
	getPubName,
	getPubImageSource,
}