function fizzBuzz(n) {
    if (n > 0 && n < 100) {
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    } else {
        return console.log("Error");
    }
};


function letterOccurrence(word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const trimmedWord = word.trim().toLowerCase();
    let letterCount = [];

    for (let i = 0; i < trimmedWord.length; i++) {
        if (!alphabet.includes(trimmedWord[i])) return "Error";
        else continue;
    }

    for (let letter of trimmedWord) {
        if (letter == " ") continue; // Skip empty spaces

        let lowerCaseLetter = letter.toLowerCase();
        let found = false;

        for (let value of letterCount) {
            if (value.letter === lowerCaseLetter) {
                value.count++;
                found = true;
                break; // When object with the value of letter matching our lowerCaseLetter is found it stops the iteration
            }
        }

        if (!found) {
            letterCount.push({
                letter: lowerCaseLetter,
                count: 1
            });
        }
    }

    return letterCount;
}

