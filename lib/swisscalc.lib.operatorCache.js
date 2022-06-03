//
// Eric Morgan
// Copyright (c) 2014. 
//

// Cache for storing operators (rather than instantiating new ones).
// To create a new operator, add it to the cache as a new global.swissclac.lib.operator, filling in the properties and evaluate() function.
global.swissclac = global.swissclac || {};
global.swissclac.lib = global.swissclac.lib || {};
global.swissclac.lib.operatorCache = function () { };

global.swissclac.lib.operatorCache.AdditionOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_BINARY, global.swissclac.lib.operator.ASSOCIATIVITY_LEFT, 2, 2, false, false, function (sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op1 + op2;
	});

global.swissclac.lib.operatorCache.SubtractionOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_BINARY, global.swissclac.lib.operator.ASSOCIATIVITY_LEFT, 2, 2, false, false, function (sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op2 - op1;
	});

global.swissclac.lib.operatorCache.MultiplicationOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_BINARY, global.swissclac.lib.operator.ASSOCIATIVITY_LEFT, 3, 2, false, false, function (sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op1 * op2;
	});

global.swissclac.lib.operatorCache.DivisionOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_BINARY, global.swissclac.lib.operator.ASSOCIATIVITY_LEFT, 3, 2, false, false, function (sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op2 / op1;
	});

global.swissclac.lib.operatorCache.ModulusOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_BINARY, global.swissclac.lib.operator.ASSOCIATIVITY_LEFT, 3, 2, false, false, function (sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op2 % op1;
	});

global.swissclac.lib.operatorCache.ExponentialOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_BINARY, global.swissclac.lib.operator.ASSOCIATIVITY_RIGHT, 4, 2, false, false, function (sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return Math.pow(op2, op1);
	});

global.swissclac.lib.operatorCache.RootOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_BINARY, global.swissclac.lib.operator.ASSOCIATIVITY_RIGHT, 4, 2, false, false, function (sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return Math.pow(op2, 1.0 / op1);
	});

global.swissclac.lib.operatorCache.EEOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_BINARY, global.swissclac.lib.operator.ASSOCIATIVITY_RIGHT, 10, 2, false, false, function (sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op2 * Math.pow(10.0, op1);
	});

global.swissclac.lib.operatorCache.PiOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_NULLARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 0, false, false, function (sy) {
		return Math.PI;
	});

global.swissclac.lib.operatorCache.EOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_NULLARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 0, false, false, function (sy) {
		return Math.E;
	});

global.swissclac.lib.operatorCache.RandomOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_NULLARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 0, false, false, function (sy) {
		return Math.random();
	});

global.swissclac.lib.operatorCache.NegateOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return -1.0 * op;
	});

global.swissclac.lib.operatorCache.InverseOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return 1.0 / op;
	});

global.swissclac.lib.operatorCache.EExponentialOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.pow(Math.E, op);
	});

global.swissclac.lib.operatorCache.TenExponentialOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.pow(10.0, op);
	});

global.swissclac.lib.operatorCache.SquareRootOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.sqrt(op);
	});

global.swissclac.lib.operatorCache.CubeRootOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.cbrt(op);
	});

global.swissclac.lib.operatorCache.XSquaredOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return op * op;
	});

global.swissclac.lib.operatorCache.XCubedOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.pow(op, 3);
	});

global.swissclac.lib.operatorCache.PercentOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return op / 100.0;
	});

global.swissclac.lib.operatorCache.LogBase10Operator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.log(op) / Math.LN10;
	});

global.swissclac.lib.operatorCache.NaturalLogOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.log(op);
	});

global.swissclac.lib.operatorCache.SineOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.sin(op);
	});

global.swissclac.lib.operatorCache.CosineOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.cos(op);
	});

global.swissclac.lib.operatorCache.TangentOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.tan(op);
	});

global.swissclac.lib.operatorCache.ArcSineOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.asin(op);
	});

global.swissclac.lib.operatorCache.ArcCosineOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.acos(op);
	});

global.swissclac.lib.operatorCache.ArcTangentOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.atan(op);
	});

global.swissclac.lib.operatorCache.SineDegreesOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.sin(global.swissclac.lib.operator.degreesToRadians(op));
	});

global.swissclac.lib.operatorCache.CosineDegreesOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.cos(global.swissclac.lib.operator.degreesToRadians(op));
	});

global.swissclac.lib.operatorCache.TangentDegreesOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.tan(global.swissclac.lib.operator.degreesToRadians(op));
	});

global.swissclac.lib.operatorCache.ArcSineDegreesOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return global.swissclac.lib.operator.radiansToDegrees(Math.asin(op));
	});

global.swissclac.lib.operatorCache.ArcCosineDegreesOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return global.swissclac.lib.operator.radiansToDegrees(Math.acos(op));
	});

global.swissclac.lib.operatorCache.ArcTangentDegreesOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return global.swissclac.lib.operator.radiansToDegrees(Math.atan(op));
	});

global.swissclac.lib.operatorCache.HyperbolicSineOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return 0.5 * (Math.pow(Math.E, op) - Math.pow(Math.E, -1.0 * op));
	});

global.swissclac.lib.operatorCache.HyperbolicCosineOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return 0.5 * (Math.pow(Math.E, op) + Math.pow(Math.E, -1.0 * op));
	});

global.swissclac.lib.operatorCache.HyperbolicTangentOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return (1 - Math.pow(Math.E, -2.0 * op)) / (1 + Math.pow(Math.E, -2.0 * op));
	});

global.swissclac.lib.operatorCache.InverseHyperbolicSineOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.log(op + Math.sqrt((op * op) + 1));
	});

global.swissclac.lib.operatorCache.InverseHyperbolicCosineOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return Math.log(op + Math.sqrt((op * op) - 1));
	});

global.swissclac.lib.operatorCache.InverseHyperbolicTangentOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_UNARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function (sy) {
		var op = sy.popOperand();
		return 0.5 * Math.log((1 + op) / (1 - op));
	});

global.swissclac.lib.operatorCache.OpenParenOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_NULLARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 0, true, false, function (sy) {
		console.error("Cannot evaluate open parenthesis.");
	});

global.swissclac.lib.operatorCache.CloseParenOperator = new global.swissclac.lib.operator(
	global.swissclac.lib.operator.ARITY_NULLARY, global.swissclac.lib.operator.ASSOCIATIVITY_NONE, 0, 0, false, true, function (sy) {
		console.error("Cannot evaluate close parenthesis.");
	});