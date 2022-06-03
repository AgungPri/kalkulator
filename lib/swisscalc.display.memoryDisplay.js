//
// Eric Morgan
// Copyright (c) 2014. 
//

// Class for displaying/storing the memory on a calculator.

global.swissclac = global.swissclac || {};
global.swissclac.display = global.swissclac.display || {};
global.swissclac.display.memoryDisplay = function () {
	this._display = "";
	this._memValue = 0;
	this._hasMemory = false;
};

// Returns true if memory is set.
global.swissclac.display.memoryDisplay.prototype.hasMemory = function () {
	return this._hasMemory;
};

// Returns current display
global.swissclac.display.memoryDisplay.prototype.getCurrentDisplay = function () {
	return this._display;
};

// Returns memory value.
global.swissclac.display.memoryDisplay.prototype.memoryRecall = function () {
	return this._memValue;
};

// Sets the memory to the given value.
global.swissclac.display.memoryDisplay.prototype.memorySet = function (val) {
	this._hasMemory = true;
	this._memValue = val;
	this._display = "M";
};

// Adds given number to the memory.
global.swissclac.display.memoryDisplay.prototype.memoryPlus = function (val) {
	this._hasMemory = true;
	this._memValue += val;
	this._display = "M";
};

// Subtracts the given value from memory.
global.swissclac.display.memoryDisplay.prototype.memoryMinus = function (val) {
	this._hasMemory = true;
	this._memValue -= val;
	this._display = "M";
};

// Clears the memory.
global.swissclac.display.memoryDisplay.prototype.memoryClear = function () {
	this._hasMemory = false;
	this._memValue = 0;
	this._display = "";
};
