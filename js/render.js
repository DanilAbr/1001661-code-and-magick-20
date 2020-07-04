'use strict';

(function () {
  var MAX_SIMILAR_WIZARDS_COUNT = 4;

  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var similar = setup.querySelector('.setup-similar');
  var similarList = setup.querySelector('.setup-similar-list');

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  function render(data) {
    var takeNumber =
      data.length > MAX_SIMILAR_WIZARDS_COUNT
        ? MAX_SIMILAR_WIZARDS_COUNT
        : data.length;

    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  }

  window.render = {
    render: render,
  };
})();
