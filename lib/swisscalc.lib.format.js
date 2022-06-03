//
// Eric Morgan
// Copyright (c) 2014. 
//

global.swissclac = global.swissclac || {};
global.swissclac.lib = global.swissclac.lib || {};
global.swissclac.lib.format = function () { };

// Adds commas to the given numeric-string to group digits.
global.swissclac.lib.format.groupDigits = function (number) {
	// http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript/2901298#2901298
	var parts = number.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
};

// Formats the given number as a US currency string
global.swissclac.lib.format.asUSCurrency = function (number) {
	var s = number.toFixed(2);
	s = global.swissclac.lib.format.groupDigits(s);
	return (s.charAt(0) == "-") ? "-$" + s.substring(1) : "$" + s;
};