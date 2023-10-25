Describe: startingLetter

Test: "It will identify the first letter of a word"
Code: startingLetter("hello");
Expected Output:"h"

Test: "It will identify the first letter regardless of case"
Code: startingLetter("Hello");
Expected Output:"h"

Test: "It will verify that the string is alphabet characters"
Code: string("hel3o")
Expected Output: false

Test: "It will identify if the first letter is a vowel (A, E, I, O, and U)"
Code: startingLetter("hello");
Expected Output: False

Test: "If first consonant includes q, identify that"
Code: startingLetter("quail");
Expected Output: true

Test: "If word starts with vowel, add "way" to end"
Code: string("okay")
Expected Output: okayway

Test: "If word doesn't start with vowel, identify all starting consonants"
Code: string("thrash");
Expected Output: thr

Test: "If word doesn't start with vowel, remove starting consonants."
Code: string("thrash")
Expected Output: ash

Test:"If word doesn't start with vowel, take starting consonants and tag to the end of the word"
Code: string("thrash")
Expected Output: ashthr

Test:"It will take words starting with consonants and add "ay" to the end."
Code: string("thrash")
Expected Output: ashthray
