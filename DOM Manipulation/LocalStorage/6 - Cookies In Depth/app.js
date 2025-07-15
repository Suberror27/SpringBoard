// document.cookie = "firstName=Abraham; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=Camargo; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

// console.log(document.cookie);

setCookie("email", "abrahamct27@gmail.com", 365);
setCookie("user", "Abraham", 365);

console.log(getCookie("user"));
console.log(getCookie("email"));

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();

    document.cookie = `${name}=${value}; ${expires}; path=/`;
};

function deleteCookie(name) {
    setCookie(name, null, null)
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    })

    return result;
};


