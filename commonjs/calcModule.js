var calc;

calc = (function (calc) {
		
	calc.add = function (x, y) {
		return (x + y);
	}
	
	return calc;
}(calc || {}));

calc = (function (calc) {
		
	calc.multi = function (x, y) {
		return (x * y);
	}
	
	return calc;
}(calc || {}));


exports.calc = calc;
