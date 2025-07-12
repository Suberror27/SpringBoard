const colorSection = document.querySelector("#colors");

colorSection.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.tagName === "BUTTON") {
        document.body.style.backgroundColor = `${e.target.dataset.hex}`
    }
})