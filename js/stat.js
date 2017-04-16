'use strict';
window.renderStatistics = function renderStatistics(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270); // Тень

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270); // Лист статистики

  ctx.fillStyle = 'red';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var i; // индекс для массивов
  var maxTime = -1;

  for (i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  var histogramHeight = 150;
  var histogramUnitHeight = histogramHeight / maxTime; // Высота единицы для пропорционального отображения
  var histogramWidth = 40;
  var histogramIndent = 90;
  var textIndent = 10;
  var inintialX = 155; // Начальная координата гистрограммы по Х
  var inintialУ = 90; // Начальная координата гистрограммы по У
  function selectRandomOpacity(r, g, b) {
    var a = Math.random() * (1 - 0.1) + 0.1;
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  }
  function drawHistogramColumn(idx, time) {
    ctx.fillRect(inintialX + idx * histogramIndent, inintialУ + (150 - time * histogramUnitHeight), histogramWidth, time * histogramUnitHeight);
  }
  function drawColumnValue(idx, time) {
    ctx.fillText(time.toFixed(0), inintialX + idx * histogramIndent, inintialУ + (150 - time * histogramUnitHeight) - textIndent);
  }
  function drawColumnName(idx, name) {
    ctx.fillText(name, inintialX + idx * histogramIndent, inintialУ + histogramHeight + textIndent * 2);
  }

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = selectRandomOpacity(0, 0, 255);
    }
    drawHistogramColumn(i, times[i]);
    ctx.fillStyle = 'black';
    drawColumnValue(i, times[i]);
    drawColumnName(i, names[i]);
  }
};
