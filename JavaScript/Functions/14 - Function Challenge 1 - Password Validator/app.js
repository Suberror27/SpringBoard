// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj 1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false


function isValidPassword(password, username) {
    let trimedPassword = password.trim();
    if (typeof(trimedPassword) == "string" && trimedPassword.length >= 8) {
        if (trimedPassword.includes(" ") || trimedPassword.includes(username)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

console.log(isValidPassword('89Fjj1nms', 'dogLuvr'));