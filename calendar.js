exports = (function () {
	var dayNames = [
		"SUNDAY",
		"MONDAY",
		"TUESDAY",
		"WEDNESDAY",
		"THURSDAY",
		"FRIDAY",
		"SATURDAY"
	];
	return {
		getDayName: function () {
			var now = new Date();
			return dayNames[ now.getDay() ];
		},
		getDayFullString: function () {
			return "IT IS " + this.getDayName() + ".";
		}
	};
})();

