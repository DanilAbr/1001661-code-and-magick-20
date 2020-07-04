'use strict';

(function () {
  window.util = {
    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    getMaxElement: function (arr) {
      var maxElement = arr[0];

      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }

      arr.forEach(function (it) {
        if (it > maxElement) {
          maxElement = it;
        }
      });
      return maxElement;
    }
  };
})();
