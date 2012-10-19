// client-side js

// - touch/mobile stuff
// TODO window.navigator.standalone
document.ontouchmove = function (e) {
	e.preventDefault();
};

// - day specific
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

		var p = document.getElementsByTagName("p")[0];

		var opacity = 0;
		function doIt() {
			img.style.opacity = opacity;
			p.style.opacity = 1 - opacity;

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

		this.img = img;
		this.p = p;
	},
	destroy: function () {
		if (this._inited) {
			document.body.removeChild( this.img );
			p.style.opacity = 1;
			this._inited = false;
			return true;
		}
		return false;
	}
};

// - common
(function () {
	var today = exports.getDayName();
	if (today == 'FRIDAY') {
		Friday.init();
	} else {
		Friday.destroy();
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
