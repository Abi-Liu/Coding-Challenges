//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
  let first = "";
  let second = "";
  let third = "";
  let phoneNumber = "";
  for (let i = 0; i <= 2; i++) {
    first += numbers[i];
  }
  for (let i = 3; i <= 5; i++) {
    second += numbers[i];
  }
  for (let i = 6; i <= 9; i++) {
    third += numbers[i];
  }
  phoneNumber = `(${first}) ${second}-${third}`;
  return phoneNumber;
}