// client-side js

// - touch/mobile stuff
// TODO window.navigator.standalone
document.ontouchmove = function (e) {
	e.preventDefault();
};

// - common
(function () {
	document
		.getElementsByTagName("p")[0]
		.innerHTML = exports.getDayFullString();
	// For styling
	document
		.getElementsByTagName("body")[0]
		.className = exports.getDayName().toLowerCase();
	// Reset every ten seconds
	window.setTimeout(
		arguments.callee, 10000
	);
})();

