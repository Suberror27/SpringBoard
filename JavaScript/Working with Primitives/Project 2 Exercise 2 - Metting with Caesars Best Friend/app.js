const friend = "BRUTUS"
const shiftValue = 3;

// ## Step 1 🧩 Store the Latin alphabet in a variable with all letters in lowercase.
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// ## Step 2 🧩 Find the index of the first letter of Ceaser's friend. Store it in a variable.
const firsLetter = friend[0].toLocaleLowerCase(); // B => b
const indexInAlphabet = alphabet.indexOf(firsLetter); // 1

// ## Question 1 🤔 Oh, I know B is the 2nd letter of the alphabet. Then, why the result is 1 instead of 2?
// Because strings are 0 based indexed meaning the first letter is always 0 (a = 0, b = 1, c = 2, etc...)

// ## Step 3 🧩 Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, which is 3 positions. 
// Find and store the encrypted letter in a variable.
// const newIndex = (indexInAlphabet + shiftValue) % lengthOfAlphabet;
// const firsLetterEncrypted = alphabet[newIndex]; // e

// ## Question 2 🤔 If we continue shifting letters and go beyond the last letter, "z", which operator could help us to wrap around and continue from the beginning of the alphabet?
// Modulo operator

// ## Step 4 🧩 Determine the length of the alphabet.
// const lengthOfAlphabet = alphabet.length; // 26

// ## Step 5 🧩 Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, ensuring the shift wraps around the alphabet if it exceeds.
const lengthOfAlphabet = alphabet.length; // 26
const newIndex = (indexInAlphabet + shiftValue) % lengthOfAlphabet;
const firsLetterEncrypted = alphabet[newIndex]; // e

// ## Step 6 🧩 Caesar remembers that Brutus is particularly fond of challenges. 
// Before sending the encrypted message, Caesar decides to send only a part of it as a teaser. 
// Extract the first 3 characters from the encrypted message using the `slice` method. 
// (Assume that the encrypted message is "EUXWXV".)
const encryptedMessage = "EUXWXV";
const first3OfEncriptedMessage = encryptedMessage.slice(0,3);






