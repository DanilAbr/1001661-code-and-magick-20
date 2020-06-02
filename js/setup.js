'use strict';

var modal = document.querySelector('.setup');
modal.classList.remove('hidden');

var WIZARDS_COUNT = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
var setupSimilar = modal.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');
var wizards = [];

function getRandomElement(array) {
  var element = array[Math.floor(Math.random() * array.length)];
  return element;
}

function createWizard() {
  var wizard = {};

  wizard.name = getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES);
  wizard.coatColor = getRandomElement(COAT_COLORS);
  wizard.eyesColor = getRandomElement(EYES_COLORS);

  return wizard;
}

for (var j = 0; j < WIZARDS_COUNT; j++) {
  wizards.push(createWizard());
}

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

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
setupSimilarList.appendChild(fragment);

setupSimilar.classList.remove('hidden');
