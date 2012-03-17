// client-side js

// - touch/mobile stuff
// TODO window.navigator.standalone
document.ontouchmove = function (e) {
	e.preventDefault();
};

var Friday = {
	_inited: false,
	init: function () {
		if (this._inited) {
			return true;
		}
		this._inited = true;

		var img = document.createElement("img");
		img.src = "friday.jpg";

		document.body.appendChild( img );

		var opacity = 0;
		function doIt() {
			img.style.opacity = opacity;
			opacity = Math.round((opacity + 0.01) * 100) / 100;
			if (opacity > 1) {
				return true;
			}
			return false;
		}

		(function () {
			if (!doIt()) {
				window.setTimeout(arguments.callee, 1000);
			}
		})();
	}
};

// - common
(function () {
	var today = exports.getDayName();
	if (today == 'FRIDAY') {
		Friday.init();
	}

	document
		.getElementsByTagName("p")[0]
		.innerHTML = exports.getDayFullString();
	// For styling
	document
		.getElementsByTagName("body")[0]
		.className = today.toLowerCase();
	// Reset every ten seconds
	window.setTimeout(
		arguments.callee, 10000
	);
})();
