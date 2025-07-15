const toggleSwitch = document.querySelector("#switch");

toggleSwitch.addEventListener("click", (e)=> {
    const checked = toggleSwitch.checked;
    document.body.className = checked ? "dark" : ""; 
    localStorage.setItem("darkMode", JSON.stringify(checked));
});

document.addEventListener("DOMContentLoaded", (e)=> {
    const checkedFromLocalStorage = JSON.parse(localStorage.getItem("darkMode"))
    if ( checkedFromLocalStorage) {
        toggleSwitch.checked = true;
        document.body.className = "dark";
    }; 
});