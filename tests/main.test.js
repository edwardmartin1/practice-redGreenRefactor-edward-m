const main = require("../main.js");

const validInput = "Hello, World!";
const validInput2 = "BBB";
const invalidInput = 123;
const invalidInput2 = undefined;
const invalidInput3 = null;
const edgeInput = "";

describe("The countVowels() function", () => 
{
  //Positive
  test("Should return the number of vowels in the string", 
    () => {
    expect(main.countVowels(validInput)).toEqual(3);
  });

  test("Should return zero because no vowels in the string", 
    () => {
    expect(main.countVowels(validInput2)).toEqual(0);
  });

  //Negative
  test("Should return 0 because the input is invalid numbers", 
    () => {
    expect(main.countVowels(invalidInput)).toEqual(0);
  });

  test("Should return 0 because the input is undefined", 
    () => {
    expect(main.countVowels(invalidInput2)).toEqual(0);
  });

  test("Should return 0 because the input is null", 
    () => {
    expect(main.countVowels(invalidInput3)).toEqual(0);
  });

  test("Should return 0 because no input provided", 
    () => {
    expect(main.countVowels()).toEqual(0);
  });

  //EdgeCase
  test("Should return 0 because input is an empty string", 
    () => {
    expect(main.countVowels(edgeInput)).toEqual(0);
  });

});
