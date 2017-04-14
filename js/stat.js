'use strict';
function renderStatistics(ctx, names, times) {
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

  for (i = 0; i < times.length; i++) {
    (names[i] === 'Вы') ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * (1 - 0.1) + 0.1) + ')';
    ctx.fillRect(inintialX + i * histogramIndent, inintialУ + (150 - times[i] * histogramUnitHeight), histogramWidth, times[i] * histogramUnitHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(times[i].toFixed(0), inintialX + i * histogramIndent, inintialУ + (150 - times[i] * histogramUnitHeight) - textIndent);
    ctx.fillText(names[i], inintialX + i * histogramIndent, inintialУ + histogramHeight + textIndent * 2);
  }
}
