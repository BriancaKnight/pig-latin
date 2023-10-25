function firstLetterCheck(aString) {
  if (!onlyLetters(aString)) {
    console.log("Not alphabet");
  } else {
    let lowerString = aString.toLowerCase();
    let firstLetter = lowerString.slice(0, 1);
    if (vowelStart(firstLetter)) {
      console.log(lowerString.concat("way"));
    } else {
      
    }
    startWithQ(firstLetter);
    console.log(firstLetter);
  }
}

const vowels = ["a", "e", "i", "o", "u"];
function vowelStart(firstLetter){
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    return true;
    console.log("Starts with a vowel.");
  } else {
    return false;
    console.log("Starts with a consonant");
  }
}

function onlyLetters(aString) {
  return /^[a-zA-Z]+$/.test(aString);
}

function startWithQ(firstLetter) {
  if (firstLetter === "q") {
    console.log("Starts with a Q");
  } else {
    console.log("does not start with a Q");
  }
}