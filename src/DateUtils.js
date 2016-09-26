function getCurrentTime() {
	return Date.now();
}

function getCrawlStartTime() {
	return new Date("2016/09/27 20:00:00");
}

function getCrawlEndTime() {
	return new Date("2016/09/27 23:59:59");
}

function getTimeToCrawlStart() {
	return new Date(Math.abs(getCrawlStartTime() - getCurrentTime()));
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
		return 0;
	}

	if (Date.now() > getCrawlEndTime()) {
		return 5;
	}

	var THIRTY_MINUTES = 1000 * 60 * 30;
	return (getCurrentTime() - getCrawlStartTime()) / THIRTY_MINUTES;
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