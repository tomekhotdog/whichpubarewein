function getCurrentTime() {
	return Date.now();
}

function getCrawlStartTime() {
	return new Date("2016/10/11 20:00:00");
}

function getCrawlEndTime() {
	return new Date("2016/10/11 23:59:59");
}

function getTimeToCrawlStart() {
	return new Date(Math.max(0, getCrawlStartTime() - getCurrentTime()));
}

function getDaysLeft() {
	var ONE_DAY = 1000 * 60 * 60 * 24;
	if (getTimeToCrawlStart() < ONE_DAY) {
		return 0;
	}
	return Math.round(getTimeToCrawlStart() / ONE_DAY);
}

function getHoursLeft() {
	return Math.abs(getTimeToCrawlStart().getHours());
}

function getMinutesLeft() {
	return Math.abs(getTimeToCrawlStart().getMinutes());
}

function getSecondsLeft() {
	return Math.abs(getTimeToCrawlStart().getSeconds());
}

function isPubCrawlNow() {
	return (Date.now() - getCrawlStartTime() > 0) && (getCrawlEndTime - Date.now() > 0)
}

// Assuming spending 30mins at each pub, count is from 0 - 5.
function getCurrentPubNumber() {
	if (Date.now() < getCrawlStartTime()) {
		console.log("getCurrentPubNumber: 0")
		return 0;
	}

	if (Date.now() > getCrawlEndTime()) {
		console.log("getCurrentPubNumber: 5")
		return 5;
	}

	var THIRTY_MINUTES = 1000 * 60 * 30;
	console.log("getCurrentPubNumber: " + (getCurrentTime() - getCrawlStartTime()) / THIRTY_MINUTES);
	return Math.floor((getCurrentTime() - getCrawlStartTime()) / THIRTY_MINUTES);
}

module.exports = {
	getDaysLeft,
	getHoursLeft,
	getMinutesLeft,
	getSecondsLeft,
	getTimeToCrawlStart,
	getCrawlStartTime,
	getCurrentTime,
	getCurrentPubNumber,
}