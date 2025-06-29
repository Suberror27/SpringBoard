const alphabet = "abcdefghijklmnopqrstuvwxyz";
const sampleMessage = "Hello Brutus, meet me at the high gardens.";
// const sampleMessage = "My name is Abraham Camargo";
const myShiftvalue = 42;

// Helper function to return a random index for the alphabet
function randomNumber() {
    return Math.floor(Math.random() * alphabet.length);
} 


function encrypt (message, shiftValue)
{
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

        // -------------------------------------- Randome Letters Inserted starts here ----------------------------------------
        // Helped by ChatGPT: Logic for inserting a random letter after every 2 characters
        // I was stuck in figuring out the right way to insert the random letter every 2 characters, I added my code for review and comparison

        // Fail safe to make sure inserting random letters only happen when there is a string in encryptedMessage
        if (encryptedMessage.length !== 0) {
            
            // Declaring variables
            let count = 0;
            let newEncryptedMessage = "";

            // ---------------------------------------CHAT GPT CODE START----------------------------------------------
            for (let i = 0; i < encryptedMessage.length; i++) {
                newEncryptedMessage += encryptedMessage[i];
                count++;

                // After every 2 original characters, insert 1 random letter
                if (count === 2) {
                    newEncryptedMessage += alphabet[randomNumber()].toUpperCase();
                    count = 0;
                }
            }
            // -------------------------------------CHAT GTP CODE ENDS----------------------------------------------

            // --------------------------------------My Original Code start-----------------------------------------
            // for(let i = 0; i < encryptedMessage.length; i++) {
            //     if (count === 2) {
            //         newEncryptedMessage += alphabet[randomNumber()].toLocaleUpperCase();
            //         newEncryptedMessage += encryptedMessage[i];
            //         count = 0
            //     } else {
            //         newEncryptedMessage += encryptedMessage[i];
            //         count ++
            //     }
            // }
            // ----------------------------------------My Original Code ends-----------------------------------------

            // Overwrite the encryptedMessage with the newEncryptedMessage that includes the random letters every 2 characters
            encryptedMessage = newEncryptedMessage;
        }
        // -------------------------------------- Randome Letters Inserted ends here ----------------------------------------
        
        // Returning the encryptedMessage
        return encryptedMessage;
    }
}
// console.log(encrypt(sampleMessage, myShiftvalue));

function decrypt (message, shiftValue)
{
    // Here we are checking if message is a string and if shiftValue is a number, if not return Error
    if (typeof(message) !== "string" || typeof(shiftValue) !== "number") {
        return "Error";
    } else {

        // Here we are converting the message to lowerCase
        const fixedMessage = message.toLowerCase();

        // Declaring empty string variables
        let decryptedMessage = "";
        let finalMessage = "";

        // -------------------------------------- Randome Letters removed starts here ----------------------------------------

        // Fial safe to make sure fixedMessage contains something before removing randome letters
        if (fixedMessage.length !== 0) {

            // Declaring variable
            let count = 0;

            // Looping
            for(let i = 0; i < fixedMessage.length; i++) {

                // First checking if count = 2, if so reset count and skip this iteration
                if (count === 2) {
                    count = 0;
                    continue;
                } 

                // Adding the letter of fixedMessage to the decryptedMessage and incrising count + 1
                decryptedMessage += fixedMessage[i];
                count ++

            }
        }
        // -------------------------------------- Randome Letters removed ends here ----------------------------------------
       
        // ----------------------------------------Shifting letters of message starts here -------------------------------------------
        //Looping each letter of decryptedMessage
        for (letter of decryptedMessage) {

            // Check if the letter exists in the alphabet (to make sure we target only letters)
            let checkIfMatches = alphabet.includes(letter);
            
            // If letter is not in the alphabet (empty spaces and other special characters) then we simply add it to the finalMessage without shifting
            if (checkIfMatches === false) {

                finalMessage += letter;

            } else {
                // Locate the index in the alphabet of the looping letter
                let locateIndex = alphabet.indexOf(letter);
                // Wrapping around the alphabet when removing the shiftValue to ensure it stays inside the alphabet
                let newIndex = ((locateIndex - shiftValue) % alphabet.length + alphabet.length) % alphabet.length
               
                // Adding the new letter of the alphabet to the finalMessage
                finalMessage += alphabet[newIndex];
            } 
        }
        // ----------------------------------------Shifting letters of message ends here -------------------------------------------
        
        // Returning finalMessage
        return finalMessage;
    }
}
// console.log(decrypt("Xuobbce eRhakjikiw, gcueujr cfu wqjy jzxul xfywox pwqghtiudri.", myShiftvalue));
// console.log(decrypt("coX dDqcLu DyiK qVrhVqxAqcI sAqcTqhVweQ", myShiftvalue));