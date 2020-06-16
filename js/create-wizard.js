'use strict';

(function () {
  window.createWizard = {
    getCurrentWizard: function () {
      return {
        name: window.util.getRandomElement(window.util.NAMES) + ' ' + window.util.getRandomElement(window.util.SURNAMES),
        coatColor: window.util.getRandomElement(window.util.COAT_COLORS),
        eyesColor: window.util.getRandomElement(window.util.EYES_COLORS),
      };
    }
  };
})();
