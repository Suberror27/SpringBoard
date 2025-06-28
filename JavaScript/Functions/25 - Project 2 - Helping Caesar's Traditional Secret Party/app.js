const alphabet = "abcdefghijklmnopqrstuvwxyz";
const sampleMessage = "Hello Brutus, meet me at the high gardens.";
const myShiftvalue = 42;
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
        // Fail safe to make sure inserting random letters only happen when there is a string in encryptedMessage
        if (encryptedMessage.length !== 0) {

            // Declaring variables
            let count = 0;
            let newEncryptedMessage = "";

            // Looping
            for(let i = 0; i < encryptedMessage.length; i++) {

                // Insert random letter every 2 characters, skipping the very first insertion
                if (count > 0 && count % 2 === 0) {

                    // Inserts random letter
                    newEncryptedMessage += alphabet[randomNumber()].toLocaleUpperCase();

                    // Then inserts encryptedMessage letter
                    newEncryptedMessage += encryptedMessage[i];

                    // Increment count + 1
                    count ++
                } else {

                    // Insert regular encryptedMessage letter if it has not been 2 characters
                    newEncryptedMessage += encryptedMessage[i];

                    // Increment count + 1
                    count ++
                }
            }

            // Overwright the encryptedMessage with the newEncryptedMessage that includes the random letters every 2 characters
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

        // Declaring empty string variable
        let decryptedMessage = "";

        // -------------------------------------- Randome Letters removed starts here ----------------------------------------
        if (fixedMessage.length !== 0) {

            // Declaring variables
            let count = 0;

            // Looping
            for(let i = 0; i < fixedMessage.length; i++) {

                console.log(`Count is: ${count}, Count divisable by 2? ${count % 2}, I = ${i}, Letter in encryptedMessage =  ${fixedMessage[i]}`);

                if (count > 0 && count % 2 === 0) {
                    count ++
                    // Increment count + 1
                    
                } else {
                    decryptedMessage += fixedMessage[i];
                    count ++
                }
            }
        }
        // console.log(decryptedMessage);
        // -------------------------------------- Randome Letters removed ends here ----------------------------------------
       

        // Looping thru each letter of the lower case message
        // for (letter of fixedMessage) {

        //     // Checking if the letter exists in the alphabet
        //     let checkIfMatches = alphabet.includes(letter);
            
        //     // If letter does not exist in the alphabet, concatenat it to the decryptedMessage as is
        //     if (checkIfMatches === false) {

        //         decryptedMessage += letter;

        //     } else {

        //         // Locating the index of the letter with the matching one in the alphabet
        //         let locateIndex = alphabet.indexOf(letter);

        //         // Declaring variable
        //         let newIndex;

        //         // Checking if the index of the letter in the alphabet + the shift value surpases the alphabet length
        //         if ((locateIndex + shiftValue) % alphabet.length === -1) {

        //             // Making sure the newIndex wraps around the alphabet to keep the index inside the alphabet
        //             newIndex = ((locateIndex % alphabet.length) + alphabet.length) % alphabet.length;

        //         } else {

        //             newIndex = (locateIndex + shiftValue) % alphabet.length;

        //         }

        //         // Concatenating the letter in the alphabet to the decryptedMessage
        //         decryptedMessage += alphabet[newIndex];
        //     } 
        // }
        
        // Returning the decryptedMessage
        return decryptedMessage;
    }
}

console.log(decrypt("xuIbbZe BrhFkjGkiY, ScuRujV cRu MqjN jSxuM xMywPx MwqIhtNudKi.", myShiftvalue));