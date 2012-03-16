(function () {
	if (typeof exports === "undefined") {
		exports = {};
	}

	var dayNames = [
		"SUNDAY",
		"MONDAY",
		"TUESDAY",
		"WEDNESDAY",
		"THURSDAY",
		"FRIDAY",
		"SATURDAY"
	];

	exports.getDayName = function getDayName() {
		var now = new Date();
		return dayNames[ now.getDay() ];
	};
	exports.getDayFullString = function getDayFullString() {
		return "IT IS " + this.getDayName() + ".";
	}
})();

