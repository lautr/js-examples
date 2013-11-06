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


console.log(calc.add(1, 8));
console.log(calc.add(7, 18));
console.log(calc.multi(1, 8));
console.log(calc.multi(7, 18));
