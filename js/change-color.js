'use strict';

(function () {
  var modal = document.querySelector('.setup');
  var wizardCoat = modal.querySelector('.wizard-coat');
  var wizardEyes = modal.querySelector('.wizard-eyes');
  var wizardFireball = modal.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoat, window.util.COAT_COLORS);
  window.colorize(wizardEyes, window.util.EYES_COLORS);
  window.colorize(wizardFireball, window.util.FIREBALL_COLORS);
})();
