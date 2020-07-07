'use strict';

(function () {
  var Cloud = {
    WIDTH: 420,
    HEIGHT: 270,
    X: 100,
    Y: 10,
  };

  var GAP = 20;
  var BAR_GAP = 50;
  var FONT_GAP = 10;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;

  function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, Cloud.WIDTH, Cloud.HEIGHT);
  }

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', Cloud.X + GAP, Cloud.Y + GAP);
    ctx.fillText('Список результатов:', Cloud.X + GAP, Cloud.Y + GAP * 2);

    var maxTime = window.util.getMaxElement(times);

    players.forEach(function (item, i) {
      var currentBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
      var ranColor = 'hsl(240,' + Math.random() * 100 + '%,50%)';

      ctx.fillStyle = (item === 'Вы') ? 'rgba(255, 0, 0, 1)' : ranColor;
      ctx.fillRect(Cloud.X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, Cloud.Y + Cloud.HEIGHT - currentBarHeight - BAR_GAP + FONT_GAP, BAR_WIDTH, currentBarHeight);

      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), Cloud.X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, Cloud.Y + Cloud.HEIGHT - currentBarHeight - BAR_GAP + FONT_GAP - GAP);
      ctx.fillText(item, Cloud.X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, Cloud.HEIGHT - GAP);
    });
  };
})();
