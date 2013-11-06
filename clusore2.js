var calc = (function () {
	var calcCount = 0;
	
	return {
		add : function (x, y) {
			return '[' + ++calcCount + '] ' + (x + y);
		}
	}
	
}());

console.log(calc.add(1, 8));
console.log(calc.add(7, 18));
