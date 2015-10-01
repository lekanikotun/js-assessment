exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {

  	return fn.apply(obj);

  },

  alterObjects : function(constructor, greeting) {

  	return constructor.prototype.greeting = greeting;

  },

  iterate : function(obj) {

  	var arr = [];
  	for (var key in obj) {
  		if (obj.hasOwnProperty(key)) {
  			var str = key + ': ' + obj[key];

  			arr.push(str);
  		}
  	}

  	return arr;

  }
};
