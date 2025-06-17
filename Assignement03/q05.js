/*
Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.
*/

function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}


let sentence = "I love progrmming.";
let fixedSentence = correctfn(sentence, "progrmming", "programming");
console.log(fixedSentence);  // Output: I love programming.