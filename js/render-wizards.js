'use strict';

(function () {
  var WIZARDS_COUNT = 4;

  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var setupSimilar = setup.querySelector('.setup-similar');
  var setupSimilarList = setup.querySelector('.setup-similar-list');

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var wizardElementName = wizardElement.querySelector('.setup-similar-label');
    var wizardElementCoat = wizardElement.querySelector('.wizard-coat');
    var wizardElementEyes = wizardElement.querySelector('.wizard-eyes');

    wizardElementName.textContent = wizard.name;
    wizardElementCoat.style.fill = wizard.coatColor;
    wizardElementEyes.style.fill = wizard.eyesColor;

    return wizardElement;
  }

  setupSimilar.classList.remove('hidden');

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    fragment.appendChild(renderWizard(window.createWizard.getCurrentWizard()));
  }
  setupSimilarList.appendChild(fragment);
})();
