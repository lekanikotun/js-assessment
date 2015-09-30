exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {

	while (start <= end) {
		(function(n)
	  	setTimeout(function() {
  			console.log(n);
	  	}, 100);

	  }(start++));
	}
};
