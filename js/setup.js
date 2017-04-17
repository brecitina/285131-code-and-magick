'use strict';
var setupWindow = document.querySelector('.setup');

setupWindow.classList.remove('hidden');

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
function getRandomItem(array) {
  var i = Math.random() * array.length;
  i = Math.floor(i);
  return array[i];
}
var ALL_NAMES = [FIRST_NAMES, SURNAMES]; // этот масси в тоже в верхнем регистре называем?
function getRandomName() {
  var j = Math.random() * 2;
  j = Math.floor(j);
  if (j === 0) {
    return getRandomItem(ALL_NAMES[j]) + ' ' + getRandomItem(ALL_NAMES[1]);
  } else {
    return getRandomItem(ALL_NAMES[j]) + ' ' + getRandomItem(ALL_NAMES[0]);
  }
}

var WIZARDS = [{
  name: getRandomName(),
  coatColor: getRandomItem(COAT_COLORS),
  eyesColor: getRandomItem(EYES_COLORS),
}, {
  name: getRandomName(),
  coatColor: getRandomItem(COAT_COLORS),
  eyesColor: getRandomItem(EYES_COLORS),
}, {
  name: getRandomName(),
  coatColor: getRandomItem(COAT_COLORS),
  eyesColor: getRandomItem(EYES_COLORS),
}, {
  name: getRandomName(),
  coatColor: getRandomItem(COAT_COLORS),
  eyesColor: getRandomItem(EYES_COLORS),
}];

document.querySelector('.setup-similar').classList.remove('hidden'); // временно, чтобы видеть волшебников

var similarListOfWizards = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

for (var i = 0; i < WIZARDS.length; i++) {
  var oneSimilarWizard = similarWizardTemplate.cloneNode(true);

  oneSimilarWizard.querySelector('.setup-similar-label').textContent = WIZARDS[i].name;
  oneSimilarWizard.querySelector('.wizard-coat').style.fill = WIZARDS[i].coatColor;
  oneSimilarWizard.querySelector('.wizard-eyes').style.fill = WIZARDS[i].eyesColor;
  similarListOfWizards.appendChild(oneSimilarWizard);
}
