const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// ## Step 1 🧩 Create a function named `encryptLetter` that takes a letter and a shift value as parameters. This function should return the encrypted version of the letter.

function encryptLetter(letter, shiftAmount) {
    let newIndex = alphabet.indexOf(letter.toLowerCase()) + Number(shiftAmount);
    let finalIndex = newIndex % alphabet.length;

    return alphabet[finalIndex];
}
// console.log(encryptLetter("z", 2));

// ## Step 2 🧩 Create a function named `encryptMessage` that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.

function encryptMessage(word, shiftAmount) {
    let messageEncrypted = ""
    
    if (typeof(word) !== "string") {
        return "Error"
    } else {
        for(let letter of word) {
            messageEncrypted += encryptLetter(letter, shiftAmount);
        }
        return messageEncrypted;
    }
};

// console.log(encryptMessage("BRUTUS", 3)); This logs euxwxv

// ## Step 3 🧩 Create a function named `decryptLetter` that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.

function decryptLetter(encryptedLetter, shiftAmount) {
    let newIndex = alphabet.indexOf(encryptedLetter.toLowerCase()) - Number(shiftAmount);
    let finalIndex = ((newIndex % alphabet.length) + alphabet.length) % alphabet.length;

    return alphabet[finalIndex];
};

// console.log(decryptLetter("a", 1));

// ## Step 4 🧩 Create a function named `decryptMessage` that takes an encrypted word and a shift value as parameters. This function should return the decrypted version of the entire word.

function decryptMessage(encryptedWord, shiftAmount) {
     let messageEncrypted = ""
    
    if (typeof(encryptedWord) !== "string") {
        return "Error"
    } else {
        for(let letter of encryptedWord) {
            messageEncrypted += decryptLetter(letter, shiftAmount);
        }
        return messageEncrypted;
    }
}

// console.log(decryptMessage("euxwxv", 3)); This logs brutus

const result = encryptMessage("BRUTUS", 3);
console.log(decryptMessage(result, 3));

// ## Question 🤔 If Caesar encrypts the word "BRUTUS" using our `encryptMessage` function and then decrypts the result using our `decryptMessage` function, will he get "BRUTUS" back? Why or why not?
// He will get "brutus" back if he decrypts the message passing in the same shift value used to encrypt it.0
