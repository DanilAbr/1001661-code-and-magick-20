'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');
  var inputUserName = setup.querySelector('input[name="username"]');

  function onSetupCloseEscPress(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      setup.classList.add('hidden');
    }
  }

  function onSetupCloseEnterPress(evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  }

  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupCloseEscPress);
    setupClose.addEventListener('click', closePopup);
    setupClose.addEventListener('keydown', onSetupCloseEnterPress);
  }

  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupCloseEscPress);
    setupClose.removeEventListener('click', closePopup);
    setupClose.removeEventListener('keydown', onSetupCloseEnterPress);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  inputUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onSetupCloseEscPress);
  });

  inputUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onSetupCloseEscPress);
  });
})();
