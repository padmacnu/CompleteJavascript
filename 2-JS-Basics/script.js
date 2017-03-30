// john
var johnAge = 20
    johnHeight = 152
    johnScore = johnHeight + 5 * johnAge;
// david
var davidAge = 30
    davidHeight = 162
    davidScore = davidHeight + 5 * davidAge;
// Mike
var mikeAge = 40,
    mikeHeight = 172,
    mikeScore = mikeHeight + 5 * mikeAge;

if(johnScore > davidScore && johnScore > mikeScore) {
  console.log('John win the game with ' + (johnScore) + ' points.');
} else if(mikeScore > johnScore && mikeScore > davidScore) {
  console.log('Mike wins the game with ' + (mikeScore) + ' points.');
} else if(davidScore > johnScore && davidScore > mikeScore ) {
  console.log('david wins the game with ' + (davidScore) + ' points.');
} else {
  console.log('There is a draw');
}

// Functions
// Create a function to calculateAge
// Create a function to find yearsToRetire, use the calculateAge function

var currentTime = new Date();
var currentYear = currentTime.getFullYear()

function calculateAge(yearOfBirth) {
  var age = currentYear - yearOfBirth;
  return age;
}

var age = calculateAge(1983);
console.log(age);

function yearsToRetire(yearOfBirth) {
  // subtract the age from 65
  var age = calculateAge(yearOfBirth);
  retireAgeIs = 65 - age;
  return retireAgeIs;
}

var retireAgeIs = yearsToRetire(1983);
console.log('You\'ll retire in ' + retireAgeIs + ' years');
