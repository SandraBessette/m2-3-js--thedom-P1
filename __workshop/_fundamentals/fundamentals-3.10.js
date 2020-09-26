// Exercise 10
// -------------
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string and returns that string, capitalized.
// e.g. f("hello world"); // Hello World
// e.g. f("BACON BROCOLI"); // Bacon Brocoli

function makeIntoTitle(sentence) {
  // Your code here
  if (typeof sentence !== "string") {
    return undefined;
  }

  let wordArr = sentence.split(" ");
  wordArr.forEach ((word, i) => {   
   
    if (word.length !== 0)
      wordArr[i] = word.replace(word[0], word[0].toUpperCase());
  });
  
  return wordArr.join(" ");
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = makeIntoTitle;
