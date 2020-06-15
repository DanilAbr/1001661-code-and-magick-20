'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 20;
  var BAR_GAP = 50;
  var FONT_GAP = 10;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;

  function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }

  function getMaxElement(arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  }


  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

    var maxTime = getMaxElement(times);

    players.forEach(function (item, i) {
      var currentBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
      var ranColor = 'hsl(240,' + Math.random() * 100 + '%,50%)';

      ctx.fillStyle = (item === 'Вы') ? 'rgba(255, 0, 0, 1)' : ranColor;
      ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - currentBarHeight - BAR_GAP + FONT_GAP, BAR_WIDTH, currentBarHeight);

      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - currentBarHeight - BAR_GAP + FONT_GAP - GAP);
      ctx.fillText(item, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    });
  };
})();
