three buttons on each section.
hamburger at fixed postion at top left corner.
previously picked icons at fixed position at the bottom center

~create an empty userAnswerArray.
~the buttons add string the array based on what was picked.
not sure if buttons deactivate after click. It could be that we add multiple strings. Either way the button needs to change to a remove string button after click.

at the end there can be a finish button that tallys the current results and makes three clickable hyperlink images to matching locations. These images link to a fillable dom that renders the desired location.

the process of sorting.
ex.
1st question-
for (var i = 0; i < obj.length; i++) {
  if (obj[i][1] === userAnswerArray[1]) {
    sortedCities[i] = obj[i];
  }
}
2nd question-
for (var i = 0; i < sortedCities.length; i++){
  if (sortedCities[i][2] != userAnswerArray[2]) {
    sortedCities.splice(i, 1);
  }
}
3rd question-
for (var i = 0; i < sortedCities.length; i++) {
  if (sortedCities[i][3] != userAnswerArray[3]) {
    sortedCities.splice(i, 1);
  }
}
4th question-
for (var i = 0; i < sortedCities.length; i++) {
  if (sortedCities[i][4] != userAnswerArray[4]) {
    sortedCities.splice(i, 1);
  }
}
