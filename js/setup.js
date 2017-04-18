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

var wizards = [{
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

var similarListOfWizards = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
  var oneSimilarWizard = similarWizardTemplate.cloneNode(true);

  oneSimilarWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  oneSimilarWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  oneSimilarWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return oneSimilarWizard;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListOfWizards.appendChild(fragment);

setupWindow.querySelector('.setup-similar').classList.remove('hidden');
