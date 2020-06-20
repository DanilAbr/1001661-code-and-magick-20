'use strict';

(function () {
  var MAX_WIZARDS_COUNT = 4;

  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('div');
  var setupSimilarList = setup.querySelector('.setup-similar-list');

  function createWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  function renderWizards(wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < MAX_WIZARDS_COUNT; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }
    setupSimilarList.appendChild(fragment);
  }

  window.wizards = {
    renderWizards: renderWizards,
  };
})();
