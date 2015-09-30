exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;
    for (var i = 0, l = arr.length; i < l; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {

    while (arr.indexOf(item) > -1 ) {
      var index = arr.indexOf(item) 
      arr.splice(index, 1);
    }

    return arr;

  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(-1);
    return arr;

  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {

    arr.splice(0,1);
    return arr;

  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);


  },

  insert : function(arr, item, index) {

    arr.splice(index, 0, item );
    return arr;

  },

  count : function(arr, item) {


    arr.filter(function() {

    })
  },

  duplicates : function(arr) {

  },

  square : function(arr) {

    var new_arr = arr.map(function(n) {
      return Math.pow(n,2);
    });

    return new_arr;

  },

  findAllOccurrences : function(arr, target) {

  }
};
