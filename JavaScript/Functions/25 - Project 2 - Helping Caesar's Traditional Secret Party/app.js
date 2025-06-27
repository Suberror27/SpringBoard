const alphabet = "abcdefghijklmnopqrstuvwxyz";
const sampleMessage = "Hello Brutus, meet me at the high gardens.";
const myShiftvalue = 42;

function encrypt (message, shiftValue)
{
    // ---------------------------------------- Step 1 Starts ------------------------------------------- 

    // Here we are checking if message is a string and if shiftValue is a number, if not return Error
    if (typeof(message) !== "string" || typeof(shiftValue) !== "number") {
        return "Error";
    } else {

        // Here we are converting the message to lowerCase
        const fixedMessage = message.toLowerCase();

        // Declaring empty string variable
        let encryptedMessage = "";
       
        // Looping thru each letter of the lower case message
        for (letter of fixedMessage) {

            // Checking if the letter exists in the alphabet
            let checkIfMatches = alphabet.includes(letter);
            
            // If letter does not exist in the alphabet, concatenat it to the encryptedMessage as is
            if (checkIfMatches === false) {

                encryptedMessage += letter;

            } else {

                // Locating the index of the letter with the matching one in the alphabet
                let locateIndex = alphabet.indexOf(letter);

                // Declaring variable
                let newIndex;

                // Checking if the index of the letter in the alphabet + the shift value surpases the alphabet length
                if ((locateIndex + shiftValue) % alphabet.length === -1) {

                    // Making sure the newIndex wraps around the alphabet to keep the index inside the alphabet
                    newIndex = ((locateIndex % alphabet.length) + alphabet.length) % alphabet.length;

                } else {

                    newIndex = (locateIndex + shiftValue) % alphabet.length;

                }

                // Concatenating the letter in the alphabet to the encryptedMessage
                encryptedMessage += alphabet[newIndex];
            } 
        }

        // Returning the encryptedMessage
        return encryptedMessage;
    }
    // -------------------------------------------- Step 1 Ends ------------------------------------------- 
}

console.log(encrypt(sampleMessage, myShiftvalue));





function decrypt (encryptedMessage, shiftValue)
{
    // Your decryption code here
    return decryptedMessage;
}