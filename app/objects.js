exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {

  	return fn.bind(obj);

  },

  alterObjects : function(constructor, greeting) {

  },

  iterate : function(obj) {

  }
};
