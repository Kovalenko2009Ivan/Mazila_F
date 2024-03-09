let currentExercise = 1;
let totalExercises = 12;

function changeExercise() {
  document.getElementById(`exercise${currentExercise}`).style.display = 'none';
  currentExercise = (currentExercise % totalExercises) + 1;
  document.getElementById(`exercise${currentExercise}`).style.display = 'block';
}