exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {

    return (/\d/).test(str);

  },

  containsRepeatingLetter : function(str) {

    return (/([a-zA-Z]).*?\1/).test(str);
  },

  endsWithVowel : function(str) {

    return []

  },

  captureThreeNumbers : function(str) {

  var a = toString.call(str.match(/\d{3}/)) === "[object Array]" ? str.match(/\d{3}/)[0] : '';

return a;

  },

  matchesPattern : function(str) {
    return  (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },
  isUSD : function(str) {

  }
};
