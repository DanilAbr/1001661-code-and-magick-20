'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');
  var inputUserName = setup.querySelector('input[name="username"]');
  var dialogHandle = setup.querySelector('.upload');

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

  dialogHandle.addEventListener('mousedown', function (evt) {
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
        dialogHandle.removeEventListener('click', onClickPreventDefault);
      }

      if (dragged) {
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
