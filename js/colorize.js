'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var modal = document.querySelector('.setup');
  var wizardCoat = modal.querySelector('.wizard-coat');
  var wizardEyes = modal.querySelector('.wizard-eyes');
  var wizardFireball = modal.querySelector('.setup-fireball-wrap');

  function colorize(element, colors) {
    element.addEventListener('click', function () {
      var color = window.util.getRandomElement(colors);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  }

  colorize(wizardCoat, COAT_COLORS);
  colorize(wizardEyes, EYES_COLORS);
  colorize(wizardFireball, FIREBALL_COLORS);
})();
