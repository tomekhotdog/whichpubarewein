function getPubName(currentPubNumber) {
	return ["Pub1",
			"Pub2", 
			"Pub3", 
			"Pub4", 
			"Pub5",
			"Pub6"][currentPubNumber]
}

module.exports = {
	getPubName,
}