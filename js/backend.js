'use strict';

(function () {
  var SUCCESS_CODE = 200;
  var GET_URL = 'https://javascript.pages.academy/code-and-magick/data';
  var SEND_URL = 'https://javascript.pages.academy/code-and-magick';

  function createErrorMessage(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 10; padding: 100px; text-align: center; background: tomato; position: absolute; left: 0; right: 0; font-size: 30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  function transferData(metod, url, onSuccess, onError, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_CODE) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText + '. Попробуйте перезагрузить страницу');
      }
    });

    xhr.open(metod, url);
    xhr.send(data);
  }

  window.backend = {
    transferData: transferData,
    createErrorMessage: createErrorMessage,
    GET_URL: GET_URL,
    SEND_URL: SEND_URL,
  };
})();
