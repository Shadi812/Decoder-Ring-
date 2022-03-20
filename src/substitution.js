// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  
  // function to turn input string into array
  function stringToArray(input) {
    return Array.from(input);
  }
  
  // function to check if all characters are unique
  function checkForRepeatedChar(alphabet) {
    for(let i = 0; i < alphabet.length;i++) {
      if(alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) return false;
    }
    return true;
  }
  
  console.log(checkForRepeatedChar("abcabcabcabcabcabcabcabcyz"));
  
  // function to turn normal alphabet letters into substitute letters
  function encodeInput(inputArray, substituteAlphabet) {
    const output = inputArray.map((char) => {
      if(char === " ") return char;
      let newLetter = standardAlphabet.find((letter) => letter === char);
        return substituteAlphabet[standardAlphabet.indexOf(newLetter)];
    });
        // turn the result of the array back to string

    return output.join(""); 
  }
  console.log(encodeInput(["a", "b"], ["x", "o"]))
  
  // function to turn substitute letters into normal alphabet letters
  function decodeInput(inputArray, substituteAlphabet) {
    const output = inputArray.map((char) => {
      if(char === " ") return char;
      let newLetter = substituteAlphabet.find((letter) => letter === char);
        return standardAlphabet[substituteAlphabet.indexOf(newLetter)];
    });
    // turn the result of the array back to string
    return output.join(""); 
  }
  
  function substitution(input, alphabet, encode = true) {
    // your solution here
    if(!input) return false;
    if(!alphabet || alphabet.length !== 26) return false;
    if(checkForRepeatedChar(alphabet) === false) return false;

    const lowerCaseInput = input.toLowerCase();
    const inputArray = stringToArray(lowerCaseInput);
    const lowerCaseSubstitute = alphabet.toLowerCase();
    const substituteAlphabet = stringToArray(lowerCaseSubstitute);
         
    if(input && alphabet && encode) return encodeInput(inputArray, substituteAlphabet);
    
    if(input && alphabet && encode === false) return decodeInput(inputArray, substituteAlphabet);
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };