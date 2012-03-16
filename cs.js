// client-side js

// TODO window.navigator.standalone

document.ontouchmove = function (e) {
	e.preventDefault();
};


(function () {

var dayNames = [
	"SUNDAY",
	"MONDAY",
	"TUESDAY",
	"WEDNESDAY",
	"THURSDAY",
	"FRIDAY",
	"SATURDAY"
];

var el = document.getElementsByTagName("p")[0];

(function () {
	var now = new Date();
	document.getElementsByTagName("body")[0].className = dayNames[ now.getDay() ].toLowerCase();

	setDisplayString(el);
	window.setTimeout( arguments.callee, 10000 );
})();


function getString()
{
	var now = new Date();
	return "IT IS " + dayNames[ now.getDay() ] + ".";
}

function setDisplayString(el)
{
	el.innerHTML = getString();
}

})();
