function isPalindrome(word) {
    let normalWord = word;
    let reversedWord = reversingWord(word);
    console.log(normalWord);
    console.log(reversedWord);
    if(normalWord === reversedWord){return true}
    else {return false} 
  // Write your algorithm here
}


function reversingWord(word){
    let reversedArray = [];
    let splitString = word.split("");
    reversedArray = splitString.reverse();
    let joinArray = reversedArray.join("");
    console.log(joinArray);
    return joinArray;
}

/* 

encapsulate all of this in isPalindrome
  take the input and store it in a variable
  create a function that stores the input in an array
      reverse the array
      array.toString
  create another function that compares the two and returns true if palindrome else false



  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  first i created a function for reversing the input string
    this required splitting the input into an array because there are built in methods for reversing arrays but not strings
    then i used built in methods to rejoin the reversed array in order to make it into a string
    this function returned that reversed string to the isPaldindrome funnction
  isPalindrome takes the input word and the reversed word returned from the reversing function and compares them
    then it returns true or false depending on if they match


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
