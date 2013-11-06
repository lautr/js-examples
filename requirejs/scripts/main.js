requirejs.config({
    "baseUrl": "scripts",
    "paths": {
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});


require(["fancyCalc"], function(calc) {
	console.log(calc.add(1, 8));
	console.log(calc.add(7, 18));
	console.log(calc.multi(1, 8));
	console.log(calc.multi(7, 18));
});
