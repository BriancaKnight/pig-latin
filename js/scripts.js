function firstLetterCheck(aString) {
  if (!onlyLetters(aString)) {
    console.log("Not alphabet");
  } else {
    let lowerString = aString.toLowerCase();
    let firstLetter = lowerString.slice(0, 1);
    console.log(firstLetter);
  }
}

function onlyLetters(aString) {
  return /^[a-zA-Z]+$/.test(aString);
}