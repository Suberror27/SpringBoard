const friend = "BRUTUS"
// const friend = "Abraham";
const shiftValue = 3;

// ## Step 1 🧩 Recall the Latin alphabet variable from the previous exercise.
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// ## Step 2 🧩 Use a loop to iterate through each letter of "BRUTUS". Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable.
let encryptedName = "";
const lengthOfAlphabet = alphabet.length;
for (let i = 0; i < friend.length; i++) {
    let alphabetIndex = alphabet.indexOf(friend[i].toLowerCase());
    let newIndex = (alphabetIndex + shiftValue) % lengthOfAlphabet;
    encryptedName += alphabet[newIndex];
}

console.log(encryptedName);

// ## Question 1 🤔 What advantage does using a loop provide over manually encrypting each letter?
// We make this dynamic, "autimatic encryption", and reusable on other names.

// ## Question 2 🤔 Explain the role of `% alphabet.length` in our loop. How does it aid in the encryption process?
// The modulo operator devides the (alphabetIndex + shiftValue) by the length of the alphabet, any left over will become the new index in the alphabet.
// By doing this it handles wraparound beyond the letter z. It ensures the output stays in the alphabet range.
