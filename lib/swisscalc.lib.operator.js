//
// Eric Morgan
// Copyright (c) 2014. 
//

// Generic operator class. Implementation of individual operators will be defined in the OperatorCache.
// "evaluate" should be a function that takes a global.swissclac.lib.shuntingYard instance as a parameter and returns the result.
global.swissclac = global.swissclac || {};
global.swissclac.lib = global.swissclac.lib || {};
global.swissclac.lib.operator = function (arity, associativity, precedence, numOperands, isOpenParen, isCloseParen, evaluate) {
	this.Arity = arity;
	this.Associativity = associativity;
	this.Precedence = precedence;
	this.NumOperands = numOperands;
	this.IsOpenParen = isOpenParen;
	this.IsCloseParen = isCloseParen;
	this.evaluate = evaluate;
};

// Constants
global.swissclac.lib.operator.ARITY_NULLARY = 0;
global.swissclac.lib.operator.ARITY_UNARY = 1;
global.swissclac.lib.operator.ARITY_BINARY = 2;
global.swissclac.lib.operator.ASSOCIATIVITY_NONE = 0;
global.swissclac.lib.operator.ASSOCIATIVITY_RIGHT = 1;
global.swissclac.lib.operator.ASSOCIATIVITY_LEFT = 2;

// Static functions
global.swissclac.lib.operator.degreesToRadians = function (degrees) { return degrees * (Math.PI / 180.0); };
global.swissclac.lib.operator.radiansToDegrees = function (radians) { return radians * (180.0 / Math.PI); };

// Returns true if precedence is higher than given operator
global.swissclac.lib.operator.prototype.isHigherPrecedence = function (operator) {
	if (this.Precedence == operator.Precedence)
		return (this.Associativity == global.swissclac.lib.operator.ASSOCIATIVITY_LEFT);
	return (this.Precedence > operator.Precedence);
};