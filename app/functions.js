exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {

     return fn.apply(this, arr);

  },

  speak : function(fn, obj) {
     return fn.call(obj);
  },

  functionFunction : function(str) {

  },

  makeClosures : function(arr, fn) {

    for (var i=0; i<arr.length; i++) {


    }

  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
