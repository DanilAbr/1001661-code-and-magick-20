'use strict';

(function () {
  window.util = {
    getRandomElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    getMaxElement: function (array) {
      var maxElement = array[0];
      for (var i = 1; i < array.length; i++) {
        if (array[i] > maxElement) {
          maxElement = array[i];
        }
      }
      return maxElement;
    }
  };
})();
