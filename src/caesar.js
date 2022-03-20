const caesarModule = (function () {
  // you can add any code you want within this function scope

  //create an array including all the letters in the alphabet;
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //function to turn the message into an array
  function stringToArray(input) {
    //change input to lowercase to meet requirement of ignoring all capital letters
    const lowerCaseInput = input.toLowerCase(); 
    return Array.from(lowerCaseInput);
  }
  // function to find the new letter after the index is shifted
  function letterShift(currentIndex, shift) { 
    let newIndex = (currentIndex + shift) % 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    return letters[newIndex];
  }
  //function to return shifted input
  function shiftArray(input, shift) {
    let newArray = stringToArray(input).map((char) => {
     // if index is less than 0 it is a nonalphabetic symbol and is returned 
      if(letters.indexOf(char) < 0) return char; 
      return letterShift(letters.indexOf(char), shift);
    });
    return newArray;
  }


  function caesar(input, shift, encode = true) {
    // your solution code here
    // invalid shift amount
    if(shift === 0 || shift < -25 || shift > 25 || !shift) return false;

    //to decode, you need to know the number the original message was shifted to shift in the opposite direction.
    if(encode === false) shift = 0 - shift; 

    //turn arrayed input back to string
    let hiddenMessage = shiftArray(input, shift).join("");
    return hiddenMessage;
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
