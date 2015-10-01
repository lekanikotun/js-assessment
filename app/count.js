exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {

 var s = setInterval(function() {
		if (start > end) { 
			clearInterval(s);
			return; 
		}
		console.log(start++);
	  	},100);
};
