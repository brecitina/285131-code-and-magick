'use strict';
var setupWindow = document.querySelector('.setup');

setupWindow.classList.remove('hidden');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
function getRandomItem(array) {
  var i = Math.random() * array.length;
  i = Math.floor(i);
  return array[i];
}
var allNames = [firstNames, surnames];
function getRandomName() {
  var j = Math.random() * 2;
  j = Math.floor(j);
  if (j === 0) {
    return getRandomItem(allNames[j]) + getRandomItem(allNames[1]);
  } else {
    return getRandomItem(allNames[j]) + getRandomItem(allNames[0]);
  }
}

var wizards = [{
  name: getRandomName(),
  coatColor: getRandomItem(coatColors),
  eyesColor: getRandomItem(eyesColors),
}, {
  name: getRandomItem(firstNames) + getRandomItem(surnames),
  coatColor: getRandomItem(coatColors),
  eyesColor: getRandomItem(eyesColors),
}, {
  name: getRandomItem(firstNames) + getRandomItem(surnames),
  coatColor: getRandomItem(coatColors),
  eyesColor: getRandomItem(eyesColors),
}, {
  name: getRandomItem(firstNames) + getRandomItem(surnames),
  coatColor: getRandomItem(coatColors),
  eyesColor: getRandomItem(eyesColors),
}];
