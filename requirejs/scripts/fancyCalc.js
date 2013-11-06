define(["calc", "jquery"], function(calc, $) {
	
	return {
            add: function (x, y) {
				var add = calc.add(x, y);
				
				$('#results').append('<div class="alert alert-info">' + add + '</div>');
				
				return add;
			},
            multi: function (x, y) {
				var multi = calc.multi(x, y);
				
				$('#results').append('<div class="alert alert-info">' + multi + '</div>');
				
				return multi;
			}
        }
    }
    
);
