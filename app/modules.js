exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
  	(function(s1, s2) {
  	return {
  		name: s2,
  		greeting: function() { return s1},
  		sayIt: function(){ return s1 + ", " + s2}
  	}
  }(str1, str2));

  }
};
