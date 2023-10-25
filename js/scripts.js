function firstLetterCheck(aString) {
  if (!onlyLetters(aString)) {
    console.log("Not alphabet");
  } else {
    let lowerString = aString.toLowerCase();
    let firstLetter = lowerString.slice(0, 1);
    if (startWithQ(firstLetter)) {
      qNewWord = qWord(lowerString);
      console.log(qNewWord);
    }
    
    if (vowelStart(firstLetter)) {
      console.log(lowerString.concat("way"));
    } else {
      let result = getConsonants(lowerString);
      let consLatin = (result.remainder + result.consonants + "ay");
      console.log(consLatin);
    }
    
    console.log(firstLetter);
  }
}

function getConsonants(lowerString) {
  let letterArray = lowerString.split("");
  let storeConsonant = [];
  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] !== "a" && letterArray[i] !== "e" && letterArray[i] !== "i" && letterArray[i] !== "o" && letterArray[i] !== "u") {
      storeConsonant.push(letterArray[i]);
    } else {
      remainingString = lowerString.slice(i);
      break;
    }
  } return {
    consonants: storeConsonant.join(""),
    remainder: remainingString
  };
}

const vowels = ["a", "e", "i", "o", "u"];
function vowelStart(firstLetter) {
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
    return true;
  } else {
    return false; 
  }
}

function qWord(lowerString) {
  return lowerString.slice(2) + "quay";
}