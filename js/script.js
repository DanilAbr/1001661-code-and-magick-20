'use strict';

(function () {
  var colors = {
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    COAT: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
  };

  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';
  var wizards = [];

  var modal = document.querySelector('.setup');
  var wizardCoat = modal.querySelector('.wizard-coat');
  var wizardEyes = modal.querySelector('.wizard-eyes');
  var wizardFireball = modal.querySelector('.setup-fireball-wrap');

  var isData = false;

  function onSuccess(data) {
    wizards = data;
    updateWizards();
  }

  function getRank(wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  function updateWizards() {
    window.render.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  function loadData() {
    if (!isData) {
      window.backend.transferData(
          'GET',
          window.backend.GET_URL,
          onSuccess,
          window.backend.createErrorMessage
      );
    }
    isData = true;
  }

  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(colors.COAT);
    wizardCoat.style.fill = newColor;
    coatColor = newColor;
    updateWizards();
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(colors.EYES);
    wizardEyes.style.fill = newColor;
    eyesColor = newColor;
    updateWizards();
  });

  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.backgroundColor =
      window.util.getRandomElement(colors.FIREBALL);
  });

  window.script = {
    loadData: loadData,
    updateWizards: updateWizards,
  };
})();
