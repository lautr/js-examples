var calcInit = function () {
	
	return {
		add : function (x, y) {
			return (x + y);
		}
	}
	
}

calc = calcInit();

console.log('1 ' + calc.add(1, 8));
console.log('1 ' + calc.add(7, 18));
