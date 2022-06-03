//
// Eric Morgan
// Copyright (c) 2014. 
//

// Class for implementing a tip calculator

global.swissclac = global.swissclac || {};
global.swissclac.calc = global.swissclac.calc || {};
global.swissclac.calc.tipCalculator = function () {
	this._subtotal = new global.swissclac.display.fixedPointDisplay(2);	// Use fixed point display to handle keypad inputs
	this._tipPercent = 0.15;										// Store the actual value
};

// Getters...
global.swissclac.calc.tipCalculator.prototype.getSubtotalValue = function () { return this._subtotal.getDisplayValue(); };
global.swissclac.calc.tipCalculator.prototype.getTipValueDecimal = function () { return this._tipPercent; };
global.swissclac.calc.tipCalculator.prototype.getTipValuePercentage = function () { return this._tipPercent * 100.0; };

// Setters...
global.swissclac.calc.tipCalculator.prototype.setSubtotalValue = function (value) { this._subtotal.setDisplayValue(value); };
global.swissclac.calc.tipCalculator.prototype.setTipValueDecimal = function (decimal) { this._tipPercent = decimal; };
global.swissclac.calc.tipCalculator.prototype.setTipValuePercentage = function (perc) { this._tipPercent = perc / 100.0; };

// Display functions...
global.swissclac.calc.tipCalculator.prototype.getSubtotalDisplay = function () { return global.swissclac.lib.format.asUSCurrency(this._subtotal.getDisplayValue()); };
global.swissclac.calc.tipCalculator.prototype.getTipPercentDisplay = function () { return (this._tipPercent * 100.0).toFixed(1) + "%"; };
global.swissclac.calc.tipCalculator.prototype.getTipAmountDisplay = function () { return global.swissclac.lib.format.asUSCurrency(this.getTipAmount()); };
global.swissclac.calc.tipCalculator.prototype.getTipCombinedDisplay = function () { return this.getTipPercentDisplay() + " " + this.getTipAmountDisplay(); };
global.swissclac.calc.tipCalculator.prototype.getTotalDisplay = function () { return global.swissclac.lib.format.asUSCurrency(this.getTotal()); };

// Returns the tip amount (in dollars)
global.swissclac.calc.tipCalculator.prototype.getTipAmount = function () {
	var subtotal = this.getSubtotalValue();
	return subtotal * this._tipPercent;
};

// Returns the bill total including tip (in dollars)
global.swissclac.calc.tipCalculator.prototype.getTotal = function () {
	var tipAmount = this.getTipAmount();
	return this.getSubtotalValue() + tipAmount;
};