'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');

  var form = setup.querySelector('.setup-wizard-form');
  var setupClose = setup.querySelector('.setup-close');
  var inputUserName = setup.querySelector('input[name="username"]');
  var popupHandle = setup.querySelector('.upload');
  var setupSimilar = setup.querySelector('.setup-similar');

  var setupStartCoords = {};

  function resetCoords() {
    setup.style = {
      top: setupStartCoords.x + 'px',
      left: setupStartCoords.y + 'px',
    };
  }

  function onPopupCloseEscPress(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      addPopupClassHidden();
      resetCoords();
    }
  }

  function onPopupCloseEnterPress(evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  }

  function removePopupClassHidden() {
    setup.classList.remove('hidden');
  }

  function addPopupClassHidden() {
    setup.classList.add('hidden');
  }

  function getPopupStartCoords() {
    setupStartCoords = {
      x: setup.offsetTop,
      y: setup.offsetLeft
    };
  }

  function openPopup() {
    removePopupClassHidden();
    getPopupStartCoords();
    document.addEventListener('keydown', onPopupCloseEscPress);
    setupClose.addEventListener('click', closePopup);
    setupClose.addEventListener('keydown', onPopupCloseEnterPress);
    window.script.loadData();
  }

  function closePopup() {
    addPopupClassHidden();
    document.removeEventListener('keydown', onPopupCloseEscPress);
    setupClose.removeEventListener('click', closePopup);
    setupClose.removeEventListener('keydown', onPopupCloseEnterPress);
    resetCoords();
  }

  function movePopup(evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      function onClickPreventDefault(clickEvt) {
        clickEvt.preventDefault();
        popupHandle.removeEventListener('click', onClickPreventDefault);
      }

      if (dragged) {
        popupHandle.addEventListener('click', onClickPreventDefault);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  function onSuccess(wizards) {
    window.wizards.renderWizards(wizards);
    setupSimilar.classList.remove('hidden');
  }

  function onSubmit(evt) {
    window.backend.transferData(
        'POST',
        window.backend.SEND_URL,
        addPopupClassHidden,
        window.backend.createErrorMessage,
        new FormData(form)
    );
    evt.preventDefault();
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
    document.removeEventListener('keydown', onPopupCloseEscPress);
  });

  inputUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupCloseEscPress);
  });

  popupHandle.addEventListener('mousedown', movePopup);

  form.addEventListener('submit', onSubmit);
})();
