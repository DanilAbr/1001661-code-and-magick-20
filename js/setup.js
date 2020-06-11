'use strict';

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
  'rgb(0, 0, 0)'
];
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var modal = document.querySelector('.setup');
var setupClose = modal.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var userNameInput = modal.querySelector('input[name="username"]');

var wizardCoat = modal.querySelector('.wizard-coat');
var wizardEyes = modal.querySelector('.wizard-eyes');
var wizardFireball = modal.querySelector('.setup-fireball-wrap');
var inputCoatColor = modal.querySelector('input[name="coat-color"]');
var inputEyesColor = modal.querySelector('input[name="eyes-color"]');
var inputFireballColor = modal.querySelector('input[name="fireball-color"]');

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

function onPopupEscPress(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.add('hidden');
  }
}

function openPopup() {
  modal.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  modal.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
}

function getCurrentColor(array, element, input) {
  var currentColor = getRandomElement(array);
  element.style.fill = currentColor;
  input.value = currentColor;
}

function getCurrentFireballColor(array, element, input) {
  var currentFireballColor = getRandomElement(array);
  element.style.background = currentFireballColor;
  input.value = currentFireballColor;
}

setupOpenIcon.addEventListener('click', function () {
  openPopup();
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydouwn', function (evt) {
  evt.preventDefault();
  if (evt.key === 'Enter') {
    closePopup();
  }
});

userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

wizardCoat.addEventListener('click', function () {
  getCurrentColor(COAT_COLORS, wizardCoat, inputCoatColor);
});

wizardEyes.addEventListener('click', function () {
  getCurrentColor(EYES_COLORS, wizardEyes, inputEyesColor);
});

wizardFireball.addEventListener('click', function () {
  getCurrentFireballColor(FIREBALL_COLORS, wizardFireball, inputFireballColor);
});

for (var j = 0; j < WIZARDS_COUNT; j++) {
  wizards.push(createWizard());
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
setupSimilarList.appendChild(fragment);

setupSimilar.classList.remove('hidden');
